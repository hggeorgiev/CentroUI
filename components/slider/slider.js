import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Sphere,


} from 'react-vr';


const DEFAULT_BACKGROUND_COLOR = "#0275d8";
const DEFAULT_HOVER_COLOR = "#585858";

export default class Slider extends React.Component {

    constructor(props) {
        super(props);

    }

    state = {
        offset: this.props.offset || 0,
        sliderOffset: 0,
        hovered: false,
        sliding: false,
        currentBackgroundColor: this.props.bg || DEFAULT_BACKGROUND_COLOR
    };


    move(event) {
        if (this.state.sliding) {
            this.setState({offset: event.nativeEvent.offset[0]});
        }

    }

    onEnter() {
        this.setState({
            hovered: true,
        })
    }


    onExit() {
        this.setState({
            hovered: false,
        })

    }

    innerMove(event) {
        let newOffset = event.nativeEvent.offset[0] * this.state.offset;
        if (this.state.sliding) {
            this.setState({offset: newOffset});
        }

    }

    interact(event) {
        if (event.nativeEvent.inputEvent.eventType == 'click') {
            this.setState({sliding: !this.state.sliding})
        }

    }


    getBorderStyle() {
        const {hovered, sliding, hoverColor} = this.state;
        let borderColor = hovered && sliding ? hoverColor || DEFAULT_HOVER_COLOR : this.state.currentBackgroundColor;
        style = {
            borderColor,
            borderBottomWidth: 0.01,
            borderLeftWidth: 0.01,
            borderRightWidth: 0.01,
        };
        return style
    }

    render() {


        return (

            <View onMove={this.move.bind(this)}
                  onEnter={this.onEnter.bind(this)}
                  onExit={this.onExit.bind(this)}
                  onInput={this.interact.bind(this)}
                  style={{
                    display:  'flex',
                    flex: 1,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    height: 0.1,
                    backgroundColor: "#eceeef",
                    ...this.getBorderStyle(),
                  }}>

                <View
                    onMove={this.innerMove.bind(this)}
                    onInput={this.interact.bind(this)}
                    style={{
                      width: this.state.offset*100 + "%" ,
                      height: 0.1,
                      backgroundColor:  this.state.currentBackgroundColor

                  }}>


                </View >
                <View
                    style={{
                        width: 0.15 ,
                        height: 0.15 ,
                        borderRadius: 0.2,
                        backgroundColor: this.state.sliding ?  "#aaa" : "#ccc",
                        layoutOrigin: [0.5, 0.125],
                        ...this.getBorderStyle()
                    }}>
                </View>
            </View>



        );
    }
};


