import React from 'react';
import { Link } from 'react-router-dom';
import {
  MAIN_ROUTE,
  TECHNOLOGY_ROUTE,
  SCHEDULE_ROUTE,
  WARRANTY_ROUTE,
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
} from '../../utils/consts';

import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className='header'>
      <div className='header__body'>
        <div className='header__logo'></div>
        <ul className='header__nav'>
          <li>
            <Link className='header__link' to={MAIN_ROUTE}>
              Главная
            </Link>
          </li>
          <li>
            <Link className='header__link' to={TECHNOLOGY_ROUTE}>
              Технология
            </Link>
          </li>
          <li>
            <Link className='header__link' to={SCHEDULE_ROUTE}>
              График полетов
            </Link>
          </li>
          <li>
            <Link className='header__link' to={WARRANTY_ROUTE}>
              Гарантии
            </Link>
          </li>
          <li>
            <Link className='header__link' to={ABOUT_ROUTE}>
              О компании
            </Link>
          </li>
          <li>
            <Link className='header__link' to={CONTACTS_ROUTE}>
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
