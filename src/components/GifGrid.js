import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ category }) => {
    const { data: imgs } = useFetchGifs(category);
    console.log(imgs);
    console.log(...imgs);

    return (
        <>
            <h2> {category}</h2>

            <div className='card-container'>
                {imgs.map((img) => (
                    <GiftGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};
