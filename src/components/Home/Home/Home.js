import React from 'react';
import BlogDetailsPage from '../../BlogDetailsPage/BlogDetailsPage';
import Cards from '../BlogCards/Cards';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <div class="dashed-line-box">
                <hr class="new1"></hr>
            </div>
            <Header />
            <div class="dashed-line-box">
                <hr class="new1"></hr>
            </div>
            <Cards />
            <div class="dashed-line-box">
                <hr class="new1"></hr>
            </div>
            <Contact />
            <div class="dashed-line-box">
                <hr class="new1"></hr>
            </div>
            <Footer />
            <div class="dashed-line-box">
                <hr class="new1"></hr>
            </div>
        </div>
    );
};

export default Home;