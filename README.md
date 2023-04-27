# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Install dependencies

### `npm i`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## How it works

- Start entering a text in the input, then a research is launched
- You will need to wait the time we get suggestions for you
- Dependings of the response:
  - If there is an `error`, you will have the message `Oops! Something went wrong`
  - If there is no `suggestions`, you will have the message `No country found`
  - If there is/are suggestion.s, you will have a list of suggested countries
- You can browse the suggested list with your keyboard keys `Arrow up` and `Arrow down`, when you reach the searched country, then press `Enter` to select

