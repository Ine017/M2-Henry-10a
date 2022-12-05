import s from './Card.module.css';
import { Link } from 'react-router-dom'

export default function Card(props) {
   console.log(props);
   return (
      <div className={s.card}>
         <img src={props.image} alt={props.name} />
         <button onClick={props.onClose}>X</button>
         <div >
            <Link to={`/detail/${props.id}`}>
               <h2 >{props.name}</h2>
            </Link>
               <h2 >{props.species}</h2>
               <h2 >{props.gender}</h2>
         </div>
      </div>
   );
}

// className={s.img}
// className={s.btn}
// className={s.container}
// className={s.h2}
// className={s.h2}
// className={s.h2}