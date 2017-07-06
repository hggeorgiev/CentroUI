import React from 'react';


import {AppRegistry, View} from 'react-vr';
import CnContainer from '../components/core/container';
import CnCard from '../components/card/card';
import CnButton from '../components/button/button';
import CnIcon from '../components/button/icon';
import CnCardContent from '../components/card/card-content'
import CnCardFooter from '../components/card/card-footer'
import CnCardHeader from '../components/card/card-header'

export default class Example extends React.Component {
    render() {
        return (
            <View>
                <CnContainer>
                    <CnCard>
                        <CnCardHeader>
                            test
                        </CnCardHeader>
                        <CnCardContent>

                        </CnCardContent>
                        <CnCardFooter>
                            <CnButton
                            >
                                
                                <CnIcon name="shopping-cart"/>
                            </CnButton>
                        </CnCardFooter>

                    </CnCard>
                </CnContainer>
            </View>
        );
    }
}

AppRegistry.registerComponent('Example', () => Example);
