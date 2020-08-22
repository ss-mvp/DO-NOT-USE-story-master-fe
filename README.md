
# Free Daily Story Contest (currently developing)

An application aims to limit screentime and encourages creative writing based on daily prompt

**Testing Account**
```
Username: 
Password: 
```


## **Application Flow**

* Users that want to participate in the story writing contest will have to sign up
* After signing up, users will be able to dashboard of the application which indicate the stage of the game and what activities they can do at the time
* Users can participate in Story Writing Contest by submit their story based on that day's prompt
  * *Users have to write their story on a piece of paper and upload it on the application*
* The uploaded story will then be run through readability algorithms and the score will be calculated.
* After the submission deadline, Admin will then pick top 3 stories out of 10 (This will be done on Admin dashboard)
* The 3 stories will then be published on 
* Public audience and registered users will be able to vote for their favorite stories
* The Winner will be announced through livestream and only registered users will be able to see who the winner of the day is

## **Activities Schedule**

The activities in this application is run on schedule based on US Eastern time.

| Time | Activities | Description |
| ----------- | ----------- | ----------- |
| 10:30 PM (Previous day) | New Prompt |  New prompt is being released and users can then submit their writing piece |
| 3:00 PM  | Submission Deadline | Deadline of submissions, *Admin* will pick 3 submissions out of top 10 submissions |
| 3:30 PM | Voting Starts | Registered users and public users pick and rank the 3 submissions |
| 6:00 PM | Voting Ends | Deadline of submissions ranking |
| 6:30 PM | Winner Announcement | *Admin* will drop the livestream link where the winner of the day will be announced. Winners will also be put on the leaderboard |

The schedule are set based on Cron Job library in the backend. Users' access to some pages will be restricted based on the time. The access are being limited using the combination of conditional rendering and countdown clock to tell users:
  * What activity is available at the moment
  * How long is it until the next actitivity starts

Aside from that, different types of users also have different activities that they are allowed to do.


## **Differences between Public Users and Registered Users**
---

| Actions |Registered Users | Public Users |
| ----------- | ----------- | ----------- |
| Access User Dashboard |  YES | NO |
| Submit a story | YES | NO |
| Read top Three Strories | YES | YES |
| Rank their favorite stories | YES | YES |
| Access Leaderboard to see the winner of the day | YES | NO |


## Frontend Tech Stack
----

### **React** 
* React is light weight and offer great performance
* Easier to maintain and develop the application
* Components can be modularized which makes it easier to debug
* Documentation -> https://reactjs.org/

### **Bootstrap Styling Library** 
* Fast and easy to learn with optimal performance
* Easy to customize with SASS -> https://sass-lang.com/
* Robust documentation -> https://getbootstrap.com/

## **Project Installation**
------


1. `git clone` the project on to your local machine
2. `cd` into the folder
3. Type in yarn or yarn add command to add dependencies
4. Set up `.env` file for production purpose

    ```
    // what to put in the env file
    ```
5. Type in `yarn start` to start the production.

The default port should be http://localhost:3000

## **Working with Bootstap Styling Library**
----
* Bootstrap has built-in class names that can be use immediately such as `d-flex` (display: flex;), `text-center` (text-align: center;), etc. (Please read Bootstrap's documentation https://getbootstrap.com/)
* However, if you would like to customize it, please add them in `.scss` file, and compile them using SASS in `styles.scss` file
* Once the project is ready to go live, it is highly recommend to compress the main CSS file into `[filename].min.css` file
    * This is to reduce the file size
    * And to optimize the application's performance

## **Folder Structures**
----
### src

- pages - contains pages available in the application

- styling - contains scss and css files

- components - contains all smaller components that makes up of a page
- assets - miscellaneous assets like pictures, etc.
- *App.jsx*
- *Index.jsx*

## **FAQ**
----
Coming soon

## Installation

--------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
