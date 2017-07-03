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



## Example
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
