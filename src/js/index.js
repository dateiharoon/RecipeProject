// // Global app controller
// // import num from './test';
// // const x = 23;
// // console.log(`I imported ${num} from another module called test! Variable x is ${x} `);

// import str from './models/Search';

// //import {add as a,  multiply as m, ID } from './views/searchView';

// import * as searchView from './views/searchView';

// console.log(`Using important functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3, 5)}. ${str}`);
// import axios from 'axios';
// async function getResults(query){
//     //const key = '';
//     try{

    
//     	const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
// const recipes = res.data.recipes;
//     console.log(res);}
//     catch(error){
//             alert(error);
//     }
// }

// getResults('pizza');

import Search from  './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';
/** Global state of the app
 *  - Search object
 *  - Current recipe object
 *  - Shopping list object
 *  - Liked recipes
 */
const state ={};

const controllSearch = async () =>{
    //1) Get query from view
    const query = searchView.getInput();//TODO
    console.log(query);
    if(query){
        //2)New Search object add to state
        state.search = new Search(query);
        // 3) PRepare UI for results

        //4) search recipes
       await state.search.getResults();

        // 5) Render results to UI
        console.log(state.search.result);
    }
}
elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    controllSearch();

//const search = new Search ('pizza');
//console.log(search);

});
