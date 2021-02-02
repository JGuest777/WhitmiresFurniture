import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SubMenu() {
  return (
    <div className="submenu">
      {/* Mobile */}
      <div className="submenu__mobile hide-desktop">
        <a href="tel:+13214272948">
          <FontAwesomeIcon className="submenu__icons" icon="mobile-alt" />
        </a>
        <a href="mailto:barbara@remax.net">
          <FontAwesomeIcon className="submenu__icons" icon="envelope" />
        </a>
      </div>
    </div>
  );
}
