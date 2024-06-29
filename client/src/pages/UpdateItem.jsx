import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

const UpdateItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  

  // get blog details for pre rendering the previous item data in form ,now user can update the blog
  const getItemDetail = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/Item/single-Item/${id}`
      );
      console.log(data)
      if (data?.success) {
        setInputs({
          title: data?.Item.title,
          description: data?.Item.description,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    
    getItemDetail();
  }, [id]);

  // input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:8000/api/v1/Item/update-Item/${id}`,
        {
          title: inputs.title,
          description: inputs.description,
        }
      );
      if (data?.success) {
        toast.success("Item updated successfully.");
        setTimeout(() => {
          navigate("/All-Items");
        }, 1200);
      }
    } catch (error) {
      toast.error("Error in updatibg Item, please try again later.");
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form onSubmit={handleSubmit}>
        <Box
          width={"50%"}
          border={3}
          borderRadius={10}
          padding={3}
          margin="auto"
          boxShadow={"10px 10px 20px #ccc"}
          display="flex"
          flexDirection={"column"}
          marginTop="30px"
        >
          <Typography
            variant="h4"
            textAlign={"center"}
            fontWeight="bold"
            padding={3}
            color="gray"
          >
            Update the Item
          </Typography>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Description
          </InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />

          <Button type="submit" color="warning" variant="contained">
            UPDATE
          </Button>
        </Box>
      </form>
      <Footer />
    </>
  );
};

export default UpdateItem;
