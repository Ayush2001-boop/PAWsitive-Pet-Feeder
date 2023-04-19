"use strict";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"]
  };
}; //Here, we added the ajv configuration object to the root of the Babel config, with the validateFormats property set to false. This will disable format validation when using the ajv library in your project.
//Make sure to save the changes to the babel.config.js file and restart the development server for the changes to take effect.
//# sourceMappingURL=babel.config.dev.js.map
