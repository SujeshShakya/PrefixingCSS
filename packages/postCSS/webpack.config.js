const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "postCSS",
    projectName: "postCSSDemo",
    webpackConfigEnv,
    argv,
  });

  return mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            // Use require.resolve to ensure the correct loader is used
            require.resolve("style-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            require.resolve("css-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
              // options: {
              //   localIdentName: "[path][name]__[local]--[hash:base64:5]",
              //   localIdentHashSalt: "my-custom-hash",
              // },
            }),
            {
              loader: require.resolve("postcss-loader"),
              options: {
                postcssOptions: {
                  plugins: {
                    "postcss-prefix-selector": {
                      prefix: ".my-prefix",
                      transform(prefix, selector, prefixedSelector, filepath) {
                        if (selector.match(/^(html|body)/)) {
                          return selector.replace(/^([^\s]*)/, `$1 ${prefix}`);
                        }

                        if (filepath.match(/node_modules/)) {
                          return selector; // Do not prefix styles imported from node_modules
                        }

                        return prefixedSelector;
                      },
                    },
                    // autoprefixer: {
                    //   browsers: ["last 4 versions"],
                    // },
                  },
                },
              },
            },
          ],
        },
      ],
    },
  });
};
