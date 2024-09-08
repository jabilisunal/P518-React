import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaShoppingBasket } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import "./index.css";
import { BasketContext } from "../../context/BasketProvider";
import Swal from "sweetalert2";
import { WishlistContext } from "../../context/WishlistProvider";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addItemBasket, isBasket } =
    useContext(BasketContext);
  const notify = () => toast("Here is your toast.");
  const{  addItemWishlit,isWishlist } = useContext(WishlistContext)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <div className="card-area">
        {products &&
          products.map((item) => (
            <Card className="card-me" key={item.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                image={item.image}
                className="img"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title.slice(0, 30)} | {item.category.slice(0, 10)}
                  <p>{item.price} $</p>
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.description.slice(0, 35)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => {
                    addItemBasket(item);
                    toast.success("Məhsul Səbətə Əlavə olundu !");
                  }}
                >
                  {isBasket(item) ? <FaShoppingBasket /> : <MdDelete />}
                  <Toaster position="bottom-right" reverseOrder={false} />
                </Button>
                <div></div>
                <Button onClick={()=>addItemWishlit(item)}>
                 {isWishlist(item) ?  <FaRegHeart />: <FaHeart /> }
                </Button>
              </CardActions>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Home;
