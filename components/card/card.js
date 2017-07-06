import React from 'react';
import {

    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-vr';

const DEFAULT_BACKGROUND_COLOR = "#fff"
const DEFAULT_HOVER_COLOR = "#000"

export default class CnCard extends React.Component {

    state = {
        currentBackgroundColor: this.props.bg || DEFAULT_BACKGROUND_COLOR,
        hovered: false
    }

    componentWillReceiveProps(nextProps) {
        const { bg } = nextProps
        const { hovered } = this.props
        if (!hovered) {
            this.setState({ currentBackgroundColor: bg || DEFAULT_BACKGROUND_COLOR })
        }
    }

    render() {
        const { hover, hoverColor, bg } = this.props
        const { currentBackgroundColor } = this.state
        // TODO have setters for height and width
        return (
            //Note changing row to column

            <View style={{
                display: 'flex',
                flex: 1,
                // Hardcoding for now
                margin: 0.02,
                minHeight: 0.5,
                maxWidth: 2,
                borderColor: "#eceeef",
                borderWidth: 0.015,
                backgroundColor: currentBackgroundColor
            }}
                onEnter={hover ? () => this.setState({ hovered: true, currentBackgroundColor: hoverColor || DEFAULT_HOVER_COLOR }) : null}
                onExit={hover ? () => this.setState({ hovered: false, currentBackgroundColor: bg || DEFAULT_BACKGROUND_COLOR }) : null}>
                {this.props.children}
            </View>
        );
    }
};


