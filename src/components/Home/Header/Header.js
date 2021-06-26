import React from 'react';
import './Header.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';

const Header = () => {
    const getText = (name) => {
        const serachBlogs = document.getElementById('form-apart').value;
        console.log('clicked', serachBlogs === name);
    }

    return (
        <section className="header">

            <div className="header-container text-white">

                <div className="row">
                    <div className="col-12">
                        <div className="info-container">
                            <Fade top cascade> <h1 className="text-center firstText">Best Site To Publish Your
                            <Typical className="text-center" loop={Infinity} steps={['Thoughts', 3000, 'Concepts', 3000, 'Blogs', 3000, 'Ideas', 3000, 'Theories', 3000,]} />
                            </h1></Fade>
                            <Zoom delay={600} effect="fadeInUp">  <h4 className="text-center secondText">CONCEPT BLOG SITE</h4></Zoom>
                            <div className="search-container align-content-center mt-5">
                                <Jump delay={900} effect="easeIn">
                                    <Form id="form-apart" className="d-flex">
                                        <FormControl
                                            type="search"
                                            placeholder="Search"
                                            className="mr-4"
                                            aria-label="Search"
                                        />
                                        <Button onClick={() => getText()} variant="outline-success pl-3">Search</Button>
                                    </Form>
                                </Jump>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="dashed-line-box">
                <hr className="new1"></hr>
            </div>
            <h3 style={{ color: '#E6E1D0', fontSize: '46px', fontFamily: 'BazarMedium', fontWeight: '600' }} className="text-center m-3 p-3">See Posted Content</h3>
        </section>
    );
};

export default Header;