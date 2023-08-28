import React, { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css'

export function Favorite(){
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        const savedIsClicked = localStorage.getItem("isClicked");
        if (savedIsClicked !== null){
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
        color: isClicked ? "purple" : "#D0D0D0"
    }

    return (
    <>
        <div
            className="fa-solid fa-star"
            style={styles}
            onClick={clickFavorite}
        />
    </>
        
    )
}