import React from 'react';

export default React.createContext({
  // This is for the first render.
  products: [],
  items: [],
  // templates.
  setItems: () => {},
  doSomething: () => console.log("???"),
})