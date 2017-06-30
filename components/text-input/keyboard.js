import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text } from 'react-vr';
import KeyboardButton from './keyboard-button';

import layout from './keyboard-layout';

var styles = StyleSheet.create({
    container : {
    },
    numbers : {
    },
    row1 : {
    },
    row2 : {
    },
    row3 : {
    },
    bottom : {

    },
    row: {
        flexDirection: 'row'
    }
})


class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cursorPosition: 0,
            textString: '',
            isShiftSelected: false,
            isSymbolSelected: false
        }
    }

    handleAllValues(value) {
        this.props.handleAllLetters(value);
    }

    handleDelete() {
        this.props.handleDelete();
    }

    handleShift() {
        this.setState({
            isShiftSelected: !this.state.isShiftSelected
        });
    }

    handleSymbolSelector() {
        this.setState({
            isSymbolSelected: !this.state.isSymbolSelected,
            isShiftSelected: false
        });
    }

    handleBack() {
        this.props.handleBack();
    }

    handleForward() {
        this.props.handleForward();
    }

    handleSpacebar() {
        this.props.handleSpace();
    }

    handleSubmit() {
        this.props.handleSubmit();
    }

    getLayout () {
        if(this.state.isSymbolSelected) return layout.symbol.layout;
        else {
            if(! this.state.isShiftSelected) return layout.alphabet.layout; else {
                return layout.alphabet.layout.map(keyRow => keyRow.map(key => key.toUpperCase()));
            }
        }
    }

    render() {
        var layoutArray = this.getLayout();
        numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        return (
            <View>
                <View style={styles.row}>
                    {numberArray.map((number) => <KeyboardButton keyboardOnHover={this.props.keyboardOnHover} keyboardColor={this.props.keyboardColor} key={number} this={this} value={number} clickHandler={this.handleAllValues.bind(this)} isDisabled={false}/> )}
                    <KeyboardButton keyboardOnHover={this.props.keyboardOnHover} keyboardColor={this.props.keyboardColor} value={'Delete'} clickHandler={this.handleDelete.bind(this)} isDisabled={false} />
                </View>
                <View style={styles.row}>
                    {layoutArray[0].map((value) => <KeyboardButton keyboardOnHover={this.props.keyboardOnHover} keyboardColor={this.props.keyboardColor} key={value} value={value} clickHandler={this.handleAllValues.bind(this)} isDisabled={false}/> )}
                </View>
                <View style={styles.row}>
                    {layoutArray[1].map((value) => <KeyboardButton keyboardOnHover={this.props.keyboardOnHover} keyboardColor={this.props.keyboardColor} key={value} value={value} clickHandler={this.handleAllValues.bind(this)} isDisabled={false}/> )}
                </View>
                <View style={styles.row}>
                    <KeyboardButton keyboardOnHover={this.props.keyboardOnHover} keyboardColor={this.props.keyboardColor} value={'Shift'} clickHandler={this.handleShift.bind(this)} isDisabled={this.state.isSymbolSelected}/>
                    {layoutArray[2].map((value) => <KeyboardButton keyboardOnHover={this.props.keyboardOnHover} keyboardColor={this.props.keyboardColor} key={value} value={value} clickHandler={this.handleAllValues.bind(this)} isDisabled={false}/> )}
                    <KeyboardButton keyboardOnHover={this.props.keyboardOnHover} keyboardColor={this.props.keyboardColor} value={this.state.isSymbolSelected ? layout.alphabet.displayValue : layout.symbol.displayValue} clickHandler={this.handleSymbolSelector.bind(this)} isDisabled={false} />
                </View>
                <View style={styles.row}>
                    <KeyboardButton keyboardOnHover={this.props.keyboardOnHover} keyboardColor={this.props.keyboardColor} value={'<-'} clickHandler={this.handleBack.bind(this)} isDisabled={false} />
                    <KeyboardButton keyboardOnHover={this.props.keyboardOnHover} keyboardColor={this.props.keyboardColor} value={'->'} clickHandler={this.handleForward.bind(this)} isDisabled={false} />
                    <KeyboardButton keyboardOnHover={this.props.keyboardOnHover} keyboardColor={this.props.keyboardColor} value={'                                                         '} style={{width: '0.8'}} clickHandler={this.handleAllValues.bind(this)} isDisabled={false} />
                    <KeyboardButton keyboardOnHover={this.props.keyboardOnHover} keyboardColor={this.props.keyboardColor} value={'Submit'} clickHandler={this.handleSubmit.bind(this)} isDisabled={false} />
                </View>
            </View>
        );
    }
}

export default Keyboard;