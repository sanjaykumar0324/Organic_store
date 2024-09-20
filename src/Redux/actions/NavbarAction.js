import axios from "axios";
export const GET_NAV_REQUEST = 'GET_NAV_REQUEST';
export const GET_NAV_SUCCESS = 'GET_NAV_SUCCESS';
export const GET_NAV_FAILURE=  'GET_NAV_FAILURE';

export const getNavbarData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_NAV_REQUEST });
    // console.log("Nava data request");
  
    const navbarResponse = await axios.get("https://run.mocky.io/v3/5a6b0f17-6cfe-4253-bad9-2d925801ce61");

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




