// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": { browsers: ["iOS >= 8", "Android >= 4"] },
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 5,
      viewportUnit: "vmin",
      selectorBlackList: ['vux-'],
      minPixelValue: 1,
      mediaQuery: false
    },
  }
}
