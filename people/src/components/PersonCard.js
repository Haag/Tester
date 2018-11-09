import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const PersonCard = (props) => {
    console.log('props', props);

    return (
      <div>
      <Card>
        {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{props.note}Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          
          {props.hwm}
          
          {props.wwm}
      
          {props.birthday}
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
         
    )
}    
         


  export default PersonCard