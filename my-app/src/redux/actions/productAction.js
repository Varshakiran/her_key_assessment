import { FETCH_PRODUCTS } from "./productTypes";
import axios from 'axios'

const fetchProducts = (products) => {
    return {
        type: FETCH_PRODUCTS,
        payload: products
    }
}

export const fetchProductList = () => {
    return (dispatch) => {
      axios.get('https://dummyjson.com/products')
      .then((res)=>{
        dispatch(fetchProducts(res.data))
      })
    }
}

export default fetchProducts