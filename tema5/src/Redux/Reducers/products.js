import { UPDATE_PRODUCTS, GET_PRODUCT_BY_ID, RESET_PRODUCT, SET_NAME_PRODUCT, 
    SET_NAME_ADD_PRODUCT, SET_NAME_DESCRIPTION, ADD_PRODUCT_PRICE, ADD_PRODUCT_IAMGE, 
    SET_DESCRIPTION_EDIT_PRODUCT, EDIT_PRODUCT_PRICE, EDIT_PRODUCT_IMAGE} from "../Actions/products";

const initialState = {
    products: [],
    product: {},
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {...state, products: action.payload};
        case GET_PRODUCT_BY_ID:
            return {...state, product: action.payload};
        case SET_NAME_PRODUCT:
            return {...state, product: {...state.product, name: action.payload}};
        case SET_NAME_ADD_PRODUCT:
            return {...state, product: {...state.product, name: action.payload}};
        case SET_NAME_DESCRIPTION:
            return {...state, product: {...state.product, description: action.payload}};
        case ADD_PRODUCT_PRICE:
            return {...state, product: {...state.product, unitPrice: action.payload}};
        case ADD_PRODUCT_IAMGE:
            return {...state, product: {...state.product, photoUrl: action.payload}};
        case SET_DESCRIPTION_EDIT_PRODUCT:
            return {...state, product: {...state.product, description: action.payload}};
        case EDIT_PRODUCT_PRICE: 
            return {...state, product: {...state.product, unitPrice: action.payload}};
        case EDIT_PRODUCT_IMAGE: 
            return {...state, product: {...state.product, photoUrl: action.payload}}
        case RESET_PRODUCT:
            return {...state, product: {}};
        default:
            return state;
    }
}