import React from 'react';
import {

    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-vr';


export default class CnCard extends React.Component {
    render() {


        // TODO have setters for height and width
        return (
            //Note changing row to column

            <View style={{
                    display:  'flex',
                    flex: 1,
                    // Hardcoding for now
                    margin: 0.02,
                    minHeight: 0.5,
                    maxWidth: 2,
                    borderColor: "#eceeef",
                    borderWidth: 0.015,
                    backgroundColor: "#fff"
                  }}>

                {this.props.children}


            </View>



        );
    }
};


