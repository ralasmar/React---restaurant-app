import { Card } from "./Card"

export function RestaurantList({ posts, deletePost }){
    return(
        <>
        <main className={posts.darkMode ? "dark":""}>
            <section className="card-area" >
            {posts.length === 0 && "No Restaurants Added"}
            {posts.map(post => {
                return (
                    <Card
                        id={post.id}
                        name={post.name.name}
                        city={post.name.city}
                        img={post.name.img}
                        rating={post.name.rating}
                        key={post.id}
                        deletePost={deletePost}
                    />
                )
            })}
            </section>
        </main>
        </>   
    )
}

    