import React, { useState, useEffect, useRef, useCallback, type ReactNode } from 'react';
import { API_BASE } from '../config';
import { useAuth } from '../context/AuthContext';
import { getAuthHeaders } from '../utils/apiHeaders';
import styles from './InlineHighlighter.module.css';

interface InlineFeedback {
  id: string;
  userId: string;
  selectedText: string;
  comment: string;
  createdAt: string;
}

export interface InlineHighlighterProps {
  courseId: string;
  site: string;
  apiBase?: string;
  children: ReactNode;
}

function parseInlineFeedback(content: string): { selectedText: string; comment: string } | null {
  if (!content.startsWith('[inline-feedback] ')) return null;
  try {
    return JSON.parse(content.slice(18));
  } catch {
    return null;
  }
}

function highlightTextInNode(rootNode: Node, searchText: string, markClass: string, onHover: (e: MouseEvent) => void, onLeave: () => void): boolean {
  if (typeof document === 'undefined') return false;
  const walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const textNode = node as Text;
    const idx = textNode.textContent?.indexOf(searchText) ?? -1;
    if (idx === -1) continue;
    const range = document.createRange();
    range.setStart(textNode, idx);
    range.setEnd(textNode, idx + searchText.length);
    const mark = document.createElement('mark');
    mark.className = markClass;
    mark.addEventListener('mouseenter', onHover as EventListener);
    mark.addEventListener('mouseleave', onLeave as EventListener);
    range.surroundContents(mark);
    return true;
  }
  return false;
}

export default function InlineHighlighter({ courseId, site, apiBase = API_BASE, children }: InlineHighlighterProps) {
  const { user, token } = useAuth();
  const containerRef = useRef<HTMLDivElement>(null);
  const [feedbacks, setFeedbacks] = useState<InlineFeedback[]>([]);
  const [showBtn, setShowBtn] = useState(false);
  const [btnPos, setBtnPos] = useState({ top: 0, left: 0 });
  const [selectedText, setSelectedText] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [comment, setComment] = useState('');
  const [saving, setSaving] = useState(false);
  const [tooltip, setTooltip] = useState<{ text: string; top: number; left: number } | null>(null);
  const [successMsg, setSuccessMsg] = useState<{ top: number; left: number } | null>(null);

  // Load existing inline feedbacks
  useEffect(() => {
    if (!courseId || !site) return;
    const headers: Record<string, string> = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;
    else if (user) {
      headers['X-User-Id'] = user.userId;
      headers['X-User-Persona'] = 'employee';
      headers['X-User-Role'] = 'learner';
    }
    headers['X-Site'] = site;

    fetch(`${apiBase}/api/comments?courseId=${encodeURIComponent(courseId)}&site=${encodeURIComponent(site)}`, { headers })
      .then((r) => (r.ok ? r.json() : []))
      .then((comments: Array<{ id: string; userId: string; content: string; createdAt: string }>) => {
        const parsed: InlineFeedback[] = [];
        for (const c of comments) {
          const data = parseInlineFeedback(c.content);
          if (data) {
            parsed.push({ id: c.id, userId: c.userId, selectedText: data.selectedText, comment: data.comment, createdAt: c.createdAt });
          }
        }
        setFeedbacks(parsed);
      })
      .catch(() => {});
  }, [apiBase, courseId, site, token, user]);

  // Apply highlights to DOM
  useEffect(() => {
    if (!containerRef.current || feedbacks.length === 0) return;
    // Small delay to ensure content is rendered
    const timer = setTimeout(() => {
      for (const fb of feedbacks) {
        highlightTextInNode(
          containerRef.current!,
          fb.selectedText,
          styles.highlight,
          (e: MouseEvent) => {
            const rect = (e.target as HTMLElement).getBoundingClientRect();
            setTooltip({
              text: `"${fb.selectedText}"\n\n${fb.comment}\n— ${fb.userId}`,
              top: rect.top - 8,
              left: rect.left + rect.width / 2,
            });
          },
          () => setTooltip(null)
        );
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [feedbacks]);

  const handleMouseUp = useCallback(() => {
    if (!user) return;
    const selection = window.getSelection();
    const text = selection?.toString().trim();
    if (!text || text.length < 3) {
      setShowBtn(false);
      return;
    }
    // Check selection is within our container
    if (!containerRef.current?.contains(selection?.anchorNode ?? null)) {
      setShowBtn(false);
      return;
    }
    const range = selection?.getRangeAt(0);
    if (!range) return;
    const rect = range.getBoundingClientRect();
    setSelectedText(text);
    setBtnPos({ top: rect.top - 40, left: rect.left + rect.width / 2 });
    setShowBtn(true);
    setShowForm(false);
    setComment('');
  }, [user]);

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseUp]);

  const handleOpenForm = () => {
    setShowForm(true);
    setShowBtn(false);
  };

  const handleSubmit = async () => {
    if (!user || !comment.trim() || saving) return;
    setSaving(true);
    try {
      const content = `[inline-feedback] ${JSON.stringify({ selectedText, comment: comment.trim() })}`;
      const res = await fetch(`${apiBase}/api/comments`, {
        method: 'POST',
        headers: getAuthHeaders(token, user, site),
        body: JSON.stringify({ courseId, site, content }),
      });
      if (res.ok) {
        const saved = await res.json();
        setFeedbacks((prev) => [...prev, {
          id: saved.id,
          userId: user.userId,
          selectedText,
          comment: comment.trim(),
          createdAt: saved.createdAt,
        }]);
        setShowForm(false);
        setShowBtn(false);
        setSuccessMsg({ top: btnPos.top, left: btnPos.left });
        setTimeout(() => setSuccessMsg(null), 3000);
        setComment('');
        setSelectedText('');
        window.getSelection()?.removeAllRanges();
      }
    } catch {
      // ignore
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setShowBtn(false);
    setComment('');
    setSelectedText('');
    window.getSelection()?.removeAllRanges();
  };

  return (
    <div ref={containerRef} className={styles.container}>
      {children}

      {showBtn && (
        <div
          className={styles.floatingBtn}
          style={{ top: `${btnPos.top + window.scrollY}px`, left: `${btnPos.left}px` }}
        >
          <button onClick={handleOpenForm} className={styles.addCommentBtn}>
            💬 Comment
          </button>
        </div>
      )}

      {showForm && (
        <div
          className={styles.formPopover}
          style={{ top: `${btnPos.top + window.scrollY + 4}px`, left: `${btnPos.left}px` }}
        >
          <div className={styles.formHeader}>
            <span className={styles.selectedPreview}>"{selectedText.slice(0, 60)}{selectedText.length > 60 ? '...' : ''}"</span>
          </div>
          <textarea
            className={styles.formTextarea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="What feedback do you have about this text?"
            rows={3}
            autoFocus
          />
          <div className={styles.formActions}>
            <button className={styles.cancelBtn} onClick={handleCancel} disabled={saving}>
              Cancel
            </button>
            <button className={styles.submitBtn} onClick={handleSubmit} disabled={!comment.trim() || saving}>
              {saving ? 'Saving...' : 'Submit'}
            </button>
          </div>
        </div>
      )}

      {successMsg && (
        <div
          className={styles.successMsg}
          style={{ top: `${successMsg.top + window.scrollY}px`, left: `${successMsg.left}px` }}
        >
          ✓ Feedback saved! Thanks for helping improve this course.
        </div>
      )}

      {tooltip && (
        <div
          className={styles.tooltip}
          style={{ top: `${tooltip.top + window.scrollY}px`, left: `${tooltip.left}px` }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
