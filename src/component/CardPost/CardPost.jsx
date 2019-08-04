import React, {Fragment} from 'react';
import './CardPost.css';

const CardPost = (props) => {
    return (
        <Fragment>
            <div className="card">
                <a href="#" className="judul">{props.judul}</a>
                <h6 className="date">{props.date}</h6>
                <p className="deskripsi-post">{props.deskripsi}</p>
                <div className="tag">
                    <span className="item-tag">#Programming</span>
                </div>
            </div>
        </Fragment>
        
    );
}

export default CardPost;