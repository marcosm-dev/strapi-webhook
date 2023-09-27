module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    defaultHeaders: {
      Authorization:
        "Bearer e227787b8ead89c8fe099fb9ef47dadbbb174b81760e8fd1c84e91893efd9186db5b2ca6585b2d3bc1e1d369af15cecfeff717c3e45b335c0f6633943052041f4795319fa17487029df4cd91912bf31ced4f424582dfe6f895f001a1964d1ea23dcf9661adcd446a956401c5118142da75a82fefb2973507a868254cdabfb6f0",
    },
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
