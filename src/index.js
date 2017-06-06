import 'aframe';
import 'aframe-mouse-cursor-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import {default as Keyboard} from './libs/editor/Keyboard';
import CnList from './list';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [
                {firstName: "Hristo", lastName: "Georgiev", id: 1},
                {firstName: "Dimitar", lastName: "Stoyanov", id: 2},
                {firstName: "Stefan", lastName: "Lazov", id: 3}
            ]
        };
    };

    componentDidMount() {
        this.state.keyboard = new Keyboard();

    }


    render() {
        return (
            <Scene>
                <a-assets>
                    <canvas id="keyboardCanvas" width="512" height="128"></canvas>
                </a-assets>
                <CnList items={this.state.people} itemProp="firstName"/>

                <Entity primitive="a-sky" color="#ECECEC"/>


                <a-entity camera="userHeight: 1.5" look-controls mouse-cursor>
                    <a-entity id="keyboard" scale="0.01 0.01 0.01" position="0 -0.100 -0.250" rotation="50 0 0"></a-entity>
                </a-entity>

            </Scene>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
