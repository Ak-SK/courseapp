import React, { useState, useEffect } from "react";
import { auth, db } from "../Services/firebase";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext({
  user: {
    id: "",
    name: "",
    email: "",
    phone: "",
    dob: "",
    photoUrl: "", // from auth
    parentPhone: "",
    preferences: [],
    bookmarks: [],
    cart: [],
    orders: [],
    completedOrders: []
  },
  isLoggedIn: false,
  setUser: (user) => {},
  setIsLoggedIn: () => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  // in db collection will be students, but in all other places it willl be user in end-user application
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        // refreshed the page, not logged out yet
        let userId = user.uid;
        let photoUrl = user.photoURL;
        db.collection("students")
          .doc(userId)
          .get()
          .then((doc) => {
            let user = doc.data();
            setIsLoggedIn(true);
            setUser({
              ...user,
              photoUrl: photoUrl
            });
            // should also capture ongoing courses that will get later
          })
          .catch((e) => console.log("auth-context", e));
      } else {
        // logged out, so no user
        console.log("user is not logged in");
        history.replace("/login");
      }
    });
  }, []);

  const setMyUser = (user) => {
    setUser(user);
  };

  const setLoggedIn = (status) => {
    setIsLoggedIn(status);
  };

  const logoutHandler = () => {
    // Assume that the user/student id is set, when logged in
    // so using that id itself, to get that document
    db.collection("students")
      .doc(user.id)
      .update({
        isLoggedIn: false
      })
      .then(() => {
        // auth is here bcs, if we logout using auth, then we cant access the firestore
        auth
          .signOut()
          .then(() => {
            console.log("signed out successfully!!!");
            // delete the userId, which we save in localstorage
            setIsLoggedIn(false);
            localStorage.removeItem("userId");
            history.replace("/login");
          })
          .catch((e) => console.log("logout-authContext", e));
      })
      .catch((e) => console.log("logout-authContext", e));
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setMyUser,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setLoggedIn,
        logout: logoutHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
