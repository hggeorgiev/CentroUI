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
import TextInput from "./components/text-input/text-input"
import CnList from "./components/list/list"
import CnListItem from "./components/list/list-item"
// Kitchen sink
export default class centrovrui extends React.Component {
    render() {
        return (
            <View>
                <Pano source={asset('bg3.jpg')}/>


                <CnContainer backgroundColor="transparent">
                    <CnNavbar>

                        <CnNavItem>
                            Hello CentroUI
                        </CnNavItem>

                        <CnNavItem>
                            Home
                        </CnNavItem>

                        <CnNavItem>
                            Home
                        </CnNavItem>

                        <CnNavItem>
                            Home
                        </CnNavItem>
                    </CnNavbar>


                    <CnRow>
                        <CnList>

                            <CnListItem>
                                List Item 1
                            </CnListItem>

                            <CnListItem>
                                List Item 2
                            </CnListItem>


                        </CnList>
                        <CnCard>
                            <CnCardHeader>
                                I'm a card
                            </CnCardHeader>
                            <CnCardContent>
                                <Image
                                    style={{height: 1, flex: 1}}
                                    source={{uri: 'https://static.tumblr.com/b48527ebdd851b3702aa6c22c8a2e759/wep4qmm/UMqojjbux/tumblr_static_tumblr_static_filename_640.jpg'}}/>
                            </CnCardContent>
                            <CnCardHeader>
                                Synthwave
                            </CnCardHeader>

                        </CnCard>

                    </CnRow>
                    <CnRow>
                        <CnCard>
                            <CnCardHeader>
                                Card 2
                            </CnCardHeader>
                            <CnCardContent>

                            </CnCardContent>
                            <CnCardFooter>
                                <Text color="black"> Footer!</Text>
                            </CnCardFooter>

                        </CnCard>
                        <TextInput rows={2}
                                   cols={20} x={2} y={-1} z={1} rotateY={null} rotateX={null} textColor={'black'}
                                   backgroundColor={'white'} keyboardColor={null} keyboardOnHover={null}/>
                    </CnRow>
                </CnContainer>

                <CnContainer direction="left" backgroundColor="transparent">
                    <CnNavbar>
                        <CnNavItem>
                            Item 1
                        </CnNavItem>
                    </CnNavbar>

                    <TextInput rows={2}
                               cols={20} x={2} y={-1} z={1} rotateY={null} rotateX={null} textColor={'black'}
                               backgroundColor={'white'} keyboardColor={null} keyboardOnHover={null}/>
                </CnContainer>


                <CnContainer direction="right" backgroundColor="transparent">
                    <CnRow>
                        <CnCard>
                            <CnCardHeader>
                                Card 2
                            </CnCardHeader>
                            <CnCardContent>

                            </CnCardContent>
                            <CnCardFooter>
                                <Text color="black"> Footer!</Text>
                            </CnCardFooter>

                        </CnCard>
                        <CnCard>
                            <CnCardHeader>
                                Card 2
                            </CnCardHeader>
                            <CnCardContent>

                            </CnCardContent>
                            <CnCardFooter>
                                <Text color="black"> Footer!</Text>
                            </CnCardFooter>

                        </CnCard>
                        <CnCard>
                            <CnCardHeader>
                                Card 2
                            </CnCardHeader>
                            <CnCardContent>

                            </CnCardContent>
                            <CnCardFooter>
                                <Text color="black"> Footer!</Text>
                            </CnCardFooter>

                        </CnCard>
                    </CnRow>




                </CnContainer>




            </View>
        );
    }
};

AppRegistry.registerComponent('centrovrui', () => centrovrui);
