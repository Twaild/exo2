import React, { Component } from "react";
import PropTypes from "prop-types";
import photo from "../../assets/images/photo.jpg";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';


class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayed : false,
    };
  }

  // La syntaxe de fonction fléché comme la liogne du dessous permet de pouvoir utiliser this dans la fonction
  // Théo's version
  // showTab = () => {
  //   this.setState({displayed : true})
  // }

  // closeTab = () => {
  //   this.setState({displayed : false})
  // }

  // Guillaume's version
  handleTab(value) {
    this.setState({displayed : value})
  }

  render() {
    return (
      <div>
        { this.state.displayed === true && 
          <Card style={{ width: 280 }}>
            <CardHeader action={
              <IconButton onClick={() => this.handleTab(false)}> 
                <Icon>
                  close
                </Icon> 
              </IconButton>}
            />

            <CardContent>
            </CardContent>
          </Card>
        }
        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.handleTab(true)}
        >
          Ajouter
        </Button>
      </div>
    );
  }
}
ToDoList.propTypes = {};

export default ToDoList;
