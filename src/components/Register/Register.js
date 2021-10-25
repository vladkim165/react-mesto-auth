import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom'
import InfoToolTip from '../InfoToolTip/InfoToolTip';

function Register(props) {
  return (
    <div className="page">
      <Header buttonName="Войти" loggedIn={props.loggedIn} />
      <main className="account">
        <form className="form account__inputs">
          <h2 className="form__header">Регистрация</h2>
          <input className="form__field account__input" type="text" name="link" id="link-input"
            placeholder="Email" required autoComplete="off" />
          <input className="form__field account__input" type="password" name="link" id="link-input"
            placeholder="Пароль" required autoComplete="off" />
          <button className="form__save-button account__save-button">Зарегистрироваться</button>
          <Link to="/sign-up" className="account__redirect">Уже зарегистрированы? Войти</Link>
        </form>
      </main>
    </div>
  )

}

export default Register;