# Redux React Fb Login
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).<br>
The project includes extra redux packages and improved file structure.
Projects built with Create-React-App include support for ES6 syntax,
 as well as several unofficial / not-yet-final forms of Javascript syntax such as Class Properties and JSX.
 See the list of [language features and polyfills supported by Create-React-App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills) for more information.

## Dependencies that was added to the app
#### Redux is a predictable state container for JavaScript apps. [more details](https://redux.js.org/)
- redux
- react-redux
- redux-thunk
#### Material-UI is a set of React components that implement Google's Material Design specification. [more details](http://www.material-ui.com)
- material-ui
#### A Component React for Facebook Login. [more details](https://www.npmjs.com/package/react-facebook-login)
- react-facebook-login
#### redux-devtools - DevTools for Redux with hot reloading, action replay, and customizable UI. [more details](http://extension.remotedev.io/)

- redux-devtools-extension

## Demo 
Online Demo [Here](https://redux-fb-login.herokuapp.com/)

## Install
```sh
$ npm install
```

## Folder Structure

After creation, your project should look like this:

```
react-redux-albums/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
	manifest.json
  src/
    App.js
    index.js
    registerServiceWorker.js
	store/
		configureStore.js
	components/
		loginPage.js
		profile.js
	reducers/
		index.js
		userData.js
	actions/
		actions.js
		
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run lint`
Lints your JavaScript.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Sending Feedback

We are always open to [your feedback] (https://github.com/BenSouideneMed/Redux-React-Fb-Login/issues).
