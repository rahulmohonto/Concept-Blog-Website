import React, { useState, useEffect } from 'react';
import SingleBlogCard from './SingleBlogCard/SingleBlogCard';
import axios from 'axios';


const Cards = () => {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        async function fetchData() {
            await axios.get('https://frozen-ridge-03695.herokuapp.com/allBlogs')
                .then(res => setBlogs(res.data))
        }
        fetchData();
    }, [blogs])

    return (
        <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '4rem', backgroundColor: '#E6E1D0' }}>
            {
                blogs.map(data => <SingleBlogCard key={data.id} data={data}></SingleBlogCard>)
            }

        </section>
    );
};

export default Cards;