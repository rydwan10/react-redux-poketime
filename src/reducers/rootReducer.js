const initState = {
    posts: [
        { id: '1', title: 'Megadeth add new keyboardist', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam hic maxime harum?' },
        { id: '2', title: 'Metallica fired Lars Ulrich', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam hic maxime harum?' },
        { id: '3', title: 'Bring Me The Horizon announce new vocalist', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam hic maxime harum?' },
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, { id: action.payload.id, title: action.payload.title, body: action.payload.body }]
            }
        case 'EDIT_POST':
            let editedPost = state.posts.find(post => post.id === action.payload.id)
            editedPost = {
                id: editedPost.id,
                title: action.payload.title,
                body: action.payload.body
            }
            return {
                ...state,
                posts: state.posts.map(post => post.id === editedPost.id ? editedPost : post)
            }
            
        default:
            return state
    }

}


export default rootReducer