import * as actionTypes from './actionTypes';

export const fetchStart = () => {
    return {
        type: actionTypes.START
    }
}

export const fetchSuccess = (id,name,email,comment) => {
    return {
        type: actionTypes.SUCCESS,
        id:id,
        name:name,
        email:email,
        comment:comment
    }
}

export const fetchhFail = error => {
    return {
        type: actionTypes.FAIL,
        error: error
    }
}




export const getComment= (id,name,email,comment) => {

    return dispatch => {
        dispatch(fetchStart());

        fetch(`https://real-estate-app-name.herokuapp.com/api/comment/add/${id}/`,
            {   
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                },
                body:JSON.stringify({
                    "id":id,
                    'name':name,
                    'email':email,
                    'comment':comment,
                    'status':'blog'
                })
            })
            .then(response=> {
                console.log(response)
                console.log(name)
                dispatch(fetchSuccess(id,name,email,comment));

            })
            .catch(err => {
                console.log(err)
                dispatch(fetchhFail(err))
            })

            ;      
    }
}

