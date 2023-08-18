
export function Card({id, name, city, img, rating, deletePost}){

    return (
        <section key={id}>
            <div className="restaurant-card">
                <img className="card--image" src={`${img}`} alt=""/>
                <div className="card--info">
                    name
                    city
                    rating
                </div>
            </div>
            
            <button onClick={() => deletePost(id)} className="btn btn-danger">Delete</button>
        </section>
        
    )
}