import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DeleteBlogs.css'
import Table from 'react-bootstrap/Table';

const DeleteBlogs = () => {

    const [deleteBlogData, setDeleteBlogData] = useState([])

    useEffect(() => {
        async function fetchData() {
            await axios.get(`https://frozen-ridge-03695.herokuapp.com/allBlogs`)
                .then(res => setDeleteBlogData(res.data));
            console.log(deleteBlogData)
        }
        fetchData()
        console.log(deleteBlogData)
    }, [deleteBlogData])


    const deleteData = id => {
        // console.log(event.target)
        fetch(`https://frozen-ridge-03695.herokuapp.com/deleteBlogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('deleted successfully')
                }
                console.log('Blog Data Deleted', result)
            })
        console.log('button clicked', id)
    }

    const LoadAllBlogs = () => {
        // const container = document.getElementById('productHolder');

        return deleteBlogData.map(blogItem =>
        (
            <div className="container service-container">
                <div className="service-div">
                    <Table className="table table-bordered" striped bordered hover size="lg">

                        <tbody>
                            <tr>

                                <td> <strong>{blogItem.mainTitle}</strong></td>
                                <td> <span >{blogItem.type}</span></td>
                                <td><span>{blogItem.publishDate}</span></td>

                                <td><button className="service-delete-button" onClick={() => deleteData(blogItem._id)}>Delete Blog</button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
        )

    }




    return (
        <section className="AllBlogs-container-Admin mt-5">
            <div className="adminBlog-container mt-5">
                <table className="table table-bordered" size="lg">
                    <thead>
                        <tr>
                            <th >Content Title</th>
                            <th >Content Type/Genre</th>
                            <th >Published Date</th>
                            <th >Delete Button</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <LoadAllBlogs />
        </section>
    );
};

export default DeleteBlogs;