import * as React from 'react';
import css from './Footer.module.scss';

type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={css.root}>
      <div className={css.footer_container}>
        <div className={css.footer_icons}>
          <a href='#'>
            <img src='images/icons/logo-footer.png' alt='logo' />
          </a>
          <div className={css.footer_socialLinks}>
            <a href='#'>
              <img src='images/icons/Instagram.png' alt='inst' />
            </a>
            <a href='#'>
              <img src='images/icons/Telegram.png' alt='tg' />
            </a>
            <a href='#'>
              <img src='images/icons/VK.png' alt='vk' />
            </a>
          </div>
        </div>
        <div className={css.footer_menu}>
          <div className={css.footer_menuService}>
            <p className={css.column_title}>
              Сервис
            </p>
            <a href='#'>Услуги</a>
            <a href='#'>Туризм</a>
            <a href='#'>О компании</a>
            <a href='#'>Блог</a>
            <a href='#'>Партнерам</a>
          </div>
          <div className={css.footer_menuService}>
            <p className={css.column_title}>
              Услуги
            </p>
            <a href='#'>Outdoor</a>
            <a href='#'>Indoor</a>
            <a href='#'>Нестандартные проекты</a>
            <a href='#'>Спецпроекты</a>
            <a href='#'>Полиграфия</a>
            <a href='#'>Promo</a>
            <a href='#'>Спонсорство мероприятий</a>
          </div>
        </div>
        <div className={css.footer_info}>
          <a href='tel:+78000000000' className={css.footer_phone}>
            8 (800) 000-00-00
          </a>
          <a href='mailto:mail@mail.ru' className={css.footer_mail}>
            mail@mail.ru
          </a>
          <div className={css.footer_links}>
            <a href='#'>Договор публичной аферты</a>
            <a href='#'>Пользовательское соглашение</a>
            <a href='#'>Политика конфиденциальности</a>
            <a href='#'>Реквизиты</a>
          </div>
        </div>
      </div>
      <div className={css.responsive_footer}>
        <div className={css.leftColumn}>
          <img src='images/icons/mfooter-logo.png' alt='logo' />
          <div className={css.leftMenu}>
            <div className={css.leftMenu_service}>
              <div className={css.leftMenu_serviceTitle}>
                Сервис
              </div>
              <a href='#' className={css.leftMenu_serviceLink}>Услуги</a>
              <a href='#' className={css.leftMenu_serviceLink}>Туризм</a>
              <a href='#' className={css.leftMenu_serviceLink}>О компании</a>
              <a href='#' className={css.leftMenu_serviceLink}>Блог</a>
              <a href='#' className={css.leftMenu_serviceLink}>Партнерам</a>
            </div>
            <div className={css.leftMenu_service}>
              <div className={css.leftMenu_serviceTitle}>
                Услуги
              </div>
              <a href='#' className={css.leftMenu_serviceLink}>Outdoor</a>
              <a href='#' className={css.leftMenu_serviceLink}>Indoor</a>
              <a href='#' className={css.leftMenu_serviceLink}>Нестандартные проекты</a>
              <a href='#' className={css.leftMenu_serviceLink}>Спецпроекты</a>
              <a href='#' className={css.leftMenu_serviceLink}>Полиграфия</a>
              <a href='#' className={css.leftMenu_serviceLink}>Promo</a>
              <a href='#' className={css.leftMenu_serviceLink}>Спонсорство мероприятий</a>
            </div>
          </div>
        </div>
        <div className={css.rightColumn}>
          <div className={css.rightColumn_contacts}>
            <a href='tel:+88000000000'>8 (800) 000-00-00</a>
            <a href='mailto:mail@mail.ru'>mail@mail.ru</a>
          </div>
          <div className={css.rightColumn_menu}>
            <div className={css.rightColumn_menuTitle}>
              Прочее
            </div>
            <a href='#' className={css.rightColumn_menuLink}>
              Договор публичной аферты
            </a>
            <a href='#' className={css.rightColumn_menuLink}>
              Пользовательское соглашение
            </a>
            <a href='#' className={css.rightColumn_menuLink}>
              Политика конфиденциальности
            </a>
            <a href='#' className={css.rightColumn_menuLink}>
              Реквизиты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
