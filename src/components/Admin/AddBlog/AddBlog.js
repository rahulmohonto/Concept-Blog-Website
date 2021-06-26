import axios from 'axios';
import React, { useState } from 'react';
import './AddBlog.css'
import { useForm } from "react-hook-form";

const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState({});
    console.log(loggedInUser, setLoggedInUser);
    const onSubmit = data => {
        console.log(data)
        const eventData = {
            _id: data._id,
            author: data.author,
            image1: image,
            content1: data.content1,
            type: data.type,
            publishDate: data.publishDate,
            mainTitle: data.mainTitle,
            // email: data.email
        }
        const url = `https://frozen-ridge-03695.herokuapp.com/addBlogs`;
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ eventData, email: loggedInUser.email })
        })
            .then(res => console.log('server side response :', res))

    };


    const handleImageUpload = event => {
        // console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'f2819ebc8fd1ee226642d4fd74590224')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImage(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    return (
        <section className="admin-blog-container">
            <h2 className="text-center">This is admin page for adding blog</h2>
            <div>
                <form className="field justify-content-center w-50 m-auto" onSubmit={handleSubmit(onSubmit)}>
                    <input name="author" className="form-control mb-1" required defaultValue="Your Name" {...register("author")} /><br />
                    {/* <input name="email" className="form-control mb-1" required defaultValue="Your Email Address" {...register("email")} /><br /> */}
                    <input name="type" className="form-control mb-1" required defaultValue="Content Type/Genre" {...register("type")} /><br />
                    <input name="mainTitle" className="form-control mb-1" required defaultValue="Main Title" {...register("mainTitle")} /><br />
                    <input name="publishDate" className="form-control mb-1" required defaultValue="Post Date" {...register("publishDate")} /><br />
                    <input name="content1" className="form-control mb-1" required defaultValue="Write content" type="text"  {...register("content1")} />
                    <br />

                    <br />
                    <input name="exampleRequired" required className="form-control" type="file" onChange={handleImageUpload} /><br />

                    <input className="form" type="submit" />
                </form>
            </div>
        </section>
    );
};

export default AddBlog;