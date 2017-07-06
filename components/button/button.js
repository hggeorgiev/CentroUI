import React from 'react';
import {VrButton, Text, StyleSheet} from 'react-vr';


const styles = StyleSheet.create({
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
    }
);


export default class CnButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <VrButton
                style={
          [styles.buttonStyles,
          { backgroundColor: this.props.color ? this.props.color : "#0275d8",
          // Put conditional styles
            height: this.props.shape === 'circle' ? 0.5 : 0.5,
            borderRadius: this.props.shape === 'circle' ? 0.5 : 0 }]}
            >
                {this.props.children}
                <Text style={styles.textStyles}>Buy</Text>
            </VrButton>
        );
    }
}



