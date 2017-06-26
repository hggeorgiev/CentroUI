import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Plane,
    Image,
    Cylinder,
    styles

} from 'react-vr';
import CnContainer from "./components/core/container"
import CnNavbar from "./components/navbar/navbar"
import CnNavItem from "./components/navbar/navItem"
import CnCard from "./components/card/card"
import CnRow from "./components/core/row"
import CnCardHeader from "./components/card/card-header"
import CnCardContent from "./components/card/card-content"
import CnCardFooter from "./components/card/card-footer"
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
                                New ca
                            </CnCardHeader>
                            <CnCardContent>

                            </CnCardContent>


                        </CnCard>
                    </CnRow>
                    <CnRow>
                        <CnCard>
                            <CnCardHeader>
                                New ca
                            </CnCardHeader>
                            <CnCardContent>
                                <Image
                                    style={{height: 1.1, flex: 0}}
                                    source={{uri: 'https://static.tumblr.com/b48527ebdd851b3702aa6c22c8a2e759/wep4qmm/UMqojjbux/tumblr_static_tumblr_static_filename_640.jpg'}}
                                />
                            </CnCardContent>
                            <CnCardFooter>

                                <Text style={{fontSize: 0.15, flex: 0, textAlign: 'left', textAlignVertical: 'center', color: "#000" }}>
                                    test
                                </Text>
                            </CnCardFooter>

                        </CnCard>
                    </CnRow>

                </CnContainer>

            </View>
        );
    }
};

AppRegistry.registerComponent('centrovrui', () => centrovrui);
