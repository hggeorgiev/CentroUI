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

class PropertyDetails extends React.Component {

	renderImagesGrid() {
		return (
			<CnCard stretch flex={2} p={0.2} bg="#1C1C1C">
				<CnCard row stretch border={{ width: 0 }} bg="#1C1C1C">
					<CnCard border={{ width: 0 }} bg="#393939">
						<Image source={require('../../static_assets/bedroom.gif')} resizeMode='contain' style={{ width: 2, height: 1.5 }} />
						<Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
							Bedroom
							</Text>
					</CnCard>
					<View style={{ flex: 0.1 }} />
					<CnCard border={{ width: 0 }} bg="#393939">
						<Image source={require('../../static_assets/bathroom.jpg')} resizeMode='contain' style={{ width: 2, height: 1.5 }} />
						<Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
							Bathroom
							</Text>
					</CnCard>
				</CnCard>
				<CnCard row stretch border={{ width: 0 }} bg="#1C1C1C">
					<CnCard border={{ width: 0 }} bg="#393939">
						<Image source={require('../../static_assets/living_room.jpg')} resizeMode='contain' style={{ width: 2, height: 1.5 }} />
						<Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
							Lounge / Living room
							</Text>
					</CnCard>
					<View style={{ flex: 0.1 }} />
					<CnCard border={{ width: 0 }} bg="#393939">
						<Image source={require('../../static_assets/kitchen.jpg')} resizeMode='contain' style={{ width: 2, height: 1.5 }} />
						<Text style={{ marginLeft: 0.2, fontSize: 0.1 }}>
							Kitchen
							</Text>
					</CnCard>
				</CnCard>
			</CnCard>
		)
	}

	renderPreviewContainer() {
		return (
			<CnCard stretch bg="#1C1C1C">
				<CnCard border={{ width: 0 }} bg="#393939">
					<Image source={require('../../static_assets/house1.jpg')} resizeMode='contain' style={{ width: 2, height: 1.5 }} />
				</CnCard>
				<CnCard row hstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="#393939">
					<Image source={require('../../static_assets/tag.png')} resizeMode='contain' style={{ width: 0.2, height: 0.2 }} />
					<Text style={{ marginLeft: 0.2, fontSize: 0.15, textAlign: 'center' }}>
						Exotic Caribbean House
					</Text>
				</CnCard>
				<CnCard row hstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="#393939">
					<Image source={require('../../static_assets/address.png')} resizeMode='contain' style={{ width: 0.2, height: 0.2 }} />
					<Text style={{ marginLeft: 0.2, fontSize: 0.15, textAlign: 'center' }}>
						123 6th St. Melbourne, FL 32904
					</Text>
				</CnCard>
				<CnCard row hstart pl={0.2} pr={0.2} border={{ width: 0 }} bg="#393939">
					<Image source={require('../../static_assets/measure.png')} resizeMode='contain' style={{ width: 0.2, height: 0.2 }} />
					<Text style={{ marginLeft: 0.2, fontSize: 0.15, textAlign: 'center' }}>
						3000 sq. ft.
					</Text>
				</CnCard>
			</CnCard>
		)
	}

	render() {
		return (
			<View>
				<CnContainer backgroundColor="transparent" direction="right">
					<CnNavbar backgroundColor="#393939">
						<CnCard bg='transparent' border={{ width: 0 }}>
							<Text style={{ fontSize: 0.2 }}>Property Details</Text>
						</CnCard>
					</CnNavbar>
					<CnCard row bg="#1C1C1C">
						{this.renderPreviewContainer()}
						{this.renderImagesGrid()}
					</CnCard>
				</CnContainer>
			</View>
		);
	}
}

export { PropertyDetails }