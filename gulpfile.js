'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
const spsync = require('gulp-spsync-creds').sync;

const production = {
    "username": "<production-username>",
    "password": "<production-password>",
    "tenant": "<production-tenant>",
    "cdnSite": "<cdn-site-relative-path>",
    "cdnLib" : "<cdn-relative-path>",
    "catalogSite": "<catalog-site-relative-path>"
}

const test = {
    "username": "<test-username>",
    "password": "<test-password>",
    "tenant": "<test-tenant>",
    "cdnSite": "<cdn-site-relative-path>",
    "cdnLib" : "<cdn-relative-path>",
    "catalogSite": "<catalog-site-relative-path>"
}

build.task('upload-to-sharepoint', {
	execute: (config) => {
		return new Promise((resolve, reject) => {
			const deployFolder = require('./config/prepare-deploy.json');
			const folderLocation = `./${deployFolder.deployCdnPath}/**/*.js`;
			
			return gulp.src(folderLocation)
			.pipe(spsync({
				"username": config.production ? production.username : test.username,
				"password": config.production ? production.password : test.password,
				"site": `https://${config.production ? production.tenant : test.tenant}.sharepoint.com/${config.production ? production.cdnSite : test.cdnSite}`,
				"libraryPath": config.production ? production.cdnLib : test.cdnLib,
				"publish": true
			}))
			.on('finish', resolve);
		});
	}
});


build.task('upload-app-pkg', {
	execute: (config) => {
		return new Promise((resolve, reject) => {
			const pkgFile = require('./config/package-solution.json');
			const folderLocation = `./sharepoint/${pkgFile.paths.zippedPackage}`;

			console.log(`Uploading to: https://${config.production ? production.tenant : test.tenant}.sharepoint.com/${config.production ? production.catalogSite : test.catalogSite}`)
			
			return gulp.src(folderLocation)
			.pipe(spsync({
				"username": config.production ? production.username : test.username,
				"password": config.production ? production.password : test.password,
				"site": `https://${config.production ? production.tenant : test.tenant}.sharepoint.com/${config.production ? production.catalogSite : test.catalogSite}`,
				"libraryPath": "AppCatalog",
				"publish": true
			}))
			.on('finish', resolve);
		});
	}
});


build.initialize(gulp);