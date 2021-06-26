import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteBlogs from '../DeleteBlogs/DeleteBlogs';
// import { UserContext } from '../../../App';
// import FakeData2 from '../../FakeData2/FakeData2.json'
import './Admin.css';
// import { useHistory, useLocation } from 'react-router-dom';
// import { useLocation } from "react-router";
import {
    BrowserRouter as Router,
    Switch,

} from "react-router-dom";
import AddBlog from '../AddBlog/AddBlog';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
const Admin = ({ loggedInUser }) => {

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [getAdmin, setGetAdmin] = useState([])
    // console.log(setLoggedInUser);
    console.log(loggedInUser);
    // const [isAdmin, setIsAdmin] = useState();
    // const history = useHistory();
    // const location = useLocation();
    // const { from } = location.state || { from: { pathname: "/" } };
    useEffect(() => {

        async function fetchData() {
            await axios.get(`https://frozen-ridge-03695.herokuapp.com/isAdmin`)
                .then(res => setGetAdmin(res.data))

        }
        fetchData();
    }, [getAdmin])
    // console.log(getAdmin)

    //                 const result = data.find(admin =>
    //                    admin.name === loggedInUser?.name

    //                 );
    // console.log(result)
    //                 if (result) {
    //                     setIsAdmin(true);
    //                     // history.replace(from)
    //                     console.log(isAdmin)
    //                 }

    //                 else {
    //                     setIsAdmin(false);

    //                 }

    //         }

    //         )
    // }, [getAdmin]);

    const result = getAdmin.filter(element => element.email === loggedInUser.email)
    // console.log(result)


    // const handleAdmin = () => {
    //     fetch("https://frozen-ridge-03695.herokuapp.com/addAdmins", {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(FakeData2)
    //     })
    // }

    return (

        <section className="admin-container mt-5">

            <div className="navbar-holder">
                <nav className="navbar navbar-light bg-light">
                    <h2 className="text-center m-auto">Welcome Dear {loggedInUser.name}</h2><br /><br />
                    <div className="container-fluid d-flex align-items-center justify-content-center">

                        {result.length ? <div>
                            <button className="btn btn-secondary"> <a className="navbar-brand" href="/addBlog">Add Blogs</a></button> &nbsp;&nbsp;
                            <button className="btn btn-secondary"> <a className="navbar-brand" href="/deleteBlog">Delete Blogs</a></button>
                        </div>
                            : "You Are Not Admin. Restricted For Admin Only"}
                    </div>
                </nav>
            </div>
            <Router>
                <Switch>
                    <PrivateRoute path="/deleteBlog">
                        <DeleteBlogs />
                    </PrivateRoute>
                    <PrivateRoute path="/addBlog">
                        <AddBlog />
                    </PrivateRoute>
                </Switch>

            </Router>
            {/* <button onClick={handleAdmin} className="btn btn-primary">Add Admin</button> */}

        </section>
    );
};

export default Admin;