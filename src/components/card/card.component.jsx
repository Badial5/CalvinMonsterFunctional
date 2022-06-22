import React  from 'react'

import './card.styles.css'


 const Card = ({monster}) => {

    //Destructing the props from App component
    const {id, name, email} = monster

    return (
   <div className='card-container' key={id} >
       <img 
            alt={`monster ${name}`}
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            // style={{width: 180, height: 180}}
            />
            <h2>{name}</h2>
            <p>{email}</p>
    </div>
    )
  
}


export default Card