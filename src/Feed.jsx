import React from 'react';
import Header from './Header';
import './Feed.css';
import Post from './Post';

function Feed(){
    return <div>
        <Header/>
        <div className="container">
            <Post/>
            <Post/>
        </div>
    </div>
}

export default Feed;