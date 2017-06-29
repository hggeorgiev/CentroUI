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


                <CnContainer>
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

                            <CnListItem>
                                List Item 3
                            </CnListItem>
                            <CnListItem>
                                <Image
                                style={{height: 0.5, width: 0.5, flex: 0}}
                                source={{uri: 'https://static.tumblr.com/b48527ebdd851b3702aa6c22c8a2e759/wep4qmm/UMqojjbux/tumblr_static_tumblr_static_filename_640.jpg'}}/>
                            </CnListItem>
                            <CnListItem>
                                {/*<TextInput rows={2}*/}
                                {/*cols={20} x={2} y={-1} z={1} rotateY={null} rotateX={null} textColor={'black'}*/}
                                {/*backgroundColor={'white'} keyboardColor={null} keyboardOnHover={null}/>*/}
                            </CnListItem>
                        </CnList>
                        <CnCard>

                        </CnCard>
                        <CnCard>

                        </CnCard>
                        <CnCard>
                            <CnCardHeader>
                                Synthwave
                            </CnCardHeader>
                            <CnCardContent>
                                <Image
                                    style={{height: 1, flex: 1}}
                                    source={{uri: 'https://static.tumblr.com/b48527ebdd851b3702aa6c22c8a2e759/wep4qmm/UMqojjbux/tumblr_static_tumblr_static_filename_640.jpg'}}/>
                            </CnCardContent>

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

                <CnContainer direction="left">

                    <TextInput rows={2}
                    cols={20} x={2} y={-1} z={1} rotateY={null} rotateX={null} textColor={'black'}
                    backgroundColor={'white'} keyboardColor={null} keyboardOnHover={null}/>
                </CnContainer>


                {/*<CnContainer >*/}
                    {/*<CnNavbar>*/}
                        {/*<CnNavItem>*/}
                            {/*Item 1*/}
                        {/*</CnNavItem>*/}
                        {/*<CnNavItem>*/}
                            {/*Item 2*/}
                        {/*</CnNavItem>*/}
                        {/*<CnNavItem>*/}
                            {/*Item 2*/}
                        {/*</CnNavItem>*/}
                        {/*<CnNavItem>*/}
                            {/*Item 2*/}
                        {/*</CnNavItem>*/}
                        {/*<CnNavItem>*/}
                            {/*Item 2*/}
                        {/*</CnNavItem>*/}

                    {/*</CnNavbar>*/}

                    {/*<CnRow>*/}
                        {/*<CnCard>*/}
                            {/*<CnCardHeader>*/}
                                {/*Card header*/}
                            {/*</CnCardHeader>*/}


                        {/*</CnCard>*/}
                        {/*<CnCard>*/}
                            {/*<CnCardHeader>*/}
                                {/*Card header*/}
                            {/*</CnCardHeader>*/}
                            {/*<CnCardContent>*/}

                            {/*</CnCardContent>*/}


                        {/*</CnCard>*/}
                        {/*<CnCard>*/}
                            {/*<CnCardHeader>*/}
                                {/*Card header*/}
                            {/*</CnCardHeader>*/}
                            {/*<CnCardContent>*/}
                                {/*<Image*/}
                                    {/*style={{height: 1.1, flex: 0}}*/}
                                    {/*source={{uri: 'https://static.tumblr.com/b48527ebdd851b3702aa6c22c8a2e759/wep4qmm/UMqojjbux/tumblr_static_tumblr_static_filename_640.jpg'}}*/}
                                {/*/>*/}
                            {/*</CnCardContent>*/}


                        {/*</CnCard>*/}
                        {/*<CnCard>*/}


                        {/*</CnCard>*/}
                    {/*</CnRow>*/}
                    {/*<CnRow>*/}
                        {/*<CnCard>*/}
                            {/*<CnCardHeader>*/}
                                {/*New ca*/}
                            {/*</CnCardHeader>*/}
                            {/*<CnCardContent>*/}
                                {/*<Image*/}
                                    {/*style={{height: 1.1, flex: 0}}*/}
                                    {/*source={{uri: 'https://static.tumblr.com/b48527ebdd851b3702aa6c22c8a2e759/wep4qmm/UMqojjbux/tumblr_static_tumblr_static_filename_640.jpg'}}*/}
                                {/*/>*/}
                            {/*</CnCardContent>*/}
                            {/*<CnCardFooter>*/}

                                {/*<Text*/}
                                    {/*style={{fontSize: 0.15, flex: 0, textAlign: 'left', textAlignVertical: 'center', color: "#000" }}>*/}
                                    {/*test*/}
                                {/*</Text>*/}
                            {/*</CnCardFooter>*/}

                        {/*</CnCard>*/}
                    {/*</CnRow>*/}

                {/*</CnContainer>*/}


                {/*<CnContainer direction="left">*/}
                    {/*<CnNavbar>*/}
                        {/*<CnNavItem>*/}
                            {/*Item 1*/}
                        {/*</CnNavItem>*/}
                    {/*</CnNavbar>*/}

                    {/*<TextInput rows={2}*/}
                               {/*cols={20} x={2} y={-1} z={1} rotateY={null} rotateX={null} textColor={'black'}*/}
                               {/*backgroundColor={'white'} keyboardColor={null} keyboardOnHover={null}/>*/}
                {/*</CnContainer>*/}

                {/*<CnContainer direction="back">*/}

                {/*</CnContainer>*/}

                {/*<CnContainer direction="right">*/}

                {/*</CnContainer>*/}




            </View>
        );
    }
};

AppRegistry.registerComponent('centrovrui', () => centrovrui);
