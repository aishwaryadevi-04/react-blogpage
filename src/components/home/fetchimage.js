
import React, { useEffect } from 'react';
import axios from 'axios';

const FetchImage = ({ blogs, setBlogs }) => {
  const accessKey = 'XGNAAV1ImuCpEkZsITer1maM-nKnHJPhoQO_O6f9-FQ';
  const searchQuery = 'technology';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${accessKey}`);
        const fetchedImages = response.data.results;

        
        const updatedBlogs = blogs.map((blog, index) => {
          if (index < fetchedImages.length) {
           
            return {
              ...blog,
              imageUrl: fetchedImages[index].urls.regular
            };
          } else {
           
            return blog;
          }
        });

        setBlogs(updatedBlogs);

      } catch (error) {
        console.error('Error fetching images from Unsplash:', error);
      }
    };

    fetchData();
  }, [blogs, setBlogs]);

  return null;
};

export default FetchImage;
