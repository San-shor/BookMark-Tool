import React from "react";
import { Link } from "react-router-dom";
import './bookmark.css'
const BookMarkLsit = ({ bookmark }) => {
  
 const groupedBookmarks = {};
  bookmark.forEach((bookmark) => {
    if (groupedBookmarks[bookmark.category]) {
      groupedBookmarks[bookmark.category].push(bookmark);
    } else {
      groupedBookmarks[bookmark.category] = [bookmark];
    }
  });
  const sortedCategories = Object.keys(groupedBookmarks).sort();


  return (
    <div className="bookmark-container" >
    {sortedCategories.map((category) => (
      <div key={category} className="bookmark-list">
      <h3>Category {category}</h3>
      <div className="category-box">
        {groupedBookmarks[category].map((bookmark) => (
          <div key={bookmark.id} className="bookmark-item">
            <h4>{bookmark.title}</h4>
            <Link to={`/bookmarks/${bookmark.id}`} className="details-button">
              Details

            </Link>
          </div>
        ))}
      </div>
    </div>
    
    ))}
  </div>
  );
};

export default BookMarkLsit;
