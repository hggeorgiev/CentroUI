import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-vr';


export default class CnCardContent extends React.Component {
    render() {

        return (

            //Think about resizing images
            <View style={{ display:  'flex', flex: 0}}>
                {this.props.children}
            </View>
        );
    }
};

AppRegistry.registerComponent('CnCardContent', () => CnCardContent);
