import FoodList from "../src/components/FoodList";
import Navbar from "../src/components/Navbar";

import axios from "axios";

export default function Home({ foods }) {
  // console.log(foods);
  return (
    <div>
      <Navbar />
      <FoodList foods={foods} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get("http://localhost:3030/foods");
  return {
    props: {
      foods: response.data,
    },
  };
}
