import { FETCH_PRODUCTS } from "../actions/productTypes"

const initalState = {
    products: []
}

export const productReducer = (state=initalState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS: return {
            ...state,
            products: action.payload
        }
        default: return state
    }
}

