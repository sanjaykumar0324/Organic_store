import axios from "axios";
export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";

export const getAllProductsData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });
    // console.log("proudcts data request");

    const productsResponse = await axios.get(
      "https://run.mocky.io/v3/1161da4c-3029-4419-9682-781c1d912b6c"
    );

    console.log("products data fetched");

    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: productsResponse.data.products,
    });
  } catch (error) {
    // console.log(error.message);
    dispatch({
      type: GET_PRODUCT_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
