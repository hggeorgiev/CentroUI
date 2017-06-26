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
    direction:any;
    rotation:any;

    constructor() {
        super();
    }


    render() {
        let {direction} = this.props;
        if(direction === undefined ){
            this.direction = [0, 1.5, -5.5];
            this.rotation = 0;
        } else {
            switch(this.props.direction) {
                case 'left': {
                    this.direction = [5, 5.5 , 0];
                    this.rotation = -90;

                    break;
                }
                case 'back': {
                    this.direction = [0, 9 , 5.5];
                    this.rotation = 180;

                    break;
                }

                case 'right': {
                    this.direction = [-5, 13.2 , 0];
                    this.rotation = 90;

                    break;

                }
            }

        }

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
                transform: [{translate: this.direction}, {rotateY : this.rotation}],
                backgroundColor: "#fff"
            }}>


                {this.props.children}


            </ View >
        );
    }
};

AppRegistry.registerComponent('CnContainer', () => CnContainer);
