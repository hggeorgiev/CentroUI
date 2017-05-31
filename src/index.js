import 'aframe';
import 'aframe-mouse-cursor-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
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




    render() {
        return (
            <Scene>
                <a-assets>
                    <canvas id="keyboardCanvas" width="512" height="128"></canvas>
                </a-assets>


                <Entity primitive="a-sky" color="#ECECEC"/>



                <a-entity camera="userHeight: 1.5" look-controls mouse-cursor>
                </a-entity>
            </Scene>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
