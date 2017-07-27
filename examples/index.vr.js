import React from 'react';
import { AppRegistry, Text } from 'react-vr';
import Container from '../components/core/container';
import Navbar from '../components/navbar/navbar'
import NavItem from '../components/navbar/nav-item'



export default class Example extends React.Component {
    render() {
        return (
            <Container>
                <Navbar>
                    <NavItem>
                        <Text>Test</Text>
                    </NavItem>
                </Navbar>

            </Container>
        );
    }
}

AppRegistry.registerComponent('Example', () => Example);
