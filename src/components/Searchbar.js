import React, { useState } from 'react';
import { Card } from "./Card"

export function Searchbar(props){
  const [query, setQuery] = useState("");
  // const [queryResults, setQueryResults] = useState([])

  const handleSearch = () => {
    console.log("button clicked")
    let results = [];

      
     const items = JSON.parse(localStorage.getItem("CARDS"))

    for(let i=0; i < items.length; i++){
      if (items[i] && items[i].name && items[i].name.city.includes(query)){
        console.log("HELLLO??")
        results.push(items[i]);
      }
    }
    props.onSearchResults(results)
  }

  
  return (
    <div  id="search-bar" className={props.darkMode ? "dark": ""}>
    <form className='search-form'>
     <input 
        className='search-bar' 
        type="text" 
        value={query}
        onChange={(e) => {setQuery(e.target.value);
        console.log("Input value:", e.target.value);
        }}
        placeholder='Search for a city'/>
      <button 
        className="search-btn" 
        type="submit"
         onClick={() => handleSearch(query)}
      >Go</button>
      </form>
    </div>
  )
}

  

  
  



