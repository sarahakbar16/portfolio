import { Link, useLocation } from 'react-router-dom';
import '../scss/NavBar.scss';

function NavBar() {
  const location = useLocation();
  const { state } = useLocation();
  const { pathname } = location;

  return (
    <div className="nav">
      <Link
        className={`navbar-item ${pathname === '/' ? 'open' : 'closed'} ${
          state && state.prevPath === '/' ? 'closing' : 'static'
        }`}
        to="/"
        state={{ prevPath: location.pathname }}
      >
        <div className="navbar-text">Home</div>
      </Link>
      <Link
        className={`navbar-item ${
          pathname === '/workexperience' ? 'open' : 'closed'
        }
        ${
          state && state.prevPath === '/workexperience' ? 'closing' : 'static'
        }`}
        to="/workexperience"
        state={{ prevPath: location.pathname }}
      >
        <div className="navbar-text">Work Experience</div>
      </Link>
      <Link
        className={`navbar-item ${
          pathname === '/projects' ? 'open' : 'closed'
        } ${state && state.prevPath === '/projects' ? 'closing' : 'static'}
        `}
        to="/projects"
        state={{ prevPath: location.pathname }}
      >
        <div className="navbar-text">Projects</div>
      </Link>
    </div>
  );
}

export default NavBar;
