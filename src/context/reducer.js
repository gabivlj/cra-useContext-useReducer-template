// Example of a redux-like reducer thing

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const GET_ITEMS = 'GET_ITEMS';

function doSomething(data, state) {
  return {
    ...state,
    products: [...state.products, { id: data }],
  }
}

function setItems(items, state) {
  return {
    ...state,
    items,
  }
}

export default (state, action) => {
  switch(action.type) {
    case ADD_PRODUCT:
      return doSomething(action.data, state);
    case GET_ITEMS:
      return setItems(action.items, state);
    default:
      return {
        ...state
      }
  }
}