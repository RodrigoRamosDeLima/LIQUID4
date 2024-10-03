import React, { useState } from 'react';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import Feed from './components/Feed';
import './App.css';  // Estilos gerais

function App() {
  const [activePage, setActivePage] = useState('feed');

  const renderPage = () => {
    switch (activePage) {
      case 'feed':
        return <Feed />;
      case 'notifications':
        return <h2>Notificações</h2>;  // Coloque aqui o componente de notificações
      case 'explore':
        return <h2>Explorar</h2>;  // Coloque aqui o componente de explorar
      case 'editProfile':
        return <h2>Editar Perfil</h2>;  // Coloque aqui o componente de editar perfil
      default:
        return <Feed />;
    }
  };

  return (
    <div className="app">
      <Sidebar setActivePage={setActivePage} />
      <div className="main-content">
        <Header />
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
