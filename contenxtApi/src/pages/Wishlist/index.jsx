import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistProvider';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Wishlist = () => {
  const{ wishlist, addItemWishlit,isWishlist } = useContext(WishlistContext)

  return (
    <div>
      <p>Wishlist Page</p>
      <div className="card-area">
        {wishlist &&
          wishlist.map((item) => (
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
              
               
                <Button onClick={()=>addItemWishlit(item)}>
                 {isWishlist(item) ? "add wishlist" :"delete"}
                </Button>
              </CardActions>
            </Card>
          ))}
      </div>
    </div>
  )
}

export default Wishlist
