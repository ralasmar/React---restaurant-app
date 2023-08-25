import React, { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css'
import Confetti from "react-confetti"

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

    const confettiStyles = {
        width: "100%"
    }
    return (
    <>
        {isClicked && <Confetti style={confettiStyles} />}
        <div
            className="fa-solid fa-star"
            style={styles}
            onClick={clickFavorite}
        />
    </>
        
    )
}