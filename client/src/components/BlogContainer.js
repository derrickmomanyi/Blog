import React, { useState, useEffect } from 'react';
import "../css/BlogContainer.css"
import Modal from './Modal';


function BlogContainer(){
    
  const [blogs, setBlogs] = useState([])
  const [popup, setPopup] = useState([]);      
  const [popupToggle, setPopupToggle] = useState(false)


  useEffect(() => {
    fetch("/blogs")
    .then((res) => res.json())
    .then((blogs) => setBlogs(blogs))
  }, [])


  const changeContent = (blog) => {
    setPopup([blog])
    setPopupToggle(!popupToggle)
}

function onHandleDelete(id) {
  const updatedBlog = blogs.filter((blog) => id !== blog.id); 
  setBlogs(updatedBlog);          
  }

  const editBlog = (newBlog) => {
    const updatedBlog = blogs.map((blog) => {       
     if (blog.id === newBlog.id) return newBlog;
     return blog;
  
    })
    setBlogs(updatedBlog)
    }


  
  
    return(
      <div>      
          {blogs.map((blog) => {
            
            return(
            <div key = {blog.id}>
            
                <div className="card" style={{width: '18rem', margin:'14px', borderRadius: '10px',
                 boxShadow: '0 3px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.19)'}}
                 onClick = {()=>changeContent(blog)}  
                  >
                  <img className="card-img-top" style={{ height: 'auto', maxHeight: '370px' }}src={blog.image} alt={blog.title} />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <div className="ratings"><span>{blog.rating}</span>/10</div>
                                      
                  </div>                
                  <div className="card-show-info">
                      <div className="show-running-time">
                          <label>Guide: <span>{blog.year} ‧ {blog.genre} ‧ {blog.seasons} seasons</span></label>
                          
                         
                      </div>
                      
                    </div>
                                    
              </div>
                
            </div>)
          })}


            {popupToggle && (<div className='pop-up-container' onClick={changeContent}>
                              <div className='pop-up-body' onClick = {(e) => e.stopPropagation()}>
                              <div className='pop-up-header'> 
                                          <button  className='btn btn-danger' onClick={changeContent} style ={{color: 'white'}}>X</button>
                                      </div>
                                      <div className='pop-up-content'>
                                        {popup.map((pop) => {
                                          return(
                                          <Modal 
                                          key = {pop.id}
                                          id = {pop.id}
                                          about = {pop.about}
                                          image = {pop.image}
                                          title = {pop.title}                                                                
                                           onHandleDelete = {onHandleDelete} 
                                           editBlog = {editBlog}                                                                             
                                               
                                                            
                                          />
                                          );
                                        })}
                                      </div>
                                      </div>     
                                    
                          </div> )}
        </div>
        
    )
}

export default BlogContainer;