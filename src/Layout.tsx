/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Outlet, useNavigate } from 'react-router-dom';
import './scss/Layout.scss';
import { motion } from 'framer-motion';

export default function Layout() {
  const navigate = useNavigate();

  const onClickHome = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const onClickWork = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('workexperience');
  };

  const onClickProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('projects');
  };

  return (
    <div className="Layout">
      <main>
        <div className="items">
          <div className="home-container" onClick={onClickHome} />
          <div className="work-container" onClick={onClickWork} />
          <div className="projects-container" onClick={onClickProjects} />
        </div>
        <Outlet />
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </main>
    </div>
  );
}
