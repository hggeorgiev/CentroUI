import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Plane,
    Cylinder

} from 'react-vr';
import CnContainer from "./components/core/container"
import CnNavbar from "./components/navbar/navbar"
import CnNavItem from "./components/navbar/navItem"
import CnCard from "./components/card/card"
import CnRow from "./components/core/row"
import CnCardHeader from "./components/card/card-header"
// Kitchen sink
export default class centrovrui extends React.Component {
    render() {
        return (
            <View>
                <Pano source={asset('bg3.jpg')}/>


                <CnContainer >
                    <CnNavbar>
                        <CnNavItem>
                            Item 1
                        </CnNavItem>
                        <CnNavItem>
                            Item 2
                        </CnNavItem>
                    </CnNavbar>

                    <CnRow>
                        <CnCard>
                            <CnCardHeader>
                                New card
                            </CnCardHeader>
                        </CnCard>
                    </CnRow>

                </CnContainer>

            </View>
        );
    }
};

AppRegistry.registerComponent('centrovrui', () => centrovrui);
