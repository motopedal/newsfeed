import React from 'react';
import './output.css'
import FavouriteButton from './Utils/FavouriteButton';
import LikeButton from './Utils/LikeButton'
import Navbar from './Utils/Navbar'
import Footer from './Utils/Footer'

function DetailedView(props) {
    return (
        <div>
            <Navbar />
            <div className="detailedview">
                <div key={props.data.id} className="container" >
                    <img className="div1" src={"http://localhost:1337"+props.data.thumbnail.url}></img>
                    <h1 className="div2">{props.data.newsTitle}</h1>
                    <LikeButton data={props.data} />
                    <div className="div3">{props.data.newsDescription}</div>
                    <FavouriteButton data={props.data}/>
                    <button className="div7" onClick={props.reset}>Vissza</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DetailedView