# Create react app with pwa support

Create react app by facebook with progressive web application support.

## Folder Structure

```
app/
  index.html
  package.json
  manifest.json
  CNAME
  robots.txt
  deploy.sh
  .travis.yml
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    favicon.ico
```

For the project to build, **these files must exist with exact filenames**:

* `index.html` is the page template;

* `favicon.ico` is the icon you see in the browser tab;

* `src/index.js` is the JavaScript entry point.

* `package.json` has logic to create service worker file and to copy asserts like images, manifest.json, robots.txt and CNAME.

## Setup

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000)

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes and **service worker** with static assets copied.<br>
Your app is ready to be deployed!

[More documentation](https://github.com/facebookincubator/create-react-app#create-react-app)

#### MIT Licensed
