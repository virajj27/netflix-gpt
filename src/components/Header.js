import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, language } from "../utils/constants";
import { setGptSearch } from "../utils/gptSlice";
import { setLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
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

  const handleGptSearch = () => {
    dispatch(setGptSearch());
  };
  return (
    <div className="absolute md:fixed w-screen px-8 py-2 bg-gradient-to-b from-black  flex flex-col md:flex-row justify-between z-30">
      <img className="w-56 mx-auto md:mx-0" src={LOGO} alt="netflix-logo" />

      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="m-4 bg-black text-white  text-lg"
              onChange={handleLanguage}
            >
              {language.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-800 text-white px-7  py-2  my-5 rounded-lg hover:bg-opacity-80"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home page" : "Search"}
          </button>

          <img
            className="hidden md:block w-10 h-10 my-7 m-4 "
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
