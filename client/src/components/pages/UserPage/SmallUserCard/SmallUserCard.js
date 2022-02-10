import {useSelector, useDispatch} from 'react-redux'
import { acceptPerformer, deletePerformer } from '../../../../redux/actions/performersAc';
import Rating from "../../../UI/Rating/Rating";
import style from "./SmallUserCard.module.css";
function SmallUserCard({taskId, id, index, image, secondname,patronymic,name, email, phone,about}) {


const dispatch = useDispatch()
  return (
<div className={style.container_user__card}>
      {/* <div style={{margin:'20px'}}>
      {
    `${index}.на задание НАЗВАНИЕ ЗАДАНИЯ ТУТ откликнулся  ${name}`
      }
      </div> */}
  <div className={style.wrapper_user__card}>
    <div className={style.wrapper_photorating__card}>
        
            <div className={style.img__card}>
              
            {image ? (
                  <img
                    src={`http://localhost:3001${image}`}
                    alt="dhg"
                  />
                
              ) : (

                  <img
                    src="https://cdn-icons-png.flaticon.com/512/166/166248.png"
                    alt="photo userA"
                  />
               
              )}
             
              </div>
                     <div className={style.rating__card}>
                        <Rating />
                      </div>
            
        </div>



          <div className={style.wrapper_info__card}>
            <div className={style.title__card}>
            {
                `ФИО: ${secondname} ${name} ${patronymic}`
                
                }
            </div>
            <div className={style.some_info__card}>
         
            <span>{`О себе: ${about}`}</span>
            <span>{`Тел:${phone}`}</span>
            <span>{`Почта: ${email}`}</span>
          
            </div>
          </div>
        
        <div className={style.wrapper_btns__card}>
          <button onClick={() => dispatch(acceptPerformer({performerId:id,taskId}))}>Пригласить</button>
          <button onClick={()=> dispatch(deletePerformer({performerId:id,taskId}))}>Отклонить</button>
          <button>Написать</button>
        </div>
   
  </div>
</div>
  );
}

export default SmallUserCard;
