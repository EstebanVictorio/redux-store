import {ADD_INGREDIENT, DELETE_INGREDIENT, INCREMENT, DECREMENT} from './ActionTypes';

function ingredientID(state = 0, action){
  switch(action.type){
    case INCREMENT:
      return ++state;
    case DECREMENT:
      return --state;
    default:
      return state;
  }
}

function ingredient(state,action){
  switch(action.type){
    case ADD_INGREDIENT:
      return {
        id: action.id,
        name: action.name
      };
    default:
      return state;
  }
}


function ingredients(state = [],action){
  switch(action.type){
    case ADD_INGREDIENT:
      return [
        ...state,
        ingredient(undefined, action)
      ];
    case DELETE_INGREDIENT:
      let newList = state;
      newList.pop();
      return [
        ...newList
      ];
    default:
      return state;
  }
}


export default {ingredientID, ingredients};
