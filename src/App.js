import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import BlogDetailsPage from './components/BlogDetailsPage/BlogDetailsPage';
import Admin from './components/Admin/Admin/Admin';

import Home from "./components/Home/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Login from "./components/Login/Login";
import DeleteBlogs from './components/Admin/DeleteBlogs/DeleteBlogs';
import AddBlog from './components/Admin/AddBlog/AddBlog';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser)
  return (


    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <div className="App" style={{ backgroundColor: "#78bbbb" }}>
          <Navbar />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/details/:_id">
              <BlogDetailsPage />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin loggedInUser={loggedInUser} ></Admin>
            </PrivateRoute>
            <PrivateRoute path="/deleteBlog">
              <DeleteBlogs loggedInUser={loggedInUser} />
            </PrivateRoute>
            <PrivateRoute path="/addBlog">
              <AddBlog loggedInUser={loggedInUser} />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <footer style={{ backgroundColor: "#4C5057" }} className="text-center text-primary"> <small>Concept Blog &copy; Copyright {(new Date()).getFullYear()}. All Rights Reserved</small> </footer>
    </UserContext.Provider>

  );
}

export default App;
