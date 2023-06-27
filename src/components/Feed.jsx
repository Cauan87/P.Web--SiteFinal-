import React, { useState, useEffect } from 'react';
import Header from './Header';
import '/src/styles/Feed.css';
import Post from './Post';
import { getDocs, collection } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { db, storage } from './AddPost';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = "Feed"

    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, 'posts');
        const snapshot = await getDocs(postsCollection);
        const fetchedPosts = [];

        for (const doc of snapshot.docs) {
          const postData = doc.data();

          if (postData.imageUrl) {
            const imageRef = ref(storage, postData.imageUrl);
            const imageUrl = await getDownloadURL(imageRef);
            postData.imageUrl = imageUrl;
          }

          fetchedPosts.push({
            id: doc.id,
            ...postData,
          });
        }

        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Erro ao buscar os posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return <div>
        <Header />
          <div className='container'>
          <div className='feed_container'>
          {posts.map(post => (
            <Post
              key={post.id}
              content={post.content}
              imageUrl={post.imageUrl}
            />
          ))}
          </div>
          </div>
      </div>
}

export default Feed;
