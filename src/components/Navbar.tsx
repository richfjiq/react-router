import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const Navbar: FC<Props> = ({ children }) => {
  return (
    <div
      style={{ padding: 0, margin: 0, position: 'relative', height: '100vh' }}
    >
      <nav>
        <img src="vite.svg" alt="React Logo" height={100} width={100} />
        <ul>
          <li>
            <NavLink
              to="/lazy1"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Lazy1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lazy2"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Lazy2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lazy3"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Lazy3
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

export default Navbar;
