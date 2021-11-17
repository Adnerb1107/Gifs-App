const apiKey= process.env.REACT_APP_API_KEY;

const getTrendingTerms = ({keyword = 'panda'}={}) =>{
  
    const apiURL= `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}&q=${keyword}`

    return fetch(apiURL)
      .then(res=> res.json())
      .then(res=> {
        const {data = []} = res;       
        return data
  })

}
export default getTrendingTerms;
