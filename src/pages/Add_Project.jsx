import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Add_Project() {
  const [data, setData] = useState({
    name: "",
    stack: "",
    link: "",
    description: "",
  });

  function handleChange(e) {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const apiCall = await fetch("https://harshavardhan-24-backend.onrender.com/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await apiCall;
      toast.promise(
        Promise.resolve(res),
        {
          pending: "Data being updated into the Database.",
          success: "Data successfully updated into Database",
          error: "There was an error while uploading data.",
        },
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    } catch (error) {
      toast.error("There was an error while uploading data.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    setData({
      name: "",
      stack: "",
      link: "",
      description: "",
    });
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form onSubmit={handleSubmit} className="input-data">
        <input
          onChange={handleChange}
          name="name"
          value={data.name}
          className="text-input-area"
          placeholder="Project Name"
          required
        />
        <input
          onChange={handleChange}
          name="stack"
          value={data.stack}
          className="text-input-area"
          placeholder="Project Stack"
          required
        />
        <input
          onChange={handleChange}
          name="link"
          value={data.link}
          className="text-input-area"
          placeholder="Project Link"
          required
        />
        <textarea
          onChange={handleChange}
          className="text-input-area"
          name="description"
          value={data.description}
          placeholder="Project Description"
          required
        />
        <button className="button-links" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
