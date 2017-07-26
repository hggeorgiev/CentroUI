import React from 'react';
import View from "../core/view"
import { VrButton, Text, StyleSheet } from 'react-vr';

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 0.15,
        color: 'black',
    }
});

const DEFAULT_BACKGROUND_COLOR = "#fff"
const DEFAULT_HOVERED_COLOR = "rgba(255,255,255,0.5)"
const DEFAULT_ACTIVE_COLOR = "rgba(0,0,0,0.2)"
const DEFAULT_ACTIVE_BORDER_COLOR = "#0275d8";
const DEFAULT_INACTIVE_BORDER_COLOR = "#eceeef";

export default class CnButton extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        hovered: false,
        pressed: false,
    }

    getBorderStyle = () => {
        const { border } = this.props
        const { hovered } = this.state
        var style = {}
        if (border) {
            var borderColor = hovered ? border.activeColor || border.color || DEFAULT_ACTIVE_BORDER_COLOR : border.inactiveColor || border.color || DEFAULT_INACTIVE_BORDER_COLOR
            style = {
                borderColor,
                borderWidth: border.width,
                borderTopWidth: border.top || border.width,
                borderBottomWidth: border.bottom || border.width,
                borderLeftWidth: border.left || border.width,
                borderRightWidth: border.right || border.width
            }
        }
        return style
    }

    getDimensions = () => {
        const { w, h } = this.props
        var style = {}

        if (w) {
            style['width'] = w
        }
        if (h) {
            style['height'] = h
        }
        return style
    }

    getBackgroundColor = () => {
        const { pressed, hovered } = this.state
        const { bg, hoverColor, activeColor } = this.props
        var color = bg || DEFAULT_BACKGROUND_COLOR
        if (hovered) {
            color = hoverColor || DEFAULT_HOVERED_COLOR
        }
        if (pressed) {
            color = activeColor || DEFAULT_ACTIVE_COLOR
        }
        return color
    }

    onEnter = () => {
        this.setState({
            hovered: true,
        })
    }

    onExit = () => {
        this.setState({
            hovered: false,
        })
    }

    buttonPressed = () => {
        this.setState({
            pressed: true
        })
    }

    buttonReleased = () => {
        this.setState({
            pressed: false
        })
    }

    render() {
        var backgroundColor = this.getBackgroundColor()
        return (
            <VrButton
                onButtonPress={this.buttonPressed}
                onButtonRelease={this.buttonReleased}
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                onEnter={this.onEnter}
                onExit={this.onExit}
                style={[{
                    borderRadius: this.props.shape === 'circle' ? 0.5 : 0,
                    backgroundColor
                },
                this.getDimensions()]}
            >
                {this.props.children ? this.props.children : <View {...this.props} bg={backgroundColor}>
                    <Text style={styles.textStyles}>{this.props.name}</Text>
                </View>}
            </VrButton>
        );
    }
}
