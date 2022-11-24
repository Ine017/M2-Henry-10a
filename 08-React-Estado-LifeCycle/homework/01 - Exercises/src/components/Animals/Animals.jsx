import React from 'react'


export default class Animals extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    const animals = this.props.animals;
    return (
      <div >
          {animals.map((a) => (
            <div key={a.name}>
              <h5>{a.name}</h5>
              <img 
                  src={a.image} 
                  alt={a.name}
                  width='300px'
                  />
              <span>{a.specie}</span> 
            </div>
          ))}
      </div>
  )}
}
