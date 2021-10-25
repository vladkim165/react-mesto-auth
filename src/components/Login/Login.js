import React from 'react';
import Header from '../Header/Header';
import InfoToolTip from '../InfoToolTip/InfoToolTip';

function Login(props) {

  return (
    <div className="page">
      <Header buttonName="Регистрация" loggedIn={props.loggedIn} />
      <main className="account">
        <form className="form account__inputs">
          <h2 className="form__header">Вход</h2>
          <input className="form__field account__input" type="text" name="link" id="link-input"
            placeholder="Email" required autoComplete="off" />
          <input className="form__field account__input" type="password" name="link" id="link-input"
            placeholder="Пароль" required autoComplete="off" />
          <button className="form__save-button account__save-button" type="submit">Войти</button>
        </form>
      </main>
      <InfoToolTip isOpen={false} isOk={true} />
    </div>
  )
}

export default Login;