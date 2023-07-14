import Posts from './posts'
import './styles/blogs.css'
const BlogDetails = ({ blogData, isDarkMode, toggleDarkMode }) => {
    if (!blogData || blogData.length === 0) {
        return <div>No blogs available</div>;
    }

    return (
        <div className={`full-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <div className="row">
                    {blogData.map((blog) => (
                        <Posts key={blog.id} blog={blog} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
