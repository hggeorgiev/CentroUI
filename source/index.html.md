---
title: API Reference

includes:


search: true
---

# Home

CentroUI provides a set of reusable and extendable UI controls for building interfaces for WebVR applications. This library is based on [ReactVR](https://facebook.github.io/react-vr/), providing developers with text input controls, views, lists, navigation items and grids, all built with cross-device and cross-browser compatibility to ensure consistent experience with any environment and device.

The layout engine intelligently places elements depending on context, providing a predictable and structured approach to building interfaces for WebVR.

The UI elements are built according to best practices for building UI for VR and come with capabilities for zooming and highlighting to ensure the best user experience at the lowest development cost.

###  Contributing


If you're interested in contributing to the [CentroUI](https://github.com/Centroida/CentroUI), we'd love to have you involved. CentroUI is open to contributors of all skill levels and we are ready and willing to help beginners work through issues. Please read the guidelines for contributing before doing so. We're also looking forward to learn which features and use cases you're interested to see in the future so that we know what to focus on. 

If you don't want to write code or you don't have a lot of spare time, you still can help! Testing the various demos to make sure we haven't broken any features and filing issues when we do is very important.

Another way you can support this project is by [hiring us](https://www.centroida.co/contact.html). We will do our best to enable you to fully utilize our component library and find the shortest path to developing your WebVR project.



[Source Code on Github](https://github.com/Centroida/CentroUI)

# Getting started



In your React VR project:

### 1 **Install via npm**.

`npm install centro-ui --save`

### 2 **Import in your project**

`import { Container } from 'centro-ui';`

### 3 **Invoke the component(s) in your view**

`<Container> </Container>`

### 4 **Add interactivity**

In your `vr/client.js` file:


```javascript
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


# Container

The CentroUI container is a rectangular plane that can contain various elements at a comfortable distance from the user. 


> **Container:**

```html
<Container direction="left">

</Container>
```

## Props

Prop | Type | Description | Required | Default |
-------------- | -------------- | -------------- |  -------------- | -------------- | 
direction | string | Defines the direction of the container | false | "front"
color | string | Defines the background color of the container | false | "rgba(255, 255, 255, 0.3)"



# VrView

VrView is one of the core building blocks of CentroUI and a foundational element for custom
components. It has two types of property groups:
 
 - Layout properties:  Orientation, content alignment and padding
 - Style properties: Border color and width, hover color and state and background color




## Props

### Orientation

By default, the orientation of a VrView is a column.

Prop | Type | Description | Required | Default |
-------------- | -------------- | -------------- |  -------------- | -------------- | 
column | boolean |Sets a vertical orientation of the view.| false |  true
row | boolean | Sets a horizontal orientation of the view. | false | false



> **VrView  column:**

```html
<VrView >
    <Text>
        In a vertical view
    </Text>    
</VrView >
```
> **VrView  row:**

```html
<VrView  row>
    <Text>
        In a horizontal view
    </Text>    
</VrView >
```

### Content alignment

By default, the content in a VrView is centered vertically and horizontally.

Prop | Type | Description | Required | Default |
-------------- | -------------- | -------------- |  -------------- | -------------- | 
vcenter | boolean | Centers the view content vertically| false |  true
vstart | boolean | Positions the view content vertically in the beginning | false |  false
vend | boolean | Positions the view content vertically in the end | false |  false
hcenter | boolean | Centers the view content horizontally | false | true
hstart | boolean | Positions the view content horizontally in the beginning | false | false
hend | boolean | Positions the view content horizontally in the end | false | false
spread | boolean | Distributes items in the view content evenly along the orientation **_with view padding_** | falsee | false
push | boolean | Distributes items in the view content evenly along the orientation **_without view padding_** | false | false



> **VrView  default content alignment:**

```html
<VrView >
    <Text>
        Centered vertically and horizontally by default
    </Text>    
</VrView >
```
> **VrView  vertical alignment:**

```html
<VrView  vstart>
    <Text>
        At the top, but horizontally centered by default
    </Text>    
</VrView >
```
> **VrView  vertical and horizontal content alignment:**

```html
<VrView  vstart hstart>
    <Text>
        At the top and to the left
    </Text>    
</VrView >
```
> **VrView  spread:**

```html
<VrView  spread>
    <Text>
        I am at the top but not touching the view borders
    </Text>    
    <Text>
        I am centered but not touching my neighbors
    </Text>    
    <Text>
        I am at the bottom but not touching the view borders
    </Text>    
</VrView >
```
> **VrView  push:**

```html
<VrView  push>
    <Text>
        I am at the top AND TOUCHING the view borders
    </Text>    
    <Text>
        I am centered but not touching my neighbors
    </Text>    
    <Text>
        I am at the bottom AND TOUCHING the view borders
    </Text>    
</VrView >
```

#### Padding

Prop | Type | Description | Required | Default |
-------------- | -------------- | -------------- |  -------------- | -------------- | 
p | integer | Defines the padding of the view. | false |  0
pl | integer | Defines the left padding of the view. | false | 0 or <code>p</code>
pr | integer | Defines the left padding of the view. | false | 0 or <code>p</code>
pr | integer | Defines the left padding of the view. | false | 0 or <code>p</code>
pt | integer | Defines the top padding of the view. | false | 0 or <code>p</code>
pb | integer | Defines the bottom padding of the view. | false | 0 or <code> p </code>


> **VrView  padding:**

```html
<VrView  p={0.05}>
    <Text>
        Away from all borders by 0.05    
    </Text>    
</VrView >
```
> **VrView  padding left and top:**

```html
<VrView  pl={0.05} pt={0.07}>
    <Text>
        Away from left border by 0.05 and from top border by 0.07
    </Text>    
</VrView >
```

#### Style

Prop | Type | Description | Required | Default |
-------------- | -------------- | -------------- |  -------------- | -------------- | 
hover | boolean | Defines whether the view should react to hover | false |  false
hoverColor | *color* | Defines the background color of the view when **_hovered_**. | false | #eceeef
bg | *color | Defines the background color of the view when **_NOT hovered_**. | false | #fff
border | Object | Defines border styles of the view. | false | - |
border { color } | color| Border color when the view is **_NOT hovered_** | false | #eceeef
border { activeColor } | color | Border color when the view is **_hovered_** | false | #0275d8
border { width } | integer | Border width | false | 0
border { top } | integer | Border top width | false | 0 or <code> width </code>
border { bottom } | integer | Border bottom width | false | 0 or <code> width </code>
border { left } | integer | Border left width | false | 0 or <code> width </code>
border { right } | integer | Border right width | false |  0 or <code> width </code>


> **VrView  hover:**

```html
<VrView  hover>
    <Text>
        View will change its background color *(default)* and border color *(default)* when hovered
    </Text>    
</VrView >
```
> **VrView  hover color:**

```html
<VrView  hover hoverColor='red'>
    <Text>
        View will change its background color to red and border color *(default)* when hovered
    </Text>    
</VrView >
```
> **VrView  hover color and background:**

```html
<VrView  hover hoverColor='red' bg='green'>
    <Text>
        View has a green background color but when hovered it will change it to red
    </Text>    
</VrView >
```
> **VrView  border:**

```html
<VrView  border={{width: 0.09, left: 0.05, color: 'blue', activeColor: 'yellow'}} hover>
    <Text>
        The entire border of the view is wide 0.09 except the left border which has a width of 0.05. The border is blue but when hovered it becomes yellow (don't forget to add hover property to the view)
    </Text>    
</VrView >
```



# List

The list element contains multiple <code>ListItem</code> components. It can be initialized with an array of items
and have list items automatically created for each or simply by manually nesting <code>ListItem</code>s.


## Props
Prop | Type | Description | Required | Default |
-------------- | -------------- | -------------- |  -------------- | -------------- | 
data | Array<any> | Data to be displayed as a list | false |  []
alignment | string | Whether the list to be vertical or horizontal | false | 'vertical' 
visibleRows | integer | Number of rows visible in the list | false | 5


## ListItem


> **ListItem:**

```html
<List>

    <ListItem>
        List Item 1
    </ListItem>

    <ListItem>
        List Item 2
    </ListItem>

</List>
```

ListItem is used to automatically place and align content inside the list component.

# Navbar

The CentroUI navbar is by default a horizontal row containing `NavItem`s.

## NavItem

> **NavItem:**

```html
<Navbar>
    <NavItem>
         Hello CentroUI
    </NavItem>

    <NavItem>
         Home
    </NavItem>
</Navbar>
```

NavItems are used to automatically align content inside a `Navbar`.


# Button

The CentroUI button offers the same functionality as React VR's [VrButton](https://facebook.github.io/react-vr/docs/vrbutton.html), but
with added support for theming and styles:

## Props




Prop | Type | Description | Required | Default |
-------------- | -------------- | -------------- |  -------------- | -------------- | 
name | string | The text content of the button | false | ""
circle | boolean | Gives the button a circular shape | false |  false
rectangle | boolean | Gives the button a rectangular shape | false | true
bg | color | Defines the default background color of the button | false | "#fff"


> **Button and an Icon:**

```javascript

    
    <Button>
        <Icon name="shopping-cart" />
    </Button>

```





# Icon

Icons are currently **not functional**. They are used only for conceptual purposes.


**Icon**  has only a name property, which sets the icon of the button (e.g. “shopping-
cart”). We intend to use FontAwesome icons (not implemented yet).


# TextInput

> **TextInput:**

```html
<TextInput rows={2} cols={20}
           x={2} y={-1} z={1}
           rotateY={null} rotateX={null}
           textColor={'black'} backgroundColor={'white'}
           keyboardColor={null} keyboardOnHover={null} />
```

Field where the user can enter data.
TextInput comes with its own keyboard that is shown once the use 
clicks on the component.

## Props

Prop | Type | Description | Required | Default |
-------------- | -------------- | -------------- |  -------------- | -------------- | 
rows | number | Set the height  | true | 4
cols | number | Set the width  | true |  50
onSubmit | function | Called when the user presses a button. | true | null
x    | number | Set the horizontal position | true |
y    | number | Set the vertical position | true |
z    | number | Set the depth | true |
rotateX | number | Set the horizontal rotation of the keyboard | false | 0
rotateY | number | Set the vertical rotation of the keyboard | false | 30
textColor | color | Set the color of the text | false | 'white'
bg | color | Set the color of the field | false | 'grey'
keyboardColor | color | Set the color of the keyboard | true | null
keyboardOnHover | function | Called when a raycaster hovers over the keyboard | false | null


# CnRayCaster

Raycasters allow the user to target elements in 3D space. However, a raycaster should support working with different controllers (or the lack of such) depending on the environment in which the WebVR application is opened in.

In order to ensure an optimal experience on every device, regardless of the user's setup, CentroUI has a raycaster with a fallback mechanism in order to ensure that the user can interact with the application and its UI.

## Support

CentroUI's raycaster covers support for:

* **Controllers** - Vive, Oculus, Daydream, GearVR
* **Mouse input**
* **Gaze**

The raycaster first checks for the existence of a controller, if there is none connected, it checks for a functioning mouse. If none is found, it falls back to gaze control.


## Using CnRayCaster

> **1. Importing CnRayCaster and THREE.js**

```javascript
// vr/client.js

import CnRayCaster from "centro-ui/utilities/cn-raycaster";
import * as THREE from 'three'
```

> **2. Creating three.js scene**

```javascript
// vr.client.js

function init(bundle, parent, options) {
    const scene = new THREE.Scene();
    //...
}
```

> **3. Setting options to the VRInstance():**

```javascript
// vr.client.js
//...

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

1. In the ```<project root>/vr/client.js``` folder, import the ```CnRayCaster``` and ```THREE.js```:

2. In the ```init``` function, create a new ```THREE.scene()```.

3. Lastly, add the following options to the ```new VRInstance()``` instantiation:

* Add a ```raycasters: []``` array with the ```CnRayCaster``` in it and pass it the scene object.
* Enable ```cursorVisibility```
* Set the project scene to be the scene that was added.

### *Congratulations!* You now have a raycaster that works on all devices and with all controllers!

![gif](./images/raycaster.gif)

