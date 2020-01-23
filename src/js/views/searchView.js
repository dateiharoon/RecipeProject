// export const add = (a,b) => a+b;
// export const multiply = (a,b) => a * b;
// // export const ID = 23; 
import { elements } from './base';
export const getInput = () => elements.searchInput.value;
export const clearInput = () => elements.searchInput.value = '';

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
}

// past with tomato and spinach
const limitRecipeTitle = (title, limit = 17) =>{
    const newTitle = [];
if(title.length > limit) {
        title.split(' ').reduce((acc, cur)=> {
if (acc + cur.length <= limit)
{
    newTitle.push(cur);
}
return acc + cur.length;
        },0);

        return `${newTitle.join(' ')} ...`;
}
return title;
}
const renderRecipe = recipe => {
 const markup = `
  
 <li>
                    <a class="results__link" href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="${recipe.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>
 
 `;

 elements.searchResList.insertAdjacentHTML('beforeend', markup);
}
const createButton = (page, type)=> `
<!--
    <button class="btn-inline results__btn--prev">
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-left"></use>
    </svg>
    <span>Page 1</span>
</button>
<button class="btn-inline results__btn--next">
    <span>Page 3</span>
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-right"></use>
    </svg>
</button>
-->
`;
}
const renderButtons = (page,numResults,resPerPAge) => {
const pages = Math.ceil (numResults / resPerPAge);
if (page=== 1 && pages > 1) {

}else if (page<pages){
 //
}

else if (page === pages)
{


}
};

export const renderResults =(recipes, page = 1, resPerPAge = 10) => {
    const start = (ppage - 1) * resPerPAge;
    const end = page * resPerPAge;

    recipes.slice(start,end).forEach(renderRecipe);
};