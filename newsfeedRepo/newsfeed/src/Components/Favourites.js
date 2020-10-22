import React from 'react'
import '../App.css'

function Favourites(props) {
    const divs = props.data.map(value => {
        if(value.isFavourite) {
            return( 
                <div className="fav">
                    <div className="fav-box">
                        <img onClick={() => props.setValues(value)} src={"http://localhost:1337"+value.thumbnail.url}></img>
                        <div>
                            {value.newsTitle}
                        </div>
                    </div>
                </div>
            ) 
        }else {
            return null
        }
    })
    return(
        <div className="favfav">
            { props.data.find(element => element.isFavourite == true)
            ? <h1 >FAVOURITES</h1>
            : null}
            {divs}
        </div>
    )
}


export default Favourites