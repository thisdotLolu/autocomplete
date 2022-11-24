//c05c7bac
// http://www.omdbapi.com/?apikey=[yourkey]&
const fetchData=async(searchTerm)=>{
    const response = await axios.get('http://www.omdbapi.com/',
    {
        params:{
            apikey:'c05c7bac',
            s:searchTerm
        }
    });
    return response.data.Search
}



const input= document.querySelector('input')
let timeoutId;
const onInputChange = debounce(
    async (e)=>{
    const movies =  await fetchData(e.target.value)
    for(let movie of movies){
        const div = document.createElement('div')

        div.innerHTML = `
        <img src='${movie.Poster}'/>
        <h1>${movie.Title}</h1>
        `
        document.querySelector('#target').appendChild(div)
    }
},1000) 


input.addEventListener('input',onInputChange);

























































