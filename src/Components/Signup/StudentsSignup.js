import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import firebaseStudent from "../../Services/firebaseStudent";
import "./Signup.css";

const StudentsSignup = (props) => {
  let db = firebaseStudent.firestore();
  const [error, setError] = useState("");
  const [userDetails, setUserDetails] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const changeHandler = (event) => {
    let val = event.target.value;
    setUserDetails((prevState) => {
      return {
        ...prevState,
        [event.target.name]: val
      };
    });
  };

  // new user signup
  const signUpAuth = (event) => {
    event.preventDefault();
    // console.log(event.target);
    // console.log(userDetails.password.length);
    if (userDetails.password !== userDetails.confirmPassword) {
      setError("Passwords do not match");
    } else if (
      userDetails.password === "" ||
      userDetails.confirmPassword === ""
    ) {
      setError("Enter valid passwords");
    } else if (
      userDetails.password.length < 8 ||
      userDetails.confirmPassword.length < 8
    ) {
      setError("Password length should be atleast 8.");
    }
    // else if (!userDetails.phone.match("+[0-9]{10}")) {
    //   setError("Phone number should not contain alphabets.");
    // }
    else {
      // props.history.replace("/");
      // console.log(props);
      // console.log("check email already exist and success", userDetails);
      // check the email is already registered
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          userDetails.email.trim(),
          userDetails.password.trim()
        )
        .then((userCred) => {
          let studentId = userCred.user.uid;
          const user = firebase.auth().currentUser;
          user.updateProfile({
            displayName: userDetails.name,
            photoURL: "https://www.w3schools.com/howto/img_avatar.png"
          });
          // signed-in
          // const docId = userCred.user.uid;
          // store other data's in firestore
          db.collection("onlineCourseUsers")
            .doc(studentId)
            .set({
              id: studentId,
              fname: userDetails.fname,
              lname: userDetails.lname,
              email: userDetails.email,
              phone: userDetails.phone,
              password: userDetails.password
              // profile_image: "https://www.w3schools.com/howto/img_avatar.png"
            })
            .then((docRef) => {
              setError("");
              setUserDetails({
                id: "",
                fname: "",
                lname: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: ""
              });
              console.log("successfully updated to firestore.");
              props.history.replace("/"); // push to login
            })
            .catch((e) => console.log(e, "firestore"));
        })
        .catch((e) => {
          if (e.code === "auth/email-already-in-use") {
            setError("Email already exists!!! Try with different email.");
            setUserDetails({
              id: userDetails.id,
              fname: userDetails.fname,
              lname: userDetails.lname,
              email: "",
              phone: userDetails.phone,
              password: "",
              confirmPassword: ""
            });
          } else {
            console.log(e, "create_authentication");
            setError("");
            setUserDetails({
              id: "",
              fname: "",
              lname: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: ""
            });
          }
        });
      // other things
    }
  };

  return (
    <>
      <section className="signup-page">
        <div className="container-fluid">
          <div className="container">
            <div className="title">Student signup</div>
            <div className="content">
              <form name="fname" onSubmit={signUpAuth}>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">First Name</span>
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      id="fname"
                      name="fname"
                      required
                      autoFocus
                      onChange={changeHandler}
                      value={userDetails.fname}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Last Name</span>
                    <input
                      type="text"
                      placeholder="Enter your Last Name"
                      id="lname"
                      name="lname"
                      required
                      onChange={changeHandler}
                      value={userDetails.lname}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      id="email"
                      name="email"
                      required
                      onChange={changeHandler}
                      value={userDetails.email}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Phone Number</span>
                    <input
                      type="tel"
                      placeholder="Enter your number"
                      id="phone"
                      name="phone"
                      required
                      onChange={changeHandler}
                      value={userDetails.phone}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                      name="password"
                      required
                      onChange={changeHandler}
                      value={userDetails.password}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Confirm Password</span>
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      id="confirmPassword"
                      name="confirmPassword"
                      required
                      onChange={changeHandler}
                      value={userDetails.confirmPassword}
                    />
                  </div>
                </div>
                <div className="button">
                  <button className="btn btn-primary" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const InstitutionSignup = () => {
  return (
    <>
      <section className="signup-page">
        <div className="container-fluid">
          <div className="container">
            <div className="title">Institution Signup</div>
            <div className="content">
              <form action="#" name="fname">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Institute Name</span>
                    <input
                      type="text"
                      placeholder="Enter your Institute Name"
                      id="iname"
                      name="i_name"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Username</span>
                    <input
                      type="text"
                      placeholder="Enter your Username"
                      id="uname"
                      name="u_name"
                      required
                    />
                  </div>
                  <div className="input-box2">
                    <span className="details">Address</span>
                    <div className="input">
                      <textarea
                        placeholder="Enter Your Address"
                        name="adds"
                        id="add"
                        cols="45"
                        style={{ maxWidth: "100%;" }}
                        rows="4"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      id="email"
                      name="emailid"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Phone Number</span>
                    <input
                      type="text"
                      placeholder="Enter your number"
                      id="ph"
                      name="p_no"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      id="pass"
                      name="pas"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Confirm Password</span>
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      id="cpass"
                      name="c_pas"
                      required
                    />
                  </div>
                </div>
                <div className="button">
                  <button type="button" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Signup = (props) => {
  return (
    <>
      <StudentsSignup {...props} />
      {/* <InstitutionSignup /> */}
    </>
  );
};
export default Signup;
