import React from 'react';
import '/src/styles/Post.css';

function Post({ content, imageUrl }) {
  return (
    <div className='postBox'>
      <div className='postBoxUp'>
        <div id="overflow_p">
        <p>{content}</p>
        </div>
        {imageUrl && <img className="postButton" src={imageUrl} alt="Imagem do post" loading='lazy'/>}
      </div>
    </div>
  );
}

export default Post;
