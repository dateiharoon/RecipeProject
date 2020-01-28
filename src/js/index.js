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
import * as recipeView from './views/recipeView';
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
    const query = searchView.getInput();//TODO
    //const query = 'pizza';
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
});


//TESTING
//window.addEventListener('load', e =>{
  //  e.preventDefault();
    //controllSearch();
//});
    elements.searchResPages.addEventListener('click' , e => {
        const btn = e.target.closest('.btn-inline');
        if (btn) {
            const goToPage = parseInt(btn.dataset.goto, 10);
            searchView.clearResults();
            searchView.renderResults(state.search.result, goToPage);
            //console.log(goToPage);
        }
    });

//const search = new Search ('pizza');
//console.log(search);



/**
 * Recipe Controller
 * 
 */

 //onst r = new Recipe(46956);
 //r.getRecipe();

//  const controlRecipe = async () => {

//     // GEt id from URL
//      const id = window.location.hash.replace('#', '');
//      console.log(id);

//      if (id)
//      {
// // Prepare UI for changes
// renderLoader(elements.recipe);

// //Create new recipe object
// state.recipe = new Recipe(id);
// //TESTING
// //window.r = state.recipe;
// // Create new recipe oject
// try{
//    // get recipe data

// await state.recipe.getRecipe();
// console.log(state.recipe.ingredients);
// state.recipe.parseIngredients();

// // Calcualte servings and time
// state.recipe.calcTime();
// state.recipe.calcServings();

// // render recipe
// //console.log(state.recipe);
// clearLoader(); 
// recipeView.renderRecipe(state.recipe);
// }catch (err){
//     alert('Error processing recipe!')
// }


//      }
//  };


 
// // ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));


//  //window.addEventListener('hashchange' , controlRecipe);
//  //window.addEventListener('load', cobtrolRecipe);

//  ['hashchange','load'].forEach(event => window.addEventListener(event,controlRecipe));

 
 /** 
 * RECIPE CONTROLLER
 */
const controlRecipe = async () => {
    // Get ID from url
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected search item
        //8if (state.search) searchView.highlightSelected(id);

        // Create new recipe object
        state.recipe = new Recipe(id);

        try {
            // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
    
            // Render recipe
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
            );

        } catch (err) {
            console.log(err);
            alert('Error processing recipe!');
        }
    }
};

['hashchange','load'].forEach(event => window.addEventListener(event,controlRecipe));