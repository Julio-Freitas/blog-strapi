module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.env("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "blog-strapi"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "senha"),
        ssl: env.env("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
