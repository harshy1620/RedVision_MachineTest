import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../components/ItemCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Items = () => {
  const [Items, setItems] = useState([]);

  //get all Items
  const getAllItems = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/Item/All-Items"
      );

      if (data?.success) {
        setItems(data?.AllItems);
        console.log(Items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div
      className="all-item-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {Items && Items?.length > 0 ? (
        Items?.map((Item, index) => (
          <ItemCard
            key={index}
            id={Item._id}
            title={Item.title}
            description={Item.description}
          />
        ))
      ) : (
     
          <div>
            <h2
              style={{
                textAlign: "center",
                marginTop: "100px",
                fontWeight: "bolder",
              }}
            >
              You have not Created an Item
            </h2>
            <Link to="/create-Item" style={{ color: "#D76F30",textAlign: "center" }}>
              <b>Click here to create an Item.</b>
            </Link>
          </div>
      )}
      <Footer />
    </div>
  );
};

export default Items;
