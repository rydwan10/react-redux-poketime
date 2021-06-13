import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { connect } from 'react-redux';

import { addPost } from '../actions/postActions';

export class AddPost extends Component {

    state = {
        id: uuidv4(),
        title: '',
        body: ''
    }

    handleInputTitle = (event) => {
        this.setState({ title: event.target.value });
    }

    handleInputBody = (event) => {
        this.setState({ body: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.title.trim() === '' || this.state.body.trim() === '') {
            window.alert('Title and Body must not empty!');
        } else {
            this.props.addPost({ ...this.state });
            this.props.history.push('/')
        }
    }

    render() {
        // console.log(this.props);
        return (
            <div className="container">
                <h4 className="center">Add New Post</h4>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input onChange={this.handleInputTitle} value={this.state.title} type="text" className="form-control" />
                    <label htmlFor="body">Body</label>
                    <input onChange={this.handleInputBody} value={this.state.body} type="text" className="form-control" />
                    <button className="btn blue" type="submit">Save</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (payload) => { dispatch(addPost(payload)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
