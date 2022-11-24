import s from './SearchBar.module.css'

export default function SearchBar(props) {
   const {onSearch} = props;
   return (
      <div className={s.main}>
         <input type='search' />
         <button className={s.btn} onClick={() => onSearch('id del personaje')}>Agregar</button>
      </div>
   );
}
