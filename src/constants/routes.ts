export const routes = {
  home: { route: `/`, label: 'Books' },
  login: { route: `/login`, label: 'Login' },
  error: { route: '/error', label: 'Error' },
  access_denied: { route: '/access-denied', label: 'Access Denied' },
  not_found: { route: '/not-found', label: 'Page not found' },
} as const;
