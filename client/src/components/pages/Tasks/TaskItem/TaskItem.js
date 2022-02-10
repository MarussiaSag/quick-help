import React from "react";
import { Link } from "react-router-dom";
import { takeOnTheTask } from "../../../../redux/actions/currentUserTasksAC";
import MainButton from "../../../UI/Buttons/MainButton";
import ProgressBar from "../../../UI/ProgressBar/ProgressBar";
import Rating from "../../../UI/Rating/Rating";
import style from "./TaskItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import courierAvatar from "../../../img/icons/courier.png";
import repairhouse from "../../../img/icons/home-repair.png";
import settings from "../../../img/icons/settings.png";
import deliveryTruck from "../../../img/icons/delivery-truck.png";
import broom from "../../../img/icons/broom.png";
function TaskItem({
  id,
  title,
  address,
  time,
  date,
  price,
  description,
  categorie,
}) {
  const allTasks = useSelector((state) => state.currentUserTasks);
  const user = useSelector((state) => state.users);

const array = allTasks.map(el => el.id)
// console.log(array, id, array.indexOf(id));
let flag
if(array.indexOf(id) >= 0 ){
  flag = true
}else{
  flag = false
}
  const checkCategory = (category) => {
    switch (category) {
      case "Курьерские услуги":
        return courierAvatar;
      case "Ремонт и строительство":
        return repairhouse;
      case "Грузоперевозки":
        return deliveryTruck;
      case "Уборка помещения":
        return broom;
      case "Компьютерная помощь":
        return settings;

      default:
        return "https://cdn-icons-png.flaticon.com/512/166/166260.png";
    }
  };

  const dispatch = useDispatch();
  return (
    <div className={style.wrapper__vacantie}>
      <div className={style.img__vacantie}>
        <div className={style.img__vacantie_block}>
          <img src={checkCategory(categorie)} alt="avatar" />
        </div>
        <div className={style.rating__vacantie}>
          <Rating />
        </div>
      </div>
      <div className={style.info__vacantie}>
        <Link to={`/tasks/userstasks/${id}`} className={style.header__vacantie}>
          {" "}
          <p>{title}</p>
        </Link>
        <div className={style.subheader__vacantie}>Категория:{categorie}</div>
        <div className={style.subheader__vacantie}>Адрес:{address}</div>
        <div className={style.subheader__vacantie}>Начать: {date}</div>
        <div className={style.subheader__vacantie}>
          Подработка займет: {time}
        </div>
        <div className={style.subheader__vacantie}>Оплата задания: {price}</div>
        <div className={style.descr__vacantie}>
          Описание:
          {description}
        </div>
        <div>
          {!flag ? (
            <button onClick={() => dispatch(takeOnTheTask(id))}>
              Откликнуться на вакансию
            </button>
          ) : (
            "Вы откликнулись"
          )}
          <button>Написать работодателю</button>
        </div>
      </div>
      {/*
      <p></p>
      <p>{categorie}</p>
      <ProgressBar done={50}/>
      
      <hr></hr>
      <hr></hr> */}
    </div>
  );
}

export default TaskItem;
