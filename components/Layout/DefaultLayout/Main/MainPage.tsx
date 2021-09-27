import * as React from 'react';
import css from './MainPage.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

export const MainPage = () => {
  return (
    <main className={css.root}>
      <div className={css.banner}>
        <h1 className={css.banner_title}>
          Горы России<br/>маркетинг эмоций и впечатлений
        </h1>
        <p className={css.banner_subtitle}>
          Маркетинг брендов на горных курортах России. <br/>
          450 курортов на нашей площадке
        </p>
        <p className={css.mbanner_subtitle}>
          450 курортов на нашей площадке
        </p>
        <button className={css.banner_btn}>
          Зарегистрироваться
        </button>
        <img className={css.banner_pic} src='images/main/bg.png' alt='bg' />
        <img className={css.mbanner_pic} src='images/main/mbanner.png' alt='bg' />
        <div className={css.banner_bg}></div>
      </div>
      <div className={css.facts}>
        <div className={css.facts_container}>
          <div className={css.facts_item}>
            <img src='images/main/facts1/fact1.png' alt='fact' className={css.fact_pic} />
            <div className={css.fact_title}>154 курорта</div>
            <div className={css.fact_subtitle}>Лучшие курорты Кавказа</div>
          </div>
          <div className={css.facts_item}>
            <img src='images/main/facts1/fact2.png' alt='fact' className={css.fact_pic} />
            <div className={css.fact_title}>4 100 м</div>
            <div className={css.fact_subtitle}>Над уровнем моря, самый высокогорный курорт</div>
          </div>
          <div className={css.facts_item}>
            <img src='images/main/facts1/fact3.png' alt='fact' className={css.fact_pic} />
            <div className={css.fact_title}>до 8 месяцев</div>
            <div className={css.fact_subtitle}>Длится сезон. Первые трассы открываются в ноябре</div>
          </div>
          <div className={css.facts_item}>
            <img src='images/main/facts1/fact4.png' alt='fact' className={css.fact_pic} />
            <div className={css.fact_title}>15 км</div>
            <div className={css.fact_subtitle}>Самый длинный спуск — <br/> с пика Каменный Столб</div>
          </div>
        </div>
        <div className={css.mfacts_container}>
          <Swiper className={css.facts_swiper}
                  spaceBetween={10}
                  slidesPerView={"auto"}
                  loop={true}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className={css.fact_slide}>
              <img src='images/main/facts1/fact1.png' alt='fact' />
              <div className={css.factSlide_title}>4100м</div>
            </SwiperSlide>
            <SwiperSlide className={css.fact_slide}>
              <img src='images/main/facts1/fact2.png' alt='fact' />
              <div className={css.factSlide_title}>154 курорта</div>
              <div className={css.factSlide_subtitle}>Лучшие курорты кавказа</div>
            </SwiperSlide>
            <SwiperSlide className={css.fact_slide}>
              <img src='images/main/facts1/fact3.png' alt='fact' />
              <div className={css.factSlide_title}>8 месяцев</div>
            </SwiperSlide>
            <SwiperSlide className={css.fact_slide}>
              <img src='images/main/facts1/fact4.png' alt='fact' />
              <div className={css.factSlide_title}>15 км</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={css.tagline}>
        <img src='images/icons/logo-footer.png' alt='logo' className={css.tagline_logo} />
        <h2 className={css.tagline_title}>
          Большие и яркие маркетинговые проекты брендов в горах. Проекты от идеи до воплощения. Верим в то, что делаем.
        </h2>
      </div>
      <div className={css.moreFacts}>
        <h2 className={css.moreFacts_title}>
          Несколько фактов о нас
        </h2>
        <div className={css.moreFacts_container}>
          <div className={css.moreFacts_item}>
            <img src="images/main/facts2/fact1.png" alt="fact" className={css.moreFact_pic}/>
            <div className={css.moreFact_title}>Лидер интеграции</div>
              <div className={css.moreFact_subtitle}>
                Брендов на горных курортах
              </div>
              <div className={css.moreFact_mSubtitle}>
                Брендов на горных курортах
              </div>
          </div>
          <div className={css.moreFacts_item}>
            <img src="images/main/facts2/fact2.png" alt="fact" className={css.moreFact_pic}/>
              <div className={css.moreFact_title}>Коммуникации</div>
              <div className={css.moreFact_subtitle}>
                Самые эффективные маркетинговые коммуникации
              </div>
              <div className={css.moreFact_mSubtitle}>
                Маркетинговые коммуникации
              </div>
          </div>
          <div className={css.moreFacts_item}>
            <img src="images/main/facts2/fact3.png" alt="fact" className={css.moreFact_pic}/>
              <div className={css.moreFact_title}>Нестандарт</div>
              <div className={css.moreFact_subtitle}>
                Нестандартные решения по интеграции брендов
              </div>
              <div className={css.moreFact_mSubtitle}>
                Брендов на горных курортах
              </div>
          </div>
          <div className={css.moreFacts_item}>
            <img src="images/main/facts2/fact4.png" alt="fact" className={css.moreFact_pic}/>
              <div className={css.moreFact_title}>Знания</div>
              <div className={css.moreFact_subtitle}>
                Уникальные знания принципов работы с курортами
              </div>
              <div className={css.moreFact_mSubtitle}>
                Брендов на горных курортах
              </div>
          </div>
          <div className={css.moreFacts_item}>
            <img src="images/main/facts2/fact5.png" alt="fact" className={css.moreFact_pic}/>
              <div className={css.moreFact_title}>Эксперт</div>
              <div className={css.moreFact_subtitle}>
                В области маркетинговых коммуникаций бренда
              </div>
              <div className={css.moreFact_mSubtitle}>
                Брендов на горных курортах
              </div>
          </div>
          <div className={css.moreFacts_item}>
            <img src="images/main/facts2/fact6.png" alt="fact" className={css.moreFact_pic}/>
              <div className={css.moreFact_title}>Проекты</div>
              <div className={css.moreFact_subtitle}>
                Лучшие маркетинговые проекты брендов реализованные на курортах
              </div>
              <div className={css.moreFact_mSubtitle}>
                Брендов на горных курортах
              </div>
          </div>
        </div>
      </div>
      <div className={css.geo}>
        <div className={css.geo_titles}>
          <h2 className={css.geo_title}>Любая география курортов</h2>
          <div className={css.geo_subtitle}>425 курортов</div>
        </div>
        <div className={css.geo_pics}>
          <a href="#" className={css.geo_item}>
            <img src='images/main/geography/geo1.png' alt='geo' />
            <div className={css.geo_label}>Кавказ</div>
            <div className={css.geo_number}>54 курорта</div>
          </a>
          <a href="#" className={css.geo_item}>
            <img src='images/main/geography/geo2.png' alt='geo' />
            <div className={css.geo_label}>Сибирь</div>
            <div className={css.geo_number}>54 курорта</div>
          </a>
          <a href="#" className={css.geo_item}>
            <img src='images/main/geography/geo3.png' alt='geo' />
            <div className={css.geo_label}>Урал</div>
            <div className={css.geo_number}>54 курорта</div>
          </a>
        </div>
        <div className={css.geo_slider}>
          <Swiper className={css.geo_swiper}
                  spaceBetween={10}
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className={css.geo_slide}>
              <img src='images/main/geography/m-slide.png' alt='geo' />
              <div className={css.geo_mask}></div>
              <div className={css.geoSlide_title}>Кавказ</div>
              <div className={css.geoSlide_subtitle}>54 курорта</div>
              <a href='#' className={css.geoSlide_link}>
                <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.44349 22.2018L13.1012 13.3988C13.9663 12.5193 13.9663 11.0952 13.1012 10.2182L4.44349 1.41521C3.57118 0.528264 2.15852 0.528264 1.28863 1.41521C0.416316 2.30216 0.416316 3.73852 1.28863 4.623L8.35437 11.8073L1.28863 18.9915C0.416316 19.8785 0.416316 21.3148 1.28863 22.1993C2.15852 23.0863 3.57118 23.0862 4.44349 22.2018Z" fill="white"/>
                </svg>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={css.views}>
        <h2 className={css.views_title}>Прекрасные виды</h2>
        <Swiper className={css.view_swiper}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={css.view_slide}>
            <img src='images/main/rose.png' alt='rose' />
            <div className={css.slide_title}>Роза Хутор</div>
          </SwiperSlide>
          <SwiperSlide className={css.view_slide}>
            <img src='images/main/rose.png' alt='rose' />
            <div className={css.slide_title}>Роза Хутор</div>
          </SwiperSlide>
          <SwiperSlide className={css.view_slide}>
            <img src='images/main/rose.png' alt='rose' />
            <div className={css.slide_title}>Роза Хутор</div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={css.offers}>
        <h2 className={css.offers_title}>
          Что мы предлагаем
        </h2>
        <div className={css.offers_container}>
          <div className={css.offers_item}>
            <img src='images/main/offers/offer1.png' alt='offer' />
            <div className={css.offers_label}>
              Разработка рекламной кампании <br/> бренда на горных курортах
            </div>
          </div>
          <div className={css.offers_item}>
            <img src='images/main/offers/offer2.png' alt='offer' />
            <div className={css.offers_label}>
              Разработка концепта размещения <br/> рекламы на курорте (для курортов)
            </div>
          </div>
          <div className={css.offers_item}>
            <img src='images/main/offers/offer3.png' alt='offer' />
            <div className={css.offers_label}>
              Создание партнерских пакетов <br/> для каждого горного курорта
            </div>
          </div>
        </div>
      </div>
      <div className={css.brands}>
        <h2 className={css.brands_title}>
          Услуги для брендов и агентств
        </h2>
        <div className={css.brands_container}>
          <Swiper className={css.brands_swiper}
                  spaceBetween={50}
                  slidesPerView={1}
          >
            <SwiperSlide className={css.brand_slide}>
              <div className={css.brandsSwiper_title}>
                Интеграция на курорте
              </div>
              <div className={css.brandSlide_items}>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand1.png' alt='rose' />
                  <div className={css.brandSlide_title}>Outdoor</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand2.png' alt='rose' />
                  <div className={css.brandSlide_title}>Indoor</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand3.png' alt='rose' />
                  <div className={css.brandSlide_title}>Нестандартные проекты</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand4.png' alt='rose' />
                  <div className={css.brandSlide_title}>Полиграфия</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand5.png' alt='rose' />
                  <div className={css.brandSlide_title}>Promo</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand6.png' alt='rose' />
                  <div className={css.brandSlide_title}>Спецпроекты</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand7.png' alt='rose' />
                  <div className={css.brandSlide_title}>Спонсорство мероприятий</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand8.png' alt='rose' />
                  <div className={css.brandSlide_title}>Готовые пакеты</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={css.brand_slide}>
              <div className={css.brandsSwiper_title}>
                Интеграция на курорте
              </div>
              <div className={css.brandSlide_items}>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand1.png' alt='rose' />
                  <div className={css.brandSlide_title}>Outdoor</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand2.png' alt='rose' />
                  <div className={css.brandSlide_title}>Indoor</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand3.png' alt='rose' />
                  <div className={css.brandSlide_title}>Нестандартные проекты</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand4.png' alt='rose' />
                  <div className={css.brandSlide_title}>Полиграфия</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand5.png' alt='rose' />
                  <div className={css.brandSlide_title}>Promo</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand6.png' alt='rose' />
                  <div className={css.brandSlide_title}>Спецпроекты</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand7.png' alt='rose' />
                  <div className={css.brandSlide_title}>Спонсорство мероприятий</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand8.png' alt='rose' />
                  <div className={css.brandSlide_title}>Готовые пакеты</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={css.brand_slide}>
              <div className={css.brandsSwiper_title}>
                Интеграция на курорте
              </div>
              <div className={css.brandSlide_items}>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand1.png' alt='rose' />
                  <div className={css.brandSlide_title}>Outdoor</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand2.png' alt='rose' />
                  <div className={css.brandSlide_title}>Indoor</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand3.png' alt='rose' />
                  <div className={css.brandSlide_title}>Нестандартные проекты</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand4.png' alt='rose' />
                  <div className={css.brandSlide_title}>Полиграфия</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand5.png' alt='rose' />
                  <div className={css.brandSlide_title}>Promo</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand6.png' alt='rose' />
                  <div className={css.brandSlide_title}>Спецпроекты</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand7.png' alt='rose' />
                  <div className={css.brandSlide_title}>Спонсорство мероприятий</div>
                </div>
                <div className={css.brand_item}>
                  <img src='images/main/brands/brand8.png' alt='rose' />
                  <div className={css.brandSlide_title}>Готовые пакеты</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={css.mBrands_container}>
          <h2 className={css.mBrands_title}>Возможности</h2>
          <div className={css.mBrands_subtitle}>
            Уникальные возможности маркетплейса маркетинговых решений в горах
          </div>
          <div className={css.mBrands_pics}>
            <div className={css.first_row}>
              <div className={css.mBrands_item}>
                <img src='images/main/brands/brand1.png' alt='brand' />
                <div className={css.mBrands_itemTitle}>
                  Outdoor
                </div>
              </div>
              <div className={css.mBrands_item}>
                <img src='images/main/brands/brand2.png' alt='brand' />
                <div className={css.mBrands_itemTitle}>
                  Indoor
                </div>
              </div>
              <div className={css.mBrands_item}>
                <img src='images/main/brands/brand3.png' alt='brand' />
                <div className={css.mBrands_itemTitle}>
                  Нестандартные проектры
                </div>
              </div>
              <div className={css.mBrands_item}>
                <img src='images/main/brands/brand4.png' alt='brand' />
                <div className={css.mBrands_itemTitle}>
                  Outdoor
                </div>
              </div>
            </div>
            <div className={css.second_row}>
              <div className={css.mBrands_item}>
                <img src='images/main/brands/brand5.png' alt='brand' />
                <div className={css.mBrands_itemTitle}>
                  Outdoor
                </div>
              </div>
              <div className={css.mBrands_item}>
                <img src='images/main/brands/brand6.png' alt='brand' />
                <div className={css.mBrands_itemTitle}>
                  Outdoor
                </div>
              </div>
              <div className={css.mBrands_item}>
                <img src='images/main/brands/brand7.png' alt='brand' />
                <div className={css.mBrands_itemTitle}>
                  Outdoor
                </div>
              </div>
              <div className={css.mBrands_item}>
                <img src='images/main/brands/brand8.png' alt='brand' />
                <div className={css.mBrands_itemTitle}>
                  Outdoor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.resorts}>
          <h2 className={css.resorts_title}>
            Услуги для курортов
          </h2>
        <div className={css.resorts_container}>
          <div className={css.resorts_item}>
            <img src='images/main/resort/resort1.png' alt='resort' />
            <div className={css.resortItem_label}>
              Разработка рекламных пакетов
            </div>
          </div>
          <div className={css.resorts_item}>
            <img src='images/main/resort/resort2.png' alt='resort' />
            <div className={css.resortItem_label}>
              Разработка ценовой политики
            </div>
          </div>
          <div className={css.resorts_item}>
            <img src='images/main/resort/resort3.png' alt='resort' />
            <div className={css.resortItem_label}>
              Разработка <br/>
              дизайн-кода
            </div>
          </div>
          <div className={css.resorts_item}>
            <img src='images/main/resort/resort4.png' alt='resort' />
            <div className={css.resortItem_label}>
              Обслуживание <br/> технических конструкций
            </div>
          </div>
        </div>
        <div className={css.mResorts_container}>
          <Swiper className={css.resort_swiper}
                  spaceBetween={10}
                  slidesPerView={"auto"}

                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className={css.resort_slide}>
              <img src='images/main/resort/resort1.png' alt='resort' />
              <div className={css.resortSlide_title}>Разработка рекламных пакетов</div>
            </SwiperSlide>
            <SwiperSlide className={css.resort_slide}>
              <img src='images/main/resort/resort2.png' alt='resort' />
              <div className={css.resortSlide_title}>Разработка ценовой политики</div>
            </SwiperSlide>
            <SwiperSlide className={css.resort_slide}>
              <img src='images/main/resort/resort3.png' alt='resort' />
              <div className={css.resortSlide_title}>Разработка дизайн-кода</div>
            </SwiperSlide>
            <SwiperSlide className={css.resort_slide}>
              <img src='images/main/resort/resort4.png' alt='resort' />
              <div className={css.resortSlide_title}>Обслуживание технических конструкций</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={css.registry}>
        <h2 className={css.registry_title}>
          Зарегистрируйтесь сейчас <br/> и получите бесплатную услугу
        </h2>
        <button className={css.registry_btn}>Зарегистрироваться</button>
      </div>
      <div className={css.modal}>
        <div className={css.modal_mask}>
        </div>
        <div className={css.modal_window}>
          <svg className={css.modal_close} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 13.1751L13.1751 14L7 7.82486L0.824864 14L0 13.1751L6.17514 7L0 0.824866L0.824864 1.90735e-06L7 6.17514L13.1751 1.90735e-06L14 0.824866L7.82486 7L14 13.1751Z" fill="#40748B"/>
          </svg>
          <div className={css.modal_title}>Восстановить пароль</div>
          <input type='text' placeholder="Ваш e-mail" />
          <button className={css.modal_btn}>
            Восстановить
          </button>
        </div>
      </div>
    </main>
  );
};