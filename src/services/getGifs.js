const apiKey= process.env.REACT_APP_API_KEY;

const getGifs = ({keyword = 'panda'}={}) =>{
  
    const apiURL= `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}`

    return fetch(apiURL)
      .then(res=> res.json())
      .then(res=> {
        const {data = []} = res;
        if(Array.isArray(data)){
          const gifs = data.map(image =>{
            const {url} = image.images.downsized_medium
            const {title, id} = image
            return {title, id, url}
          })

          return gifs
        }
        
  })

}
export default getGifs;
