[![npm version](https://badge.fury.io/js/centro-ui.svg)](https://badge.fury.io/js/centro-ui) 

<h1 align="center">CentroUI</h1>

<br/>

<div align="center">
  <img src="https://github.com/Centroida/CentroUI/raw/master/centroui.png" height="200">
</div>

<h5 align="center">
UI components for WebVR
</h5>


</div>

**CentroUI** is a set of reusable and extendable UI components and utilities for building interfaces for WebVR applications. Based on [React VR](https://github.com/facebook/react-vr), CentroUI gives developers with plug-and-play text input controls, cards, lists, navigation items and grids, all built with cross-device and cross-browser compatibility to ensure consistent experience with any environment and device.

### This project is still in a very early stage. Do not use in production. [Contributions are welcome!](https://github.com/Centroida/CentroUI#contributing)

## Resources
* [Wiki](https://centroida.github.io/CentroUI/)
* [Example](https://github.com/Centroida/CentroUI#example)

## Getting started 

In your [React VR](https://facebook.github.io/react-vr/docs/getting-started.html#content) project:

0. __Make sure you have the right dependency versions__

```
    "ovrui": "1.4.0",
    "react": "15.4.1",
    "react-native": "0.42.0",
    "three": "0.80.1",
    "react-vr": "1.4.0",
    "react-vr-web": "1.4.0"
```
If you don't have the correct dependency issues, you may encounter issues when importing components in your projects.
1. __Install via npm__
```
npm install centro-ui --save
```

2. __Import in your project__

```
import { Container } from 'centro-ui';
```

3. __Invoke the component(s) in your view__

```
<Container> </Container>
```

4.  __Add interactivity__

In your `vr/client.js` file, add the following:


```
// Import CnRayCaster and THREE.js
import CnRayCaster from "centro-ui/utilities/cn-raycaster";
import * as THREE from 'three'

function init(bundle, parent, options) {
    // Initialize a new Scene
    const scene = new THREE.Scene();
    const vr = new VRInstance(bundle, 'YourProjectName', parent, {
        // Add a raycaster array and initialize the CnRayCaster
        raycasters: [
            new CnRayCaster(scene)
        ],
        // Enable cursor visibility
        cursorVisibility: "visible", 

        scene: scene,
        ...options,
    });

 //...
}
```
[Having trouble adding a raycaster?](https://github.com/Centroida/CentroUI/wiki/Raycaster)



**[Read the documentation to learn more about the API](https://centroida.github.io/CentroUI/)**


## Example
#### [Live demo](https://www.centroida.co/vr/demo)


![Video](http://i.imgur.com/ElGHkgj.gif)
![Screenshot](http://i.imgur.com/rX8LX1f.png)


#### Markup
```
            <View>
                <Pano source={asset('bg3.jpg')}/>


                /* Container acts as a screen that contains all components. Can be placed in different directions */
                <Container backgroundColor="transparent">

                    /* Add a navbar  */
                    <Navbar>
                        <CnNavItem>
                            Hello CentroUI
                        </CnNavItem>

                        <CnNavItem>
                            Home
                        </CnNavItem>

                        <CnNavItem>
                            Home
                        </CnNavItem>

                        <CnNavItem>
                            Home
                        </CnNavItem>
                    </Navbar>

                    /* CnRow contains all items in a given row */
                    <CnRow>
                        /* List different items */
                        <List>
                            <ListItem>
                                List Item 1
                            </ListItem>

                            <ListItem>
                                List Item 2
                            </ListItem>
                        </List>

                        /* Simple card for displaying different types of content */
                        <CnCard>
                            <CnCardHeader>
                                I'm a card
                            </CnCardHeader>
                            <CnCardContent>
                                <Image
                                    style={{height: 1, flex: 1}}
                                    source={{uri: 'https://static.tumblr.com/b48527ebdd851b3702aa6c22c8a2e759/wep4qmm/UMqojjbux/tumblr_static_tumblr_static_filename_640.jpg'}}/>
                            </CnCardContent>
                            <CnCardHeader>
                                Synthwave
                            </CnCardHeader>

                        </CnCard>

                    </CnRow>
                    <CnRow>
                        <CnCard>
                            <CnCardHeader>
                                Card 2
                            </CnCardHeader>
                            <CnCardFooter>
                                <Text color="black"> Footer!</Text>
                            </CnCardFooter>
                        </CnCard>
                    </CnRow>
                </Container>

            </View>
```

## Contributing
If you're interested in contributing to the CentroUI, we'd love to have you involved. CentroUI is open to contributors of all skill levels and we are ready and willing to help beginners work through issues. Please read the guidelines for contributing before doing so. We're also looking forward to learn which features and use cases you're interested to see in the future so that we know what to focus on. 

If you don't want to write code or you don't have a lot of spare time, you still can help! Testing the various demos to make sure we haven't broken any features and filing issues when we do is very important.

Another way you can support this project is by [hiring us](https://www.centroida.co/contact.html). We will do our best to enable you to fully utilize our component library and find the shortest path to developing your WebVR project.

## Community
-  Follow us on [Twitter](https://twitter.com/Centro_UI) to get the most recent updates and examples

## License Information

This project has been released under the [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html), the text of which is included below. This license applies ONLY to the source of this repository and does not extend to any other CentroUI distribution or variant, or any other 3rd party libraries used in a repository. For licensing information about CentroUI, see the [License Agreements page (Coming Soon)]() at [CentroUI.com](http://www.centroui.com).

> Copyright © 2017 Centroida

> Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

> [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

>  Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
