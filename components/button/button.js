import React from 'react';
import { VrButton, Text, StyleSheet } from 'react-vr';

const styles = StyleSheet.create({
    buttonStyles: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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

const DEFAULT_ACTIVE_BACKGROUND_COLOR = '#ccc';
const DEFAULT_INACTIVE_BACKGROUND_COLOR = '#fff';

export default class CnButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            currentBackgroundColor: this.props.color || DEFAULT_INACTIVE_BACKGROUND_COLOR,
            inactiveBackgroundColor: this.props.color || DEFAULT_INACTIVE_BACKGROUND_COLOR
        };
    }

    render() {
        const { currentBackgroundColor, inactiveBackgroundColor } = this.state;

        return (
            <VrButton
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                onButtonPress={this.props.onButtonPress}
                onButtonRelease={this.props.onButtonRelease}
                onEnter={() => this.setState({
                    hovered: true,
                    currentBackgroundColor: DEFAULT_ACTIVE_BACKGROUND_COLOR
                })}
                onExit={() => this.setState({
                    hovered: false,
                    currentBackgroundColor: inactiveBackgroundColor
                })}
                style={
                    [this.props.style, styles.buttonStyles,
                    {
                        backgroundColor: currentBackgroundColor,
                        // Put conditional styles
                        width: this.props.w,
                        height: this.props.h,
                        borderWidth: this.props.borderWidth,
                        borderRadius: this.props.shape === 'circle' ? 0.5 : 0,
                    }, this.props.style]}
            >
                {this.props.children}
                {this.props.name ? <Text style={styles.textStyles}>{this.props.name}</Text> : null}
            </VrButton>
        );
    }
}
