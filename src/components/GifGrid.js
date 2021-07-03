
import React,{useState,useEffect} from 'react';
import { getGift } from '../helpers/getGifts';
import { GiftGridItem } from './GiftGridItem';



export const GifGrid = ({ category }) => {

    const [imgs, setimgs] = useState([])
    
    useEffect(() => {
        getGift(category)
            .then((imgs)=> setimgs(imgs))
            
            
    }, [category])
    

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
