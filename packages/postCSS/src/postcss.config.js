module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-prefixer")({ prefix: "postCSS_" }),
  ],
};
