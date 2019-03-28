import React, { Component } from 'react';
import PropTypes from 'prop-types';
import photo from '../../assets/images/photo.jpg';

class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div>
                <h1>Théo WALD</h1>
                <img src={photo} alt={'photo portfolio'} width={200} />
                <p>Salut moi c'est toi, je suis le plus grand dev Reac.js du monde, je mesure environ 7m12</p>
                <p>Si vous avez envie de me contacter, faites le par facebook, via ce magnifique <a href='https://www.facebook.com/theo.twaild.3' target='_blank'>mot</a>  cliquable !</p>
            </div>
        );
    }
}
Presentation.propTypes = {};

export default Presentation;