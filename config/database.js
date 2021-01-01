module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "blog-strapi"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "senha"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});

//nzwryjjqgldnkf
//7ae2cb8c5d09596b17383b4d525101fa6b7d28a0b3e23ad483df500dc24fb3ad
//ec2-52-2-127-5.compute-1.amazonaws.com
//5432
//d7llsq7cuoi9vi

/**
 * user: qxrzciuhebbkdi
 * pass: ab66b290f9b43f1ffae01d483901ffbf79eccbcf07728c03e4aad1d3ca633c3f
 * host:ec2-52-200-16-99.compute-1.amazonaws.com
 * dbname: d37ok4votujnma
 */
