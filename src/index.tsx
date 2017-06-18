import 'aframe';
import 'aframe-mouse-cursor-component';
import 'babel-polyfill';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {default as Keyboard} from './libs/editor/Keyboard';
import CnList from './components/list';
import CnCard from './components/card';

class App extends React.Component< any , any> {
    public state:any;
    constructor(props:any) {
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
            <a-scene>
                <a-assets>
                    <canvas id="keyboardCanvas" width="512" height="128"></canvas>
                    <img id="photo" src="https://res.cloudinary.com/dybluctxg/image/upload/v1495307503/owl_vsg52w.jpg"/>
                    <img id="twitter"
                           src="https://res.cloudinary.com/dybluctxg/image/upload/v1495307560/twitter_wghtwy.png"/>
                    <img id="codepen"
                         src="https://res.cloudinary.com/dybluctxg/image/upload/c_scale,w_64/v1495310388/Button-Black-Large_n8o5ix.png"/>
                    <img id="github"
                         src="https://res.cloudinary.com/dybluctxg/image/upload/v1495310880/github_ipn5do.png"/>
                    <a-mixin class="links" id="social" geometry="primitive: circle; radius: 0.09"
                             material="color: #fff; transparent: true">

                    </a-mixin>
                </a-assets>
                <CnList items={this.state.people} itemProp="firstName"/>
                <CnCard/>
                <a-sky color="#ECECEC"></a-sky>



                <a-entity camera="userHeight: 1.5" look-controls mouse-cursor>
                    <a-entity id="keyboard" scale="0.01 0.01 0.01" position="0 -0.100 -0.250"
                              rotation="50 0 0"></a-entity>
                </a-entity>

            </a-scene>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
