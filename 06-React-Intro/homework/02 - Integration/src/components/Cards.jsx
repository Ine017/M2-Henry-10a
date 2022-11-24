import Card from './Card';
import s from './Cards.module.css'


export default function Cards(props) {
   const { characters } = props;
   //console.log(characters);
   //const cards = characters.map(c => <Card />)
   return <div className={s.main}>
            {
              characters.map(c => <Card 
                name = {c.name}
                species = {c.species}
                gender = {c.gender}
                image = {c.image}
                onClose = {() => window.alert('Emulamos que se cierra la card')}
                key = {c.name}
                />)
            }
          </div>;
}


