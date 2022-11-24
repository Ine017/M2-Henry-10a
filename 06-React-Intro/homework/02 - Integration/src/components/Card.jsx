import s from './Card.module.css';

export default function Card(props) {
 
   return (
      <div className={s.card}>
         <img className={s.img} src={props.image} alt={props.name} />
         <button className={s.btn} onClick={props.onClose}>X</button>
           <div className={s.container}>
            <h2 className={s.h2}>{props.name}</h2>
            <h2 className={s.h2}>{props.species}</h2>
            <h2 className={s.h2}>{props.gender}</h2>
           </div>
      </div>
   );
}
