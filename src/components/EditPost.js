import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editPost } from '../actions/postActions';

export class EditPost extends Component {

    state = {
        id: this.props.post.id,
        title: this.props.post.title,
        body: this.props.post.body
    }

    handleInputTitle = (event) => {
        this.setState({ ...this.state, title: event.target.value });
    }

    handleInputBody = (event) => {
        this.setState({ ...this.state, body: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.title.trim() === '' || this.state.body.trim() === '') {
            window.alert('Title and Body must not empty!');
        } else {
            this.props.editPost({ ...this.state });
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div className="container">
                <h4 className="center">Edit Post</h4>
                <form onSubmit={this.handleSubmit}>
                    {/* <label htmlFor="id">Post ID</label>
                    <input value={this.state.id} className="form-control" type="text" disabled /> */}
                    <label htmlFor="title">Title</label>
                    <input onChange={this.handleInputTitle} value={this.state.title} type="text" className="form-control" />
                    <label htmlFor="body">Body</label>
                    <input onChange={this.handleInputBody} value={this.state.body} type="text" className="form-control" />
                    <button className="btn green lighten-1" type="submit">Save Edit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts.find(post => post.id === ownProps.match.params.post_id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editPost: (payload) => { dispatch(editPost(payload)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
