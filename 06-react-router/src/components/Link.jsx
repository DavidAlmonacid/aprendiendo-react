import { navigationEvents } from '../../utils/consts';

const navigate = (path) => {
  window.history.pushState({}, '', path);

  const navigationEvent = new Event(navigationEvents.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
};

const Link = ({ target, to, children, ...props }) => {
  const handleClick = (e) => {
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

export default Link;
