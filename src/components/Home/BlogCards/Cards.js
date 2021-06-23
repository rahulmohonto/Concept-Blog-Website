import React from 'react';
import SingleBlogCard from './SingleBlogCard/SingleBlogCard';
import FakeData from '../../FakeData/FakeData.json';
const Cards = () => {
    return (
        <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '4rem', backgroundColor: '#E6E1D0' }}>
            {
                FakeData.map(data => <SingleBlogCard key={data.id} data={data}></SingleBlogCard>)
            }

        </section>
    );
};

export default Cards;