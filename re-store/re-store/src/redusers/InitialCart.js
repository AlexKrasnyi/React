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
    const {initialBooks:{books}, initialCart:{cartItems}} = state;
        const book = books.find((book) => book.id === bookId);
        const itemIdx = cartItems.findIndex(({id}) => bookId === id)
        const item = cartItems[itemIdx]
        const newItem = updateCartItem(book, item, quantity)
        return {
          cartTotal: 0,
          cartItems: updateCartItems(cartItems, newItem, itemIdx)
        }
  }
  
  const updateInitialCart = (state, action) => {
    if(state === undefined) {
      return {
        cartItems: [],
       cartTotal: 0
      }
    };
  
    switch (action.type) {
  
      case 'BOOK_ADDED' :
        return uploadBooks(state, action.payload, 1)
        
      case 'BOOK_REMOVE_FROM_CARD': 
        return uploadBooks(state, action.payload, -1);
      
      case 'ALL_BOOK_REMOVE_FROM_CARD': 
      const item = state.initialCart.cartItems.find((book) => book.id === action.payload);
      return uploadBooks(state, action.payload, -item.count);
  
      default : 
        return state.initialCart
    }
  }

  export default updateInitialCart