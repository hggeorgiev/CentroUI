import React, { Component } from 'react';
import { VrButton, Text } from 'react-vr';

class CnButton extends Component {

  render() {
    const { buttonStyles, textStyles } = styles;

    return (
      <VrButton
        style={
          [buttonStyles,
          { backgroundColor: this.props.color ? this.props.color : 'blue',
            height: this.props.shape === 'circle' ? 1.1 : 0.4,
            borderRadius: this.props.shape === 'circle' ? 0.5 : 0 }]}
      >
        {this.props.children}
        <Text style={textStyles}>Buy</Text>
      </VrButton>
    );
  }
}

const styles = {
  buttonStyles: {
    width: 1.1,
    flexDirection: 'row',
    marginTop: 0.1,
    marginLeft: 0.1
  },
  textStyles: {
    fontSize: 0.3,
    fontWeight: '500',
    alignSelf: 'center',
    marginRight: 0.1,
    marginLeft: 0.1
  }
};

export default CnButton;
