import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  //so basically instead of dispatching action to add or remove user from the store
  //multiple times for signIn ,signOut,signUp
  //we are using firebase's onAuthStateChanged method on one level top to check
  //if auth state has changed and dispatch add or remove user once and for all
  //also this method has to be called only once after rendering the element once
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
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
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className=" fixed w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between z-30">
      <img className="w-56" src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex p-2">
          <img
            className="w-10 h-10 my-7 m-4 "
            src={user.photoURL}
            alt=" profile-img"
          />

          <button onClick={handleSignOut} className="text-white font-bold">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
