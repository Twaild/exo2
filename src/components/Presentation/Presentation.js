import React, { Component } from "react";
import photo from "../../assets/images/photo.jpg";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button/Button";

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card style={{ width: 280 }}>
          <CardHeader
            avatar={<Avatar src={photo} alt="avatar Théo WALD" />}
            title="Théo WALD"
            subheader="2 Mars 2019 "
          />
          <CardContent>
            <Typography variant="body1" >
              Salut moi c'est Théo, je suis le plus grand dev Reac.js du monde,
              je mesure environ 7m12. Si vous avez envie de me contacter, faites
              le par facebook, via ce magnifique bouton cliquable !
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              href="https://www.facebook.com"
              target="_blank"
            >
              Facebook
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}
Presentation.propTypes = {};

export default Presentation;
