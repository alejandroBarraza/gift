import React from 'react';
import { useState } from 'react';
import { AddCatagory } from './components/AddCatagory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {
    const dataArray = ['dragon ball'];
    const [categories, setcategories] = useState(dataArray);

    return (
        <div>
            <h2>Gift Expert app</h2>
            <AddCatagory setcategories={setcategories} />

            <hr />
            <ol className='list'>
                {categories.map((category) => {
                    return <GifGrid key={category} category={category} />;
                })}
            </ol>
        </div>
    );
};
