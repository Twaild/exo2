import React, { Component } from 'react';
import PropTypes from 'prop-types';
import photo from '../../assets/images/photo.jpg';
import { withStyles } from '../../../node_modules/@material-ui/core/styles';
import Card from '../../../node_modules/@material-ui/core/Card/Card';
import CardContent from '../../../node_modules/@material-ui/core/CardContent';
import Typography from '../../../node_modules/@material-ui/core/Typography';
import Avatar from '../../../node_modules/@material-ui/core/Avatar';
import CardHeader from '../../../node_modules/@material-ui/core/CardHeader';
import Button from '../../../node_modules/@material-ui/core/Button/Button'
import Grid from '../../../node_modules/@material-ui/core/Grid';

class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div>
                <Card>   
                        <CardContent>
                            <Typography variant="h3">
                                Théo WALD
                            </Typography>
                            <Typography paragraph>
                                    Salut moi c'est Théo, je suis le plus grand dev Reac.js du monde, je mesure environ 7m12.
                                    Si vous avez envie de me contacter, faites le par facebook, via ce magnifique bouton cliquable !      
                            </Typography>
                            <Avatar alt="Remy Sharp" src="../../assets/images/photo.jpg" />
                        </CardContent>
                </Card>
                    <Button variant="contained" color="secondary" href="https://www.facebook.com" target="_blank">
                         Facebook 
                    </Button>

            </div>
        );
    }
}
Presentation.propTypes = {};

export default Presentation;