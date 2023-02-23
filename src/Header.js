import React from "react";

const Header=(props)=>{
    console.log("data of props",props)
    return(
        <>
            <h1>i am header</h1>
            {props.name}
            {props.title}
            {props.id}
        </>
    )
}

export default Header;