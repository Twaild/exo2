import React, { Component } from "react";
import PropTypes from "prop-types";
import photo from "../../assets/images/photo.jpg";
import { withStyles } from "../../../node_modules/@material-ui/core/styles";
import Card from "../../../node_modules/@material-ui/core/Card/Card";
import CardContent from "../../../node_modules/@material-ui/core/CardContent";
import Typography from "../../../node_modules/@material-ui/core/Typography";
import Avatar from "../../../node_modules/@material-ui/core/Avatar";
import CardHeader from "../../../node_modules/@material-ui/core/CardHeader";
import Button from "../../../node_modules/@material-ui/core/Button/Button";
import Grid from "../../../node_modules/@material-ui/core/Grid";

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
            align="justify"
            subheader="2 Mars 2019 "
          />
          <CardContent>
            <Typography variant="body1" align="justify" gutterBottom>
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
