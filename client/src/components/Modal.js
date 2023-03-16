import React, {useState} from "react";
import '../css/Modal.css'

function Modal({title, image, about, onHandleDelete, id, editBlog}){


    const [rating, setRating] = useState('')    
    const [seasons, setSeasons] = useState('')



    function deleteBlog(){
        fetch(`blogs/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.ok){
                onHandleDelete(id);
            }
          })
          }

          const handleSubmit = (e) =>{
            e.preventDefault()
       
           const blogData = {seasons: seasons, rating: rating} 
         
         
               fetch(`blogs/${id}`, {
       
                     method:'PATCH',
       
                     headers: {
                         'Content-Type' : 'application/json'
                     },
       
                     body:JSON.stringify(blogData),
                 })
                 .then((resp)=> resp.json())
                 .then((newBlog)=> {
                   editBlog(newBlog)
                   alert("Successfully edited rating and new season")
                   setSeasons('')
                   setRating('')
                 
                 })
           
         }


    return(
        <>
        <div className="popup">
        <div className="card " style={{width: '18rem', margin:'14px', borderRadius: '10px',
                 boxShadow: '0 3px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.19)'}}
                   
                  >
                  <img className="card-img-top" style={{ height: 'auto', maxHeight: '370px' }}src={image} alt={title} />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    
                    </div>
                                    
              </div>
        </div>
        <div className = "popup-list">  
               
              
              <ul className="list-group list-group-flush">

              <li className="list-group-item">{about} </li>                                 
               </ul>

               <div className="popup-btn">
          
      </div>  


      </div>
        <div className="popup-form">
      <div className= "form">
                
         <form onSubmit = {handleSubmit}>
        
        <div className="form-group">
            <label>Seasons</label>
            <input type="number" 
            required
            name ='seasons' 
            value = {seasons} 
            className="form-control" 
            placeholder="Enter No. of Seasons" 
            step = '0.1' 
            onChange ={(e) => setSeasons(e.target.value)}/>
         </div>

        <div className="form-group">
            <label>Rating</label>
            <input type="number" 
            required
            name ='rating' 
            value = {rating} 
            className="form-control" 
            placeholder="Enter Rating/10" 
            step = '0.1' 
            onChange ={(e) => setRating(e.target.value)}/>
         </div>

               
        <button type="submit" className="btn btn-dark">Submit</button>
        </form>
        </div>
        <button className="btn btn-secondary" onClick={() => deleteBlog(id)}>Delete Blog</button> 
        </div>

        
        
        </>
    )
}

export default Modal;