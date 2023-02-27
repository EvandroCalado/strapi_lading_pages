module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'suleiman.db.elephantsql.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'inimtldt'),
      user: env('DATABASE_USERNAME', 'inimtldt'),
      password: env('DATABASE_PASSWORD', 'Wp6TGAfKktOAaQyy0dB6FiDoFj8XRyOL'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
