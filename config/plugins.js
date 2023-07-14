module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('9uf41dz6m6ygusrvj3lx7fucdqt4383h'),
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });
