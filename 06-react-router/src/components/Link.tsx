import { NavigationEvents } from '../types/navigation';

const navigate = (path: string) => {
  window.history.pushState({}, '', path);

  const navigationEvent = new Event(NavigationEvents.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
};

interface LinkProps {
  target?: string;
  to: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  target,
  to,
  children,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const isMainButton = e.button === 0;
    const isDefaultTarget = target === '_self' || target === undefined;
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;

    if (isMainButton && isDefaultTarget && !isModifiedEvent) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a href={to} target={target} {...props} onClick={handleClick}>
      {children}
    </a>
  );
};
