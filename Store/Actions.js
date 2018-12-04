import {ADD_INGREDIENT,INCREMENT} from './ActionTypes';


function addIngredient(name){
  return {
    type: ADD_INGREDIENT,
    name: name
  };
}

function increment(){
  return {
    type: INCREMENT
  };
}


export {addIngredient,increment};
