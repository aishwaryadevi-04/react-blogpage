


import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import FetchImage from './components/home/fetchimage';
import CategoryAndTags from './components/categoryandtags/category';
import AddBlogForm from './components/addblog/addblog';
import blogData from './MOCK_DATA.json';
import BlogDetailsPage from './components/blogdetails/blog';
import DarkModeToggle from './darkmode/darkmode';

const App = () => {
    const [blogs, setBlogs] = useState(blogData);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const handleAddBlog = (newBlog) => {
        setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
        console.log(blogs);
    };

    return (
        <BrowserRouter>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            {/* <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> */}
            <FetchImage blogs={blogs} setBlogs={setBlogs} />
            <Routes>
                <Route exact path="/" element={<CategoryAndTags blogs={blogs} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
                <Route exact
                    path="/add"
                    element={<AddBlogForm blogs={blogs} handleAddBlog={handleAddBlog} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
                />
                <Route
                    exact path="/blog/:id"
                    element={<BlogDetailsPage blogs={blogs} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
