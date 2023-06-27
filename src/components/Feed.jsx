import {React, useState, useEffect} from 'react';
import Header from './Header';
import '/src/styles/Feed.css';
import Post from './Post';

function Feed(){
    useEffect(() => {
        document.title = 'Feed de Postagens';
      }, []);
    return (
        <div className='overflowY'>
        <Header/>
            <div className="container">
                <Post className="postItem"/>
                <Post className="postItem"/>
                <Post className="postItem"/>
                <Post className="postItem"/>
                <Post className="postItem"/>
                <Post className="postItem"/>
            </div>
        </div>
    );
}

export default Feed;