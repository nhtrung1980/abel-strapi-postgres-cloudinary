module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi-blog-db'),
      user: env('DATABASE_USERNAME', 'abel'),
      password: env('DATABASE_PASSWORD', '04UCth664@12345'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

