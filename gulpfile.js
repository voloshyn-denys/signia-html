let { src, dest, watch, series } = require("gulp");
let postcss = require("gulp-postcss");
let gcmq = require("gulp-group-css-media-queries");
let autoprefixer = require("autoprefixer");
let animation = require("postcss-animation");
let gulp_sass = require("gulp-sass");
let cssnano = require("gulp-cssnano");
let webpackStream = require("webpack-stream");

const path = {
  sass: {
    src: "src/sass/**/?(*.sass|*.scss)",
    dest: "./dest/assets/css"
  },
  js: {
    src: "src/js/**/*.js",
    dest: "./dest/assets/js"
  },
}

const scripts = () => {
  return src(path.js.src)
    .pipe(
      webpackStream({
        output: {
          filename: "main.js"
        },
        mode: "production",
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            }
          ]
        },
        resolve: {
          extensions: [".js", ".jsx", "*"]
        }
      })
    )
    .pipe(dest(path.js.dest));
};

const sass = () => {
  let processors = [
    animation(),
    autoprefixer({
      overrideBrowserslist: [
        "last 4 versions",
        "Chrome >= 41",
        "iOS >= 8",
        "Safari >= 8"
      ],
      cascade: false
    })
  ];

  return src(path.sass.src)
    .pipe(gulp_sass().on("error", gulp_sass.logError))
    .pipe(postcss(processors))
    .pipe(gcmq())
    .pipe(cssnano({ zindex: false, reduceIdents: false }))
    .pipe(dest(path.sass.dest));
};

const watch_sass = () => {
  watch(path.sass.src, sass);
  watch(path.js.src, scripts);
};

exports.sass = sass;
exports.scripts = scripts;
exports.watch = series(scripts, sass, watch_sass);
exports.default = series(scripts, sass);
