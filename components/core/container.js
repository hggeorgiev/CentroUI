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
    //TODO Implement
    direction: string;

    constructor() {
        super();
    }


    render() {

        //TODO add option for direction
        return (
            <View
                style={{
                renderGroup: true,
                display:  'flex',
                layoutOrigin: [0.5, 0.2],
                flexWrap: 'wrap',
                flex: 12,
                width: 8,
                height: 4,
                justifyContent: 'flex-start',
                flexDirection: 'column',
                transform: [{translate: [0, 1.5, -5.5]}],
                backgroundColor: "#fff"
            }}>


                {this.props.children}


            </ View >
        );
    }
};

AppRegistry.registerComponent('CnContainer', () => CnContainer);
