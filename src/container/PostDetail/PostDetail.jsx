import React, {Component, Fragment, Text} from 'react';
import Header from '../../component/Header/Header';
import Post from '../Post/Post';

import './PostDetail.css'

class Home extends Component {
    
    render(){
        // <Route path="/post/:id" exact component={PostDetail} />
        return (
            <Fragment>
                <div className="container">
                    <Header />
                    <PostDetail />
                </div>
            </Fragment>
        );
    }
}

export default Home;