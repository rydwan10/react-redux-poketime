export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}

export const addPost = (payload) => {
    return {
        type: 'ADD_POST',
        payload
    }
}

export const editPost = (payload) => {
    return {
        type: 'EDIT_POST',
        payload
    }
}