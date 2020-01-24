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
<button class="btn-inline results__btn--${type}" data-goto=>${type === 'prev' ? page - 1 : page +1}>
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle${type === 'prev' ? 'left' : 'right'}"></use>
    </svg>
    <span> ${type === 'prev' ? page - 1 : page +1}</span>
</button>

`;

const renderButtons = (page,numResults,resPerPAge) => {
const pages = Math.ceil (numResults / resPerPAge);

let button;
if (page=== 1 && pages > 1) {
    button = createButton(page,'next');
createButton(page,'next');
}else if (page<pages){
  button =`
   ${createButton(page,'next')}
   ${createButton(page,'prev')}
  `;
}

else if (page === pages && pages > 1)
{
    button = createButton(page,'prev');

}
};

export const renderResults =(recipes, page = 1, resPerPAge = 10) => {
    //render results of current page 
    const start = (age - 1) * resPerPAge;
    const end = page * resPerPAge;

    recipes.slice(start,end).forEach(renderRecipe);

    // render pagination buttons
    renderButtons(page,recipes.length,resPerPage);
};