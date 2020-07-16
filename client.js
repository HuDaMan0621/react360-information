// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Module, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      new surfaceModule(),
    ],
    ...options,
  });

  introPanel = new Surface(
    500, /* width */
    400, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );

  introRoot = r360.renderToSurface(
    r360.createRoot('TourismVR', { /* initial props */ }),
    introPanel
  );

  marketPanel = new Surface( 
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  marketPanel.setAngle(
    0.2, /* yaw angle */  //left or right
    0.1 /* pitch angle */ //up or down
  );

  museumPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  museumPanel.setAngle( //liz
    Math.PI / 2.5, /* yaw angle */
    0.01 /* pitch angle */
  );

  restaurantPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  restaurantPanel.setAngle(
    -Math.PI / 2, /* yaw angle */
    0 /* pitch angle */
  );

  shoppingPanel = new Surface( //lachlan
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  shoppingPanel.setAngle(
    3.4, /* yaw angle */
    0.1 /* pitch angle */
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('att01.jpg'));
}

class surfaceModule extends Module {
  constructor() {
    super('surfaceModule');
  }

  resizeSurface(width, height, id) {
    if (id === 'liz') {
      museumPanel.resize(width, height);
    } else if (id === 'restaurant') {
      restaurantPanel.resize(width, height);
    } else if (id === 'lachlan') {
      shoppingPanel.resize(width, height);
    } else if (id === 'joe') {
      marketPanel.resize(width, height);
    }
  }

  start() {
    r360.renderToSurface(
      r360.createRoot('InfoPanel', { id: 'joe',
                                     text: 'Joe, DIR March 2020 Cohort.' }),
      marketPanel,
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', { id: 'lachlan',
                                     text: 'Lachlan, Instructor, slogan: SureYouCan!'}),
      shoppingPanel,
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', { id: 'liz',
                                     text: 'Principle Liz of DigitalCrafts'}),
      museumPanel,
    );

    // r360.renderToSurface(
    //   r360.createRoot('InfoPanel', { id: 'lachlan',
    //                                  text: 'Instructor, slogan: SureYouCan! ' }),
    //   restaurantPanel,
    // );

    r360.detachRoot(introRoot);
  }
}


window.React360 = {init};