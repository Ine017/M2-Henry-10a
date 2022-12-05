import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Navbar/Nav.jsx'
import React, {useState} from 'react'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import {Routes, Route, NavLink} from 'react-router-dom'


function App () {

  const [characters, setCharacters] = useState([]);
  // console.log(characters);
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
       //console.log(data);
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

  const onClose = (id) => {
    // console.log(id);
    setCharacters(characters.filter(c => c.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav
           onSearch={onSearch}
      />
      <Routes>
       <Route 
         path='/home'
         element={ <Cards
             characters={characters}
             onClose={onClose}
               />}
         />
       <Route
         path='/about'
         element={<About/>}
       />
       <Route
         path={'/detail/:detailId'}
         element={<Detail/>}
       />
      </Routes>
    </div>
  )
}

export default App
