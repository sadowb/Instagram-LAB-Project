import "./Nav.css";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiCompassDiscoverLine } from "react-icons/ri";
import Logo from "./Logo.png";
import axios from "axios";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

function Nav() {
  const [formData, setFormData] = useState({
    user_id: "",
    caption: "",
    image_url: "",
  }); // initializing state for form data

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }; // handeling changes in form input fields

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/createPosts",
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }; // handleing form submission and makiing a post request using axios

  const [open, setOpen] = React.useState(false); // initializing state for dialog open/Close

  const handleClickToOpen = () => {
    setOpen(true);
  }; // handeling click to chose the dialog

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <div className="nav">
      <Dialog open={open} onClose={handleToClose}>
        {/* Dialog content for creating a new post */}
        <DialogTitle>{"select all or it wont work"}</DialogTitle>
        <DialogContent>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <select
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
              required
            >
              <option value="">Select User</option>
              <option value="1">Giausar</option>
              <option value="2">Mobo</option>
              <option value="3">Nino</option>
              {/* Add more options for other users */}
            </select>
            <br />
            <input
              name="caption"
              value={formData.caption}
              onChange={handleChange}
              placeholder="Enter Comment"
              required
            />
            <br />
            <input
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              placeholder="Enter URL"
              required
            />
            <br />
             {/* Buttons for home, search, and discover */}
            <Button type="submit" onClick={handleToClose}>
              Submit
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <img src={Logo} className="logo" alt="Logo" />
      <div className="buttons">
        <button className="btn">
          <FaHome size={"1.5rem"} />
          <span>Home</span>
        </button>
        <button className="btn">
          <CiSearch size={"1.5rem"} />
          <span>Search</span>
        </button>
        <button className="btn">
          <RiCompassDiscoverLine size={"1.5rem"} />
          <span>Discover</span>
        </button>
        <button className="btn" onClick={handleClickToOpen}>
          <span>Create a new Post</span>
        </button>
      </div>
    </div>
  );
}

export default Nav;