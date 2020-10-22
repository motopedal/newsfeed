import React from 'react';
import './output.css'
import FavouriteButton from './Utils/FavouriteButton';
import LikeButton from './Utils/LikeButton'
import Navbar from './Utils/Navbar'
import Footer from './Utils/Footer'
import { Link , Redirect} from 'react-router-dom'

function DetailedView(props) {
    
    if(props.data == undefined){
        return <Redirect to="/" />
    }
    
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
                    <Link className="div7" to="/">
                        <button onClick={props.reset}>Vissza</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DetailedView