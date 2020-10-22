import React  from 'react';
import { useQuery } from '@apollo/client';
import '../App.css';
import Favourites from './Favourites'
import { NEWS1 } from './Graphql/Queries'
import Navbar from './Utils/Navbar'
import Footer from './Utils/Footer'


function Home(props) {

    const { loading , data , error} = useQuery(NEWS1)
    
    const sendValues = (value) => {
        props.setValues(value)
    }
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const news = 
    data.newsfeeds.map(value => {
        return (
        <div key={value.id} className="box">
            <div className="card">
                <img onClick={() => sendValues(value)} src={"http://localhost:1337"+value.thumbnail.url}>
                </img>
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
            <Favourites setValues={sendValues} data={data.newsfeeds}/>
        </div>
            <Footer />
        </div>
    )
}

export default Home