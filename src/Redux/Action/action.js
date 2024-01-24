export const PRODUCTS_DETAILS = 'PRODUCTS_DETAILS';
export const ADD_PRD = 'ADD_PRD';
export const REM_PRD = 'REM_PRD';
export const INCREMENT_AMOUNT = 'INCREMENT_AMOUNT';
export const DECREMENT_AMOUNT = 'DECREMENT_AMOUNT';

export const ShowDetails = (value) => {
    return{
        type:PRODUCTS_DETAILS,
        payload: value
    }
}

export const AddPrd = (value) => {
    return{
        type:ADD_PRD,
        payload: value
    }
}

export const RemPrd = (id) => {
    return{
        type:REM_PRD,
        payload: id
    }
}
export const incrementAmount = (id) => {
    return {
        type: INCREMENT_AMOUNT,
        payload: id,
    };
};

export const decrementAmount = (id) => {
    return {
        type: DECREMENT_AMOUNT,
        payload: id,
    };
};