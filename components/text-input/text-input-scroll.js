import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text, Image } from 'react-vr';

class Scroll extends Component {
    constructor(props) {
        super(props);
        this.state= {
            backgroundColor1: 'rgba(0,0,0,0.5)',
            backgroundColor2: 'rgba(0,0,0,0.5)'
        }
    }
    componentWillMount(){
        this.props.coordx;
        this.props.coordy;
        this.props.coordx;
    }
    flash() {
        this.setState({backgroundColor1: 'green'},(()=>{ setTimeout((()=>{
            return this.flash1Follow.bind(this);
        })(),1)})());
    }
    flash1Follow() {
        this.setState({backgroundColor1: 'rgba(0,0,0,0.5)'});
    }

    flash2() {
        this.setState({backgroundColor2: 'green'},(()=>{ setTimeout((()=>{
            return this.flash2Follow.bind(this);
        })(),1)})());
    }
    flash2Follow() {
        this.setState({backgroundColor2: 'rgba(0,0,0,0.5)'});
    }


    //TODO Rename

    handleClick1() {
        this.flash();
        this.props.handleUp();
    }

    handleClick2() {
        this.flash2();
        this.props.handleDown();
    }

    render() {
        return(<View style={{opacity: this.props.opacity}}>
            <VrButton onClick={this.handleClick1.bind(this)} style={[{height: .1}, {width: .1}, {backgroundColor: this.state.backgroundColor1}, {borderRadius: 10}]}>
                <Image  style={[{height: .1}, {width:.1}]} source = {{uri:'../static_assets/up.png'}}/>
            </VrButton>
            <VrButton onClick={this.handleClick2.bind(this)} style={[{height: .1}, {width: .1}, {backgroundColor: this.state.backgroundColor2}, {borderRadius: 10}]}>
                <Image style={[{height: .1}, {width: .1}]} source={{uri:'../static_assets/down.png'}}/>
            </VrButton>
        </View>);
    }

}

export default Scroll;