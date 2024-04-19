import React, { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      //signUp
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/C4E03AQEEE_e9kU98Rg/profile-displayphoto-shrink_800_800/0/1664201603140?e=2147483647&v=beta&t=-anzvdkvWAMz3P-FYVcyMiTfGlounzF89DtwBpGgyms",
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          navigate("/");
        });
    } else {
      //signIn
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, displayName, email, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              displayName: displayName,
              email: email,
              photoURL: photoURL,
            })
          );
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          navigate("/");
        });
    }
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <form
        className="absolute p-14 bg-black w-4/12  my-36 mx-auto left-0 right-0 text-white rounded-md bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl my-4 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-md opacity-60 bg-black border"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="email address"
          className="p-4 my-4 w-full rounded-md opacity-60 bg-black border"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full rounded-md opacity-60 bg-black border"
        ></input>
        <p className="font-bold text-red-500 text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 text-white bg-red-700 w-full rounded-md font-bold"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <p className="mt-4 text-lg" onClick={toggleSignInForm}>
            New to Netflix?
            <span className="font-bold   cursor-pointer"> Sign up now.</span>
          </p>
        ) : (
          <p className="mt-4 text-lg" onClick={toggleSignInForm}>
            Already a user?
            <span className="font-bold   cursor-pointer"> Sign in now.</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
