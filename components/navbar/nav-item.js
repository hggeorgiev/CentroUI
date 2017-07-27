import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-vr';


//TODO Refactor

const DEFAULT_BACKGROUND_COLOR = "transparent";
const DEFAULT_HOVER_COLOR = "#000";

export default class CnNavItem extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        currentBackgroundColor: this.props.bg || DEFAULT_BACKGROUND_COLOR,
        hovered: false
    };

    componentWillReceiveProps(nextProps) {
        const { bg } = nextProps
        const { hovered } = this.props
        if (!hovered) {
            this.setState({ currentBackgroundColor: bg || DEFAULT_BACKGROUND_COLOR })
        }
    }

    render() {
        const { hover, hoverColor, bg } = this.props;
        const { currentBackgroundColor } = this.state;
        return (
            <View style={{
                display: 'flex',
                margin: 0.1,
                height: 0.3,
                backgroundColor: currentBackgroundColor
            }}
                onEnter={hover ? () => this.setState({ hovered: true, currentBackgroundColor: hoverColor || DEFAULT_HOVER_COLOR }) : null}
                onExit={hover ? () => this.setState({ hovered: false, currentBackgroundColor: bg || DEFAULT_BACKGROUND_COLOR }) : null}>
                <Text style={{ color: "white", fontSize: 0.2, textAlign: 'center' }}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
};

