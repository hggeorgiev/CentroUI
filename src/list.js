import React from 'react';
import 'aframe';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import {default as Keyboard} from './libs/editor/Keyboard';

/***
 *  Simple list for adding and removing items.
 *  TODO Separate list logic from input box
 */
export class CnList extends React.Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
        window.addEventListener('load', () => {
            this.state.keyboard = new Keyboard();
            this.state.keyboard.init(window, "#keyboardCanvas");

        });

    }

    selectItem(item) {
        this.state.keyboard.setText(item[this.props.itemProp]);
        this.setState({base: 0, selectedItem: item, btnText: 'Save'});
    }

    addOrUpdate() {
        if (this.state.selectedItem) {
            this.state.items.map((item) => {
                if (item.id === this.state.selectedItem.id) {
                    item[this.props.itemProp] = this.state.keyboard.getText();
                }
                return item;
            });

            this.state.keyboard.setText('');
            this.setState({people: this.state.items, base: 0, selectedItem: '', btnText: '+'});
        } else {
            let newPerson = {
                firstName: this.state.keyboard.getText(),
                lastName: "",
                id: Math.floor(Math.random() * 150) + 1
            };
            this.state.items.push(newPerson);
            this.state.keyboard.setText('');
            this.setState({people: this.state.items, base: 0})
        }
    }


    render() {
        return (
            <Entity>
                {this.state.items.map((item, i) =>

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

                <Entity position="-0.5 0 -3" material="color: #337ab7; shader:flat"
                        text={{value: this.state.btnText, align: 'center', width: 5, height: 2, lineHeight: 1}}
                        events={{click: () => this.addOrUpdate()}}
                        geometry=" primitive: plane; width: 0.50; height: 0.50"/>

                <a-video src="#keyboardCanvas" width="1.21" height="0.300" rotation="0 0 0" position="0.5 0.1 -3"
                         transparent="false" opacity="0.5"></a-video>

                <a-entity camera="userHeight: 1.5" look-controls mouse-cursor></a-entity>
            </Entity>
        );

    }

}