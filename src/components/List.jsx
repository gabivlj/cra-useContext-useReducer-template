import React from 'react'
import ReactContext from '../context/react-context';

function List({ ...props }) {
  // Get the global state.
  const context = React.useContext(ReactContext);
  const { setItems, items } = context;
  React.useEffect(() => {
    setItems();
    return () => {
      
    };
  }, []);
  return (
    <div>
      <h1>Hiii this is a list...</h1>
      {
        items.map(item => {
          return <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        })
      }
    </div>
  )
}

export default List;