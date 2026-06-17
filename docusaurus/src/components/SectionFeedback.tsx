import React, { useState } from 'react';
import { API_BASE } from '../config';
import { useAuth } from '../context/AuthContext';
import { getAuthHeaders } from '../utils/apiHeaders';
import styles from './SectionFeedback.module.css';

export interface SectionFeedbackProps {
  courseId: string;
  site: string;
  section: string;
  apiBase?: string;
}

export default function SectionFeedback({ courseId, site, section, apiBase = API_BASE }: SectionFeedbackProps) {
  const { user, token } = useAuth();
  const [submitted, setSubmitted] = useState<'helpful' | 'not-helpful' | null>(null);
  const [saving, setSaving] = useState(false);

  const handleFeedback = async (isHelpful: boolean) => {
    if (!user || saving) return;
    const value = isHelpful ? 'helpful' : 'not-helpful';
    setSaving(true);
    try {
      const content = `[section-feedback:${section}] ${value}`;
      await fetch(`${apiBase}/api/comments`, {
        method: 'POST',
        headers: getAuthHeaders(token, user, site),
        body: JSON.stringify({ courseId, site, content }),
      });
      setSubmitted(value);
    } catch {
      // ignore
    } finally {
      setSaving(false);
    }
  };

  if (!user) return null;

  if (submitted) {
    return (
      <div className={styles.container}>
        <span className={styles.thanks}>Thanks for your feedback!</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <span className={styles.label}>Was this section helpful?</span>
      <button
        className={styles.feedbackBtn}
        onClick={() => handleFeedback(true)}
        disabled={saving}
        title="Helpful"
      >
        👍
      </button>
      <button
        className={styles.feedbackBtn}
        onClick={() => handleFeedback(false)}
        disabled={saving}
        title="Not helpful"
      >
        👎
      </button>
    </div>
  );
}
