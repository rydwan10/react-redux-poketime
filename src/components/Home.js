import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import logo from '../logo.svg'

import { connect } from 'react-redux';

class Home extends Component {
    state = {
        posts: [],

    }

    // componentDidMount() {

    //     axios.get('http://localhost:3001/posts')
    //         .then(res => this.setState({ posts: res.data, isLoading: false }))

    // }
    render() {
        const { posts } = this.props;

        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div key={post.id} className="post card">
                        <img src={logo} alt="react logo" />
                        <Link to={'/' + post.id}>
                            <div className="card-content">
                                <span className="card-title blue-text"><strong>{post.title}</strong></span>
                                <p>{post.body}</p>
                            </div>
                        </Link>
                    </div>
                )
            })
        ) : (<div className="center">No posts yet...</div>)

        return (
            <div className="container home">
                <h4 className="center">
                    Home
                </h4>
                {postList}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)
