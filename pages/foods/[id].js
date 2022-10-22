import React from "react";
import Link from "next/link";
import axios from "axios";

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
  Appbar,
  AppBar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PostDetail = ({ food }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#212121",
      }}
    >
      <AppBar
        sx={{
          height: "72px",
          backgroundColor: "#F8F8F8",
          display: "flex",
          justifyContent: "center",
          paddingLeft: "10px",
        }}
      >
        <Link href={"/"}>
          <Tooltip title="Home">
            <ArrowBackIcon
              style={{ color: "#212121", cursor: "pointer" }}
              fontSize="large"
            />
          </Tooltip>
        </Link>
      </AppBar>
      <Card style={{ maxWidth: 600, height: "500px" }}>
        <CardMedia
          component="img"
          height="250"
          image={food.image}
          alt="food image"
        />
        <CardContent>
          <Typography variant="h4">{food.name}</Typography>
          <Typography style={{ textAlign: "justify" }}>
            {food.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export async function getStaticProps({ params }) {
  const response = await axios.get("http://localhost:3030/foods/" + params.id);
  return {
    props: {
      food: response.data,
    },
  };
}

export async function getStaticPaths() {
  const response = await axios.get("http://localhost:3030/foods");
  const paths = response.data.map((food) => `/foods/${food.id}`);

  return {
    paths,
    fallback: false,
  };
}

export default PostDetail;
