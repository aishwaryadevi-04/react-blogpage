import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/blogs.css';
import '../header'

import { useNavigate } from 'react-router-dom';
const Posts = ({ blog, isDarkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const navigateToBlog = () => {
    console.log(blog);
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  return (
    <div className={`col-12 col-md-6 col-lg-4 ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className={`card border-primary card-custom ${isDarkMode ? 'dark-mode-card' : ''}`}>
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

          <img
            onClick={navigateToBlog}
            className="card-img-top image-fade"
            src={blog.imageUrl}
            alt="img"
            onError={(e) => {
              e.target.src = 'https://wallpaperaccess.com/full/2112542.jpg';
              console.log(e);
            }}
          />
          <button
            className={`btn btn-primary custom-button-style ${isDarkMode ? 'dark-mode-button' : ''}`}
            style={{ height: 30, width: 110, position: 'absolute', top: 10, left: 10 }}
          >
            {blog.category}
          </button>
          <div className={`card-body overlay ${isDarkMode ? 'dark-mode-cards' : ''}`} >
            <p className={`card-text ${isDarkMode ? 'dark-mode-card-text' : ''}`} >
              {blog.title}
            </p>
            <div className="tags-container">
              {blog.tags.map((tag, index) => (
                <span className={`tag ${isDarkMode ? 'dark-mode-tag' : ''}`}
                  key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Posts;
