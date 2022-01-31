
# Spacetagram
Update 01/31/2022: There is an [ongoing issue](https://github.com/nasa/apod-api/issues/90) with NASA's APOD API. The newest commit handles this issue by displaying the correct error for a better user experience.

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
This web application grabs data from [NASA's Astronomy Picture of the Day (APOD)](https://github.com/nasa/apod-api) API to display a space-related image for a particular day. The user can view details of an image such as: when it was posted, a title and description, and like or unlike the image. The user can select a date range to see all the images from those particular days.

## Application
The core technologies used to build this web application include React and Tailwind CSS. I chose to use React because of its focus on breaking down complex user interfaces into reusable components. I chose Tailwind CSS because of its developer experience, the ability to style components within the HTML, and the composability it provides. I am also most familiar with these technologies.
### Installation
There are two ways to interact with this web application:
- [Try it live](https://jjspacestagram.netlify.app/)
-  Run it locally:
    - Clone this repo
    - Navigate inside the folder (`cd spacetagram`) 
    - Grab an API key from [NASA's API](https://api.nasa.gov/) 
    - Create a `.env` file in the root directory and add `REACT_APP_API_KEY={YOUR_API_KEY}` inside it
    - Run `npm install` to install dependencies (install [node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if you have not already)
    - Run `npm start` to start the app

### Features
- Select a date range (start and end date) to get all images in that range.
- Learn more about an image (via a modal pop up).
- Like or unlike an image.
- Different UI states (loading, empty, error) to provide a better UX.
- Accessible and semantic HTML,
  - 100% accessibility score on Lighthouse.
  - 96% accessibility score on [WebAccessibility.com](https://www.webaccessibility.com/)
  - Use of semantic HTML5 tags (e.g., title, header, main, section).

## Testing
To test the application, I chose to perform end-to-end (E2E) testing using [Cypress](https://www.cypress.io/). I wanted to ensure that the application functions as intended from a user's perspective. In practice, E2E testing is the most costly. But, since this is a relatively small application, this tradeoff is not present. Therefore we can gain confidence that our application works correctly by employing E2E testing.

I set up tests inside `./cypress/integration/main.js` to test the following:
- The home page renders correctly when the user visits it
- Choosing a date range renders the correct card(s)
- An invalid date range shows an error (end date is before the start date)
- Clicking the "like" button likes the image
- Clicking the "learn more" button opens up a modal
- The modal contains the correct description
- The modal closes when we click the "x" button

To test the web application:
- Navigate to the root directory
- Run `npm test`

> **_NOTE:_**  you may need the LTS version of node to run cypress because of a [recent issue](https://github.com/facebook/create-react-app/issues/11708) with create-react-app.

## Folder Structure
This folder structure does not scale well since every new component needs a new folder. However, for an application of this size, I believe a [simple folder structure is ideal](https://reactjs.org/docs/faq-structure.html#dont-overthink-it) (e.g., there aren't multiple API calls, custom hooks, a lot of shared data). If we need custom styling (beyond what Tailwind CSS can handle) for each component they can fall within their respective folder.
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
│       │   Card.js
│       │   CardContainer.js
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
|   └───.
|       .
|       .
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
