var gulp = require('gulp');
sass = require("gulp-sass"),
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create(); 
cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');

/*********************************LTR****************************************/


//_______ task for scss folder to css main style 
gulp.task('watch', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('volgh/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('volgh/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______ task for style-dark
gulp.task('dark', function(){
   return gulp.src('volgh/assets/css/dark-style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('volgh/assets/css/'));
		
});

//_______ task for style-dark
gulp.task('boxed', function(){
   return gulp.src('volgh/assets/css/boxed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('volgh/assets/css/'));
		
});

//_______ task for style-dark
gulp.task('dark-boxed', function(){
   return gulp.src('volgh/assets/css/dark-boxed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('volgh/assets/css/'));
		
});


//_______task for sidemenu
gulp.task('sidemenu', function(){
	return gulp.src('volgh/assets/css/sidemenu.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('volgh/assets/css/'));
		 
 });


//_______task for closed-sidemenu
gulp.task('closed-sidemenu', function(){
	return gulp.src('volgh/assets/css/closed-sidemenu.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('volgh/assets/css/'));
		 
 });

//_______task for icons
gulp.task('icons', function(){
	return gulp.src('volgh/assets/css/icons.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('volgh/assets/css/'));
		 
 });
 
 //_______task for skin-modes
gulp.task('skins', function(){
	return gulp.src('volgh/assets/css/skin-modes.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('volgh/assets/css/'));
		 
 });
 
//_______task for Color
gulp.task('color', function(){
	return gulp.src('volgh/assets/colors/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('volgh/assets/colors'));
});


 
//_______task for beautify
gulp.task('beautify', function() {
    return gulp.src('volgh/assets/css/**/*.css')
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(gulp.dest('volgh/assets/css'));
});

/*********************************RTL****************************************/


//_______ task for scss folder to css main style 
gulp.task('watch-rtl', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('volgh/assets/scss-rtl/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('volgh/assets/css-rtl'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______ task for style-dark
gulp.task('dark-rtl', function(){
   return gulp.src('volgh/assets/css-rtl/dark-style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('volgh/assets/css-rtl/'));
		
});
 
 //_______task for boxed
gulp.task('boxed-rtl', function(){
	return gulp.src('volgh/assets/css-rtl/boxed.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('volgh/assets/css-rtl/'));
		 
 });
 
 //_______task for dark-boxed
gulp.task('dark-boxed-rtl', function(){
	return gulp.src('volgh/assets/css-rtl/dark-boxed.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('volgh/assets/css-rtl/'));
		 
 });


//_______task for sidemenu
gulp.task('sidemenu-rtl', function(){
	return gulp.src('volgh/assets/css-rtl/sidemenu.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('volgh/assets/css-rtl/'));
		 
 });


//_______task for closed-sidemenu
gulp.task('closed-sidemenu-rtl', function(){
	return gulp.src('volgh/assets/css-rtl/closed-sidemenu.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('volgh/assets/css-rtl/'));
		 
 });

//_______task for icons
gulp.task('icons-rtl', function(){
	return gulp.src('volgh/assets/css-rtl/icons.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('volgh/assets/css-rtl/'));
		 
 });

 //_______task for skin-modes
gulp.task('skins-rtl', function(){
	return gulp.src('volgh/assets/css-rtl/skin-modes.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('volgh/assets/css-rtl/'));
		 
 });
 
//_______task for Color
gulp.task('color-rtl', function(){
	return gulp.src('volgh/assets/colors/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('volgh/assets/colors'));
});


 
//_______task for beautify
gulp.task('beautify-rtl', function() {
    return gulp.src('volgh/assets/css-rtl/**/*.css')
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(gulp.dest('volgh/assets/css-rtl'));
});





