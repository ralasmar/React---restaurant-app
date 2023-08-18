import { useEffect, useState } from "react"
import './style.css';
import { NewPostForm } from "./components/NewPostForm";
import { RestaurantList } from "./components/RestaurantList";

export default function App() {
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
        ...currentPosts,
        { id: crypto.randomUUID(), name, city, img, rating}
      ]
    })
  }

  function deletePost(id){
    setPosts(currentPosts => {
      return currentPosts.filter(post => post.id !== id)
    })
  }

  return (
    <>
      <h1 className="app-heading">Restaurant App</h1>
      <NewPostForm onSubmit={addPost} />
      <RestaurantList posts={posts} deletePost={deletePost} />
    </> 
  )
}
  
  
