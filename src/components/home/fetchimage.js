import React, { useEffect } from 'react';
import axios from 'axios';

const FetchImage = ({ blogs, setBlogs }) => {
  const accessKey = 'XGNAAV1ImuCpEkZsITer1maM-nKnHJPhoQO_O6f9-FQ';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedBlogs = await Promise.all(
          blogs.map(async (blog) => {
            const response = await axios.get(
              `https://api.unsplash.com/search/photos?query=${blog.category}&client_id=${accessKey}`
            );
            const fetchedImages = response.data.results;

            if (fetchedImages.length > 0) {
              return {
                ...blog,
                imageUrl: fetchedImages[0].urls.regular,
              };
            } else {
              return blog;
            }
          })
        );

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
