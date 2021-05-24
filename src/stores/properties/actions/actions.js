import * as actionTypes from './actionTypes';

export const fetchStart = () => {
    return {
        type: actionTypes.START
    }
}

export const fetchSuccess = (properties) => {
    return {
        type: actionTypes.SUCCESS,
        properties:properties.results,
        next:properties.next,
        previous:properties.previous
    }
}

export const fetchhFail = error => {
    return {
        type: actionTypes.FAIL,
        error: error
    }
}




export const getPropertiesSearch = (world) => {
    return dispatch => {
        dispatch(fetchStart());

        fetch(`https://real-estate-app-name.herokuapp.com/api/properties/?search=${world}`)
            .then(response=> response.json() )
            .then(results=>{
                dispatch(fetchSuccess(results))
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchhFail(err))
            })


        /* fetch(`127.0.0.1:8000/api/properties/`)
            .then(result => {
                console.log(result.json())
                
            })
            .then( data => console.log(data))
            .catch(err => {
                dispatch(fetchhFail(err))
            }) */

            ;       
    }
}



export const getPropertiesFilter = (index) => {
    return dispatch => {
        dispatch(fetchStart());

        fetch(`https://real-estate-app-name.herokuapp.com/api/properties/?${index}`)
            .then(response=> response.json() )
            .then(results=>{
                console.log(results)
                dispatch(fetchSuccess(results))
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchhFail(err))
            })


        /* fetch(`127.0.0.1:8000/api/properties/`)
            .then(result => {
                console.log(result.json())
                
            })
            .then( data => console.log(data))
            .catch(err => {
                dispatch(fetchhFail(err))
            }) */

            ;       
    }
}


export const getProperties = (index) => {
    return dispatch => {
        dispatch(fetchStart());

        fetch(`https://real-estate-app-name.herokuapp.com/api/properties/?page=${index}`)
            .then(response=> response.json() )
            .then(results=>{
                dispatch(fetchSuccess(results))
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchhFail(err))
            })


        /* fetch(`127.0.0.1:8000/api/properties/`)
            .then(result => {
                console.log(result.json())
                
            })
            .then( data => console.log(data))
            .catch(err => {
                dispatch(fetchhFail(err))
            }) */

            ;       
    }
}

