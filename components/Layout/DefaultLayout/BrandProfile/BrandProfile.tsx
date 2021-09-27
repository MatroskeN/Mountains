import * as React from 'react';
import css from "../ResortProfile/ResortProfile.module.scss";
import { InputItem } from '~/components/Layout/DefaultLayout/ResortProfile/InputItem/InputItem';

export const BrandProfile = (props) => {
  return(
    <main className={css.root}>
      <h1 className={css.main_title}>
        <p>Личный кабинет</p>
        <button className={css.title_arrow}>
          <svg className={css.title_arrow} width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.547278 3.54006L6.54631 10.1776C7.14571 10.8408 8.11617 10.8408 8.71389 10.1776L14.7129 3.54006C15.3174 2.87128 15.3174 1.78825 14.7129 1.12133C14.1085 0.452559 13.1296 0.452558 12.5269 1.12133L7.63095 6.5384L2.735 1.12133C2.13056 0.452558 1.15171 0.452558 0.548949 1.12133C-0.0554885 1.78825 -0.0554799 2.87128 0.547278 3.54006Z" fill="#1F3C48"/>
          </svg>
        </button>
      </h1>
      <div className={css.main_container}>
        <div className={css.aside_menu}>
          <div className={css.menu_item}>
            <div className={css.item_title}>
              Реклама
            </div>
            <a href="#" className={css.item_link}>Заявки на размещение</a>
            <a href="#" className={css.item_link}>Календарь возможностей</a>
            <a href="#" className={css.item_link}>Календарь возможностей</a>
          </div>
          <div className={css.menu_item}>
            <div className={css.item_title}>О бренде</div>
            <a href="#" className={css.item_link}>Основная информация</a>
          </div>
          <div className={css.menu_item}>
            <div className={css.item_title}>
              Настройки
            </div>
            <a href="#" className={css.item_link}>Пользователи</a>
            <a href="#" className={css.item_link}>Профиль</a>
          </div>
        </div>
        <div className={css.main_info}>
          <h2 className={css.info_title}>Основная информация</h2>
          <div className={css.input_box}>
            <InputItem label={"Название компании-бренда"} placeholder={"Мегафон"} name={"title"}/>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.78433 18.8415L11.2877 11.2123C12.0374 10.45 12.0374 9.21588 11.2877 8.45573L3.78433 0.826515C3.02833 0.0578284 1.80403 0.0578284 1.05012 0.826515C0.294116 1.5952 0.294116 2.84005 1.05012 3.6066L7.17376 9.83295L1.05012 16.0593C0.294116 16.828 0.294116 18.0729 1.05012 18.8394C1.80403 19.6081 3.02833 19.6081 3.78433 18.8415Z" fill="#004664"/>
            </svg>
            <div className={css.inputBox_counter}>
              1/5
            </div>
          </div>
          <InputItem label={"Контактное лицо, ФИО"} placeholder={"Константин Константинович Иванов"} name={"name"}/>
          <div className={css.short_box}>
            <InputItem label={"Телефон"} placeholder={"+7"} name={"phone"}/>
            <InputItem label={"E-mail"} placeholder={" "} name={"email"}/>
          </div>
          <InputItem label={"Должность"} placeholder={" "} name={"occupation"}/>
          <h3 className={css.info_subtitle}>
            Ваши реквизиты
          </h3>
          <div className={css.input_box}>
            <InputItem label={"Название компании-бренда"} placeholder={"Мегафон"} name={"title"}/>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.78433 18.8415L11.2877 11.2123C12.0374 10.45 12.0374 9.21588 11.2877 8.45573L3.78433 0.826515C3.02833 0.0578284 1.80403 0.0578284 1.05012 0.826515C0.294116 1.5952 0.294116 2.84005 1.05012 3.6066L7.17376 9.83295L1.05012 16.0593C0.294116 16.828 0.294116 18.0729 1.05012 18.8394C1.80403 19.6081 3.02833 19.6081 3.78433 18.8415Z" fill="#004664"/>
            </svg>
            <div className={css.inputBox_counter}>
              1/5
            </div>
          </div>
          <InputItem label={"ИНН"} placeholder={"29489252857982"} name={"inn"}/>
          <InputItem label={"КПП"} placeholder={"29489252857982"} name={"kpp"}/>
          <InputItem label={"Фактический адрес"} placeholder={"ул. Звёздная 7"} name={"f_address"}/>
          <div className={css.info_check}>
            <input type='checkbox' className={css.info_checkbox} name='address_check' id='address_check' />
            <label htmlFor='address_check'>Фактический адрес совпадает с юридическим</label>
          </div>
          <InputItem label={"Юридический адрес"} placeholder={"ул. Чернышевского 8"} name={"l_address"}/>
          <h3 className={css.info_subtitle}>
            Банковские реквизиты
          </h3>
          <div className={css.input_box}>
            <InputItem label={"Название компании-бренда"} placeholder={"Мегафон"} name={"title"}/>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.78433 18.8415L11.2877 11.2123C12.0374 10.45 12.0374 9.21588 11.2877 8.45573L3.78433 0.826515C3.02833 0.0578284 1.80403 0.0578284 1.05012 0.826515C0.294116 1.5952 0.294116 2.84005 1.05012 3.6066L7.17376 9.83295L1.05012 16.0593C0.294116 16.828 0.294116 18.0729 1.05012 18.8394C1.80403 19.6081 3.02833 19.6081 3.78433 18.8415Z" fill="#004664"/>
            </svg>
            <div className={css.inputBox_counter}>
              1/4
            </div>
          </div>
          <InputItem label={"БИК"} placeholder={"29489252857982"} name={"bic"}/>
          <InputItem label={"Наименование банка"} placeholder={"Наименование банка"} name={"bank_title"}/>
          <InputItem label={"Корр. счет"} placeholder={"Корр. счет"} name={"corr_acc"}/>
          <button className={css.info_saveBtn}>Сохранить</button>
        </div>
        <div className={css.logo_block}>
          <div className={css.logo_title}>Ваш логотип</div>
          <img className={css.logo_pic} src='images/icons/brand-logo.png' alt='logo' />
          <img className={css.mlogo_pic} src='images/icons/mbrand-logo.png' alt='logo' />
          <a href="#" className={css.logo_remove}>Удалить</a>
        </div>
      </div>
    </main>
  );
};