import React, { useEffect, useState } from "react"
import './style.css';
import { NewPostForm } from "./components/NewPostForm";
import { RestaurantList } from "./components/RestaurantList";
import { Navbar } from "./components/Navbar";
import { Searchbar } from "./components/Searchbar";


export default function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
  }

  const [posts, setPosts] = useState(() => {
    const localValue = localStorage.getItem("CARDS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("CARDS", JSON.stringify(posts))
  }, [posts])
  

  
  function addPost(name, city, img, rating){
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
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      {/* <Searchbar darkMode={darkMode} /> */}
      <NewPostForm onSubmit={addPost} darkMode={darkMode} />
      <RestaurantList posts={posts} deletePost={deletePost} darkMode={darkMode}/>
    </> 
  )
}
  
  
