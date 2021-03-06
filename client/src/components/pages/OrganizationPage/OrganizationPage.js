import React from 'react';
import MainButton from '../../UI/Buttons/MainButton';
import Rating from '../../UI/Rating/Rating';
import style from './OrganizationPage.module.css'
function OrganizationPage() {
  return (
    <div className={style.container__account}>
    <h3>Огранизация ООО Одуванчик </h3>

    <div className={style.header_wrapper__account}>
      <div className={style.wrapper_photo__account}>
        <div className={style.photo__account}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/166/166260.png"
            alt="add_photo"
          />
        </div>
        <div className={style.choose_photo__account}>
        <button className={style.choose_photo_btn__account} type="file">Загрузить фото</button>
        </div>
        <div className={style.rating__account}>
          <div>Мой рейтинг:</div>
          <Rating />
        </div>
      </div>
      <div className={style.wrapper_info__account}>
        <div className={style.header_info__account}>
          <div className={style.main_info__account}>Имя представителя: User</div>
          <div className={style.main_info__account}>Очество представителя: Userovitch</div>
          <div className={style.main_info__account}>Фамилия представителя: Userov</div>
        </div>
        <div className={style.main_info__account}>Город: Москва</div>
        <div className={style.main_info__account}>
          О себе: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nesciunt
        </div>
        <div className={style.main_info__account}>
          Телефон для связи:<strong>+7(916)088-91-38</strong>
        </div>
        <div className={style.main_info__account}>
          Почта для связи: <strong>user@user.com</strong>
        </div>
      </div>
    </div>
    <div className={style.btn__account}>
      <MainButton>
        Редактировать
      </MainButton>
    </div>
  </div>
  );
}

export default OrganizationPage;
