import React, { Component } from 'react';
import { graphql } from '@apollo/react-hoc';
import News from '../../../query.graphql';
import { useQuery } from '@apollo/client';

function Test(){
  const { loading , data , error} = useQuery(News)
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const a = data.newsfeeds.map(value => {
      return (
      <div key={value.id} className="box">
          <div className="card">
                  <img  src={"http://localhost:1337"+value.thumbnail.url}>
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
  return (
    <div>
      {a}
      <p>ASDASD</p>
    </div>
  )
}

export default Test