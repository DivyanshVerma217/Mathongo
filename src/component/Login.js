import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import icon1 from "../img/main.png";
import icon2 from "../img/Vector (1).png";
import Footer from "./Footer";

function Login({ myuser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("mysignup -> ", email, password);

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      console.log(result);
    } catch (err) {
      alert("USER NOT SIGNED IN / PLEASE SIGN UP");
    }
  };

  useEffect(() => {
    if (myuser) {
      console.log(myuser);
      console.log("hey i am here");
      navigate("home");
    }
  }, [myuser]);

  return (
    <div className="flex lg:flex-row flex-col">
      <div className="">
        <Navbar />
        <div className="p-2 sm:max-w-2xl   m-auto ">
          <div className="flex mt-20 flex-col p-4 w-screen  h-max max-w-2xl">
            <h1 className=" text-3xl font-bold flex  justify-center items-center">
              Sign in to Overpay
            </h1>
            <h2 className=" text-xl mt-4  flex  justify-center items-center">
              Send, spend and save smarter
            </h2>
          </div>
          <div
            style={{ width: "29rem" }}
            className="flex p-4  max-w-xl m-auto flex-grow items-center  bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md"
          >
            <input
              className="flex-grow text-base bg-transparent outline-none "
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div
            style={{ width: "29rem" }}
            className="flex p-4 mt-6 max-w-xl m-auto flex-grow items-center  bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md"
          >
            <input
              className="flex-grow text-base bg-transparent outline-none "
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <br />
          <br />
          <button
            style={{ width: "29rem" }}
            className="flex items-center text-center justify-center text-white bg-[#194BFB] p-4 rounded-lg max-w-xl m-auto border-2"
            type="button"
            onClick={handleSubmit}
          >
            Login
          </button>
          <br />
          <br />
          <div
            style={{ width: "29rem" }}
            className="flex max-w-xl m-auto justify-center"
          >
            Don't have an account?
            <button
              className="font-semibold "
              type="button"
              onClick={() => {
                navigate("/signup");
              }}
            >
              SignUp
            </button>
          </div>
        </div>
        <Footer/>
      </div>
      <div className=" flex invisible lg:visible  flex-col p-2 bg-[#194BFB] max-w-2xl lg:max-w-3xl ml-auto h-screen  w-screen">
        <img
          className=" h-3/5 w-9/12 ml:6  lg:ml-32 mt-0 flex"
          src={icon1}
          alt=""
        />
        <h1 className="text-white text-3xl font-bold flex  justify-center items-center">
          Get better with money
        </h1>
        <p className="text-white text-xl font-xl max-w-xl m-auto flex text-center justify-center items-center">
          Overpay help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early.
          Get a $20 bonus when you receive qualifying direct deposits
        </p>
        <img className="h-24 w-24 mb-0 mt-10 p-4" src={icon2} alt="" />
      </div>
    </div>
  );
}

export default Login;

