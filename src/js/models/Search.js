// export default 'I am an exported string.';
import axios from 'axios';

export default class Search{
    constructor (query){
        this.query = query;
    }

   
async getResults(){
    //const key = '';
    try{

       const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
this.result = res.data.recipes;
    //console.log(res);
}
    catch(error){
            alert(error);
    }
}


}

//getResults('pizza');