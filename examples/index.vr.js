import React from 'react';
import { AppRegistry, Text } from 'react-vr';
import CnContainer from '../components/core/container';
import View from '../components/core/view';
import CnButton from '../components/button/button';
import CnIcon from '../components/button/icon';
import CnCardContent from '../components/card/card-content';
import CnCardFooter from '../components/card/card-footer';
import CnCardHeader from '../components/card/card-header';
import CnRow from '../components/core/row';

export default class Example extends React.Component {
    render() {
        return (
            <CnContainer>
                <View row flex>
                    <View vcenter hcenter bg="red" flex>
                        <Text style={{color: '#000'}}>dsadas</Text>
                    </View>
                    <View vcenter hcenter bg="green" flex={2}>
                        <Text style={{color: '#000'}}>dsadas</Text>
                    </View>
                    <View vcenter hcenter bg="yellow">
                        <Text style={{color: '#000'}}>dsadas</Text>
                    </View>
                </View>
            </CnContainer>
        );
    }
}

AppRegistry.registerComponent('Example', () => Example);
