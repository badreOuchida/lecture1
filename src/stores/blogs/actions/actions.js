import * as actionTypes from './actionTypes';

export const fetchStart = () => {
    return {
        type: actionTypes.START
    }
}

export const fetchSuccess = (blogs) => {
    return {
        type: actionTypes.SUCCESS,
        blogs:blogs.results,
        next:blogs.next,
        previous:blogs.previous
    }
}

export const fetchhFail = error => {
    return {
        type: actionTypes.FAIL,
        error: error
    }
}




export const getBlogs= (index) => {
    return dispatch => {
        dispatch(fetchStart());

        fetch(`https://real-estate-app-name.herokuapp.com/api/blogs/?page=${index}`)
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

