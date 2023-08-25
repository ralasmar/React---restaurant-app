import React, { useState } from "react"

export function NewPostForm(props){
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
        // if(newPost.name === "" || newPost.city === "" || newPost.img === "" || newPost.rating === "") return 

        props.onSubmit(newPost)

        setNewPost({
            name: "",
            img: "",
            city: "",
            rating: ""
        })
    }


    return (
        <form className={props.darkMode ? "dark": ""} onSubmit={handleSubmit}>
            <input 
                className="form--name"
                value={newPost.name}
                onChange={event => setNewPost({...newPost, name: event.target.value})} 
                type="text"
                id="name"
                placeholder="Enter Restaurant"
            />
            <input 
                className="form--city"
                value={newPost.city}
                onChange={event => setNewPost({...newPost, city: event.target.value})} 
                type="text"
                id="city"
                placeholder="Enter City"
            />
            <input 
                className="form--img"
                value={newPost.img}
                onChange={event => setNewPost({...newPost, img: event.target.value})} 
                type="text"
                id="img"
                placeholder="Enter Image Url"
            />
            <label htmlFor="form--rating">Select Rating</label>
            <select
                className="form--rating"
                value={newPost.rating}
                onChange={event => setNewPost({...newPost, rating: event.target.value})} 
                type="input"
                id="rating"
            >
                <option value='★☆☆☆☆'>1 Star</option>
                <option value='★★☆☆☆'>2 Stars</option>
                <option value='★★★☆☆'>3 Stars</option>
                <option value='★★★★☆'>4 Stars</option>
                <option value='★★★★★'>5 Stars</option>
                <option value="★Have not visited!★">Haven't visited yet!</option>
            </select>
            <button className="add-btn">Add Restaurant</button>
        </form>
    )
}