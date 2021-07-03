
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GiftGridItem } from './GiftGridItem';



export const GifGrid = ({ category }) => {


    const {data:imgs} = useFetchGifs(category)
    

    return (
        <>
            <h2>busqueda ralizada : {category}</h2>
           
            <div className='card-container'>
                {
                    imgs.map( (img) => <GiftGridItem key={img.id} {...img} />)
                }   
            </div>
        </>
    );
};
