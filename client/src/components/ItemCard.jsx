import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemCard({ title, description, id }) {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/update-details/${id}`);
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/v1/Item/delete-Item/${id}`
      );
      if (data?.success) {
        toast.success("Item deleted successfully.");
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      }
    } catch (error) {
      toast.error("Error in deleting, please try again later.");
      console.error(error);
    }
  };

  return (
    <Card
    sx={{
      backgroundColor: "#efefef",
      width: "60vh",
      margin: "auto",
      mt: 2,
      mb: 5,
      padding: 2,
      boxShadow: "5px 5px 10px #ccc",
      ":hover:": {
        boxShadow: "10px 10px 20px #ccc",
      },
    }}
  >
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  
    <Box display="flex">
      <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
        <ModeEditIcon color="info" />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <DeleteIcon color="error" />
      </IconButton>
    </Box>
  
    <CardHeader
      title={
        <Typography
          variant="h6"
          color="black"
          sx={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}
        >
          {title}
        </Typography>
      }
    />
  
    <CardContent>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
  
  );
}
