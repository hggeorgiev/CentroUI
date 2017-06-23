import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-vr';


export default class CnContainer extends React.Component {
    render() {

        //TODO add option for direction
        return (
            <View
                style={{
               layoutOrigin: [0.5, 0],
                flex: 12,
                width: 8,
                height: 4,
                flexDirection: 'row',
              transform: [{translate: [0, 1.5, -5.5]}],
              backgroundColor: "#fff"

            }}>


                {this.props.children}


            </ View >
        );
    }
};

AppRegistry.registerComponent('CnContainer', () => CnContainer);
