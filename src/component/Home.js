import React, { useEffect, useState } from "react";
import { auth, storage } from "../Firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { Avatar } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home({ myuser }) {
  const navigate = useNavigate();
  const [username, setuserName] = useState("");
  const [updatedusername, setUpdateedUserName] = useState("");
  const [imageurl, seturl] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (myuser) {
      setuserName(myuser.multiFactor.user.displayName);
      seturl(myuser.multiFactor.user.photoURL);
    } else {
      navigate("/");
    }
  }, [myuser]);

  let file = [];

  return (
    <div>
     
      <Navbar/>

      <div className="mb-6 px-2">
        <div className="max-w-2xl  m-auto border-2  rounded-lg shadow-lg shadow-[#5d6a83]">
          <div className="p-2">
            <h3 className="text-center text-5xl"> Welcome Back!!</h3>

            <br />

            <div className="flex flex-col justify-center items-center">
              <Avatar
                className=""
                src={imageurl}
                alt="blog title"
                sx={{ width: 120, height: 120 }}
              />
              <h1 className="text-2xl m-6 font-bold">
                <label for="img">Name : {username}</label>
              </h1>

              <input
                type="file"
                id="img"
                name="img"
                onChange={(e) => {
                  file = e.target.files[0];
                }}
                accept="image/*"
              />
              <br />

              <button
                className=" border-2  px-2 rounded-lg bg-[#194BFB] text-white hover:bg-white hover:text-black   "
                type="button"
                
                onClick={() => {
                    alert("Profile pic is getting updated...Please wait!!")
                  console.log(file);
                  var uploadTask = storage
                    .ref()
                    .child(username + file.name)
                    .put(file);
                  uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                      var progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                      console.log("Upload is " + progress + "% done");
                      if (progress == `100`)
                        console.log("image uploaded complete");
                    },
                    (error) => {
                      console.log(error);
                    },
                    () => {
                      uploadTask.snapshot.ref
                        .getDownloadURL()
                        .then((downloadURL) => {
                          console.log("File available at", downloadURL);
                          seturl(downloadURL);
                          const auth = getAuth();
                          updateProfile(auth.currentUser, {
                            photoURL: downloadURL,
                          })
                            .then((res) => {
                              console.log(res);
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        });
                    }
                  );
                }}
              >
                UPLOAD
              </button>
            </div>
            <br />
            <br />
            <div className="flex flex-row justify-center items-center">
              <div>
                <input
                  placeholder="Enter name to update"
                  className=" border-b-2 px-2 placeholder-gray-500  outline-none"
                  type="text"
                  value={updatedusername}
                  onChange={(e) => {
                    setUpdateedUserName(e.target.value);
                  }}
                />
                <button
                  className="border-2 border-black ml-2  px-2 rounded-lg text-white hover:bg-white hover:text-black bg-[#194BFB] "
                  type="text"
                  onClick={(e) => {
                    setuserName(updatedusername);
                    const auth = getAuth();
                    updateProfile(auth.currentUser, {
                      displayName: updatedusername,
                    })
                      .then((res) => console.log(res))
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  Update Name
                </button>
              </div>
            </div>
            <br />
            <div className="flex flex-col items-center">
              <button
                className="border-2 border-black p-2 px-2 rounded-lg text-white hover:bg-white hover:text-black  bg-[#194BFB]"
                type="button"
                onClick={() => {
                  auth.signOut();
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
