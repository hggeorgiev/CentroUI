import React from 'react';
import { AppRegistry, View, Text, Image, asset } from 'react-vr';
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

class MainMenu extends React.Component {

	renderPropertiesGrid() {
		return (
			<CnCard stretch flex={3} p={0.2} bg="#1C1C1C">
				<CnCard row stretch border={{ width: 0 }} bg="#1C1C1C">
					<CnButton style={{ flex: 1, width: 2, height: 1.5 }} color="#393939">
						<CnCard vstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
							<Image source={asset('../../static_assets/house1.jpg')} resizeMode='contain' style={{ width: 1, height: 0.6 }} />
							<Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
								Exotic Caribbean House
							</Text>
						</CnCard>
					</CnButton>
					<View style={{flex: 0.1}}/>
					<CnButton style={{ flex: 1, width: 2, height: 1.5 }} color="#393939">
						<CnCard vstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
							<Image source={asset('../../static_assets/house2.jpg')} resizeMode='contain' style={{ width: 1, height: 0.6 }} />
							<Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
								Small Hawaii House
							</Text>
						</CnCard>
					</CnButton>
					<View style={{flex: 0.1}}/>
					<CnButton style={{ flex: 1, width: 2, height: 1.5 }} color="#393939">
						<CnCard vstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
							<Image source={asset('../../static_assets/house3.jpg')} resizeMode='contain' style={{ width: 1, height: 0.6 }} />
							<Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
								Big Australian House
							</Text>
						</CnCard>
					</CnButton>
				</CnCard>
				<CnCard row stretch border={{ width: 0 }} bg="#1C1C1C">
					<CnButton style={{ flex: 1, width: 2, height: 1.5 }} color="#393939">
						<CnCard vstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
							<Image source={asset('../../static_assets/house4.jpg')} resizeMode='contain' style={{ width: 1, height: 0.6 }} />
							<Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
								The rich guy's house
							</Text>
						</CnCard>
					</CnButton>
					<View style={{flex: 0.1}}/>
					<CnButton style={{ flex: 1, width: 2, height: 1.5 }} color="#393939">
						<CnCard vstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
							<Image source={asset('../../static_assets/house5.jpg')} resizeMode='contain' style={{ width: 1, height: 0.6 }} />
							<Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
								Puerto rico house
							</Text>
						</CnCard>
					</CnButton>
					<View style={{flex: 0.1}}/>
					<CnButton style={{ flex: 1, width: 2, height: 1.5 }} color="#393939">
						<CnCard vstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
							<Image source={asset('../../static_assets/house6.jpg')} resizeMode='contain' style={{ width: 1, height: 0.6 }} />
							<Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
								Huge castle-like house
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
						<Image source={asset('../../static_assets/house.png')} resizeMode='contain' style={{ width: 0.2, height: 0.2 }} />
						<Text style={{ marginLeft: 0.2, fontSize: 0.2 }}>
							Houses
					</Text>
					</CnCard>
				</CnButton>
				<CnButton style={{ flex: 1 }} color="#393939">
					<CnCard row hstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
						<Image source={asset('../../static_assets/apartment.png')} resizeMode='contain' style={{ width: 0.2, height: 0.2 }} />
						<Text style={{ marginLeft: 0.2, fontSize: 0.2 }}>
							Apartments
					</Text>
					</CnCard>
				</CnButton>
				<CnButton style={{ flex: 1 }} color="#393939">
					<CnCard row hstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
						<Image source={asset('../../static_assets/store.png')} resizeMode='contain' style={{ width: 0.2, height: 0.2 }} />
						<Text style={{ marginLeft: 0.2, fontSize: 0.2 }}>
							Stores
					</Text>
					</CnCard>
				</CnButton>
				<CnButton style={{ flex: 1 }} color="#393939">
					<CnCard row hstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="transparent">
						<Image source={asset('../../static_assets/office.png')} resizeMode='contain' style={{ width: 0.2, height: 0.2 }} />
						<Text style={{ marginLeft: 0.2, fontSize: 0.2 }}>
							Offices
					</Text>
					</CnCard>
				</CnButton>
			</CnCard>
		)
	}

	render() {
		return (
			<View>
				<CnContainer backgroundColor="transparent">
					<CnNavbar backgroundColor="#393939">
						<CnCard row hstart bg='transparent' border={{ width: 0 }}>
							<CnButton w={0.4} h={0.4} color="#1C1C1C">
								<Image source={asset('../../static_assets/plus.png')} resizeMode='contain' style={{ width: 0.2, height: 0.2, tintColor: '#fff' }} />
							</CnButton >
							<CnCard bg='transparent' border={{ width: 0 }}>
								<Text style={{ fontSize: 0.2 }}>Properties</Text>
							</CnCard>
						</CnCard>
					</CnNavbar>
					<CnCard row bg="#1C1C1C">
						{this.renderCategoriesList()}
						{this.renderPropertiesGrid()}
					</CnCard>
					<CnNavbar backgroundColor="transparent">
						<CnCard bg="transparent" border={{ width: 0 }} mt={1}>
							<CnTextInput backgroundColor="#fff" textColor="#000" />
						</CnCard>
					</CnNavbar>
				</CnContainer>
			</View>
		);
	}
}

export { MainMenu }