import { NavigationEvents } from '../types/navigation';

export const navigate = (path: string) => {
  window.history.pushState({}, '', path);

  const navigationEvent = new Event(NavigationEvents.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
};
