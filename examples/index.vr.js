import React from 'react';
import { AppRegistry, asset, Pano, Text, View} from 'react-vr';
import CnContainer from "../components/core/container"

export default class Example extends React.Component {

   
  render() {
    return (
      <View>
          <CnContainer>

          </CnContainer>
      </View>
    );
  }
};

AppRegistry.registerComponent('Example', () => Example);
