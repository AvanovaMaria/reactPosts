import React, { useState } from 'react';
import { Card as CardMUI } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


import api from '../../utils/api';

export const Card = ({ itemPost }) => {

  const [likeCount, setLikeCount] = useState(itemPost.likes.length)

  const writeLS = (key, value) => {
    const storage = JSON.parse(localStorage.getItem(key)) || [];
    storage.push(value);
    localStorage.setItem(key, JSON.stringify(storage));
};

const removeLS = (key, value) => {
    const storage = JSON.parse(localStorage.getItem(key));
    const filteredStorage = storage.filter((itemID) => value !== itemID);
    localStorage.setItem(key, JSON.stringify(filteredStorage));
};

 return (
    <CardMUI sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={itemPost.image}
          alt={itemPost.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemPost.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {itemPost.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
          add Like
        </Button>
        <span>♥{itemPost.likes.length}</span>
      </CardActions>
    </CardMUI>
  );

}
