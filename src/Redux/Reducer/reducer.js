import { ADD_PRD, PRODUCTS_DETAILS, REM_PRD, DECREMENT_AMOUNT, INCREMENT_AMOUNT } from "../Action/action";

const initialState = {
    productDetail: []
}

const initialCartReducer = {
    product : []
}

export const initialProductDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_DETAILS:
          return{
            ...state, productDetail: action.payload
           } 
            
        default:
           return state ;
    }
}

export const CartReducer = (state = initialCartReducer, action) => {
    switch (action.type) {
        case ADD_PRD:
            const newItem = { ...action.payload, quantity: 1 };
            return{
                ...state,
                product: [...state.product, newItem],
            }
        case REM_PRD:
            const removeItem = state.product.find((prd) => prd.id === action.payload);
            return {
                ...state,
                product: state.product.filter((prd) => prd.id !== action.payload),
                total: state.total - (removeItem ? removeItem.price * removeItem.quantity : 0)
            }
        
            case INCREMENT_AMOUNT:
            return {
                ...state,
                product: state.product.map((item) =>
                    item.id === action.payload ?
                        { ...item, quantity: item.quantity + 1, price: item.price + (item.price / item.quantity) }
                        : item
                ),
               
            }

        case DECREMENT_AMOUNT:
            return {
                ...state,
                product: state.product.map((item) =>
                    item.id === action.payload && item.quantity > 1 ?
                        { ...item, quantity: item.quantity - 1, price: item.price - (item.price / item.quantity) }
                        : item
                ).filter((item) => item.quantity > 0),
                
            };
         
        default:
           return state;
    }
}