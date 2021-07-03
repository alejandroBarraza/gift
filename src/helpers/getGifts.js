//helper function than return a http request gifts

 export const getGift = async (imgToFetch) => {
    const API_KEY = 'NteEFqYmRZK13pkumKPqO7RpeXscN39l'       
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(imgToFetch)}&limit=10`;
    const response = await fetch(url);
    const {data} = await response.json();
    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url,
        };
    });
    return gifs
};