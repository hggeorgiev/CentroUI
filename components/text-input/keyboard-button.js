import React  from 'react';
import {View, VrButton, StyleSheet, Text, Animated} from 'react-vr';

var styles = StyleSheet.create({
    text: {
        fontSize: 0.04,
        textAlign: 'center',
        color: '#ffffff',
        opacity: 3,
        fontFamily: "HelveticaNeue-Light",
        fontWeight: 'normal',
    },
    button: {
        height: 0.15,
        padding: 0.05,
        borderWidth: 0.005,
        flex: 1,
        alignItems: 'center'

    }
});

class KeyboardButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: this.props.keyboardColor || '#0d0d0d',
            opacity: 0.5,
            keyboardOnHover: this.props.keyboardOnHover,
            keyboardColor: this.props.keyboardColor
        }
    }

    handleTheClick() {
        this.setState({backgroundColor: 'white'}, (() => {
            setTimeout((() => {
                return this.test.bind(this);
            })(), 1)
        })());
        if (this.props.isDisabled === false) {
            this.props.clickHandler(this.props.value)
        }
        ;
    }

    test() {
        this.setState({backgroundColor: this.state.keyboardColor || '#0d0d0d'});

    }

    render() {
        return (
            <VrButton
                onClick={this.handleTheClick.bind(this)}
                style={[styles.button, {backgroundColor: this.props.isDisabled === false? this.state.backgroundColor:'red'}, {opacity: this.state.opacity}]}
                onEnter={() => this.setState({backgroundColor: this.state.keyboardOnHover || 'green'})}
                onExit={() => this.setState({backgroundColor: this.state.keyboardColor || '#0d0d0d'})}
            >
                <Text style={styles.text}>{this.props.value}</Text>
            </VrButton>
        );
    }
}

export default KeyboardButton;