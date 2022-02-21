# Project Outline

## Project Structure

There are two main components used in the `App.js`, which are `Repos.js` and `Repo.js`. Files related to components are placed under the `components` directory. The functionalities of those are described as follow.

*  `Repos.js`: Display the first 10 repositories of a `user` in a scrollable view. The web page will automatically load the next 10 reposities when scrolling to the end until no more data is retrieved.
*  `Repo.js`: Display the details of the repositry of a `user`. The web page is accessible by clicking on one of the repositries displayed in `Repos.js`.

In addition, hookers are created to perform API request to fetch the data. There are two hookers, `useReposSearch.js` and `useRepoSearch.js`, which are used by `Repos.js` and `Repo.js` respectively. The functionalities of those are described as follow.

*  `useReposSearch.js`: Perform `GET` request to retrieve the repositries data of a `user` and return the data.
*  `useRepoSearch.js`: Perform `GET` request to retrieve the data of a `repo` of a `user` and return the data.

Finally, in `App.js`, the two main components are imported and supplied to the `Route` element property. By default, the link will be redirected to `/users/yuhueilee/repos` when launching the application. In order to view other users' repositries, simply provide the desired username in the link `/users/{username}/repos`.

## Deployment

The react application is deployed to `Netlify` and can be viewed [here](https://condescending-goldberg-13.netlify.app/).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Reference

```
WebDevSimplified, React-Infinite-Scrolling, (2019). GitHub repository. 
https://github.com/WebDevSimplified/React-Infinite-Scrolling
```
