import React from 'react'
import { Link } from 'react-router-dom'

function Favourites(props) {

    const sendValues = (value) => {
        props.setValues(value)
    }
    const divs = props.data.map(value => {
        if(value.isFavourite) {
            return( 
                <div className="fav">
                    <div className="fav-box">
                        <Link className="img" to="/detailedview" onClick={() => sendValues(value)}>
                            <img  src={"http://localhost:1337"+value.thumbnail.url}>
                            </img>
                        </Link>
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