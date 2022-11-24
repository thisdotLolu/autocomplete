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
    console.log(response.data)
}

let timeoutId;

const onInputChange=(e)=>{
 if(timeoutId){clearTimeout(timeoutId)}
    timeoutId = setTimeout(()=>fetchData(e.target.value),1000)
}


const input= document.querySelector('input')
input.addEventListener('input',onInputChange);


































