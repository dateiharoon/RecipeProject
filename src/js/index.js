// // Global app controller
// // import num from './test';
// // const x = 23;
// // console.log(`I imported ${num} from another module called test! Variable x is ${x} `);

// import str from './models/Search';

// //import {add as a,  multiply as m, ID } from './views/searchView';

// import * as searchView from './views/searchView';

// console.log(`Using important functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3, 5)}. ${str}`);
import axios from 'axios';
async function getResults(query){
    //const key = '';
    try{

    
    	const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
const recipes = res.data.recipes;
    console.log(res);}
    catch(error){
            alert(error)
    }
}

getResults('pizza');