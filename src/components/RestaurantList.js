import { Card } from "./Card"

export function RestaurantList(props){
    return(
        <>
        <main className={props.darkMode ? "dark": ""}>
            <section className="card-area" >
            {props.posts.length === 0 && "No Restaurants Added"}
            {props.posts.map(post => {
                return (
                    <Card
                        id={post.id}
                        name={post.name.name}
                        city={post.name.city}
                        img={post.name.img}
                        rating={post.name.rating}
                        key={post.id}
                        deletePost={props.deletePost}
                    />
                )
            })}
            </section>
        </main>
        </>   
    )
}

    