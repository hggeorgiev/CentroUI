---
title: API Reference

includes:


search: true
---

# Home

CentroUI provides a set of reusable and extendable UI controls for building interfaces for WebVR applications. This library is based on [ReactVR](https://facebook.github.io/react-vr/), providing developers with text input controls, cards, lists, navigation items and grids, all built with cross-device and cross-browser compatibility to ensure consistent experience with any environment and device.

The layout engine intelligently places elements depending on context, providing a predictable and structured approach to building interfaces for WebVR.

The UI elements are built according to best practices for building UI for VR and come with capabilities for zooming and highlighting to ensure the best user experience at the lowest development cost.

# Getting started


> **4. Add code below into `vr/client.js` file:**

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

In your React VR project:

### 1 **Install via npm**.

`npm install centro-ui --save`

### 2 **Import in your project**

`import { CnContainer } from 'centro-ui';`

### 3 **Invoke the component(s) in your view**

`<CnContainer> </CnContainer>`

### 4 **Add interactivity**

In your vr/client.js file, add the code on right sidebar.


# CnCard

Block which can be comprised of header, content, and footer (text/images/etc).


## Selectors

### CnCardHeader

> **CnCardHeader:**

```html
<CnCard>
    <CnCardHeader>
        I am the header of the card!
    </CnCardHeader>
</CnCard>
```


Header of the card.

### CnCardContent

> **CnCardContent:**

```html
<CnCard>
    <CnCardContent>
        I am inside the card! I am the content!
    </CnCardContent>
</CnCard>
```

Contents inside the card.

### CnCardFooter

> **CnCardFooter:**

```html
<CnCard>

    <CnCardFooter>
        <Text color="black">Text in the footer of the card! Yikes!</Text>
    </CnCardFooter>
</CnCard>
```

Footer of the card.

# CnContainer

CnContainer is a rectangular plane that can contain various elements at a comfortable distance from the user. Usually aligns items inside it using multiple *CnRows*

## Selectors

* CnContainer

## Attributes

* **Direction** - *left*, *right*, *back* (default *front*) - Defines the direction of the container.
* **Color** - *hex, rgb* (default *rgba(255, 255, 255, 0.3)*) - Defines the background color of the container.

# CnList

List element (collection of related items).

## CnListItem

> **CnListItem:**

```html
<CnList>

    <CnListItem>
        List Item 1
    </CnListItem>

    <CnListItem>
        List Item 2
    </CnListItem>

</CnList>
```

Item inside the list.

# CnNavbar

CnNavbar - section of a VR graphical user interface intended to aid visitors in accessing information.

## CnNavItem

> **CnNavItem:**

```html
<CnNavbar>
    <CnNavItem>
         Hello CentroUI
    </CnNavItem>

    <CnNavItem>
         Home
    </CnNavItem>
</CnNavbar>
```

Navigation bar item.

# CnRow

CnRow makes a section that horizontally stacks all elements in a CnContainer.

## CnRow

> **CnRow:**

```html
<CnContainer>
    <CnRow>
        <CnCard hover>
            ...
        </CnCard>
    </CnRow>
</CnContainer>
```

Contains a single **row** of (i.e. in **row** direction). Must be part of CnContainer.

# Raycaster

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

# CnTextInput

> **CnTextInput:**

```html
<CnTextInput rows={2} cols={20}
           x={2} y={-1} z={1}
           rotateY={null} rotateX={null}
           textColor={'black'} backgroundColor={'white'}
           keyboardColor={null} keyboardOnHover={null} />
```

Field (tag) where user can enter data.

## Attributes

### rows, cols

Used to specify the width/height of a keyboard.

Rows for *height*, cols for *width*.

Setting ```rows={2} cols={20}``` makes keyboard of **height = 2** and **width = 20**.

### x, y, z

Used to specify points on X/Y/Z axis.

Example: ```x={2}```

### rotateX, rotateY

Keyboard rotation on X/Y axis.

Setting ```rotateY={30}``` rotates +30 degrees (up) on X axis.

### textColor

Specify color of an input text.

Setting ```textColor={'black'}``` specifies text color to be black.

### backgroundColor

Used to specify the background color of a keyboard (base color of a keyboard).

Setting ```backgroundColor={'red'}``` makes background color of a keyboard red.

### keyboardColor

Used to specify the color of a keyboard.

Setting ```keyboardColor={'green'}``` makes keyboard of color green.

### keyboardOnHover

Used to select elements when you mouse over them.

Setting ```keyboardOnHover={'null'}``` specifies to do nothing while moused over.
