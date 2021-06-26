import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../App'
import { useParams } from 'react-router-dom';
// import FakeData from '../FakeData/FakeData.json';
import './BlogDetailsPage.css'


const BlogDetailsPage = () => {

    const { _id } = useParams();
    // console.log(_id)
    const [details, setDetails] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser, setLoggedInUser)

    useEffect(() => {
        async function fetchData() {
            await axios.get('https://frozen-ridge-03695.herokuapp.com/allBlogs')
                .then(res => setDetails(res.data))
        }
        fetchData();
    }, [details])


    const result = details.filter(element => (element._id === _id))
    console.log(result)


    return (
        <section className="detail-container mt-5">
            <div className="inside">
                {/* <h2 className="">Welcome, This is blog details page of {result[0] && result[0].mainTitle}</h2> */}

                <div className="row">
                    <div className="head-type-container">
                        <h2 className="text-center m-auto pb-2 pt-4">{result[0] && result[0].header}</h2>
                        <p className="text-center m-auto">By {result[0] && result[0].publishDate} || {result[0] && result[0].type}</p>
                    </div>
                    <div className="head-iamge-container">
                        <img src={result[0] && result[0].image1} alt="/" className="header-image" />
                    </div>
                    <div className="dashed-line-box">
                        <hr className="new1"></hr>
                    </div>
                    <div className="main-body">
                        <div style={{ backgroundColor: '#383A3C' }} className="shadow-lg w-75 m-auto">
                            <h4 className="m-3">{result[0] && result[0].contentTitle1}</h4>
                            <div className="dashed-line-box">
                                <hr className="new1"></hr>
                            </div>
                            <p className="text-justify p-4">{result[0] && result[0].content1}</p>
                        </div>
                        <div style={{ backgroundColor: '#383A3C' }} className="shadow-lg w-75 m-auto">
                            <h4 className="m-3">{result[0] && result[0].contentTitle2}</h4>
                            <div className="dashed-line-box">
                                <hr className="new1"></hr>
                            </div>
                            <p className="text-justify p-4">{result[0] && result[0].content2}</p>
                        </div>
                        <div style={{ backgroundColor: '#383A3C' }} className="shadow-lg w-75 m-auto">
                            <h4 className="m-3 p-1">{result[0] && result[0].contentTitle3}</h4>
                            <div className="dashed-line-box">
                                <hr className="new1"></hr>
                            </div>
                            <p className="text-justify p-4">{result[0] && result[0].content3}</p>
                        </div>
                        <div className="w-75 m-auto">
                            <p style={{ color: '#af9d61', fontSize: '18px' }} className="text-end">----{result[0] && result[0].comments}</p>
                        </div>

                        <figure className="text-center pb-4">

                            <figcaption style={{ color: '#af9d61', fontSize: '20px' }} className="blockquote-footer mt-4">
                                Written BY <cite style={{ color: '#af9d61', fontSize: '20px' }} title="Source Title">{result[0] && result[0].author}</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="dashed-line-box">
                <hr className="new1"></hr>
            </div>
        </section >
    );
};

export default BlogDetailsPage;