import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Box,
  Snackbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FoodCard = ({ foodDetail, foodName, foodImg, addToCart, foodId }) => {
  const [likeColor, setLikeColor] = useState(false);
  const likeHandler = () => {
    setLikeColor(!likeColor);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345, height: "400px" }}>
        <CardMedia
          component="img"
          height="200"
          image={foodImg}
          alt="food image"
        />
        <CardContent>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h5" component="div">
              {foodName}
            </Typography>
            <Box>
              <Tooltip title="Add to cart">
                <IconButton onClick={addToCart}>
                  <AddIcon color="primary" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: "justify" }}
          >
            {foodDetail}
          </Typography>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Link href={`/foods/${foodId}`}>
              <Button>more</Button>
            </Link>
            <IconButton onClick={likeHandler}>
              <FavoriteIcon
                fontSize="large"
                style={{ color: likeColor ? "red" : "pink" }}
              />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default FoodCard;
