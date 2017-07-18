import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-vr';


export default class CnSlider extends React.Component {

    constructor(props) {
        super(props);

    }

    state = {
        offset: this.props.offset || 0,
        innerOffset: 0,
        hovered: false
    };

    move(event) {
        console.log(event.nativeEvent);
        this.setState({offset: event.nativeEvent.offset[0]});


    }

    innerMove(event) {

        console.log(event.nativeEvent.offset)

        let newOffset = event.nativeEvent.offset[0]*this.state.offset
        console.log(newOffset);
        this.setState({offset: newOffset});
    }

    render() {


        return (
            //Note changing row to column

            <View onMove={this.move.bind(this)}
                  style={{
                    display:  'flex',
                    flex: 1,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    height: 0.1,

                    backgroundColor: "#eceeef"
                  }}>

                <View
                    onMove={this.innerMove.bind(this)}
                    style={{
                      width: this.state.offset*100 + "%" ,
                      height: 0.1,
                       backgroundColor: "#0275d8"

                  }}>

                </View>
            </View>



        );
    }
};


