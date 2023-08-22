import React, { useEffect, useState } from "react";

export function Favorite(props){
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        const savedIsClicked = localStorage.getItem("isClicked");
        if (savedIsClicked == !null){
            setIsClicked(JSON.parse(savedIsClicked));
        }
    },[]);

    useEffect(() => {
        localStorage.setItem("isClicked", JSON.stringify(isClicked))
    }, [isClicked]);

    const clickFavorite = () => {
        setIsClicked(prevIsClicked => !prevIsClicked);
        };

    const styles = {
        backgroundColor: isClicked ? "purple" : "yellow"
    }
    return (
        <div
            className="heart-icon"
            style={styles}
            onClick={clickFavorite}
        >&#9825;
        </div>
    )
}