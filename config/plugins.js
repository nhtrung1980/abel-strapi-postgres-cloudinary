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
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
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
