"use strict";
const axios = require("axios");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  async afterCreate(result, data) {
    axios.post("https://api.netlify.com/build_hooks/6001722b301e10f5ef06e83f");
  },

  async afterUpdate(result, params, data) {
    axios.post("https://api.netlify.com/build_hooks/6001722b301e10f5ef06e83f");
  },
};
