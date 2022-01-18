
# Spacetagram
Shopify Front End Developer Intern Challenge - Summer 2022

[Live Website](https://jjspacestagram.netlify.app/) | 
[Requirements](https://docs.google.com/document/d/13zXpyrC2yGxoLXKktxw2VJG2Jw8SdUfliLM-bYQLjqE/edit)

## Table of contents
  - [Overview](#overview)
  - [Application](#application)
    - [Installation](#installation)
    - [Features](#features)
  - [Testing](#testing)
  - [Folder Structure](#folder-structure)
  - [Libraries](#libraries)
  

## Overview
This web application uses data from [NASA's Astronomy Picture of the Day (APOD)](https://github.com/nasa/apod-api) API to display a space related image for each particular day. The user can see the date the image was posted, a title and description of the image, and like or unlike an image.

## Application
The technologies used in this web application include: HTML5, React, Tailwind CSS, and Cypress. I chose React because of it's ease of use in breaking down complex user interfaces into reusable component. Tailwind CSS was chosen because of it's developer experience. I like how I can style components within the HTML and the composibility it provides.

### Installation
There are two ways to interact with this web application:
- [Try it live](https://jjspacestagram.netlify.app/)
-  Run it locally:
    - Clone this repo
    - Navigate inside the folder (`cd spacetagram`) 
    - Grab an API key from [NASA's API](https://api.nasa.gov/) 
    - Create a `.env` file in the root directory and add `REACT_APP_API_KEY={YOUR_API_KEY}` inside it
    - Run `npm install` to install dependencies
    - Run `npm start` to start the app

### Features
- Select a date range (start and end) to get all images in that range
- Learn more about an image (modal pop up)
- Like or unlike an image
- Different UI states (loading, empty, error) to provide a better UX
- Accessible and semantic HTML
  - 100% accessibility score on Lighthouse
  - Use of semantic HTML5 tags (title, header, main, section, etc.)

## Testing
In order to test the application, I chose to perform end to end testing (E2E) using [Cypress](https://www.cypress.io/). I wanted to ensure that the app functions as intended. In practice, end to end testing is the most costly. But, since this is a relatively small application, this tradeoff is not present and therefore we can gain the most confidence that our application works correctly.

I set up tests inside `./cypress/integration/main.js` to test the following:
- The home page renders correctly when you visit it
- Choosing a date range renders the correct card(s)
- An invalid date range shows an error
- Clicking the "like" button likes the image
- Clicking the "learn more" button opens up a modal
- The modal contains the correct description
- The modal closes when we click the "x" button

## Folder Structure
This folder structure does not scale well since every new component needs a new folder. However, for an application of this size, I believe a simple folder structure is ideal (there aren't multiple API calls, custom hooks, a lot of shared data, etc.). If we need custom styling for each component they can fall within their respective folder.
```
│   README.md
│   package.json
|   package-lock.json
|   tailwind.config.js
|   .gitignore 
│
└───src
│   │   App.js
│   │   index.js
│   │   input.css
│   │
│   └───Card
│       │   index.js
│   │
│   └───Datepicker
│       │   index.js
│   │
│   └───Header
│       │   index.js
│   │
│   └───Modal
│       │   index.js
│   │
│   └───Status
│       │   index.js
|
│   └───utils
│       │   index.js
│   
└───cypress
|   └───integrations
|   │   |   main.js
|   |
|   └───plugins
|       |   index.js
|
└───public
    |   index.html
    │   favicon.ico
    |   logo192.png
    |   logo512.png
    |   manifest.json
    |   robots.txt
```
## Libraries
- [uuid](https://www.npmjs.com/package/uuid) used to assign unique id's to each image and in the process of liking/unliking an image
- [@heroicons/react](https://www.npmjs.com/package/@heroicons/react) for easy to use icons in React
- [dotenv](https://www.npmjs.com/package/dotenv) for environment variables