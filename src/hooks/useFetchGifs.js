import { useState,useEffect } from "react"
import { getGift } from "../helpers/getGifts"

//custom hooks return state(data from api and boolen load)
export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    })

    useEffect(() => {
        getGift(category)
            .then((imgs)=>{
                setstate({
                    data:imgs,
                    loading:false
                })
            })
        
    }, [category])

    return state
   
}
