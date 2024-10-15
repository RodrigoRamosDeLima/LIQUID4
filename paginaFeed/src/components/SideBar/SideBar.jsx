import React from 'react';
import './Sidebar.css';

function Sidebar({ setActivePage }) {
  return (
    <div className="sidebar">
      <div className="profile">
<<<<<<< HEAD:paginaFeed/src/components/SideBar.jsx
        <img src="https://via.placeholder.com/300" alt="Perfil" className="profile-pic" />
        <h3>RODRIGO</h3>
=======
        <img src="https://via.placeholder.com/200" alt="Perfil" className="profile-pic" />
        <h3 className="nickname">RODRIGO</h3>
>>>>>>> 33e4ed1b6818d0869b4d91fc101f5dcb47d2d46b:paginaFeed/src/components/SideBar/SideBar.jsx
      </div>
      <nav>
        <ul>
          <li onClick={() => setActivePage('feed')}>Feed</li>
          <li onClick={() => setActivePage('notifications')}>Notificações</li>
          <li onClick={() => setActivePage('explore')}>Explorar</li>
          <li onClick={() => setActivePage('editProfile')}>Alterar Dados</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
