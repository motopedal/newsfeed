import {gql} from '@apollo/client';


export const MAKE_FAV = gql`
mutation makeFavourite($id: ID!, $makeFavourite: Boolean!) {
    updateNewsfeed(input:{where:{id:$id},data:{isFavourite:$makeFavourite}}){
      newsfeed{
        id,
        isFavourite
      }
    }
  }
`

export const LIKES = gql`
mutation updateLikes($id: ID!, $likes: Int! , $bool: Boolean!) {
    updateNewsfeed(input:{where:{id:$id},data:{likesCounter:$likes,isLiked:$bool}}){
      newsfeed{
        id,
        likesCounter,
        isLiked
      }
    }
  }
`