import React from 'react';

import journey from '../../img/journey.png';
import figure from '../../img/figure.png';
import figure_corner1 from '../../img/figure_corner1.png';
import figure_corner2 from '../../img/figure_corner2.png';

import './mainApp.scss';

const MainApp = () => {
  return (
    <section className='main'>
      <div className='main__body'>
        <div className='main__container-decoration'>
          <div className='image-wrapper'>
            <img src={journey} alt='journey'></img>
          </div>
          <div className='button-wrapper'>
            <button className='button'>Начать путешествие</button>
            <div className='corner1'>
              <img src={figure_corner1} alt='figure1'></img>
            </div>
            <div className='corner2'>
              <img src={figure_corner2} alt='figure2'></img>
            </div>
          </div>
          <img src={figure} alt='figure'></img>
        </div>
        <div className='main__container-item'>
          <div className='main__item-grid'>
            <div className='main__item-1'>
              <div className='item-main__wrapper'>
                <div className='item-main__text'>мы</div>
                <div className='item-main__value'>1</div>
                <div className='item-main__text'>на рынке</div>
              </div>
            </div>
            <div className='main__item-2'>
              <div className='item-main__wrapper'>
                <div className='item-main__text'>гарантируем</div>
                <div className='item-main__value'>50%</div>
                <div className='item-main__text'>безопасность</div>
              </div>
            </div>
            <div className='main__item-3'>
              <div className='item-main__wrapper'>
                <div className='item-main__text'>календарик на</div>
                <div className='item-main__value'>
                  2001<span>г.</span>
                </div>
                <div className='item-main__text'>в подарок</div>
              </div>
            </div>
            <div className='main__item-4'>
              <div className='item-main__wrapper'>
                <div className='item-main__text'>путешествие</div>
                <div className='item-main__value'>597</div>
                <div className='item-main__text'>дней</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainApp;
