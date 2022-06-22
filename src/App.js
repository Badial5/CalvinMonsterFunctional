import React, { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


 const App = () => {

  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {

  //fetch the data from the api
  fetch('https://jsonplaceholder.typicode.com/users')
  //turn the data to json()
  .then((response) => response.json())
  //Now json will return back data so I name
  //the return data to users and put it in the 
  //monster functions 
  .then((users) => setMonsters(users));

  }, [])

  useEffect(() => {

  const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField)
  
  });

  setFilteredMonsters(newFilteredMonsters)

      

  }, [monsters, searchField])

 

  //This is a method
   const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString) 
  }

  


    return (
      <div className='App' >

        <h1 className='app-title' > Calvin Monsters </h1>
      
        <SearchBox onChangeHandler={onSearchChange}
        placeholder='Search Monster'
        className='monsters-search-box'
        />
        <CardList  monsters={filteredMonsters} />


      </div>
    )
  
}

export default App;
