import React from 'react';

export const GifGrid = ({ category }) => {
    // const API_KEY = 'NteEFqYmRZK13pkumKPqO7RpeXscN39l';

    const getGift = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=NteEFqYmRZK13pkumKPqO7RpeXscN39l&q=naruto&limit=10';
        const response = await fetch(url);
        const { data } = await response.json();
        // console.log(data);
        const gifs = data.map((gif) => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url,
            };
        });
        console.log(gifs);
    };
    getGift();

    return (
        <div>
            <h2>{category}</h2>
        </div>
    );
};
