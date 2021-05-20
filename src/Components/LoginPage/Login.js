import React, { useContext } from "react";
import img from "../../images/login.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        // storeAuthToken();
        history.replace(from);
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // const storeAuthToken = () => {
  //   firebase
  //     .auth()
  //     .currentUser.getIdToken(true)
  //     .then(function (idToken) {
  //       sessionStorage.setItem("token", idToken);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5 text-center">
          <h3 className="my-4 green-font">Sign in to continue!</h3>
          <button
            className="btn green-color text-white fw-bold"
            onClick={handleSignIn}
          >
            <FontAwesomeIcon icon={faGoogle} className=" gray-font icon" />{" "}
            Google SignIn
          </button>
          <div>
            {" "}
            <button className="btn green-color text-white fw-bold mt-3">
              <Link to="/home">Go to home</Link>
            </button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
