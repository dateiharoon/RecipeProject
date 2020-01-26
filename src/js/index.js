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
import Recipe from  './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
/** Global state of the app
 *  - Search object
 *  - Current recipe object
 *  - Shopping list object
 *  - Liked recipes
 */
const state ={};
/**
 * Search Controller
 * 
 */
const controllSearch = async () =>{
    //1) Get query from view
    const query = searchView.getInput();//TODO
    //console.log(query);
    if(query){
        //2)New Search object add to state
        state.search = new Search(query);
        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
try{

    //4) search recipes
       await state.search.getResults();

        // 5) Render results to UI
       // console.log(state.search.result);
       clearLoader();
        searchView.renderResults(state.search.result);
}catch (err){
        alert('Something wrong with the search.... ');
        clearLoader();
}
        
    }
}
elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    controllSearch();

    elements.searchResPages.addEventListener('click' , e => {
        const btn = e.target.closest('.btn-inline');
        if (btn) {
            const goToPage = parseInt(btn.dataset.goto, 10);
            searchView.clearResults();
            searchView.renderResults(state.search.result, goToPage);
            //console.log(goToPage);
        }
    })

//const search = new Search ('pizza');
//console.log(search);

});



/**
 * Recipe Controller
 * 
 */

 //onst r = new Recipe(46956);
 //r.getRecipe();

 const controlRecipe = async () => {

    // GEt id from URL
     const id = window.location.hash.replace('#', '');
     console.log(id);

     if (id)
     {
// Prepare UI for changes
state.recipe = new Recipe(id);
// Create new recipe oject
try{
   // get recipe data

await state.recipe.getRecipe();

// Calcualte servings and time
state.recipe.calcTime();
state.recipe.calcServings();

// render recipe
console.log(state.recipe); 
}catch (err){
    alert('Error processing recipe!')
}


     }
 };

 window.addEventListener('hashchange' , controlRecipe);
 windows.addEventListener('load', cobtrolRecipe);

 ['hashchange','load'].forEach(event => windows.addEventListnere(event,controlRecipe));