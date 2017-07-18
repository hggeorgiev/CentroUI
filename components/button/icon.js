import React  from 'react';
import {Image, StyleSheet} from 'react-vr';

styles = StyleSheet.create({
    iconStyles: {
        width: 0.2,
        height: 0.2,
        alignSelf: 'center',
        justifyContent: 'center'
    }
});

export default class CnIcon extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {


        //Has unknown modules with ES6 interpolations (`../../static_assets/${this.props.name}`)
        //Will fix it later
        if (this.props.name === 'shopping-cart') {
            return (
                <Image source={require('../../static_assets/plus.png')} style={styles.iconStyles}/>
            );
        }
        return null;
    }
}
