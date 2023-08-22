import { Favorite } from "./Favorite"

export function Card({id, name, city, img, rating, deletePost}){
    
    return (
        <section key={id}>
            <div className="restaurant-card">
                <img className="card--image" src={`${img}`} alt=""/>
                <div className="card--info">
                    {name}
                    <br />
                    {city}
                    <br />
                    {rating}
                    <Favorite />
                </div>
                
            </div>
            
            <button onClick={() => deletePost(id)} className="btn btn-danger">Delete</button>
        </section>
        
    )
}