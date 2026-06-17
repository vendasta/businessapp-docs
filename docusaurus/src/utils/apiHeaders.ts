import type { UserIdentity } from '../context/AuthContext';

export function getAuthHeaders(
  token: string | null,
  user: UserIdentity | null,
  site: string
): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'X-Site': site,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  } else if (user) {
    headers['X-User-Id'] = user.userId;
    headers['X-User-Persona'] = user.persona === 'admin' ? 'learning_team' : 'employee';
    headers['X-User-Role'] = user.persona;
  }

  return headers;
}
