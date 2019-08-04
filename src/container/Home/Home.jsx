import React, {Component, Fragment, Text} from 'react';
import Header from '../../component/Header/Header';
import Post from '../Post/Post';

import './Home.css'

class Home extends Component {
    
    render(){
        // <Route path="/post/:id" exact component={PostDetail} />
        return (
            <Fragment>
                <div className="container">
                    <Header />
                    <Post />


                </div>
            </Fragment>
        );
    }
}

export default Home;