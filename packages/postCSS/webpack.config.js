const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "postCSS",
    projectName: "postCSSDemo",
    webpackConfigEnv,
    argv,
  });

  console.log(JSON.stringify(defaultConfig));

  console.log(
    JSON.stringify(
      mergeWithRules({
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
              test: /\.css$/i,
              use: [
                // Use require.resolve to ensure the correct loader is used
                require.resolve("style-loader", {
                  paths: [require.resolve("webpack-config-single-spa")],
                }),
                require.resolve("css-loader", {
                  paths: [require.resolve("webpack-config-single-spa")],
                  options: {
                    modules: false,
                  },
                }),
              ],
            },
          ],
        },
      })
    )
  );

  return mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    // output: { filename: "main.js", path: path.resolve(__dirname, "dist") },
    module: {
      rules: [
        {
          test: /\.css$/,
          // loader: require.resolve("css-loader"),
          // options: {
          //   modules: {
          //     localIdentName: "[path][name]__[local]--[hash:base64:5]",
          //   },
          // },
          use: [
            // Use require.resolve to ensure the correct loader is used
            require.resolve("style-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            require.resolve("css-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
              options: {
                modules: false,
              },
            }),
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: {
                    "postcss-prefixer": {
                      prefix: "prefix_",
                      ignore: [/selector-/, ".ignore", "#ignore"],
                    },
                    // "postcss-filename-prefix": {},
                    // "postcss-prefix-selector": {
                    //   prefix: ".postCSS",
                    //   transform(prefix, selector, prefixedSelector, filepath) {
                    //     if (selector.match(/^(html|body)/)) {
                    //       return selector.replace(/^([^\s]*)/, `$1 ${prefix}`);
                    //     }
                    //     if (filepath.match(/node_modules/)) {
                    //       return selector; // Do not prefix styles imported from node_modules
                    //     }
                    //     return prefixedSelector;
                    //   },
                    // },
                    // autoprefixer: {
                    //   browsers: ["last 4 versions"],
                    // },
                  },
                },
              },
            },
            // {
            //   loader: require.resolve("react-prefix-loader"),
            //   options: {
            //     prefix: path.dirname.toString(),
            //   },
            // },
          ],
        },
      ],
    },
  });
};
