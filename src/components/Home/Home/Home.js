import React from 'react';
// import BlogDetailsPage from '../../BlogDetailsPage/BlogDetailsPage';
import Cards from '../BlogCards/Cards';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <div className="dashed-line-box">
                <hr className="new1"></hr>
            </div>
            <Header />
            <div className="dashed-line-box">
                <hr className="new1"></hr>
            </div>
            <Cards />
            <div className="dashed-line-box">
                <hr className="new1"></hr>
            </div>
            <Contact />
            <div className="dashed-line-box">
                <hr className="new1"></hr>
            </div>
            <Footer />
            <div className="dashed-line-box">
                <hr className="new1"></hr>
            </div>
        </div>
    );
};

export default Home;