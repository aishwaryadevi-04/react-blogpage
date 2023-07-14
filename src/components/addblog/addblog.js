import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addBlog.css';
import blogs from '../../MOCK_DATA.json';
import BlogDetails from '../home/blogdata';
import { useNavigate } from 'react-router-dom';
import FetchImage from '../home/fetchimage';

const TagsInput = ({ tags, setTags, isDarkMode }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      const tag = inputValue.trim();

      setTags((prevTags) => [...prevTags, tag]);
      setInputValue('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="tags-input-container">
      <div className="tags-container">
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            <span className="tag-text">{tag}</span>
            <span className="tag-remove" onClick={() => removeTag(tag)}>
              &#10005;
            </span>
          </div>
        ))}
      </div>
      <input className={` ${isDarkMode ? 'dark-text' : 'light-text'}`}
        type="text"

        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

const AddBlogForm = ({ blogs, handleAddBlog, isDarkMode, toggleDarkMode }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState([null])
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: blogs.length + 1,
      title,
      description,
      author,
      category,
      tags,
      imageUrl: image
    };
    addBlog(newBlog);
    // Reset form fields
    setTitle('');
    setDescription('');
    setAuthor('');
    setCategory('');
    setTags([]);
    setImage(null);
    
  };

  const addBlog = (newBlog) => {
    handleAddBlog(newBlog);
    navigate('/');
  };

  return (

    <div className={`form-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <form id="myForm" onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label htmlFor="title" style={{ color: isDarkMode ? '#fff' : 'inherit' }}>Title:</label>
          <input className={` ${isDarkMode ? 'dark-text' : 'light-text'}`}
            type="text"
            id="title"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
              }
            }}
          />
        </div>
        <div className="form-field">
          <label htmlFor="description" style={{ color: isDarkMode ? '#fff' : 'inherit' }}>Description:</label>
          <textarea className={` ${isDarkMode ? 'dark-text' : 'light-text'}`}
            id="description"
            name="description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
              }
            }}
          ></textarea>
        </div>
        <div className="form-field">
          <label htmlFor="author" style={{ color: isDarkMode ? '#fff' : 'inherit' }}>Author:</label>
          <input className={` ${isDarkMode ? 'dark-text' : 'light-text'}`}
            type="text"
            id="author"
            name="author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
              }
            }}
          />
        </div>
        <div className="form-field">
          <label htmlFor="category" style={{ color: isDarkMode ? '#fff' : 'inherit' }}>Category:</label>
          <select className={` ${isDarkMode ? 'dark-text' : 'light-text'}`}
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
              }
            }}
            required
          >
            <option value="">Select a category</option>
            <option value="Technology">Technology</option>
            <option value="Fashion">Fashion</option>
            <option value="Finance">Finance</option>
            <option value="Sports">Sports</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="tags" style={{ color: isDarkMode ? '#fff' : 'inherit' }}>Tags:</label>
          <TagsInput tags={tags} setTags={setTags} isDarkMode={isDarkMode} />
        </div>
     
        <button
          className={`submit-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
          type="submit"
        >
          Add Blog Post
        </button>
      </form>
<FetchImage blogs={blogs} />
    </div>

  );
};

export default AddBlogForm;
