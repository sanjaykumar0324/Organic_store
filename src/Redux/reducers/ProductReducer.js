import { GET_PRODUCT_FAILURE ,GET_PRODUCT_SUCCESS,GET_PRODUCT_REQUEST} from "../actions/ProductsAction";

const initialState = {
    products: [], 
    status: 'idle', 
    error: null 
  };
  
  
  const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCT_REQUEST:
        return {
          ...state,
          status: 'loading',
        };
      case GET_PRODUCT_SUCCESS:
        return {
          ...state,
          status: 'succeeded',
          error :null,
          products: action.payload, 
        };
      case GET_PRODUCT_FAILURE:
        return {
          ...state,
          status: 'failed',
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default ProductReducer;