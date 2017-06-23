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
import CnContainer from "./container"
import CnNavbar from "./navbar"
import CnNavItem from "./navItem"

export default class centrovrui extends React.Component {
    render() {
        return (
            <View>
                <Pano source={asset('bg3.jpg')}/>


                <CnContainer >
                    <CnNavbar>
                        <CnNavItem>
                            Top kek
                        </CnNavItem>
                        <CnNavItem>
                            Top kek
                        </CnNavItem>
                        <CnNavItem>
                            Top kek
                        </CnNavItem>


                    </CnNavbar>
                </CnContainer>

            </View>
        );
    }
};

AppRegistry.registerComponent('centrovrui', () => centrovrui);
