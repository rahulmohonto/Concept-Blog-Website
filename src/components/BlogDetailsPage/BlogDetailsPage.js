import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App'
import { useParams } from 'react-router-dom';
import FakeData from '../FakeData/FakeData.json';
import './BlogDetailsPage.css'


const BlogDetailsPage = () => {

    const { _id } = useParams();
    // console.log(_id)
    const [details, setDetails] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        setDetails(FakeData)
        // console.log(details)
    }, [details])


    const result = details.filter(element => (element._id === _id))
    console.log(result)


    return (
        <section className="detail-container mt-5">
            <div className="inside">
                <h2 className="">Welcome Rahul, This is blog details page. of {result[0] && result[0].mainTitle}</h2>
            </div>
        </section>
    );
};

export default BlogDetailsPage;