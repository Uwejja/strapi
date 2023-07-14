'use strict';

/**
 * the-company service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::the-company.the-company');
