import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function SinglePropertyCard({ details }) {
  return (
    <div className="carddiv">
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="140"
          image={require("../assets/sample_image.jpg")}
          alt="sample property"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {details.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {details.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price : {`$${details.price}k`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Squarefeet : {`${details.squarefeet}m3`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Property type : {details.property}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
