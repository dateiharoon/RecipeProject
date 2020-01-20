// export const add = (a,b) => a+b;
// export const multiply = (a,b) => a * b;
// // export const ID = 23; 
import { elements } from './base';
export const getInput = () => elements.searchInput.value;
const renderRecipe = recipe => {
 const markup = `
 <li>
 <a class="likes__link" href="#23456">
     <figure class="likes__fig">
         <img src="img/test-1.jpg" alt="Test">
     </figure>
     <div class="likes__data">
         <h4 class="likes__name">Pasta with Tomato ...</h4>
         <p class="likes__author">The Pioneer Woman</p>
     </div>
 </a>
</li>
 `;
}
export const renderRsults = recipes => {
    recipes.foreach(renderRecipe);
}