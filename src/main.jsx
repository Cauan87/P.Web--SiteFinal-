import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AddPost from './AddPost.jsx'
import Feed from './Feed.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Feed />
  </React.StrictMode>,
)
