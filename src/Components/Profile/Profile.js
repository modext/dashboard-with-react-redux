import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../redux/userSlice.tsx";
import classes from "./Profile.module.css";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (name === "") {
      setName("");
      setEmail("");
      setBio("");
      setJobTitle("");
    } else {
      dispatch(
        update({
          name,
          email,
          bio,
          jobTitle,
        })
      );
      setName("");
      setEmail("");
      setBio("");
      setJobTitle("");
    }
  };

  console.log(email);
  console.log(name);
  console.log(bio);

  return (
    <div className={classes.profile}>
      <h1>Update Info</h1>
      <form className={classes.wrapper}>
        <div className={classes.input}>
          <p>Display Name</p>
          <input
            type="text"
            placeholder="Display Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.input}>
          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.input}>
          <p>Your Bio</p>
          <input
            type="text"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className={classes.input}>
          <p>Job Title</p>
          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <button className={classes.updateBtn} onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;
