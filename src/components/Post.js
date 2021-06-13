// import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';

import {deletePost} from '../actions/postActions';

export class Post extends Component {
    // state = {
    //     post: null
    // }
    // componentDidMount() {
    //     let id = this.props.match.params.post_id;
    //         axios.get(`http://localhost:3001/posts/${id}`)
    //             .then(res => {
    //                 console.log(res);
    //                 this.setState({ post: res.data })
    //             })
    // }

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/');
    }

    
    handleClickEdit = () => {
        this.props.history.push(`/${this.props.match.params.post_id}/edit`);
    }
    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn red" onClick={this.handleClick}>Delete Post</button>
                    <button className="btn green" onClick={this.handleClickEdit}>Edit Post</button>
                </div>
            </div>
        ) : (
                <h4 className="center blue-text">Loading post...</h4>
            )

        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
