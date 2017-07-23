---
title: API Reference

includes:


search: true
---

# Home

CentroUI provides a set of reusable and extendable UI controls for building interfaces for WebVR applications. This library is based on [ReactVR](https://facebook.github.io/react-vr/), providing developers with text input controls, cards, lists, navigation items and grids, all built with cross-device and cross-browser compatibility to ensure consistent experience with any environment and device.

The layout engine intelligently places elements depending on context, providing a predictable and structured approach to building interfaces for WebVR.

The UI elements are built according to best practices for building UI for VR and come with capabilities for zooming and highlighting to ensure the best user experience at the lowest development cost.

###  Contributing


If you're interested in contributing to the [CentroUI](https://github.com/Centroida/CentroUI), we'd love to have you involved. CentroUI is open to contributors of all skill levels and we are ready and willing to help beginners work through issues. Please read the guidelines for contributing before doing so. We're also looking forward to learn which features and use cases you're interested to see in the future so that we know what to focus on. 

If you don't want to write code or you don't have a lot of spare time, you still can help! Testing the various demos to make sure we haven't broken any features and filing issues when we do is very important.

Another way you can support this project is by [hiring us](https://www.centroida.co/contact.html). We will do our best to enable you to fully utilize our component library and find the shortest path to developing your WebVR project.



[Source Code on Github](https://github.com/Centroida/CentroUI)

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




# CnContainer

CnContainer is a rectangular plane that can contain various elements at a comfortable distance from the user. Usually aligns items inside it using multiple *CnRows*


> **CnContainer:**

```html
<CnContainer direction="left">

</CnContainer>
```

## Props

Prop | Type | Description | Required | Default |
-------------- | -------------- | -------------- |  -------------- | -------------- | 
direction | string | Defines the direction of the container | false | "front"
color | string | Defines the background color of the container | false | "rgba(255, 255, 255, 0.3)"




# CnRow

CnRow makes a section that horizontally stacks all elements in a CnContainer.




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



# CnCard

Block which can be comprised of header, content, and footer (text/images/etc).


## Props

### Orientation
* **column** - *boolean* (default *true*) - Sets a vertical orientation of the card.
* **row** - *boolean* - Sets a horizontal orientation of the card.

> **CnCard column:**

```html
<CnCard>
    <Text>
        In a vertical card
    </Text>    
</CnCard>
```
> **CnCard row:**

```html
<CnCard row>
    <Text>
        In a horizontal card
    </Text>    
</CnCard>
```

### content alignment
* **vcenter** - *boolean* (default *true*) - Centers the card content vertically
* **vstart** - *boolean* - Positions the card content vertically in the beginning
* **vend** - *boolean* - Positions the card content vertically in the end
* **hcenter** - *boolean* (default *true*) - Centers the card content horizontally
* **hstart** - *boolean* - Positions the card content horizontally in the beginning
* **hend** - *boolean* - Positions the card content horizontally in the end
* **spread** - *boolean* - Distributes items in the card content evenly along the orientation **_with card padding_**
* **push** - *boolean* - Distributes items in the card content evenly along the orientation **_without card padding_**

> **CnCard default content alignment:**

```html
<CnCard>
    <Text>
        Centered vertically and horizontally by default
    </Text>    
</CnCard>
```
> **CnCard vertical alignment:**

```html
<CnCard vstart>
    <Text>
        At the top, but horizontally centered by default
    </Text>    
</CnCard>
```
> **CnCard vertical and horizontal content alignment:**

```html
<CnCard vstart hstart>
    <Text>
        At the top and to the left
    </Text>    
</CnCard>
```
> **CnCard spread:**

```html
<CnCard spread>
    <Text>
        I am at the top but not touching the card borders
    </Text>    
    <Text>
        I am centered but not touching my neighbors
    </Text>    
    <Text>
        I am at the bottom but not touching the card borders
    </Text>    
</CnCard>
```
> **CnCard push:**

```html
<CnCard push>
    <Text>
        I am at the top AND TOUCHING the card borders
    </Text>    
    <Text>
        I am centered but not touching my neighbors
    </Text>    
    <Text>
        I am at the bottom AND TOUCHING the card borders
    </Text>    
</CnCard>
```

### padding
* **p** - *integer* (default *0*) - Defines the padding of the card.
* **pl** - *integer* (default *0* or *p*) - Defines the left padding of the card.
* **pr** - *integer* (default *0* or *p*) - Defines the right padding of the card.
* **pt** - *integer* (default *0* or *p*) - Defines the top padding of the card.
* **pb** - *integer* (default *0* or *p*) - Defines the bottom padding of the card.

> **CnCard padding:**

```html
<CnCard p={0.05}>
    <Text>
        Away from all borders by 0.05    
    </Text>    
</CnCard>
```
> **CnCard padding left and top:**

```html
<CnCard pl={0.05} pt={0.07}>
    <Text>
        Away from left border by 0.05 and from top border by 0.07
    </Text>    
</CnCard>
```

### style
* **hover** - *boolean* (default *false*) - Defines whether the card should react to hover
* **hoverColor** - *hex, rgb* (default *#eceeef*) - Defines the background color of the card when **_hovered_**. 
* **bg** - *hex, rgb* (default *#fff*) - Defines the background color of the card when **_NOT hovered_**. 
* **border** - *Object* - An object, defining border styles of the card. It accepts the following properties:
  - **color** - *hex, rgb* (default *#eceeef*) - Border color when the card is **_NOT hovered_**
  - **activeColor** - *hex, rgb* (default *#0275d8*) - Border color when the card is **_hovered_**
  - **width** - *integer* (default *0*) - Border width
  - **top** - *integer* (default *width* or *0*) - Border top width
  - **bottom** - *integer* (default *width* or *0*) - Border bottom width
  - **left** - *integer* (default *width* or *0*) - Border left width
  - **right** - *integer* (default *width* or *0*) - Border right width

> **CnCard hover:**

```html
<CnCard hover>
    <Text>
        Card will change its backround color *(default)* and border color *(default)* when hovered
    </Text>    
</CnCard>
```
> **CnCard hover color:**

```html
<CnCard hover hoverColor='red'>
    <Text>
        Card will change its backround color to red and border color *(default)* when hovered
    </Text>    
</CnCard>
```
> **CnCard hover color and background:**

```html
<CnCard hover hoverColor='red' bg='green'>
    <Text>
        Card has a green background color but when hovered it will change it to red
    </Text>    
</CnCard>
```
> **CnCard border:**

```html
<CnCard border={{width: 0.09, left: 0.05, color: 'blue', activeColor: 'yellow'}} hover>
    <Text>
        The entire border of the card is wide 0.09 except the left border which has a width of 0.05. The border is blue but when hovered it becomes yellow (don't forget to add hover property to the card)
    </Text>    
</CnCard>
```

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


# CnButton



## Props

> **CnButton an CnIcon:**

```javascript

    
    <CnButton>
        <CnIcon name="shopping-cart" />
    </CnButton>



    
```

* name

This property is used to define the name of the button (e.g. **"Buy",** **"Add to cart"**).

* color

This property is used to define the color of the button (e.g. **red**, **blue**, **yellow**).

* shape

This property is used to define the shape of the button and it can be either **rectangle** or

**circle**.




## CnIcon
The **CnButton** can have a **CnIcon** as a child element.

```javascript
    <CnButton
        name="Add to Cart"
        shape="circle"
        color="blue">
        <CnIcon name="shopping-cart" />
    <CnButton/>
```

**CnIcon** in it terms has only a name property, which sets the icon of the button (e.g. “shopping-
cart”). We intend to use FontAwesome icons (not implemented yet).



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

## Props

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
