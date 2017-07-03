[![npm version](https://badge.fury.io/js/centro-ui.svg)](https://badge.fury.io/js/centro-ui) 
![license](https://img.shields.io/github/license/CentroUI/apistatus.svg)

<h1 align="center">CentroUI</h1>

<br/>

<div align="center">
  <img src="https://github.com/Centroida/CentroUI/raw/master/centroui.png" height="200">
</div>

<h5 align="center">
CentroUI is a library for building user interfaces for WebVR.
</h5>


</div>

**CentroUI**  is a JavaScript library providing a set of reusable and extendable UI controls for building interfaces for WebVR applications. Based on [React VR](https://github.com/facebook/react-vr), CentroUI gives developers with plug-and-play text input controls, cards, lists, navigation items and grids, all built with cross-device and cross-browser compatibility to ensure consistent experience with any environment and device.


## Resources
* [Wiki](https://github.com/Centroida/CentroUI/wiki)
* [Example](https://github.com/Centroida/CentroUI#example)

## Getting started 

1. __Install via npm__
```
npm install centro-ui --save
```

2. __Import in your project__

```
import { CnContainer } from 'centro-ui';
```

3. __Ivoke the component(s) in your view__

```
<CnContainer> </CnContainer>
```

**[Read the documentation to learn more about the API](https://github.com/Centroida/CentroUI/wiki)**


## Example
#### [Live demo](https://www.centroida.co/vr/)


![Video](http://i.imgur.com/ElGHkgj.gif)
![Screenshot](http://i.imgur.com/rX8LX1f.png)


#### Markup
```
            <View>
                <Pano source={asset('bg3.jpg')}/>


                /* CnContainer acts as a screen that contains all components. Can be placed in different directions */
                <CnContainer backgroundColor="transparent">

                    /* Add a navbar  */
                    <CnNavbar>
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
                    </CnNavbar>

                    /* CnRow contains all items in a given row */
                    <CnRow>
                        /* List different items */
                        <CnList>
                            <CnListItem>
                                List Item 1
                            </CnListItem>

                            <CnListItem>
                                List Item 2
                            </CnListItem>
                        </CnList>

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
                </CnContainer>

            </View>
```

## Contributing
*Coming soon*

## License Information

This project has been released under the [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html), the text of which is included below. This license applies ONLY to the source of this repository and does not extend to any other CentroUI distribution or variant, or any other 3rd party libraries used in a repository. For licensing information about CentroUI, see the [License Agreements page (Coming Soon)]() at [CentroUI.com](http://www.kendoui.com).

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
