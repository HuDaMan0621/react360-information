// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, Module} from 'react-360-web';

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
    500,
    400,
    Surface.SurfaceShape.Cylinder
  );

  introRoot = r360.renderToSurface(
    r360.createRoot('TourismAppVR', {}),
    introPanel
  );

  marketPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  marketPanel.setAngle(
    0.2,
    0
  );

  museumPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  museumPanel.setAngle(
    Math.PI / 2,
    0
  );

  restaurantPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  restaurantPanel.setAngle(
    -Math.PI / 2,
    0
  );

  shoppingPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  shoppingPanel.setAngle(
    3.6,
    0
  );

  r360.compositor.setBackground(r360.getAssetURL('gdansk.jpg'));
}

class surfaceModule extends Module {
  constructor() {
    super('surfaceModule');
  }

  start() {
    r360.renderToSurface(
      r360.createRoot('InfoPanel', {}),
      marketPanel
    );
    r360.renderToSurface(
      r360.createRoot('InfoPanel', {}),
      shoppingPanel
    )
    r360.renderToSurface(
      r360.createRoot('InfoPanel', {}),
      museumPanel
    )
    r360.renderToSurface(
      r360.createRoot('InfoPanel', {}),
      restaurantPanel
    );

    r360.detachRoot(introRoot);
  }
}
window.React360 = {init};
