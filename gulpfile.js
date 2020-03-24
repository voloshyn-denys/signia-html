let { src, dest, watch, series } = require('gulp');
let postcss = require('gulp-postcss');
let gcmq = require('gulp-group-css-media-queries');
let autoprefixer = require('autoprefixer');
let animation = require('postcss-animation');
let gulp_sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');

const SRC = 'src/sass/**/?(*.sass|*.scss)';
const DEST = './dest/assets/css';

const sass = () => {
    let processors = [
        animation(),
        autoprefixer({
            overrideBrowserslist:  ['last 4 versions', 'Chrome >= 41', 'iOS >= 8', 'Safari >= 8'],
            cascade: false
        })
    ];

    return src(SRC)
        .pipe(gulp_sass().on('error', gulp_sass.logError))
        .pipe(postcss(processors))
        .pipe(gcmq())
        .pipe(cssnano({zindex: false, reduceIdents: false}))
        .pipe(dest(DEST));
}

const watch_sass = () => {
    watch(SRC, sass);
}

exports.watch = watch_sass;
exports.sass = sass;
exports.default = series(sass);