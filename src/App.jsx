import { useState } from "react";

import "./App.css";
import Layout from "./components/Layouts";
import Rating from "./components/Rating";
import Result from "./components/Result";

function App() {
  const [stage, setStage] = useState("step1");
  const [rating, setRating] = useState(0);

  return (
    <Layout>
      {stage === "step1" ? (
        <Rating rating={rating} setRating={setRating} setStage={setStage} />
      ) : (
        <Result rating={rating} setStage={setStage} />
      )}
    </Layout>
  );
}

export default App;
