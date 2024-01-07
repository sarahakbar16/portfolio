/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Outlet } from 'react-router-dom';
import './scss/Layout.scss';
import NavBar from './views/NavBar';

export default function Layout() {
  return (
    <div className="Layout">
      <main>
        <NavBar />
        <Outlet />
      </main>
    </div>
  );
}
