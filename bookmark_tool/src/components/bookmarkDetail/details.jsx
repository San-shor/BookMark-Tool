import React from "react";
import { useParams } from 'react-router-dom';
import './detail.css'
const BookmarkDetail=({bookmark})=>{
    const { id } = useParams();
    
     const list = bookmark.find((bookmark) => bookmark.id === id);
  
    return(
        <div className="details-section">
        <h3>Bookmark Details</h3>
        <div className="details">
          <h4>Title: {list.title}</h4>
          <h4>URL: {list.url}</h4>
          <h4>Category: {list.category}</h4>
          <button className="back-button">Back</button>
        </div>
      </div>

 
    )
}

export default BookmarkDetail