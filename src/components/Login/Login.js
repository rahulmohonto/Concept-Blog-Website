import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import './Login.css';
import userImage from '../../images/user-group-296.png';
import Button from 'react-bootstrap/Button';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from "react-router";
// import { useDispatch } from 'react-redux';
// import { updateUserDetails } from '../../redux/actions/userActions';


const Login = () => {
    // const dispatch = useDispatch();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;

            const signedInUser = { name: displayName, email: email }
            setLoggedInUser(signedInUser);
            // console.log(loggedInUser)
            // storeAuthToken();
            history.replace(from);
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


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="login-container">
            <div className="row">
                <div className="login-form">
                    <div class="col wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.9s">
                        <div className="col d-flex justify-content-center align-items-center mt-4">
                            <img className="user-icon p-1" src={userImage} alt="/" /> <h3 className="text-center pt-3 pl-3 login-text">User Login</h3>
                        </div>

                        <form className="main-form justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" className="form-control one-form" defaultValue="Fullname" {...register("Fullname", { required: true })} /><br />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input type="email" className="form-control one-form" defaultValue="email" {...register("email", { required: true })} /><br />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input type="password" className="form-control one-form" defaultValue="password" {...register("password", { required: true })} /><br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <br />
                            <input className="form-control w-50" type="submit" />
                        </form>

                    </div>
                </div>
            </div>
            <div className="row icon-title-holder mt-5 text-center">
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
        </section>
    );
};

export default Login;