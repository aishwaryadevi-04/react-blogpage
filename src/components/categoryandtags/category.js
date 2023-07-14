import React, { useState, useEffect } from 'react';
import BlogDetails from '../home/blogdata';
import './category.css'; // Import your CSS file for styling

const TagsInput = ({ selectedTags, onTagsChange, isDarkMode }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      const tag = inputValue.trim();
      setInputValue('');
      onTagsChange([...selectedTags, tag]);
    }
  };

  const handleTagDelete = (tag) => {
    const updatedTags = selectedTags.filter((t) => t !== tag);
    onTagsChange(updatedTags);
  };

  return (
    <div className="tags-input-container">
      <div className="tags-container">
        {selectedTags.map((tag, index) => (
          <div key={index} className="tag">
            {tag}
            <span className="delete-tag" onClick={() => handleTagDelete(tag)}>
              &#x2715;
            </span>
          </div>
        ))}
      </div>
      <input className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}

        type="text"

        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

const CategoryAndTags = ({ blogs, isDarkMode, toggleDarkMode }) => {

  const [category, setCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };

  const handleTagInputChange = (tags) => {
    setSelectedTags(tags);
  };

  useEffect(() => {
    const selectedCategories = category ? [category] : [];
    // Filter the data based on selectedCategories and selectedTags
    let filteredData = [];

    if (selectedCategories.length === 0 && selectedTags.length === 0) {

      filteredData = blogs;
    } else {
      filteredData = blogs.filter((blog) => {
        const categoryMatch =
          selectedCategories.length === 0 || selectedCategories.includes(blog.category);
        const tagsMatch =
          selectedTags.length === 0 || selectedTags.some((tag) => blog.tags.includes(tag));

        return categoryMatch && tagsMatch;
      });
    }

    setFilteredData(filteredData);

  }, [blogs, category, selectedTags]);

  return (
    <div className={`category-tags-container  ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h5 style={{ color: isDarkMode ? '#fff' : 'inherit' }}>Select a Category:</h5>
      <select className={`category-select ${isDarkMode ? 'dark-mode' : ''}`} value={category} onChange={handleCategoryChange}>

        <option value="">Select Category</option>
        <option value="Technology">Technology</option>
        <option value="Sports">Sports</option>
        <option value="Fashion">Fashion</option>
        <option value="Business">Business</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Education">Education</option>
        <option value="Health">Health</option>
      </select>

      <h5>Tags:</h5>
      <TagsInput selectedTags={selectedTags} onTagsChange={handleTagInputChange} isDarkMode={isDarkMode} />

      <BlogDetails blogData={filteredData} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default CategoryAndTags;
