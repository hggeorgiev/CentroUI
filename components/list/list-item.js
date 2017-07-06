import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-vr';


export default class CnListItem extends React.Component {


    constructor(props) {
        super(props);
    }



    render() {

        let container = undefined;
        if (typeof this.props.children == "string") {
            container =
                <Text style={{fontSize: 0.15, flex: 1, textAlign: 'left', textAlignVertical: 'center', color: "#000" }}>
                    {this.props.children}
                </Text>;
        } else {
            container = this.props.children;
        }


        return (
            <View
                style={{
                display:  'flex',
                layoutOrigin: [0, 0],
                margin: 0.01,
                paddingLeft: 0.04,
                minHeight: 0.20,
                backgroundColor: "#fff",
                flex: 0,
                flexWrap: 'nowrap',
                justifyContent: 'flex-start',
                borderColor: "#eceeef",
                borderWidth: 0.015
            }}>

                {container}

            </ View >
        );
    }
};


