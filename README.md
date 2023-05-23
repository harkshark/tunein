# Lauren Rodriguez for TuneIn

What fun to work on this challenge! Thanks for the opportunity
and consideration. React Hooks didn't exist when I was an IC
four years ago and this is the first hands-on opportunity I've
had to write a custom hook! 

Considerations and iterations
 - I used Create React App to quickly bootstrap this project. 
   The file directory could use some clean up and customization
   for the context of the app.
 - I decided to fetch all stations regardless of reliability
   or availability. To improve user experience we'd want to set
   a threshold/check on stations that we aren't confident will
   play.
 - My Filters implementation is rudimentary. A more realistic
   strategy would be to extract all unique filters from the
   stations list, identify potential duplicates (like "hits"
   and "top hits"), and render them as Tags. We'd also do well
   to specific sort vs. filter and allow both simultaneously.
 - There's potential for a shared compoent, Station, that both
   the StationsList and NowPlaying components could use.
 - There's a missing layer on validating a station's ability
   to play and if a subscription/credentials are needed (CNN).
   My experience with rendering media through the HTML audio
   tag is limited but I'd like to be able to know more about
   the state of the selected steam.
 - At what point are we passing props around so much it's
   had to follow? When should we abstract with React Context
   or Redux?
 - What might we do to address accessibility? How well can a
   screen reader parse this markup? Do stations have transcripts
   available?
 - What happens when the list of stations is huge? Pagination
   and lazy loading for performance would be critical for
   user experience.
 - Use the computer for what it does best! Linting and
   automatic formatting.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
