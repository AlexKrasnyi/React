
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  cartTotal: '$323'
};

const updateCartItems = (cartItems, item, idx) => {
  if(idx === -1) {
    return [
        ...cartItems,
        item
    ];
  } else {
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice( idx +1),
    ];
  };
}

const updateCartItem = (book, item) => {
  
    if(item){
 
        return {
          ...item,
          count: item.count + 1,
          total: item.total + book.price
        }
    } else {
      return {
        id: book.id,
        title: book.title,
        count: 1,
        total: book.price
      }
}
}

const reducer = ( state = initialState, action ) => {

  console.log(action.type)
  switch(action.type) {
    case 'FETCH_BOOKS_REQUEST' :
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };

    case 'FETCH_BOOKS_SUCCESS' :
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_BOOKS_FAILURE' :{
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }
    };

    case 'BOOK_ADDED' :
      const id = action.payload;
      console.log('id', id)
      const book = state.books.find((book) => book.id === id);
      const itemIdx = state.cartItems.findIndex(({id}) => id === book.id)
      console.log(itemIdx)
      const item = state.cartItems[itemIdx]
      const newItem = updateCartItem(book, item)
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, item, itemIdx)
      }
    //   let newItem
    //   if(!item){
    //     newItem = {
    //       id: book.id,
    //       title: book.title,
    //       count: 1,
    //       total: book.price
    //     }
    //   } else {
    //   newItem = {
    //     ...item,
    //     count: item.count + 1,
    //     total: item.total + book.price
    //   }
    // };
  
    // if(itemIdx < 0) {
    //   return {
    //     ...state,
    //     cartItems: [
    //       ...state.cartItems,
    //       newItem
    //     ]
    //   };
    // } else {
    //   return {
    //     ...state,
    //     cartItems: [
    //       ...state.cartItems.slice(0, itemIdx),
    //       newItem,
    //       ...state.cartItems.slice( itemIdx +1),
    //     ]
    //   };
    // };
      

    default: 
      return state           
  };
};

export default reducer
