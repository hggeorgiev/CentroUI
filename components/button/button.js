import React, {Component} from 'react';
import {VrButton, Text} from 'react-vr';

class CnButton extends Component {

    render() {
        const {buttonStyles, textStyles} = styles;

        return (
            <VrButton
                style={
          [buttonStyles,
          { backgroundColor: this.props.color ? this.props.color : "#0275d8",
          // Put conditional styles
            height: this.props.shape === 'circle' ? 0.5 : 0.5,
            borderRadius: this.props.shape === 'circle' ? 0.5 : 0 }]}
            >
                {this.props.children}
                <Text style={textStyles}>Buy</Text>
            </VrButton>
        );
    }
}

const styles = {
    buttonStyles: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        margin: 0.01
    },
    textStyles: {
        fontSize: 0.15,
        fontWeight: '400',
        alignSelf: 'center',
        marginRight: 0.05,
        marginLeft: 0.05
    }
};

export default CnButton;
