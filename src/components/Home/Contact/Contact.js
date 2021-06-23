import React from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import './Contact.css';

const Contact = () => {


    function sendMeEmail(e) {
        init("user_ktBBG3kmWwHAVHbd1y3Pz");
        e.preventDefault();

        emailjs.sendForm('service_brpql3f', 'template_se3cumu', e.target, 'user_ktBBG3kmWwHAVHbd1y3Pz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <section id="contact-section" className="container-fluid contact-section">
            <div className="contact-header">
                <h2 className="head-hloder"> CONTACT US</h2>
            </div>
            <div className="col-md-6 col-sm-8 col-lg-6 col-sx-12 fadeInLeft shadow rounded p-2 form-holder" data-wow-offset="50" data-wow-delay="0.9s">
                <form onSubmit={sendMeEmail} action="#" method="post">
                    <label>NAME</label>
                    <input name="fullname" type="text" class="form-control" id="fullname" />

                    <label>EMAIL</label>
                    <input name="email" type="email" class="form-control" id="email" />

                    <label>MESSAGE</label>
                    <textarea name="message" rows="4" class="form-control" id="message"></textarea>
                    <br />
                    <input type="submit" value="send" />
                </form>
            </div>
        </section>
    );
};

export default Contact;