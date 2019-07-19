import React from 'react';
import ReactContext from './react-context';
import reducer, { ADD_PRODUCT, GET_ITEMS } from './reducer';

function GlobalState({ children }) {
  // InitialState.
  const [state, dispatch] = React.useReducer(reducer, { products: [], items: [] });
  const { items } = state;
  // ACTIONS. Call the dispatch.
  function doSomething(data) {
    dispatch({
      type: ADD_PRODUCT,
      data,
    });
  }
  
  async function setItems() {
    const fetched = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsoned = await fetched.json();
    dispatch({
      type: GET_ITEMS,
      items: jsoned,
    });
  }

  return (
    <ReactContext.Provider 
      value={{
        // When useContext() is called this will be returned.
        products: state.products,
        items,
        doSomething,
        setItems,
      }}
    >
    {
      children
    }
    </ReactContext.Provider>
  )
}

export default GlobalState;