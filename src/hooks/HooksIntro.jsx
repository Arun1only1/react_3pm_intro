import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Switch from "@mui/material/Switch";

// const label = { inputProps: { "aria-label": "Switch demo" } };
const HooksIntro = () => {
  const [count, setCount] = useState(11);

  const [name, setName] = useState("Rohan Timilsina");

  const [isOpen, setIsOpen] = useState(true);

  const [person, setPerson] = useState({ name: "A", age: 22 });

  const [students, setStudents] = useState([
    {
      name: "Rohan",
      age: 22,
    },
    {
      name: "Sanjam",
      age: 17,
    },
  ]);

  return (
    <Box
      sx={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <Button
        variant="contained"
        onClick={() => {
          // const newCount = count + 1;
          setCount(count + 1);
        }}
      >
        Click me
      </Button> */}

      {/* <Button variant="contained" onClick={() => setName("Prasanna Acharya")}>
        Change Name
      </Button>

      <Typography variant="h3">{count}</Typography>

      <Typography variant="h3">{name}</Typography> */}

      {/* <Button onClick={() => setIsOpen(!isOpen)}>Switch</Button> */}

      {/* <Typography variant="h3">{isOpen ? "On" : "Off"}</Typography> */}

      {/* <Switch
        // {...label}
        checked={isOpen}
        onChange={() => {
          setIsOpen(!isOpen);
        }}
      /> */}

      {/* <Typography variant="h3">{`Hi my name is ${person.name} and my age is ${person.age}.`}</Typography>

      <Button onClick={() => setPerson({ name: "B", age: 52 })}>
        Change me
      </Button> */}
      {students.map((item, index) => {
        return (
          <Typography
            variant="h3"
            key={index}
          >{`My name is ${item.name} and my age is ${item.age}.`}</Typography>
        );
      })}

      <Button
        variant="contained"
        onClick={() => {
          setStudents([{ name: "Prasanna", age: 23 }]);
        }}
      >
        Change data
      </Button>
    </Box>
  );
};

export default HooksIntro;
