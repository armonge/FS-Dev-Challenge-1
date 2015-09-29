# Project Description

The application is a simple nodejs app that runs with gulp. It started like a express application but then moved to a custom http router built using RxJS

The structure is pretty simple with the core of the code lying in 3 files

```
├── index.js
├── lib
│   ├── bitstamp.js
│   └── server.js
```

**index.js** is entry point and where the routes are defined.
**bistamp.js** handles all communication to with the bitstamp api.
**server.js** some helper functions to start the http server with RxJs

## Starting the application

Assuming you have nodejs installed then you only need to do the following:

```
npm install -g gulp
npm install
gulp
```

The application will start running in port 5000 and you will see in the logs the values it fetches from the bistamp API or requests made


# Project5Q Challenge 1

Project5Q is the brain-child of some of the brightest minds in the industry. We believe that bored employees make boring products. This is why we're coming up with exciting new ways of combining crazy and innovative technologies to create amazing apps. 

So you're feeling adventurous, eh?

Complete the following challenge in as little time as possible and you might be on your way to becoming one of our elite developers.

## Instructions

This application should be deployed in Heroku by the third day after you start the challenge.

To start the challenge:

* Fork this repository to your github account.
* Create a branch with your name using the naming convention: `firstname-lastname`
* Add a file `contact.txt` with your full name and contact email.
* Commit the file with the commit message **"Challenge Started"**.

To complete the challenge:

* Complete the challenge in 72 hours (3 days) or less, do as many commits as necessary.
* Once done, edit your `contact.txt` file by adding a line with the **Heroku url to your application**.
* Commit the change with the commit message **"Challenge Complete"**.
* Create a pull request on Github from your challenge branch to this repository.

## The Challenge

The Bitcoin market program will consist of following main components:

* A function that retrieves the current Bitcoin price from a market [it could be any market, BitStamp could be one, just pick one].
* A scheduler that polls the preceding function at a predefined interval.
* A display function responsible for updating the screen with the Bitcoin price of that market.
* A display function responsible for updating the screen with the rolling average of the past five Bitcoin prices.

From a functional point of view, is that simple.

The challenge comes from the following restriction: Javascript callback functions are forbidden. Instead, you will have to use the Reactive Extensions for JavaScript https://github.com/Reactive-Extensions/RxJS for managing any kind of event.

## * IMPORTANT CONSIDERATIONS *

* The clock begins ticking as soon as you commit the **"Challenge Started"** message.
* Your challenge submission will be considered the commits between the **"Challenge Started"** and **"Challenge Complete"** commits. **Any other commit outside of that range will be ignored**.
* If the time between the **"Challenge Started"** and **"Challenge Complete"** commits exceeds the 72 hour time limit, you will be automatically disqualified from consideration for the job you're applying to.

## What we will evaluate

* How easy you make it for us to start up your app and HTTP server.
* Good coding practices.
* Your commit log.
