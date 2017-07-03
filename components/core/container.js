import React from 'react';
import {
    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-vr';


export default class CnContainer extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: this.props.backgroundColor,
            opacity: this.props.opacity || 1,
            direction: [0, 1.5, -5.5],
            rotation: 0
        };
        this.setDireciton();
        this.setColor();
    }

    setDireciton() {
        switch (this.props.direction) {
            case 'left': {
                this.state.direction = [5, 5.5, 0];
                this.state.rotation = -90;

                break;
            }
            case 'back': {
                this.state.direction = [0, 9, 5.5];
                this.state.rotation = 180;

                break;
            }

            case 'right': {
                this.state.direction = [-5.5, 9, 0];
                this.state.rotation = 90;

                break;
            }


        }
    }

    setColor() {
        switch(this.props.backgroundColor) {
            case 'transparent': {
                this.state.backgroundColor = "rgba(255,255,255,0.0)";
                break
            }
            case undefined: {
                this.state.backgroundColor = "rgba(255,255,255,0.3)";
                break;
            }
            default: {
                this.state.backgroundColor = this.props.backgroundColor
            }
        }
    }


    render() {


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
                transform: [{translate: this.state.direction}, {rotateY : this.state.rotation}],
                backgroundColor: this.state.backgroundColor,
            }}>


                {this.props.children}


            </ View >
        );
    }
}
;


