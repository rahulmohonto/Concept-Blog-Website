import React, { useContext, useState, useEffect } from 'react';
import DeleteBlogs from '../DeleteBlogs/DeleteBlogs';
import { UserContext } from '../../../App';
import './Admin.css';
// import { useLocation } from "react-router";
import {
    BrowserRouter as Router,
    Switch,

} from "react-router-dom";
import AddBlog from '../AddBlog/AddBlog';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
const Admin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);
    const [isAdmin, setIsAdmin] = useState(false);
    // const history = useHistory();
    // const location = useLocation();
    // const { from } = location.state || { from: { pathname: "/" } };
    useEffect(() => {

        fetch(`https://frozen-ridge-03695.herokuapp.com/isAdmin`)
            .then(res => res.json())
            .then(data => {
                const result = data.find(admin =>
                    admin.email === loggedInUser?.email

                );
              
                if (result) {
                    setIsAdmin(true);
  console.log(isAdmin)
                }

                else {
                    setIsAdmin(true);

                }

            }

            )
    }, [loggedInUser.email,isAdmin]);


    return (
        <section className="admin-container">
            <div className="navbar-holder">
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid d-flex align-items-center justify-content-center">
                        {isAdmin && <div>
                            <a className="navbar-brand" href="/addBlog">Add Blogs</a>
                            <a className="navbar-brand" href="/deleteBlog">Delete Blogs</a>
                        </div>}
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
        </section>
    );
};

export default Admin;