// Global app controller
// import num from './test';
// const x = 23;
// console.log(`I imported ${num} from another module called test! Variable x is ${x} `);

import str from './models/Search';

//import {add as a,  multiply as m, ID } from './views/searchView';

import * as searchView from './views/searchView';

console.log(`Using important functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3, 5)}. ${str}`);