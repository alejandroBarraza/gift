import React from 'react';
import { useState } from 'react';

export const GiftExpertApp = () => {
    const dataArray = ['dragon ball', 'naruto', 'HunterxHunter'];
    const [categories, setcategories] = useState(dataArray);

    //add new elemet to dataArray
    const handleAdd = () => {
        setcategories((cat) => [...cat, 'sao']);
    };

    return (
        <div>
            <h2>Gift Expert app</h2>
            <hr />
            <button onClick={handleAdd}>addElement</button>
            <ol className='list'>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </div>
    );
};
