import * as actionTypes from './actionTypes';

export const fetchStart = () => {
    return {
        type: actionTypes.START
    }
}

export const fetchSuccess = (blog) => {
    return {
        type: actionTypes.SUCCESS,
        blog:blog
    }
}

export const fetchhFail = error => {
    return {
        type: actionTypes.FAIL,
        error: error
    }
}




export const getBlog= (id) => {
    return dispatch => {
        dispatch(fetchStart());

        fetch(`https://real-estate-app-name.herokuapp.com/api/blog/${id}/`)
            .then(response=> response.json() )
            .then(results=>{
                console.log(results)
                dispatch(fetchSuccess(results))
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchhFail(err))
            })     
    }
}

