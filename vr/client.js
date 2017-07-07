// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';
import CnAdvancedRayCaster from "../utilities/6DoFRaycaster";
import * as THREE from 'three'

function init(bundle, parent, options) {
  const scene = new THREE.Scene();
  console.log(CnAdvancedRayCaster);
  const vr = new VRInstance(bundle, 'Example', parent, {
      raycasters: [
          new CnAdvancedRayCaster(scene)
      ],
      cursorVisibility: "visible", // Add cursorVisibility
      // Add scene to render the custom Raycasters
      scene: scene,

      //enableHotReload: true,
      ...options,
  });
  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};
