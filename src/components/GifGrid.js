
import React,{useState,useEffect} from 'react';


export const GifGrid = ({ category }) => {
    
    
    useEffect(() => {
        getGift()
    }, [])
    const [imgs, setimgs] = useState([""])



    const getGift = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=NteEFqYmRZK13pkumKPqO7RpeXscN39l&q=naruto&limit=10';
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
            <h2>{category}</h2>
            <ol>
                {
                    imgs.map(({id,title,url}) => {
                        return [
                            <li key={id}>{title} </li>,
                            <img src={url} alt="#" />
                        ]
                    })
                }
            </ol>
            
        </div>
    );
};
