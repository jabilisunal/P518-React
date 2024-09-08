import React from "react";
import { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BasketContext } from "../../context/BasketProvider";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { WishlistContext } from "../../context/WishlistProvider";
import toast, { Toaster } from "react-hot-toast";
const Basket = () => {
  const {
    basket,
    addItemBasket,
    total,
    removeItemBasket,
    isBasket,
    increaceCount,
    decreaseCount,
  } = useContext(BasketContext);
  const { wishlist, removeItemWishlist, addItemWishlit, isWishlist } =
    useContext(WishlistContext);

  return (
    <div>
      <Alert
        className="alert"
        icon={<CheckIcon fontSize="inherit" />}
        severity="success"
      >
        <p>
          {" "}
          Total Price :{total === 0 ? "Basket is empty" : total.toFixed(2)}{" "}
        </p>
      </Alert>
      <div className="card-area" style={{ margin: "100px" }}>
        {basket &&
          basket.map((item) => (
            <Card className="card-me" key={item.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                image={item.image}
                className="img"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title.slice(0, 30)} | {item.category.slice(0, 10)}
                  <p>{item.price}</p>
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.description.slice(0, 35)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => {
                    removeItemBasket(item);
                    toast('deleted !', {
                      icon: '👏',
                    });
                  }}
                >
                  {isBasket(item) ? "add" : "delete"}
                  <Toaster position="bottom-right" reverseOrder={false} />
                </Button>
                <Button onClick={() => addItemWishlit(item)}>
                  {isWishlist(item) ? "add" : "delete"} <FaHeart />
                </Button>
                <Button
                  onClick={() => {
                    increaceCount(item);
                  }}
                >
                  +
                </Button>
                <p>{item.count}</p>
                <Button onClick={() => decreaseCount(item)}>-</Button>
              </CardActions>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Basket;
