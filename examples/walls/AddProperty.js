import React from 'react';
import { AppRegistry, View, Text, Image } from 'react-vr';
import CnContainer from '../../components/core/container';
import CnCard from '../../components/card/card';
import CnButton from '../../components/button/button';
import CnCardContent from '../../components/card/card-content';
import CnCardFooter from '../../components/card/card-footer';
import CnCardHeader from '../../components/card/card-header';
import CnRow from '../../components/core/row';
import CnNavbar from '../../components/navbar/navbar';
import CnNavItem from '../../components/navbar/nav-item';
import CnIcon from '../../components/button/icon';
import CnList from '../../components/list/list';
import CnListItem from '../../components/list/list-item';
import CnTextInput from '../../components/text-input/text-input';

class AddProperty extends React.Component {

    renderPropertiesGrid() {
        return (
            <CnCard stretch flex={3} p={0.2} bg="#1C1C1C">
                <CnCard row stretch border={{ width: 0 }} bg="#1C1C1C">
                    <CnButton style={{ flex: 1, width: 2, height: 1.5 }} color="#393939">
                        <CnCard vstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
                            <Image source={require('../../static_assets/house1.jpg')} resizeMode='contain' style={{ width: 1, height: 0.6 }} />
                            <Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
                                Exotic Caribbean House
							</Text>
                        </CnCard>
                    </CnButton>
                    <View style={{ flex: 0.1 }} />
                    <CnButton style={{ flex: 1, width: 2, height: 1.5 }} color="#393939">
                        <CnCard vstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
                            <Image source={require('../../static_assets/house2.jpg')} resizeMode='contain' style={{ width: 1, height: 0.6 }} />
                            <Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
                                Small Hawaii House
							</Text>
                        </CnCard>
                    </CnButton>
                    <View style={{ flex: 0.1 }} />
                    <CnButton style={{ flex: 1, width: 2, height: 1.5 }} color="#393939">
                        <CnCard vstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
                            <Image source={require('../../static_assets/house3.jpg')} resizeMode='contain' style={{ width: 1, height: 0.6 }} />
                            <Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
                                Big Australian House
							</Text>
                        </CnCard>
                    </CnButton>
                </CnCard>
                <CnCard row stretch border={{ width: 0 }} bg="#1C1C1C">
                    <CnButton style={{ flex: 1, width: 2, height: 1.5 }} color="#393939">
                        <CnCard vstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
                            <Image source={require('../../static_assets/house1.jpg')} resizeMode='contain' style={{ width: 1, height: 0.6 }} />
                            <Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
                                Exotic Caribbean House
							</Text>
                        </CnCard>
                    </CnButton>
                    <View style={{ flex: 0.1 }} />
                    <CnButton style={{ flex: 1, width: 2, height: 1.5 }} color="#393939">
                        <CnCard vstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
                            <Image source={require('../../static_assets/house2.jpg')} resizeMode='contain' style={{ width: 1, height: 0.6 }} />
                            <Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
                                Small Hawaii House
							</Text>
                        </CnCard>
                    </CnButton>
                    <View style={{ flex: 0.1 }} />
                    <CnButton style={{ flex: 1, width: 2, height: 1.5 }} color="#393939">
                        <CnCard vstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
                            <Image source={require('../../static_assets/house3.jpg')} resizeMode='contain' style={{ width: 1, height: 0.6 }} />
                            <Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
                                Big Australian House
							</Text>
                        </CnCard>
                    </CnButton>
                </CnCard>
            </CnCard>
        )
    }

    renderCategoriesList() {
        return (
            <CnCard stretch bg="#1C1C1C">
                <CnButton style={{ flex: 1 }} color="#393939">
                    <CnCard row hstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
                        <Image source={require('../../static_assets/house.png')} resizeMode='contain' style={{ width: 0.2, height: 0.2 }} />
                        <Text style={{ marginLeft: 0.2, fontSize: 0.2 }}>
                            Houses
					</Text>
                    </CnCard>
                </CnButton>
                <CnButton style={{ flex: 1 }} color="#393939">
                    <CnCard row hstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
                        <Image source={require('../../static_assets/apartment.png')} resizeMode='contain' style={{ width: 0.2, height: 0.2 }} />
                        <Text style={{ marginLeft: 0.2, fontSize: 0.2 }}>
                            Apartments
					</Text>
                    </CnCard>
                </CnButton>
                <CnButton style={{ flex: 1 }} color="#393939">
                    <CnCard row hstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
                        <Image source={require('../../static_assets/store.png')} resizeMode='contain' style={{ width: 0.2, height: 0.2 }} />
                        <Text style={{ marginLeft: 0.2, fontSize: 0.2 }}>
                            Stores
					</Text>
                    </CnCard>
                </CnButton>
                <CnButton style={{ flex: 1 }} color="#393939">
                    <CnCard row hstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
                        <Image source={require('../../static_assets/house.png')} resizeMode='contain' style={{ width: 0.2, height: 0.2 }} />
                        <Text style={{ marginLeft: 0.2, fontSize: 0.2 }}>
                            Houses
					</Text>
                    </CnCard>
                </CnButton>
            </CnCard>
        )
    }

    render() {
        return (
            <View>
                <CnContainer backgroundColor="transparent" direction="left">
                    <CnNavbar backgroundColor="#393939">
                        <CnCard bg='transparent' border={{ width: 0 }}>
                            <Text style={{ fontSize: 0.2 }}>Add Property</Text>
                        </CnCard>
                    </CnNavbar>
                    <View style={{ height: 0.05, backgroundColor: "#1C1C1C" }} />
                    <View style={{ height: 4, backgroundColor: "#393939" }}>
                        <CnCard hend pl={0.2} pr={0.1} border={{ width: 0 }} bg="transparent">
                            <CnCard p={0.5} border={{ width: 0 }} bg="#1C1C1C">
                                <View style={{ width: 2.8, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 0.2 }}>
                                        1st Street, Ocean Avenue
							        </Text>
                                </View>
                                <Image source={require('../../static_assets/house3.jpg')} resizeMode='contain' style={{ width: 2.8, height: 1.3 }} />
                                <View style={{ width: 2.8, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 0.2 }}>
                                        My pretty house
							        </Text>
                                </View>
                            </CnCard>
                        </CnCard>
                    </View>
                </CnContainer>
                <View style={{ position: 'absolute', transform: [{ translate: [-5, 1.2, 1.5] }, { rotateY: 90 }] }}>
                    <Text style={{ fontSize: 0.15 }}>Address</Text>
                    <CnTextInput style={{ borderWidth: 0 }} cols={40} backgroundColor="#fff" textColor="#000" />
                    <Text style={{ fontSize: 0.15 }}>Name</Text>
                    <CnTextInput style={{ borderWidth: 0 }} cols={40} backgroundColor="#fff" textColor="#000" />
                    <Text style={{ fontSize: 0.15 }}>Square feet</Text>
                    <CnTextInput style={{ borderWidth: 0 }} cols={40} backgroundColor="#fff" textColor="#000" />
                    <CnButton w={2} h={0.4} color="#1C1C1C" style={{borderRadius: 0.2}}>
                        <Text style={{ fontSize: 0.2 }}>
                            Add Property
                        </Text>
                    </CnButton >
                </View>
            </View>
        );
    }
}

export { AddProperty }