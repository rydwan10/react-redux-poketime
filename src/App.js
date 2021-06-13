import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/add_post' component={AddPost}/>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/:post_id' component={Post} />
            <Route path='/:post_id/edit' component={EditPost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
