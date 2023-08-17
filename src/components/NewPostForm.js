import React, { useState } from "react"

export function NewPostForm({onSubmit}){
    const [newPost, setNewPost] = useState(
        {
            name: "",
            img: "",
            city: "",
            rating: ""
        }
  
    )

    function handleSubmit(event){
        event.preventDefault()
        if(newPost.name === "" || newPost.city === "" || newPost.img === "" || newPost.rating === "") return 

        onSubmit(newPost)

        setNewPost("")
    }


    return (
        <form onSubmit={handleSubmit} className="new-post-form">
            <input 
                className="form--name"
                value={newPost.name}
                onChange={event => setNewPost({...newPost, name: event.target.value})} 
                type="text"
                id="name"
            />
            <input 
                className="form--city"
                value={newPost.city}
                onChange={event => setNewPost({...newPost, city: event.target.value})} 
                type="text"
                id="city"
            />
            <input 
                className="form--img"
                value={newPost.img}
                onChange={event => setNewPost({...newPost, img: event.target.value})} 
                type="text"
                id="img"
            />
            <input 
                className="form--rating"
                value={newPost.rating}
                onChange={event => setNewPost({...newPost, rating: event.target.value})} 
                type="text"
                id="rating"
            />
            <button className="add-btn">Add</button>
        </form>
    )
}