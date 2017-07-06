import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-vr';


export default class CnList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            alignment: this.props.alignment || 'column',


        }
    }


    componentDidMount() {

    }

    render() {



        return (
            <View
                style={{
                display:  'flex',
                layoutOrigin: [0, 0],
                margin: 0.01,
                flex: 1,
                flexWrap: 'nowrap',
                justifyContent: 'flex-start',
                flexDirection: this.state.alignment,
            }}>

                {this.props.children}

            </ View >
        );
    }
};


