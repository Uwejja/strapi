

module.exports = ({ env }) => ({
  auth: {
    secret: env('strapi-bortex', 'e4350524b0689fc3f46e2407dae950e2'),
  },
  apiToken: {
    salt: 'oWyxMfSsnBHWggmPy3cHvg==',
  },

});