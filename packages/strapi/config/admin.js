module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7e42e3aabe9a4140c947767fe390b74e'),
  },
});
