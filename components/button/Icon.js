import React, { Component } from 'react';
import { Image } from 'react-vr';

class CnIcon extends Component {
  render() {
    const { iconStyles } = styles;

    //have uknown modules with ES6 interpolations (`../../static_assets/${this.props.name}`)
    //will fix it later
    if (this.props.name === 'shopping-cart') {
      return (
        <Image source={require('../../static_assets/shopping-cart-icon.png')} style={iconStyles} />
      );
    }
    return null;
  }
}

const styles = {
  iconStyles: {
     width: 0.4,
     height: 0.4,
     alignSelf: 'center',
     justifyContent: 'center',
     marginLeft: 0.1
  }
};

export default CnIcon;
