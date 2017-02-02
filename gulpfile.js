'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
const spsync = require('gulp-spsync-creds').sync;

build.task('upload-to-sharepoint', { 
    execute: (config) => {
        return new Promise((resolve, reject) => {
            const folderLocation = './temp/deploy/*.js';
            return gulp.src(folderLocation)
            .pipe(spsync({
                "username": "<username>",
                "password": "<password>",
                "site": "https://<tenant>.sharepoint.com/<relative-site-path>",
                "libraryPath": "<document-library-URL>",
                "publish": true
            }))
            .on('finish', resolve);
        });
    }
});

build.initialize(gulp);