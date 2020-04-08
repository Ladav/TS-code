import * as actionTypes from './actionTypes';

export const saveResult = (payload) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: payload.result
    };
};
export const deleteResult = (payload) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: payload.id
    };
};

// executing async code using thunk middleware
export const storeResult = (payload) => {
    return (dispatch, getState) => {    // dispatch and getState both are provide by redux-thunk
        console.log(getState().ctr.counter);
        setTimeout(() => {      // this fx is automatically executed by the redux-thunk middleware
            dispatch(saveResult(payload));
        }, 2000);
    };
};