# Automate publishing of your SharePoint Framework scripts to Office 365 public CDN sample

This is a sample created to show how you can automate the publishing process of your production scripts to the Office 365 CDN.

## Testing

If you want to test out this sample, you will have to follow the next steps:

- Clone the repo
- Execute `npm install`
- Setup your Office 365 CDN
- Update your `write-manifests.json` file
- Update the `username`, `password`, `site` and `libraryPath` settings in the `gulpfile.js` file
- Run `gulp bundle --ship`
- Run `gulp upload-to-sharepoint --ship`
- Check out your document library

## More info

Check out the following article to learn more about this sample: [Automate publishing of your SharePoint Framework scripts to Office 365 public CDN](https://www.eliostruyf.com/)