import React, { useState } from 'react';
import { API_BASE } from '../config';
import { useAuth } from '../context/AuthContext';
import { getAuthHeaders } from '../utils/apiHeaders';
import styles from './CommentBox.module.css';

export interface CommentBoxProps {
  /** Shown only when variant is `reflection`. */
  prompt?: string;
  courseId?: string;
  site?: string;
  apiBase?: string;
  /**
   * `discussion` — plain comment field (default), no heading.
   * `reflection` — titled “Share a reflection” with prompt (legacy / rare).
   */
  variant?: 'discussion' | 'reflection';
}

export default function CommentBox({
  prompt,
  courseId,
  site,
  apiBase = API_BASE,
  variant = 'discussion',
}: CommentBoxProps) {
  const { user, token } = useAuth();
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const isReflection = variant === 'reflection';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const shouldPersist = Boolean(courseId && site && user);

    if (shouldPersist) {
      setSaving(true);
      setError(null);
      try {
        const headers = getAuthHeaders(token, user, site);

        const res = await fetch(`${apiBase}/api/comments`, {
          method: 'POST',
          headers,
          body: JSON.stringify({ courseId, site, content: comment.trim() }),
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          const raw = (err as { error?: unknown }).error;
          const msg =
            typeof raw === 'string'
              ? raw
              : raw != null
                ? JSON.stringify(raw)
                : res.statusText || 'Failed to save';
          throw new Error(msg);
        }
        setSubmitted(true);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setSaving(false);
      }
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className={isReflection ? styles.container : styles.discussionWrap}>
      {isReflection && (
        <>
          <h4>Share a reflection</h4>
          {prompt ? <p className={styles.prompt}>{prompt}</p> : null}
        </>
      )}
      {!user && (
        <p className={isReflection ? styles.signInHint : styles.discussionHint}>
          {isReflection
            ? 'Sign in to share your reflection and track your progress.'
            : 'Sign in to post a comment.'}
        </p>
      )}
      {submitted ? (
        <p className={styles.thanks}>
          {isReflection ? 'Thank you for sharing your reflection!' : 'Thanks — your comment was posted.'}
          {courseId && (
            <span className={styles.monitorHint}>
              {isReflection
                ? ' Learners can discuss in the thread below when enabled; admins see activity in the LMS → Discussion.'
                : ' Replies and the full thread appear in the LMS → Discussion.'}
            </span>
          )}
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={
              user
                ? isReflection
                  ? 'Share your thoughts...'
                  : 'Add a comment about this course…'
                : isReflection
                  ? 'Sign in to share your thoughts...'
                  : 'Sign in to add a comment…'
            }
            rows={isReflection ? 4 : 3}
            className={isReflection ? styles.textarea : styles.discussionTextarea}
            disabled={saving || !user}
          />
          {error && <p className={styles.error}>{error}</p>}
          {error && error.includes('Cannot connect') && (
            <p className={styles.dbTip}>
              Local fix: open a terminal in the <code>backend</code> folder and run{' '}
              <code>npm run db:up</code>, wait a few seconds, then run{' '}
              <code>npx prisma migrate deploy</code> once. Keep the API running with{' '}
              <code>npm run dev</code>.
            </p>
          )}
          <button
            type="submit"
            className={isReflection ? styles.submitBtn : styles.discussionSubmit}
            disabled={!comment.trim() || saving || !user}
          >
            {saving ? 'Saving…' : isReflection ? 'Submit' : 'Post comment'}
          </button>
        </form>
      )}
    </div>
  );
}
