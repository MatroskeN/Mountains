import * as React from 'react';
import css from './Header.module.scss';


export const Header = () => {
  return (
    <header className={css.root}>
      <div className={css.header_container}>
        <a href='#' className={css.header_logo}>
          <img  src='images/icons/logo.png' alt='logo' />
        </a>

        <div className={css.header_menu}>
          <a href='#' className={css.header_menuLink}>
            О компании
          </a>
          <a href='#' className={css.header_menuLink}>
            Услуги
          </a>
          <a href='#' className={css.header_menuLink}>
            Курорты
          </a>
          <a href='#' className={css.header_menuLink}>
            Блог
          </a>
          <a href='#' className={css.header_menuLink}>
            Партнерам
          </a>
        </div>
        <div className={css.header_login}>
          <a href='#' className={css.header_signup}>
            Регистрация
          </a>
          <a href='#' className={css.header_signin}>
            Войти
          </a>
        </div>
      </div>
      <div className={css.responsive_header}>
        <a href='#'><img src='images/icons/mlogo.png' alt='logo' /></a>
        <button>
          <img src='images/icons/burger.png' alt='burger' />
        </button>
      </div>
    </header>
  );
};
