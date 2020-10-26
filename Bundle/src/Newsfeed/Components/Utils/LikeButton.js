import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { LIKES } from '../Graphql/Mutations'

const LikeButton = (props) => {

    const [
        updateLikes,
        { loading: mutationLoading, error: mutationError },
      ] = useMutation(LIKES);
    
    const [ like , setLike] = useState(props.data.likesCounter)
    const [ isLiked , setIsLiked] = useState(props.data.isLiked)

    if (mutationLoading) return null;
    if (mutationError) return null;

    if(!isLiked){
        return (
        <div className="div4">
        <span>{like}</span>
        <button 
            onClick={() => {
                setLike(like + 1);
                updateLikes({ variables: {id:props.data.id,likes:like+1,bool:true}});
                setIsLiked(true)}}>
            LIKE
        </button>
        </div>)
    }
    else{
        return (
        <div className="div4">
        <span>{like}</span>
        <button   
            onClick={() => {
                setLike(like - 1);
                updateLikes({ variables: {id:props.data.id,likes:like-1,bool:false}});
                setIsLiked(false)}}>
            DISLIKE
        </button>
        </div>)
    }
}

export default LikeButton