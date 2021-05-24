import * as actionTypes from '../actions/actionTypes';
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

let initialState = {
    success:false,
    error: null, 
    loading: false,
    name:null,
    email:null,
    comment:null
}

export const fetchStart = (state,action) => {
	return updateObject(state, {
        success:false,
        error: null,
        loading: true,
    });
}

export const fetchSucces = (state,action) => {
    return updateObject(state, {
        success:false,
        error: null,
        loading: true,
    });
}

export const fetchFaild = (state,action) => {
	return updateObject(state, {
        error: action.error,
        loading: false,
    });
}


const commentReducer = (state=initialState,action) =>{
	switch (action.type) {
        case actionTypes.START: 
            return fetchStart(state,action)
        case actionTypes.SUCCESS: 
            return {
                    ...state, 
                    ...{
                    success:true,
                    error: null,
                    loading: false,
                    name:action.name,
                    email:action.email,
                    comment:action.comment,
                }
            }
        case actionTypes.FAIL: 
            return fetchFaild(state, action);
        default: 
            return state;
    }
}

export default commentReducer