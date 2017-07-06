import React from 'react';
import { AppRegistry, View } from 'react-vr';
import CnContainer from '../components/core/container';
import CnCard from '../components/card/card';
import CnButton from '../components/button/Button';
import CnIcon from '../components/button/Icon';

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <CnContainer>
          <CnCard>
            <CnButton
              color="red"
              shape="circle"
            >
            <CnIcon name="shopping-cart" />
            </CnButton>
          </CnCard>
        </CnContainer>
      </View>
    );
  }
}

AppRegistry.registerComponent('Example', () => Example);
