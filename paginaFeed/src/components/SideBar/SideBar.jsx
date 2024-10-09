import React from 'react';
import './Sidebar.css';

function Sidebar({ setActivePage }) {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="https://via.placeholder.com/200" alt="Perfil" className="profile-pic" />
        <h3 className="nickname">RODRIGO</h3>
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
