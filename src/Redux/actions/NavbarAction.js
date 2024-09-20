import axios from "axios";
export const GET_NAV_REQUEST = 'GET_NAV_REQUEST';
export const GET_NAV_SUCCESS = 'GET_NAV_SUCCESS';
export const GET_NAV_FAILURE=  'GET_NAV_FAILURE';

export const getNavbarData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_NAV_REQUEST });
    // console.log("Nava data request");
  
    const navbarResponse = await axios.get("https://run.mocky.io/v3/085e1c09-ffb5-44a4-bb84-4e239000de71");

      // console.log("Nav data is fecthed")
    dispatch({type: GET_NAV_SUCCESS,
        payload : navbarResponse.data.navbar
    })
    // console.log(navbarResponse.data.navbar," from nav")

  } catch (error) {
    // console.log(error.message);

    dispatch({
      type: GET_NAV_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};




