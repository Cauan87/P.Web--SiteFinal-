import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Feed from './Feed';
import AddPost from './AddPost';


function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/feed' element={ <Feed /> }/>
      <Route path='/addpost' element={ <AddPost /> }/>
    </Routes>
  )
}

export default App;