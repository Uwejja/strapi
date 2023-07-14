'use strict';

/**
 * school-uniform service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::school-uniform.school-uniform');
