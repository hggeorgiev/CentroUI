import React from 'react';
import {

    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-vr';


export default class CnCardHeader extends React.Component {
    render() {

        return (

            <View style={{ display:  'flex', flex: 0,  height: 0.3, padding: 0.02, backgroundColor: "#f7f7f9"}}>
                <Text style={{fontSize: 0.15, flex: 1, textAlign: 'left', textAlignVertical: 'center', color: "#000" }}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
};


