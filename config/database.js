module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-117.railway.app'),
      port: env.int('PGPORT',6134),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'sc0QEBgh8izCdpbZ6Ae4'),
      ssl: env.bool(true),
    },
    pool: { min: 0 }
  },
});
