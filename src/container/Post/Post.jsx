import React, {Component, Fragment} from 'react';
import CardPost from '../../component/CardPost/CardPost';

import Axios from 'axios';

import './Post.css'

class Ayat extends Component {
    state = {
        post : []
    }

    componentDidMount(){
        Axios.get('https://fakeblog.bel4.com/api/posts')
        .then((res) => {
            this.setState({
                post: res.data.data
            })
        })
    }

    render() {
        return (
            <div className="container-post">
                {
                    this.state.post.map(post => {
                        return <CardPost key = {post.id} nomor = {post.id} judul = {post.name} date = {post.published_at} deskripsi = {post.excerpt}/>
                    })
                }
            </div>
        );
    }
}

export default Ayat;