import React,  { useState } from 'react'
import { useMutation } from '@apollo/client';
import { MAKE_FAV } from '../Graphql/Mutations'



function FavouriteButton(props){

    const [
        make_favourite, 
        { loading : mutationLoading, error: mutationError},
    ]   = useMutation(MAKE_FAV)

    const [ favourite , setFavourite] = useState(props.data.isFavourite)

    if (mutationLoading) return null;
    if (mutationError) return null;

    const Button = () => {
        if(favourite === false){
            return (
            <button 
                onClick={() => 
                {setFavourite(true);
                make_favourite({ variables: {id:props.data.id,makeFavourite:true}})}}>
                Make Favourite
            </button>
            )
        }else {
            return [
            <button 
            onClick={() => 
                {setFavourite(false);
                make_favourite({ variables: {id:props.data.id,makeFavourite:false}})}}>
                Delete Favourite
                </button>
            ]
        }
            }
        return (
            <div className="div6">
                <Button />
            </div>
        )
    }



export default FavouriteButton