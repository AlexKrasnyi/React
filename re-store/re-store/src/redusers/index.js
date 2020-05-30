
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  cartTotal: '$323'
};

const updateCartItems = (cartItems, item, idx) => {
  if(item.count === 0){
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx +1),
    ];
  };

  if(idx === -1) {
    return [
      ...cartItems,
      item
    ];
  };

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice( idx +1),
  ];
};

const updateCartItem = (book, item={}, quantity) => {
  const {
    id =  book.id,
    title = book.title,
    count = 0,
    total = 0 } = item
    
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  }    
}

const uploadBooks = (state, bookId, quantity) => {
  const {books, cartItems} = state;
      const book = books.find((book) => book.id === bookId);
      const itemIdx = cartItems.findIndex(({id}) => bookId === id)
      const item = cartItems[itemIdx]
      const newItem = updateCartItem(book, item, quantity)
      return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIdx)
      }
}


const reducer = ( state = initialState, action ) => {

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
      return uploadBooks(state, action.payload, 1)
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
      
    case 'BOOK_REMOVE_FROM_CARD': 
      return uploadBooks(state, action.payload, -1);
    

    case 'ALL_BOOK_REMOVE_FROM_CARD': 
    const item = state.cartItems.find((book) => book.id === action.payload);
    return uploadBooks(state, action.payload, -item.count);
     

    default: 
      return state           
  };
};

export default reducer
