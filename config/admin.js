module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dba35ab6dbf2b63710c30f5bcd3a6ee1'),
  },
});
