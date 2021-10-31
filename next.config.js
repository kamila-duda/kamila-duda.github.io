const withImages = require("next-images");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withImages({
    webpack(config) {
      config.module.rules.push();

      return config;
    },
    images: {
      disableStaticImages: true,
    },
  })
);
