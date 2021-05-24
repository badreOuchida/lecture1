import * as actionTypes from '../actions/actionTypes';
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

let initialState = {
    blog: null,
    error: null, 
    loading: false
}

export const fetchStart = (state,action) => {
	return updateObject(state, {
        blog: null,
        error: null,
        loading: true
    });
}

export const fetchSuccess = (state,action) => {
	return {
        ...state, 
        ...{
		blog:action.blog,
        error: null,
        loading: false,
    }
}
}
export const fetchFaild = (state,action) => {
	return updateObject(state, {
        error: action.error,
        loading: false,
    });
}


const blogReducer = (state=initialState,action) =>{
	switch (action.type) {
        case actionTypes.START: 
            return fetchStart(state,action)
        case actionTypes.SUCCESS: 
            return {
                    ...state, 
                    ...{
                    blog:action.blog,
                    error: null,
                    loading: false,
                }
            }
        case actionTypes.FAIL: 
            return fetchFaild(state, action);
        default: 
            return state;
    }
}

export default blogReducer