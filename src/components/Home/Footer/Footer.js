import React from 'react';
import './Footer.css';
// import FooterBottom from '../FooterBottom/FooterBottom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterBottom from '../FooterBottom/FooterBotttom'

const Footer = () => {
    const footerData = [
        { name: "1201/ Green Park, East Budd, Texas, USA" },
        { name: "Phone: 09653845" },
        { name: "Email: conceptBlog541@Publish.com" },

    ]
    const aboutUs = [
        { name: "Anytime in matter of publishing numerious blogs, contents, thought and ideas, we present you the best spot for applying your creative writing intelligence." },
        { name: "", link: "//google.com/map" },

    ]
    // const quickLinks = [

    //     { name: "Publish Issues", link: "/#" },
    //     { name: "Site Info", link: "/#" },
    //     { name: "Contact", link: "/#" },
    //     { name: "Terms & Conditions", link: "/#" },
    //     { name: "Our Blog", link: "/#" },
    // ]
    const Company = [
        { name: "About US", link: "/#" },
        { name: "Location", link: "/#" },
        { name: "Support Center", link: "/#" },
        { name: "Terms Conditions", link: "/#" },
        { name: "FAQ", link: "/#" },
    ]
    return (
        <footer id="contact" className="footer-section clear-both">
            <div className="container pt-3">
                <div className="row py-5">
                    <FooterBottom key={1} menuTitle={""} menuItems={footerData} />
                    <FooterBottom key={2} menuTitle="About Site" menuItems={Company} />
                    {/* <FooterBottom key={3} menuTitle="Quick Links" menuItems={quickLinks} /> */}
                    <FooterBottom key={4} menuTitle="About Us" menuItems={aboutUs}>
                        {/* <ul className="social-media list-inline">
                            <li className="list-inline-item"><img src="https://img.icons8.com/wired/64/000000/facebook-new.png" /></li>
                            <li className="list-inline-item"><img src="https://img.icons8.com/wired/48/000000/google-plus.png" /></li>
                            <li className="list-inline-item"><img src="https://img.icons8.com/wired/64/000000/instagram-new.png" /></li>
                        </ul> */}
                    </FooterBottom>
                </div>
                <div className="row ">
                    <div className="d-flex align-items-center justify-content-center m-auto">
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="www.facebook.com"><img src="https://img.icons8.com/wired/64/000000/facebook-new.png" alt="/" /></a></li>
                            <li className="list-inline-item"><a href="www.google-plus.com"><img src="https://img.icons8.com/wired/48/000000/google-plus.png" alt="/" /></a></li>
                            <li className="list-inline-item"><a href="www.instagram.com"><img src="https://img.icons8.com/wired/64/000000/instagram-new.png" alt="/" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;