import React, { useState } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import icon1 from "../img/main.png";
import icon2 from "../img/Vector (1).png";


function Signup({ myuser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("mysignup -> ", email, password, name, lname);
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      console.log(result);
      await result.user.updateProfile({
        displayName: name,
      });
      alert("Succefully Signup");
      navigate("/home");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row  w-3/6">
        <div className="p-4">
          <Navbar />
          <div className=" flex flex-col p-4 bg-[#194BFB] max-w-2xl lg:max-w-3xl ml-auto h-100vh  w-screen">
            <img
              style={{ height: "320px", width: "20rem" }}
              className="m-6 ml:6 lg:ml-48 mt-0 flex"
              src={icon1}
              alt=""
            />
            <h1 className="text-white text-3xl font-bold flex  justify-center items-center">
              Speedy, Easy and Fast
            </h1>
            <p className="text-white text-xl max-w-xl m-auto font-xl flex text-center justify-center items-center">
              Overpay help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a $20 bonus when you receive qualifying direct deposits
            </p>
            <img className="h-20 w-20 mt-10" src={icon2} alt="" />
          </div>
        </div>
        <div className="p-2  m-auto ">
          <div className="flex mt-20 flex-col p-4 w-screen  h-max max-w-2xl">
            <h1 className=" text-3xl font-bold flex  justify-center items-center">
              Sign up for an account
            </h1>
            <h2 className=" text-xl mt-4  flex  justify-center items-center">
              Send, spend and save smarter
            </h2>
          </div>
          <div className="flex justify-between lg:justify-evenly max-w-lg m-auto">
            <div>
              <input
                required
                className="border-2 outline-none p-4 rounded-xl flex-grow text-base bg-transparent outline-none bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md "
                placeholder="FIRST NAME"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                className="border-2 outline-none p-4 rounded-xl flex-grow text-base bg-transparent outline-none bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md "
                placeholder="LAST NAME"
                type="text"
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
            </div>
          </div>
          <br />
          <div
            style={{ width: "29rem" }}
            className="flex p-4  max-w-xl m-auto flex-grow items-center  bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md"
          >
            <input
              required
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
              required
              className="flex-grow text-base bg-transparent outline-none "
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <p style={{ width: "29rem" }} className=" max-w-xl m-auto mt-6">
            By creating an account, you agreeing to our{" "}
            <span className="font-bold">Privacy Policy</span>, and{" "}
            <span className="font-bold">
              {" "}
              Electronics Communication Policy.
            </span>
          </p>
          <br />
          <button
            style={{ width: "29rem" }}
            className=" flex items-center text-center justify-center text-white bg-[#194BFB] p-4 rounded-lg max-w-xl m-auto border-2 "
            type="button"
            onClick={handleSubmit}
          >
            {" "}
            SignUp{" "}
          </button>

          <div
            style={{ width: "29rem" }}
            className=" mt-6  flex justify-center items center  max-w-xl m-auto  p-2"
          >
            <h3>If already have an account?</h3>
            <br />

            <button
              className="font-semibold  "
              type="button"
              onClick={() => {
                navigate("/");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
