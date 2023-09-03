import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Box
      sx={{
        height: "95vh",
        display: "grid",
        placeItems: "center",
        margin: "auto",
      }}
    >
      <Button
        color="success"
        variant="outlined"
        sx={{ padding: "10px", color: "grey" }}
        onClick={() => {
          const newCount = count + 1;

          setCount(newCount);
        }}
      >
        <AiOutlinePlus size={30} />
      </Button>
      <Typography variant="h2">{count}</Typography>
      <Button
        color="error"
        sx={{ padding: "10px", color: "#B31312" }}
        variant="outlined"
        onClick={() => {
          let newCount = count - 1;

          if (newCount < 0) {
            newCount = 0;
          }

          setCount(newCount);
        }}
      >
        <AiOutlineMinus size={30} />
      </Button>
    </Box>
  );
};

export default Counter;
