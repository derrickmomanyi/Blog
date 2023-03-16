import React from 'react';
import { Route, Routes } from "react-router-dom";
import BlogContainer from './components/BlogContainer'
import AddBlog from './components/AddBlog'

import Navbar from './components/Navbar'


function App() {

  return (
    <div >
        
      <Navbar  />
      <Routes>
        <Route path="/" element = {<BlogContainer />} />
        <Route path="addblog" element ={ <AddBlog   />}/>               
       

      </Routes>
    </div>
  );
}

export default App;
