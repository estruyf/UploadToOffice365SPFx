# Automate publishing of your SharePoint Framework scripts to Office 365 public CDN sample

This is a sample created to show how you can automate the publishing process of your production scripts to the Office 365 CDN.

## Testing

If you want to test out this sample, you will have to follow the next steps:

- Clone the repo
- Execute `npm install`
- Setup your Office 365 CDN
- Update your `write-manifests.json` file
- Update the `username`, `password`, `site` and `libraryPath` settings for your test and/or production environment in the `gulpfile.js` file

### Upload to CDN

- Run `gulp bundle --ship`
- To upload your scripts to your **test** environment, run: `gulp upload-to-sharepoint`
- To upload your scripts to your **production** environment, run: `gulp upload-to-sharepoint --ship`
- Check out your document library

### Upload the solution package

- Run `gulp package-solution` or `gulp package-solution --ship` depending on if you want to use a debug or release build
- To upload the solution package to your **test** environment, run: `gulp upload-app-pkg`
- To upload the solution package to your **test** environment, run: `gulp upload-app-pkg --ship`
- Check out the app catalog

**Important**: when you add the solution package the first time to the app catalog, be sure to manually trigger the deploy. Afterwards you do not have to do this anymore, and you can just keep publishing new packages via your command prompt.

## More info

Check out the following article to learn more about this sample: [Automate publishing of your SharePoint Framework scripts to Office 365 public CDN](https://www.eliostruyf.com/)