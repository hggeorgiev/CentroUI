import React from 'react';
import 'aframe-animation-component';
import 'aframe-href-component';
import 'aframe';
import 'babel-polyfill';


export default class CnCard extends React.Component {

    constructor(props) {
        super(props);
        // Dynamic position
    };


    render() {
        return (

            <a-entity>


                <a-entity geometry="primitive: plane; width: 1.8; height: 2" material="color: #FFF" position="2.5 1.5 -3">
                    <a-plane width="1.8" height="0.9" position="0 0.7 0.01" src="#photo"></a-plane>
                    <a-text value="Hristo Georgiev" color="#4B5154" width="4" position="-0.55 0 0.01"></a-text>
                    <a-plane width="1.6" height="0.4" position="0 -0.35 0.01">
                        <a-text
                            value="Lorem ipsum."
                            color="#697982" anchor="center" width="1.6"></a-text>
                    </a-plane>
                    <a-plane width="1.6" height="0.01" position="0 -0.6 0.01" color="#697982" opacity="0.3"></a-plane>
                    <a-plane width="1.6" height="0.2" position="0 -0.8 0.1">
                        <a-entity mixin="social" material="src: #codepen" position="-0.3 0 0.01"
                                  href="https://codepen.io/" target="#scale">
                            <a-animation id="scale" attribute="scale" from="1 1 1" to="1.6 1.6 1.6" begin="href"
                                         dur="800" easing="ease-in"></a-animation>
                        </a-entity>
                        <a-entity mixin="social" material="src: #twitter; color: #1DA1F2" position="0 0 0.01"
                                  href="https://twitter.com/hggeorgievcom" target="_blank#scale">
                            <a-animation id="scale" attribute="scale" from="1 1 1" to="1.6 1.6 1.6" begin="href"
                                         dur="800" easing="ease-in"></a-animation>
                        </a-entity>
                        <a-entity mixin="social" material="src: #github" position="0.3 0 0.01"
                                  href="https://github.com/kaizeras/" target="_blank#scale">
                            <a-animation id="scale" attribute="scale" from="1 1 1" to="1.6 1.6 1.6" begin="href"
                                         dur="800" easing="ease-in"></a-animation>
                        </a-entity>
                    </a-plane>
                </a-entity>


            </a-entity>

        )
    }
}














