
import React,{useState,useEffect} from 'react';
import { GiftGridItem } from './GiftGridItem';


export const GifGrid = ({ category }) => {

    const API_KEY = 'NteEFqYmRZK13pkumKPqO7RpeXscN39l'
    
    const [imgs, setimgs] = useState([])
    
    useEffect(() => {
        getGift(category)
    }, [])



    const getGift = async (imgToFetch) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${imgToFetch}&limit=10`;
        const response = await fetch(url);
        const {data} = await response.json();
        const gifs = data.map((gif) => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url,
            };
        });
        setimgs(gifs)
    };
    

    return (

        
        <div>
            <h2>busqueda ralizada : {category}</h2>
            {
                imgs.map( (img) => <GiftGridItem key={img.id} {...img} />)
            }   
        </div>
    );
};
