import { useState, useEffect } from "react";
import "./App.css";
import BookMarkLsit from "./components/bookmarkList/bookmarklist";
import Home from "./components/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookmarkDetail from "./components/bookmarkDetail/details";

function App() {
  const [bookmark, setBookMark] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:4000/bookmarks")
      .then((res) => res.json())
      .then((data) => {
        setBookMark(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         
          <Route path="bookmarks/:id" element={<BookmarkDetail bookmark={bookmark}/>} />     
        </Routes>
      <Home fetchData={fetchData} />
      <BookMarkLsit bookmark={bookmark} />
      </BrowserRouter>
    </div>
  );
}

export default App;
