import 'aframe';
import 'aframe-mouse-cursor-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import {default as Keyboard} from './libs/editor/Keyboard';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            btnText: '+',
            base: 0,
            color: 'red', people: [
                {firstName: "Hristo", lastName: "Georgiev", id: 1},
                {firstName: "Dimitar", lastName: "Stoyanov", id: 2},
                {firstName: "Stefan", lastName: "Lazov", id: 3}
            ]
        };
    };


    componentDidMount() {
        window.addEventListener('load', () => {
            this.state.keyboard = new Keyboard();
            this.state.keyboard.init(window, "#keyboardCanvas");

        });

    }

    selectItem(item) {
        this.state.keyboard.setText(item.firstName);

        this.setState({base: 0, selectedItem: item, btnText: 'Save'});
    }

    addOrUpdate() {
        if (this.state.selectedItem) {
            this.state.people.map((item) => {
                if (item.id === this.state.selectedItem.id) {
                    item.firstName = this.state.keyboard.getText();
                }
                return item;
            });

            this.state.keyboard.setText('');
            this.setState({people: this.state.people, base: 0, selectedItem: '', btnText: '+'});
        } else {
            let newPerson = {firstName: this.state.keyboard.getText(), lastName: "", id: Math.floor(Math.random() * 150) + 1};
            this.state.people.push(newPerson);
            this.state.keyboard.setText('');
            this.setState({people: this.state.people, base: 0})
        }
    }


    render() {
        return (
            <Scene>
                <a-assets>
                    <canvas id="keyboardCanvas" width="512" height="128"></canvas>
                </a-assets>


                <Entity primitive="a-sky" color="#ECECEC"/>


                {this.state.people.map((person) =>

                    <Entity material="color: #337ab7; shader: flat" rotation="0 0 0"
                            events={{click: () => this.selectItem(person)}}
                            key={person.id}
                            position={{x: 0, y: this.state.base += 0.8, z: -3}}
                            text={{
                                value: person.firstName,
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

                <a-entity camera="userHeight: 1.5" look-controls mouse-cursor>
                </a-entity>
            </Scene>
        )
            ;
    }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
