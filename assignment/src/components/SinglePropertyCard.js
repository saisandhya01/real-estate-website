import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SinglePropertyCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {require('../assets/sample_image.jpg')}
        alt="sample property"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.details.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {props.details.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
              {props.details.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
              Price : {`$${props.details.price}k`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
              Squarefeet : {`${props.details.squarefeet}m3`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
              Property type : {props.details.property}
        </Typography>
      </CardContent>
    </Card>
  );
}
