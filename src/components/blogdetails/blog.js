import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './blog.css';

const BlogDetailsPage = ({ blogs, isDarkMode, toggleDarkMode }) => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      const comment = {
        id: comments.length + 1,
        content: newComment.trim(),
      };
      setComments((prevComments) => [...prevComments, comment]);
      setNewComment('');
    }
  };

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const getCurrentTime = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  };

  return (
    <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className={`blog-details ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <h2 className="blog-details__title">{blog.title}</h2>
        <img className="blog-details__image" src={blog.imageUrl} alt={blog.title} />
        <p className="blog-details__description">{blog.description}</p>
        <ul className={`blog-details__tags ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          {blog.tags.map((tag, index) => (
            <li key={index} className={`${isDarkMode ? 'dark-mode-text' : ''}`}>{tag}</li>
          ))}
        </ul>
        <p className="blog-details__description">{blog.body}</p>
        <form className="blog-details__comment-form" onSubmit={handleAddComment}>
          <input 
            className={`blog-details__comment-input ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button className={`dark-mode-toggle ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            Submit
          </button>
        </form>
        <ul className={`blog-details__comments ${isDarkMode ? 'dark-mode' : ''}`}>
          {comments.map((comment) => (
            <li key={comment.id} className="blog-details__comment">
              <div className="blog-details__comment-box">
                <p className={`blog-details__comment-content ${isDarkMode ? 'dark-mode-text' : ''}`}>{comment.content}</p>
                <span className="blog-details__comment-time">{getCurrentTime()}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
};

export default BlogDetailsPage;
