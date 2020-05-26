
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      name: 'book 1',
      count: 2,
      total: '$68'
    },
    {
      id: 2,
      name: 'book 2',
      count: 8,
      total: '$200'
    },
    {
      id: 3,
      name: 'book 3',
      count: 1,
      total: '$65'
    }
  ],
  cartTotal: '$323'
};

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

    default: 
      return state           
  };
};

export default reducer
