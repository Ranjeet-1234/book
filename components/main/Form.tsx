"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import "./Form.css";


const HoroscopeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    timeOfBirth: "",
    gender: "",
    state: "",
    city: "",
  });

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async(e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      // Replace with your actual API endpoint
      const response = await axios.post("https://back-1-0yhi.onrender.com/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Handle the response from the server
      console.log("Server response:", response.data);
      alert("Form submitted successfully!");
      // window.location.href = "http://localhost:3000/";

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div id="formto" className="horoscope-container">
      <div className="image-section">
        {/* <img
          className="imageOne"
          style={{ height: "200px", width: "200px" }}
          src="./img3.png"
          alt=""
        /> */}

        <Image
          className="imageChange"
          style={{
            marginLeft: "150px",
            marginTop: "-100px",
          }}
          src="/img3.png"
          alt="Rotating Image"
          width={2000} // Set the width
          height={2000} // Set the height
        />
      </div>
      <div className="horoscope-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label
              style={{
                fontSize: "25px",
              }}
            >
              Name
            </label>
            <input
              style={{
                width: "400px",
                fontSize: "17px",
              }}
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label
              style={{
                fontSize: "25px",
              }}
            >
              Date of Birth
            </label>
            <input
              style={{
                width: "400px",
                fontSize: "17px",
              }}
              type="text"
              name="dob"
              placeholder="DD/MM/YYYY"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label
              style={{
                fontSize: "25px",
              }}
            >
              Time of Birth
            </label>
            <input
              style={{
                width: "400px",
                fontSize: "17px",
              }}
              type="text"
              name="timeOfBirth"
              placeholder="HH:MM"
              value={formData.timeOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label
              style={{
                fontSize: "25px",
              }}
            >
              Gender
            </label>
            <select
              style={{
                width: "400px",
                fontSize: "17px",
                backgroundColor: "black",
              }}
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="none">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-group">
            <label
              style={{
                fontSize: "25px",
              }}
            >
              State
            </label>
            <input
              style={{
                width: "400px",
                fontSize: "17px",
                backgroundColor: "black",
              }}
              type="text"
              name="state"
              placeholder="Enter your state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label
              style={{
                fontSize: "25px",
              }}
            >
              City
            </label>
            <input
              style={{
                width: "400px",
                fontSize: "17px",
                backgroundColor: "black",
              }}
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <button
            style={{
              width: "400px",
              fontSize: "17px",
              backgroundColor: "black",
            }}
            type="submit"
            className="submit-button"
          >
            Generate Horoscope
          </button>
        </form>
      </div>
    </div>
  );
};

export default HoroscopeForm;
