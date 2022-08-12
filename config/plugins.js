module.exports = ({ env }) => ({
  editorjs: {
    enabled: true,
    resolve: './src/plugins/strapi-plugin-react-editorjs'
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "couchbase",
        max: 32767,
        options: {
          connectionString: "couchbase://127.0.0.1:8091",
          connectionOptions: {
            username: "nhtrung1980@gmail.com",
            password: "04UCth664@@",
          },
          bucket: "test-bucket",
          ttl: 2,
        },
      },
      strategy: {
        contentTypes: [
          "api::post.post",
          "api::term.term",
        ],
      },
    },
  },
});
