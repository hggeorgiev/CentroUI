import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-vr';


export default class CnNavItem extends React.Component {
    render() {

        return (

            <View style={{ display:  'flex', margin: 0.1, height: 0.3}}>
                <Text style={{fontSize: 0.2, textAlign: 'center'}}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
};

AppRegistry.registerComponent('CnNavItem', () => CnNavItem);
