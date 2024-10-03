import React, { useState } from 'react';
import './LoginCadastro.css';

const LoginCadastro = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOver18, setIsOver18] = useState(false);

  const toggleView = () => {
    setIsLogin(!isLogin);
  };

  const handleCheckboxChange = () => {
    setIsOver18(!isOver18);
  };

  return (
    <div className="container">
      <div className="login-cadastro-box">
        <div className={`form-section ${isLogin ? 'login-active' : 'cadastro-active'}`}>
          {isLogin ? (
            <div className="login-form">
              <h2>LOGIN</h2>
              <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="form-button">ENTRAR</button>
              </form>
            </div>
          ) : (
            <div className="cadastro-form">
              <h2>CADASTRO</h2>
              <form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <div className="checkbox-container">
                  <input 
                    type="checkbox" 
                    id="ageCheck" 
                    checked={isOver18} 
                    onChange={handleCheckboxChange} 
                  />
                  <label htmlFor="ageCheck">Declaro que sou maior de 18 anos.</label>
                </div>
                <button className="form-button" disabled={!isOver18}>CADASTRAR</button>
              </form>
            </div>
          )}
        </div>
        <div className="toggle-section">
          <h2>{isLogin ? 'Olá!' : 'Bem-vindo!'}</h2>
          <p>{isLogin ? 'Informe seus dados para iniciar sua jornada!' : 'Preencha os campos para criar sua conta!'}</p>
          <button className="toggle-button" onClick={toggleView}>
            {isLogin ? 'CADASTRO' : 'LOGIN'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCadastro;
