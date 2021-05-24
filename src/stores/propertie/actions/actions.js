import * as actionTypes from './actionTypes';

export const fetchStart = () => {
    return {
        type: actionTypes.START
    }
}

export const fetchSuccess = (propertie) => {
    return {
        type: actionTypes.SUCCESS,
        propertie:propertie
    }
}

export const fetchhFail = error => {
    return {
        type: actionTypes.FAIL,
        error: error
    }
}




export const getPropertie = (id) => {
    return dispatch => {
        dispatch(fetchStart());

        fetch(`https://real-estate-app-name.herokuapp.com/api/properties/${1}/`)
            .then(response=> response.json() )
            .then(results=>{
                dispatch(fetchSuccess(results))
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchhFail(err))
            })      
    }
}

