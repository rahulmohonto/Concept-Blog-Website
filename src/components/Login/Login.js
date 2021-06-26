import React, { useContext } from 'react';

import './Login.css';
import userImage from '../../images/user-group-296.png';
import Button from 'react-bootstrap/Button';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { useHistory, useLocation } from "react-router";
// import { useHistory, useLocation } from 'react-router-dom';
// import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';



const Login = () => {

    // const [user, setUser] = useState({
    //     isSignedIn: false,
    //     name: '',
    //     email: '',
    //     password: '',
    //     photo: ''
    // });

    // initializeLoginFramework();

    // const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    console.log(loggedInUser)
    // const googleSignIn = () => {
    //     handleGoogleSignIn()
    //         .then(res => {
    //             handleResponse(res, true);
    //         })
    // }


    // const signOut = () => {
    //     handleSignOut()
    //         .then(res => {
    //             handleResponse(res, false);
    //         })
    // }

    // const handleResponse = (res, redirect) => {
    //     setUser(res);
    //     setLoggedInUser(res);
    //     if (redirect) {
    //         history.replace(from);
    //     }
    // }


    // const handleBlur = (e) => {
    //     let isFieldValid = true;
    //     if (e.target.name === 'email') {
    //         isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    //     }
    //     if (e.target.name === 'password') {
    //         const isPasswordValid = e.target.value.length > 6;
    //         const passwordHasNumber = /\d{1}/.test(e.target.value);
    //         isFieldValid = isPasswordValid && passwordHasNumber;
    //     }
    //     if (isFieldValid) {
    //         const newUserInfo = { ...user };
    //         newUserInfo[e.target.name] = e.target.value;
    //         setUser(newUserInfo);
    //     }
    // }


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }


    const { register, formState: { errors } } = useForm();
    // 

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;

            const signedInUser = { name: displayName, email: email }
            setLoggedInUser(signedInUser);
            console.log(loggedInUser)
            storeAuthToken();
            history.replace(from);

            // ...
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                // console.log(idToken)
            }).catch(function (error) {
                console.log(error)
            });
    }




    return (
        <section className="login-container">
            {/* {
                user.isSignedIn && <div className="mt-5">
                    <p>Welcome: {user.name}</p>
                    <p>Your email: {user.email}</p>

                </div>
            } */}

            <div className="row">
                <div className="login-form">
                    <div class="col wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.9s">
                        <div className="col d-flex justify-content-center align-items-center mt-4">
                            <img className="user-icon p-1" src={userImage} alt="/" /> <h3 className="text-center pt-3 pl-3 login-text">User Login</h3>
                        </div>


                        <div className="dashed-line-box">
                            <hr className="new1"></hr>
                        </div>


                        {/* <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                        <label htmlFor="newUser">New User Sign up</label> */}

                        <form className="main-form justify-content-center align-items-center" >
                            <input type="text" className="form-control one-form" defaultValue="Fullname" {...register("Fullname", { required: true })} /><br />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input type="email" className="form-control one-form" defaultValue="email" {...register("email", { required: true })} /><br />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input type="password" className="form-control one-form" defaultValue="password" {...register("password", { required: true })} /><br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <br />
                            <input type="submit" value={loggedInUser ? 'Signed In' : 'Sign Up'} />

                        </form>


                        {/* <form className="main-form justify-content-center align-items-center" onSubmit={handleSubmit}>
                            {newUser && <input className="form-control one-form" name="name" type="text" onBlur={handleBlur} placeholder="Your name" />}
                            <br />
                            <input className="form-control one-form" type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required />
                            <br />
                            <input className="form-control one-form" type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
                            <br />
                            <input type="submit" value={newUser ? 'Sign up' : 'Sign in'} />
                            {/* {user.isSignedin ? <Button onClick={signOut}>Sign Out</Button> : 'signed in'} 
                        </form> */}
                    </div>
                </div>
            </div>
            <div className="dashed-line-box m-2">
                <hr className="new1"></hr>
            </div>
            <div className="row icon-title-holder mt-5 text-center">
                {/* <Button onClick={signOut} className="btn btn-secondary">Sign Out</Button> */}
                <Button onClick={handleGoogleSignIn} className="btn btn-light">
                    <div className="col d-flex justify-content-center align-items-center ">

                        <div className="pr-4">
                            <img src="https://img.icons8.com/color/47/000000/google-logo.png" alt="/" />
                        </div>
                        <div className="google-login pl-4">
                            <h5 className="sign-text">Sign in With Google</h5>
                        </div>

                    </div>
                </Button>

            </div>
            <div className="row icon-title-holder mt-2 text-center">
                <Button className="btn btn-light">
                    <div className="col d-flex justify-content-center align-items-center ">
                        <div className="pr-4">
                            <img src="https://img.icons8.com/color/48/000000/facebook-circled--v4.png" alt="/" />
                        </div>
                        <div className="google-login pl-4">
                            <h5 className="sign-text">Sign in With FaceBook</h5>
                        </div>
                    </div>
                </Button>
            </div>
            <div className="dashed-line-box m-3">
                <hr className="new1"></hr>
            </div>
        </section>
    );
};

export default Login;