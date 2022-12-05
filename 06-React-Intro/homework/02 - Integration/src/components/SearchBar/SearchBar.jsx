import s from './SearchBar.module.css';
import {React, useState} from 'react';

export default function SearchBar(props) {
   const {onSearch} = props;
   //console.log(props);
   const [character, setCharacter] = useState('');
   const handleChange = (e) => {
      setCharacter(e.target.value)
   }
   return (
      <div className={s.main}>
         <input 
            type='search' 
            value={character}
            onChange={handleChange}
            className={s.input}
            
         />
         <button className={s.btn} onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
