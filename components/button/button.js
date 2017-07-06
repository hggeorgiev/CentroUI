import React from 'react';
import {VrButton, Text, StyleSheet} from 'react-vr';


const styles = StyleSheet.create({
        buttonStyles: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            margin: 0.01,
            borderWidth: 0.015,
            borderColor: '#ccc'
        },
        textStyles: {
            fontSize: 0.15,
            fontWeight: '400',
            alignSelf: 'center',
            color: 'black',
            marginRight: 0.05,
            marginLeft: 0.05
        }
    }
);

const DEFAULT_ACTIVE_BACKGROUND_COLOR = "#ccc";
const DEFAULT_INACTIVE_BACKGROUND_COLOR = "#fff";

export default class CnButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            currentBackgroundColor: DEFAULT_INACTIVE_BACKGROUND_COLOR || this.props.color,
            inactiveBackgroundColor: DEFAULT_INACTIVE_BACKGROUND_COLOR || this.props.color

        }
    }

    render() {

        const {currentBackgroundColor, inactiveBackgroundColor} = this.state;


        return (
            <VrButton
                onEnter={() => this.setState({ hovered: true, currentBackgroundColor: DEFAULT_ACTIVE_BACKGROUND_COLOR }) }
                onExit={() => this.setState({hovered: false, currentBackgroundColor: inactiveBackgroundColor} )}
                style={
                [styles.buttonStyles,
                    {
                        backgroundColor: currentBackgroundColor,
                        // Put conditional styles
                        height: this.props.shape === 'circle' ? 0.5 : 0.5,
                        borderRadius: this.props.shape === 'circle' ? 0.5 : 0
                    }]}
            >
                {this.props.children}
                <Text style={styles.textStyles}>Buy</Text>
            </VrButton>
        );
    }
}



