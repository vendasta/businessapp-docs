import React, { useState, useEffect, useCallback, useRef } from 'react';
import { API_BASE } from '../config';
import { useAuth } from '../context/AuthContext';
import { getAuthHeaders } from '../utils/apiHeaders';
import styles from './CourseProgressBar.module.css';

export interface CourseProgressBarProps {
  courseId: string;
  site: string;
  apiBase?: string;
}

function readScrollPercent(): number {
  const el = document.documentElement;
  const scrollable = el.scrollHeight - el.clientHeight;
  if (scrollable <= 0) return 100;
  return Math.round((el.scrollTop / scrollable) * 100);
}

export default function CourseProgressBar({ courseId, site, apiBase = API_BASE }: CourseProgressBarProps) {
  const { user, token } = useAuth();
  const [percent, setPercent] = useState(0);
  const lastSent = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const persist = useCallback(
    (pct: number) => {
      if (!user || !apiBase) return;
      fetch(`${apiBase}/api/course-progress`, {
        method: 'PUT',
        headers: getAuthHeaders(token, user, site),
        body: JSON.stringify({ courseId, site, percent: pct }),
      }).catch(() => {});
    },
    [apiBase, courseId, site, token, user]
  );

  useEffect(() => {
    if (!user || !apiBase || !courseId || !site) return;
    fetch(
      `${apiBase}/api/course-progress?courseId=${encodeURIComponent(courseId)}&site=${encodeURIComponent(site)}`,
      { headers: getAuthHeaders(token, user, site) }
    )
      .then((r) => (r.ok ? r.json() : { percent: 0 }))
      .then((d: { percent?: number }) => {
        const p = typeof d.percent === 'number' ? d.percent : 0;
        setPercent(p);
        lastSent.current = p;
      })
      .catch(() => {});
  }, [apiBase, courseId, site, token, user]);

  useEffect(() => {
    if (!user) return;

    const onScroll = () => {
      const raw = readScrollPercent();
      setPercent((prev) => Math.max(prev, raw));

      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        const p = readScrollPercent();
        const next = Math.max(lastSent.current, p);
        if (next >= lastSent.current + 3 || next === 100) {
          lastSent.current = next;
          persist(next);
        }
      }, 500);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [user, persist]);

  if (!user) {
    return (
      <div className={styles.wrap}>
        <p className={styles.hint}>Sign in to track your reading progress through this course.</p>
      </div>
    );
  }

  const show = Math.min(100, percent);

  return (
    <div className={styles.wrap} role="region" aria-label="Course reading progress">
      <div className={styles.row}>
        <span className={styles.label}>Your progress</span>
        <div className={styles.track}>
          <div className={styles.fill} style={{ width: `${show}%` }} />
        </div>
        <span className={styles.pct}>{show}%</span>
      </div>
      <p className={styles.hint}>Based on how far you have scrolled. Progress saves as you read.</p>
    </div>
  );
}
