import MoreVertIcon from "@mui/icons-material/MoreVert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { courseInfo } from "../courseData";
import { Box } from "@mui/material";

const CourseCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      {courseInfo.map((item, index) => {
        const { name, description, price, tutor, img, link } = item;
        return (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={name}
              subheader={`Rs.${price}`}
            />
            <CardMedia component="img" height="194" image={img} alt={name} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default CourseCard;
