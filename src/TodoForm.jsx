import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";

// all we need is formik and yup
const TodoForm = () => {
  const [todos, setTodos] = useState([]);

  console.log("todos", todos);
  return (
    <Grid container>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required("Title is required.")
            .trim()
            .min(2, "Title must be at least two characters."),
          description: Yup.string()
            .required("Description is required.")
            .trim()
            .min(2, "Description must be at least two characters."),
        })}
        onSubmit={(values) => {
          setTodos([...todos, values]);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              background: "white",
              padding: "2rem",
              margin: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              borderRadius: "10px",
              border: "1px solid black",
              width: "500px",
              boxShadow:
                "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
            }}
          >
            <Grid item sx={{ width: "100%" }}>
              <InputLabel>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Enter title
                </Typography>
              </InputLabel>
              <TextField
                sx={{ width: "100%" }}
                placeholder="John Doe"
                variant="outlined"
                {...formik.getFieldProps("title")}
              />
              {formik.touched.title && formik.errors.title ? (
                <div style={{ color: "red", fontSize: "1rem" }}>
                  {formik.errors.title}
                </div>
              ) : null}
            </Grid>

            <Grid item>
              <InputLabel>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Enter description
                </Typography>
              </InputLabel>
              <TextareaAutosize
                style={{ width: "100%", height: "200px" }}
                maxRows={2}
                {...formik.getFieldProps("description")}
              />
              {formik.touched.description && formik.errors.description ? (
                <div style={{ color: "red", fontSize: "1rem" }}>
                  {formik.errors.description}
                </div>
              ) : null}
            </Grid>

            <Button
              variant="contained"
              type="submit"
              sx={{ width: "50%", alignSelf: "center", padding: "10px" }}
            >
              Add todo
            </Button>
          </form>
        )}
      </Formik>
    </Grid>
  );
};

export default TodoForm;
