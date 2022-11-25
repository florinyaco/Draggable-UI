import classes from './card.module.css'
import React, {useState} from "react";

function Card(props) {
    const [isDragging, setIsDragging] = useState(false)
    const [translate, setTranslate] = useState({x: 0, y: 0})

    function handleDragMove(e) {
        setTranslate({
            x: translate.x + e.movementX,
            y: translate.y + e.movementY
        })
    }

    function handlePointerDown(e) {
        setIsDragging(true)
        props.sendId(e.target.id)
    }

    function handlePointerUp(e){
        setIsDragging(false)
    }

    function handlePointerMove(e){
        if (isDragging) handleDragMove(e);
    }

    return (
        <div
            id={props.id}
            className={props.isSelected ? classes.card + ' ' + classes.selected : classes.card}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            style={{transform: `translateX(${translate.x}px) translateY(${translate.y}px)`}}
        />
    )
}

export default Card