import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("/blogs")
    .then((res) => res.json())
    .then((blogs) => setBlogs(blogs))
  }, [])

  console.log(blogs);
  
  return (
    <div >
      <h1>My blog</h1>
    </div>
  );
}

export default App;
