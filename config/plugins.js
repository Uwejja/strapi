
module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: 'oWyxMfSsnBHWggmPy3cHvg==',
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('dfiow5nz6'),
          api_key: env('696493813289442'),
          api_secret: env('FJXkFbr8HLMMKzcoBRuuqk-6_LM'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });
