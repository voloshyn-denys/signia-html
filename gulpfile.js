let {src, dest, watch } = require('gulp');
let postcss = require('gulp-postcss');
let gcmq = require('gulp-group-css-media-queries');
let autoprefixer = require('autoprefixer');
let animation = require('postcss-animation');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');

let MAIN_SRC = 'src/sass/**/?(*.sass|*.scss)';

/* SASS TASK */
const styles = (cb) => {
    let processors = [
        animation(),
        autoprefixer({
            overrideBrowserslist:  ['last 4 versions'],
            cascade: false
        })
    ];

    src(MAIN_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gcmq())
        .pipe(cssnano())
        .pipe(dest('./dest/assets/css'));
    
    cb();
}
exports.styles = styles;

/* DEFAULT TASK */
exports.default = function() {
    /* WATCH TASK */
    watch(MAIN_SRC, styles);
};