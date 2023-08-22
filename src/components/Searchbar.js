import React, { useState } from 'react';

const getFilteredItems = (query, items) => {
    if (!query){
      return items;
    }
    return items.filter(item => item.city.includes(query.value));
  }

export function Searchbar(){
  const [query, setQuery] = useState("");

  const citiesData = JSON.parse(localStorage.getItem("CITIES")) || []
  const  items  = citiesData.cities || [];

  const filteredItems = getFilteredItems(query, items)

  
  return (
    <>
     <input className='search-bar' type="text" onChange={(e) => setQuery(e.target.value)}/>
      <ul>
        {filteredItems.map(value => (
          <h1 key={value.city}>{value}</h1>
        ))}
      </ul>
      <button 
        className="search-btn" 
        type="submit"
        onClick={() => getFilteredItems()}
      >Go</button>
    </>
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
