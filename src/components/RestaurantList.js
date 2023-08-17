import { Card } from "./Card"

export function RestaurantList({ posts, deletePost }){
    return(
        <>
        {posts.length === 0 && "No Restaurants Added"}
        {posts.map(post => {
            return (
                <Card
                    id={post.id}
                    name={post.name}
                    city={post.city}
                    img={post.img}
                    key={post.id}
                    deletePost={deletePost}
                />
            )
        })}
        </>   
    )
}

    