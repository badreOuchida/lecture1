import * as actionTypes from '../actions/actionTypes';
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

let initialState = {
    blogs: null,
    error: null, 
    loading: false,
    next:null,
    previous:null
}

export const fetchStart = (state,action) => {
	return updateObject(state, {
        blogs: null,
        error: null,
        loading: true,
        next:null,
        previous:null
    });
}

export const fetchFaild = (state,action) => {
	return updateObject(state, {
        error: action.error,
        loading: false,
    });
}


const blogsReducer = (state=initialState,action) =>{
	switch (action.type) {
        case actionTypes.START: 
            return fetchStart(state,action)
        case actionTypes.SUCCESS: 
            return {
                    ...state, 
                    ...{
                    blogs:action.blogs,
                    error: null,
                    loading: false,
                    next:action.next,
                    previous:action.previous
                }
            }
        case actionTypes.FAIL: 
            return fetchFaild(state, action);
        default: 
            return state;
    }
}

export default blogsReducer