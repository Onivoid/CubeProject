'use strict';

/*Assignation des packages à des variables*/

const   gulp            = require('gulp'),
        sass            = require('gulp-sass'),
        concat          = require('gulp-concat'),
        autoprefixer    = require('gulp-autoprefixer'),
        rename          = require('gulp-rename'),
        notify          = require('gulp-notify'),
        browserSync     = require('browser-sync');


        /* Compilation des fichiers sass/scss */
        /* Commande == gulp build-sass */

gulp.task('build-sass', () => {
    /* Fichier compilé */
    return gulp.src(['src/sass/app.sass'])
        /* affiche l'erreur en cas d'erreur */
        .pipe(sass().on('error', sass.logError))
        /* Créer un fichier style.css */
        .pipe(concat('style.css'))
        /* Ajoute les préfixes à la compilation */
        .pipe(autoprefixer())
        /* destination du style.css */
        .pipe(gulp.dest('dist/css'))
        /* rafraichissement de la page web */
        .pipe(browserSync.reload({
            stream: true
        }))
        /* notification */
        .pipe(notify(
            {
                title: "Compilation CSS",
                message: "Fichiers SASS et SCSS compilés avec succés"
            }
        ))
    });

    /* Compilation des features */

gulp.task('build-features', () => {
    return gulp.src(['src/js/features/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
        /* notification */
        .pipe(notify(
            {
                title: "Compilation Features",
                message: "Les features ont été compilés"
            }
        ))

});

    /* Compilation des components */

gulp.task('build-components', () => {
    return gulp.src(['src/js/components/**/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
        /* notification */
        .pipe(notify(
            {
                title: "Compilation Components",
                message: "Les Components ont été compilés"
            }
        ))
});

    /* Compilation des vues */

gulp.task('build-vues', () => {
    return gulp.src(['src/js/vues/*.js'])
        .pipe(concat('vues.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
        /* notification */
        .pipe(notify(
            {
                title: "Compilation vues",
                message: "Les vues ont été compilés"
            }
        ))

});

gulp.task('browserSync', function(){
    browserSync({
        server: {
            baseDir: './'
        },
    })
});

    /* Live production */

gulp.task('live-build',['browserSync','build-sass','build-features','build-components','build-vues'], () => {
    /* Compilation des fichiers de prods à la sauvegarde */
    gulp.watch('src/sass/*', ['build-sass']);
    gulp.watch('src/js/components/**/**/*', ['build-components']);
    gulp.watch('src/js/features/*', ['build-features']);
    gulp.watch('src/js/vues/*',(['build-vues']));
    /* relancement du live-viewer */
    gulp.watch('dist/**/*', browserSync.reload);
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('assets/**/*', browserSync.reload);
});