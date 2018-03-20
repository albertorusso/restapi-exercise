# REST service in Node.js  - Alberto Russo

This exercise is build using Express and Axios in nodeJS environment.

- Express provide an easy interface to build a REST API service. I used this module to initialize the server accessible at http://127.0.0.1:8080/ and define the main route schema to solve the exercise: ```http://127.0.0.1:8080/api/[language]/[page]```

- Axios is a popular NPM module for making HTTP requests that support promises by default, I used this module to to perform https request to the Github API server ```https://api.github.com/search/repositories```

## How to run

**Pre-requisit:** nodeJS.

In the terminal
- run ```npm i``` to install all the project dependences.
- run ```node app``` to lunch the application.

The application will run at: http://127.0.0.1:8080

## URL examples (allowed)

- http://127.0.0.1:8080/api/coffeescript/1
- http://127.0.0.1:8080/api/go/12

## NOTES:

- By default the API return the longer list of projects available in Github per page: 100 results, this value is not configurable.

- I added the pagination functionality so it possible to navigate through the list of page resuts.
