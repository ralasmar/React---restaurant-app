import React, { useEffect, useState } from "react"
import './style.css';
import { NewPostForm } from "./components/NewPostForm";
import { RestaurantList } from "./components/RestaurantList";
import { Navbar } from "./components/Navbar";
import { Searchbar } from "./components/Searchbar";


export default function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  // const [query, setQuery] = useState("");
  
  const [posts, setPosts] = useState(() => {
    const localValue = localStorage.getItem("CARDS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })



  // useEffect(() => {
  //   localStorage.setItem("CARDS", JSON.stringify(posts))
  // }, [posts])
  
  
  // function handleSearch(query){
  //   console.log("button clicked")
  //   let results = [];

  //    // const key = localStorage.key("CARDS");
      
  //    const items = JSON.parse(localStorage.getItem("CARDS"))

  //   for(let i=0; i < items.length; i++){
  //     if (items[i] && items[i].name && items[i].name.city.includes(query)){
  //       console.log("HELLLO??")
  //       results.push(items[i]);
  //     }
  //   }
  //   console.log(results)
  //   // setQueryResults(results);
  //   // setPosts(queryResults)
  // }

  // console.log(queryResults)

  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
  }

  
  function addPost(name, city, img, rating){
    console.log("entered addPost")
    setPosts(currentPosts => {
      return [
        //...currentPosts,
        { id: crypto.randomUUID(), name, city, img, rating},
        ...currentPosts
      ]
    })
    alert("Restaurant Added")
  }

  function deletePost(id){
    setPosts(currentPosts => {
      return currentPosts.filter(post => post.id !== id)
    })
    alert("Restaurant Deleted")
  }

  return (
    <>
      <h1 className="app-heading">Restaurant App</h1>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} onSearchResults={setPosts}/>
      <NewPostForm onSubmit={addPost} darkMode={darkMode} />
      <RestaurantList posts={posts} deletePost={deletePost} darkMode={darkMode}/>
    </> 
  )
}
  
  
