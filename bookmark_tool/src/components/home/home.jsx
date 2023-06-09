import React, { useState } from "react";
import "./home.css";

const Home = ({ fetchData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [categories,setCategories] =useState([])

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      url: url,
      category: category,
    };
    

    try {
      const response = await fetch("http://localhost:4000/bookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then(() => fetchData());
      setTitle("");
      setUrl("");
      setCategory("");
    } catch (error) {
      console.log("error");
    }
  };
  const handleAddCategory=()=>{
    const newCategory = prompt('Enter a new category:');
    if (newCategory) {
      
      setCategories([...categories, newCategory]);
      
   
      setCategory(newCategory);
    }
  }
  return (
    <div>
      <button className="create_bookmark" onClick={handleModalOpen}>
        Create bookmark
      </button>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit} className="bookmark-form">
              <h3>Add a Bookmark</h3>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Title*"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  name="url"
                  placeholder="URL*"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <br />
                <div className="category-group">
                  <select
                    name="category"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="category-select"
                  >
                    <option value="" disabled>
                      Category*
                    </option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                  </select>
                  <button type="button" className="plus-button" onClick={handleAddCategory}>
                    +
                  </button>
                </div>
              </div>
              <button type="submit">Add Bookmark</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
