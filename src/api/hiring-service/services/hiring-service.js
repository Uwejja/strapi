'use strict';

/**
 * hiring-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hiring-service.hiring-service');
