// export default 'I am an exported string.';
import axios from 'axios';
export default class Search{
    constrcutor (query){
        this.query = query;
    }

   
async  getResults(query){
    //const key = '';
    try{

    
    	const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
this.result = res.data.recipes;
    console.log(res);}
    catch(error){
            alert(error);
    }
}


}

//getResults('pizza');