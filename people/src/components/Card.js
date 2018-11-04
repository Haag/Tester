import React, { Component } from 'react'
import People from './People'
import PeopleList from './PeopleList'

import PropTypes from 'prop-types';
import {Card, CardMedia, CardActionArea, CardActions, withStyles,
     CardContent, Button, Typography} from '@material-ui/core';

const PeopleCard = (props) => {
    console.log('props', props);

    return (
      <Card className="Main_Card" style={{    
            display: 'block',
            width: '30vw',
            transitionDuration: '0.3s',
            height: '40vw'}}>
        <CardActionArea>
          {/* <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className="Card_Media"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
               {props.name}
            </Typography>
            <Typography component="p">
                {props.note}
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
  
  PeopleCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default PeopleCard