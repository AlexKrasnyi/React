import updateInitialCart from './InitialCart'
import updateInitialBooks from './InitialBooks'

const reducer = ( state, action ) => {
  return {
    initialBooks: updateInitialBooks(state, action),
    initialCart: updateInitialCart(state, action)
  };    
};

export default reducer
