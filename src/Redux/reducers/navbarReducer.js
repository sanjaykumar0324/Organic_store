import { GET_NAV_FAILURE ,GET_NAV_SUCCESS,GET_NAV_REQUEST} from "../actions/NavbarAction";

const initialState = {
    navbar: [], 
    status: 'idle',
    error: null 
  };
  

  const NavbarReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_NAV_REQUEST:
        return {
          ...state,
          status: 'loading',
        };
      case GET_NAV_SUCCESS:
        return {
          ...state,
          status: 'succeeded',
          error:null,
          navbar: action.payload, 
        };
      case GET_NAV_FAILURE:
        return {
          ...state,
          status: 'failed',
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default NavbarReducer;




  