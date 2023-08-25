import React, { useState } from 'react';
import { Card } from "./Card"

// const getFilteredItems = (query, items) => {
//     if (!query){
//       return items;
//     }
//     return items.filter(item => item.city.includes(query.value));
//   }

export function Searchbar(props){
  const [query, setQuery] = useState("");
  // const [queryResults, setQueryResults] = useState([])

  const handleSearch = () => {
    console.log("button clicked")
    let results = [];

     // const key = localStorage.key("CARDS");
      
     const items = JSON.parse(localStorage.getItem("CARDS"))

    for(let i=0; i < items.length; i++){
      if (items[i] && items[i].name && items[i].name.city.includes(query)){
        console.log("HELLLO??")
        results.push(items[i]);
      }
    }
    props.onSearchResults(results)
  }

  // console.log(queryResults)

  
  return (
    <div  id="search-bar" className={props.darkMode ? "dark": ""}>
     <input 
        className='search-bar' 
        type="text" 
        value={query}
        onChange={(e) => {setQuery(e.target.value);
        console.log("Input value:", e.target.value);
        }}
        placeholder='Search for a city'/>
      {/* <ul>
        {filteredItems.map(value => (
          <h1 key={value.city}>{value}</h1>
        ))}
      </ul> */}
      <button 
        className="search-btn" 
        type="submit"
         onClick={() => handleSearch(query)}
      >Go</button>
      {/* <div>
        {queryResults.map((result, index) => (
          <Card id={result.id} name={result.name.name} city={result.name.city} img={result.name.img} key={index} rating={result.name.rating}/>
        ))}
      </div> */}
    </div>
  )
}

  
  





// //create a component that will hold search bar and items
// export class Searchbar extends Component{
//     constructor(props){
//         super(props);
//         //set up property to hold query and filtered items
//         this.state = {
//             searchQuery: '',
//             filteredItems: [],
//         };
//     }
      
//     //handle change in input field and update searchQuery
//     handleSearchChange = (event) => {
//         const { value } = event.target;
//         this.setState({ searchQuery: value }, this.filterItems );
//     }
//     //filter items from local storage, called when search changes
    
//     filterItems = () => {
//         const { searchQuery } = this.state;
//         const storedItems = JSON.parse(localStorage.getItem('items')) || [];
//         const filteredItems = storedItems.filter(item => 
//             item.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         this.setState({ filteredItems });
//     }

// render(){
//     const { searchQuery, filteredItems } = this.state;

//     return (
//         <div className="search">
//                     <input 
//                         className="search-bar" 
//                         placeholder="Search"
//                         id="searchQuery"
//                         value={searchQuery}
//                         onChange={this.handleSearchChange}
//                     />
//                     <button 
//                         className="search-btn" 
//                         type="submit"
//                         onClick={this.filterItems}
//                     >Go</button>
//                     <ul>
//                         {filteredItems.map((item, index) => (
//                             <li key={index}>{item}</li>
//                         ))}
//                     </ul>
//                 </div>
//         )
//     }
// }
