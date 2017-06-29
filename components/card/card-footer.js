import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-vr';


export default class CnCardFooter extends React.Component {
    render() {

        return (

            <View style={{ display:  'flex', flex: 0 , minHeight: 0.1, padding: 0.02 , backgroundColor: "#f7f7f9"}}>
                    {this.props.children}
            </View>
        );
    }
};

AppRegistry.registerComponent('CnCardFooter', () => CnCardFooter);
