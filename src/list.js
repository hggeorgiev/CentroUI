import React from 'react';
import 'aframe';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import {default as TextBox} from './libs/editor/TextBox';

/***
 *  Simple list for adding and removing items.
 *  TODO Separate list logic from input box
 */
export default class CnList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            btnText: '+',
            base: 0,
            btnBase: 0,
            color: 'red',
            called: false
        }
    }


    componentDidMount() {
        window.addEventListener('load', () => {
            this.state.textbox = new TextBox(window, "#keyboardCanvas");
            console.log(this.state.textbox);
        });

    }

    selectItem(item) {
        this.state.textbox.setText(item[this.props.itemProp]);
        this.setState({base: 0, btnBase: 0, selectedItem: item, btnText: 'Save'});
    }


    addOrUpdate() {
        if (this.state.selectedItem) {
            this.props.items.map((item) => {
                if (item.id === this.state.selectedItem.id) {
                    item[this.props.itemProp] = this.state.textbox.getText();
                }
                return item;
            });

            this.state.textbox.setText('');
            this.setState({people: this.props.items, base: 0, btnBase: 0, selectedItem: '', btnText: '+'});
        } else {
            let newPerson = {
                firstName: this.state.textbox.getText(),
                lastName: "",
                id: Math.floor(Math.random() * 150) + 1
            };
            this.props.items.unshift(newPerson);
            this.state.textbox.setText('');
            this.setState({people: this.props.items, base: 0, btnBase: 0})
        }
    }

    removeItem(index) {
        this.setState({people: this.props.items.splice(index, 1), base: 0, btnBase: 0})
    }


    render() {
        return (
            <a-entity >


                {this.props.items.map((item, i) =>

                    <Entity material="color: #337ab7; shader: flat" rotation="0 0 0"
                            events={{click: () => this.selectItem(item)}}
                            key={i}
                            position={{x: 0, y: this.state.base += 0.8, z: -3}}
                            text={{
                                value: item[this.props.itemProp],
                                font: 'exo2semibold',
                                color: 'white',
                                align: 'center',
                                width: 5,
                                height: 2,
                                lineHeight: 0.85
                            }} geometry="primitive: plane; width: 1.5; height: 0.80"/>
                )}
                {this.props.items.map((item, i) =>
                    <Entity material="color: #f2dede; shader: flat" rotation="0 0 0"
                            events={{click: (e) => {e.preventDefault(); this.removeItem(i)}}}
                            key={i}
                            position={{x: 0.55, y: this.state.btnBase += 0.85, z: -2.8}}
                            text={{
                                value: 'x',
                                color: '#a94442',
                                align: 'center',
                                width: 5,
                                height: 5
                            }} geometry="primitive: plane; width: 0.2; height: 0.2"/>
                )}

                <Entity position="-0.5 0 -3" material="color: #337ab7; shader:flat"
                        text={{value: this.state.btnText, align: 'center', width: 5, height: 2, lineHeight: 1}}
                        events={{click: () => this.addOrUpdate()}}
                        geometry=" primitive: plane; width: 0.50; height: 0.50"/>

                <a-video src="#keyboardCanvas" width="1.21" height="0.300" rotation="0 0 0" position="0.5 0.1 -3"
                         transparent="false" opacity="0.5"></a-video>

            </a-entity>
        );

    }

}