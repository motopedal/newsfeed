import React  from 'react';
import { useQuery } from '@apollo/client';
import News from '../../../query.graphql';
import Navbar from './Utils/Navbar'
import Footer from './Utils/Footer'
import { Link } from 'react-router-dom'



function Home(props) {

    const { loading , data , error} = useQuery(News)
    
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const sendValues = (value) => {
        props.setValues(value)
    }

    const news = 
    data.newsfeeds.map(value => {
        return (
        <div key={value.id} className="box">
            <div className="card">
                 <Link to="/detailedview" onClick={() => sendValues(value)}>
                    <img  src={"http://localhost:1337"+value.thumbnail.url}>
                    </img>
                </Link>
                <hr></hr>
                <h2>{value.newsTitle}</h2>
                <div className="description">{value.newsDescription.substr(0,250)+"..."}</div>
                    <hr></hr>
                <div>
                    Likes:
                    <span className="likesCounter">
                        {value.likesCounter}
                    </span>
                </div>
                {value.isFavourite 
                ? <div className="favspan">Favourite</div>
                : null
                }
            </div>
        </div>
        )
    })
    return(
        <div className="page">
            <Navbar />
        <div className="flexcontainer" >
            <div className="news">
                {news}
            </div>
        </div>
            <Footer />
        </div>
    )
}

export default Home