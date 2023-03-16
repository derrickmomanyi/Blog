
import React, {useState} from 'react'
import "../css/AddBlog.css"



function AddBlog(){

   
    const [title , setTitle] = useState('')
    const [genre , setGenre] = useState('')
    const [network, setNetwork] = useState('')
    const [image, setImage] = useState('')  
    const [year, setYear] = useState('')  
    const [rating, setRating] = useState('')    
    const [seasons, setSeasons] = useState('')
    const [about , setAbout] = useState('')
         
   
     
     const handleSubmit = (e) =>{
        e.preventDefault()

        const newBlog = {
            
            title: title,
            genre: genre,
            network: network,
            image: image,
            year: year,
            rating: rating,
            seasons: seasons,
            about: about,
            
            
           
        }

        fetch('/blogs', {

        method:'POST',

        headers: {
            'Content-Type' : 'application/json'
        },

        body:JSON.stringify(newBlog)
     })
     
     .then((resp)=> resp.json())
     .then((blogs)=> console.log(blogs))

     alert("Your Blog Has Been Added, Check The Home Page")
     setSeasons('')
     setAbout('')
     setImage('')
     setGenre('')    
     setTitle('')
     setYear('')
     setNetwork('')
     setRating('')
     

    }

    return(
        <div className='body'>
        <div className= "form">
                
         <form onSubmit = {handleSubmit}>
        <div className="form-group">

            <label>Title</label>
            <input type="text" 
            required
            name ='title' 
            value = {title}
             className="form-control" 
             placeholder="Enter Series Name" 
             onChange ={(e) => setTitle(e.target.value)}/>
        
        </div>

        <div className="form-group">
            <label>Genre</label>
            <input type="text"
            required
             name ='genre'
              value = {genre}
               className="form-control"
                placeholder="Enter Series Genre"
                 onChange ={(e) => setGenre(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Network</label>
            <input type="text"
            required
             name ='network'
              value = {network}
               className="form-control"
                placeholder="Enter Streaming Platform"
                 onChange ={(e) => setNetwork(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Image</label>
            <input type="text" 
            required
            name ='image' 
            value = {image} 
            className="form-control"
             placeholder="Enter Series Poster" 
             onChange ={(e) => setImage(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Year</label>
            <input type="number" 
            required
            name ='year' 
            value = {year} 
            className="form-control" 
            placeholder="Enter Year of Release" 
            step = '1' 
            onChange ={(e) => setYear(e.target.value)}/>
         </div>

        <div className="form-group">
            <label>Seasons</label>
            <input type="number" 
            required
            name ='seasons' 
            value = {seasons} 
            className="form-control" 
            placeholder="Enter Number of Seasons" 
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

        <div className="form-group">
            <label>About</label>
            <textarea  
            required
            name ='about'
             value = {about} 
             className="form-control" 
             placeholder="A Summary of the Show" 
             onChange ={(e) => setAbout(e.target.value)}/>
        </div>

        
        <button type="submit" className="btn btn-dark">Submit</button>
        </form>
                
        </div>
           
        </div>    
    )
    }
    export default AddBlog;