[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# Money Tracker PWA

This is an application for the user to track their finances by keeping a running total of their funds and show any additions or subtractions visually via text and graph. This application is meant to work in both online and offline states and can be installed by the user on desktop and mobile.

![tacker home screen with graph of finances](https://github.com/cynogriffin/money-tracker-pwa/blob/main/assets/screenshot.png)

This project demostrates the creation of an application that is a PWA (progressive web application), meaning that it can be installed and will function like a native mobile app. The app can be installed on both desktop and mobile and has tools built in to allow for full offline functionality and seamless transitions regardless of network conditions. While offline the app will serve data from the cache via a service worker, and store any submitted data via IndexedDB. Once the application comes back online, it will upload any data that was submitted whilst offline automatically.

Some of the biggest challenges for this project were troubleshooting errors coming from the service worker and manifest in order to get everything working together smoothly. Another challenge was getting the application deployed to Heroku and the MongoDB database synced with the application.

The live production version of this application can be accessed on Heroku [here](https://blooming-sea-68041.herokuapp.com/). Please feel free to use and test the application and let me know of any improvements or suggestions via my contact information in the Questions section.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)

## Installation

The application is fully deployed on Heroku, so there is no installation needed. Simply access the site through the provided URL in the description above and start taking your notes!

## Usage
##### [Back to Table of Contents](#table-of-contents)

To use this application, all you do is add in your transactions given the tools at the top of the page. Enter a name and amount for the transaction and then click the appropriate button to add or subtract that transaction from your total funds. The text of the transaction will be logged to the screen and the graph will update to reflect the transaction as well. There is also an updated total for your total funds at the top of the page.

## Credits
##### [Back to Table of Contents](#table-of-contents)

For this project, I mainly referenced the documentation for [Node.js](https://nodejs.org/api/) and [Express.js](https://www.npmjs.com/package/express), as well as [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [Heroku](https://devcenter.heroku.com/articles/deploying-nodejs), [MongoDB Atlas](https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.14527991.1982748626.1649572972-932825170.1648508358), and [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).

## Questions
##### [Back to Table of Contents](#table-of-contents)

You can view my other projects on GitHub: [cynogriffin](https://github.com/cynogriffin)

If you have any questions or comments, please feel free to contact me via email at griffinc6@gmail.com.

Connect with me on [LinkedIn](https://www.linkedin.com/in/cody-griffin-0a74b1222/) and catch me on my develper blog [The Cozy Coding Corner](https://cynogriffin.hashnode.dev/)!

---
Copyright &copy; 2022 Cody Griffin. All rights reserved.

Licensed under the [GPL v3 License](https://www.gnu.org/licenses/gpl-3.0).  