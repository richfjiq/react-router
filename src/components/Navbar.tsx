import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes/routes';

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
          {routes.map(({ name, to }) => (
            <li key={name}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

export default Navbar;
