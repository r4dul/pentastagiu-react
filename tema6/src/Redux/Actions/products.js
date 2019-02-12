export const GET_PRODUCTS = '[products] Get all products';
export const UPDATE_PRODUCTS = '[products] Update all products in state';
export const FETCH_PRODUCTS_SUCCESS = '[products] Get all products was successful';
export const FETCH_PRODUCT_SUCCESS = '[product] Get product by id was successful';
export const FETCH_PRODUCTS_ERROR = '[products] Get all products encountered an error';
export const FETCH_PRODUCT_SAVE_EDIT_SUCCESS = '[product] save edit success';
export const GET_PRODUCT_BY_ID = '[product] Update product by id in state';
export const DELETE_PRODUCT = '[product] delete product';
export const SAVE_EDIT_PRODUCT = '[product] save edit product';
export const SET_SAVE_EDIT_PRODUCT = '[product] set save edit product';
export const RESET_PRODUCT = '[product] reset product';
export const SET_NAME_PRODUCT = '[product] set name product';
export const SET_NAME_ADD_PRODUCT = '[product] set name add product';
export const SAVE_PRODUCT = '[product] save product';
export const SET_NAME_DESCRIPTION = '[description] set description';
export const ADD_PRODUCT_PRICE = '[product] add product price';
export const ADD_PRODUCT_IAMGE = '[product] add product image';
export const SET_DESCRIPTION_EDIT_PRODUCT = '[product] edit product description';
export const EDIT_PRODUCT_PRICE = '[product] edit product price';
export const EDIT_PRODUCT_IMAGE = '[product] edit product image';

export const getProducts = () => ({
    type: GET_PRODUCTS
});

export const updateProducts = (products) => ({
    type: UPDATE_PRODUCTS,
    payload: products
});
export const getProductById = (product) => ({
    type: GET_PRODUCT_BY_ID,
    payload: product,
});

export const saveProductEdit = (editProduct) => ({
    type: SAVE_EDIT_PRODUCT,
    payload: editProduct,
})
export const setSaveProduct = () => ({
    type: SET_SAVE_EDIT_PRODUCT
})
export const resetProduct = () => ({
    type: RESET_PRODUCT
});
export const setNameProduct= (name) => ({
    type: SET_NAME_PRODUCT,
    payload: name,
})
export const deleteProduct=(id) =>({
    type: DELETE_PRODUCT,
    payload: id,
})
export const setNameAddProduct=(name) =>({
    type: SET_NAME_ADD_PRODUCT,
    payload: name,
})
export const saveProduct=() =>({
    type: SAVE_PRODUCT
})
export const setDescriptionAddProduct=(description) =>({
    type: SET_NAME_DESCRIPTION,
    payload: description,
})
export const setProductPrice=(price) => ({
    type: ADD_PRODUCT_PRICE,
    payload: price,
})
export const setProductImage=(photoUrl) => ({
    type: ADD_PRODUCT_IAMGE,
    payload: photoUrl,
})
export const onDescriptionChange=(description) => ({
    type: SET_DESCRIPTION_EDIT_PRODUCT,
    payload: description,
})
export const editProductImage=(photoUrl) => ({
    type: EDIT_PRODUCT_IMAGE,
    payload: photoUrl,
})
export const editProductPrice=(unitePrice) => ({
    type: EDIT_PRODUCT_PRICE,
    payload: unitePrice,
})