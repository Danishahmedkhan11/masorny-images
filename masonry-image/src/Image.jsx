import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function Image(props) {
  return (
    <Card style={{marginBottom:'10px',padding:'5px'}} sx={{ maxWidth: 300,}}>
   
        <CardMedia
          component="img"
          height="200"
          width='50'
          alt={props.title}
          src={props.src}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {props.city}
          </Typography>
          <Typography variant="body2">
            {props.des}
          </Typography>
        </CardContent>
  
   

    </Card>
  );
}