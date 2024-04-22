import React, { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, PROFILE_IMAGE } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
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
            photoURL: PROFILE_IMAGE,
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={BG_IMG} alt="bg-img" />
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
