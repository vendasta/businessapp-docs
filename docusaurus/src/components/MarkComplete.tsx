import React, { useState, useEffect } from 'react';
import { API_BASE } from '../config';
import { useAuth } from '../context/AuthContext';
import { getAuthHeaders } from '../utils/apiHeaders';
import styles from './MarkComplete.module.css';

export interface MarkCompleteProps {
  courseId: string;
  site: string;
  apiBase?: string;
}

export default function MarkComplete({ courseId, site, apiBase = API_BASE }: MarkCompleteProps) {
  const { user, token } = useAuth();
  const [completed, setCompleted] = useState(false);
  const [completedAt, setCompletedAt] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !courseId || !site) {
      setLoading(false);
      return;
    }
    fetch(
      `${apiBase}/api/completions?userId=${encodeURIComponent(user.userId)}&courseId=${encodeURIComponent(courseId)}&site=${encodeURIComponent(site)}`,
      { headers: getAuthHeaders(token, user, site) }
    )
      .then((r) => (r.ok ? r.json() : []))
      .then((data: Array<{ completedAt: string }>) => {
        if (data.length > 0) {
          setCompleted(true);
          setCompletedAt(data[0].completedAt);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [apiBase, user, token, courseId, site]);

  const handleComplete = async () => {
    if (!user || saving) return;
    setSaving(true);
    try {
      const res = await fetch(`${apiBase}/api/completions`, {
        method: 'POST',
        headers: getAuthHeaders(token, user, site),
        body: JSON.stringify({ courseId, site }),
      });
      if (res.ok) {
        const data = await res.json();
        setCompleted(true);
        setCompletedAt(data.completedAt);
      }
    } catch {
      // ignore
    } finally {
      setSaving(false);
    }
  };

  if (loading) return null;

  return (
    <div className={styles.container}>
      {!user ? (
        <p className={styles.hint}>Sign in to track your course completion.</p>
      ) : completed ? (
        <div className={styles.completedState}>
          <span className={styles.checkmark}>✓</span>
          <div>
            <p className={styles.completedText}>You completed this course</p>
            {completedAt && (
              <p className={styles.completedDate}>
                {new Date(completedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            )}
          </div>
        </div>
      ) : (
        <button type="button" className={styles.completeBtn} onClick={handleComplete} disabled={saving}>
          {saving ? 'Saving…' : 'Mark course complete'}
        </button>
      )}
    </div>
  );
}
