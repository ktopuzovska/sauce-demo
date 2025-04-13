# SauceDemo Cypress Automation Suite

This is an end-to-end (E2E) automation test suite for [https://www.saucedemo.com](https://www.saucedemo.com) built with [Cypress](https://www.cypress.io/) and JavaScript, following the Page Object Model (POM) design pattern.

## Setup Instructions

Clone the repo
git clone https://github.com/ktopuzovska/sauce-demo.git
cd sauce-demo

Install dependencies
npm install

Run Cypress in interactive mode
npm run cypress:open

Run tests in headless mode
npm run cypress:headless

## Environment Variables

Environment variables are stored in `cypress.env.json`:

These credentials are shown for the sake of this demo (THEY SHOULD NOT BE STORED ON THE REPOSITORY)
```json
{
  "standardUser": "standard_user",
  "problemUser": "problem_user",
  "lockedUser": "locked_out_user",
  "errorUser": "error_user",
  "password": "secret_sauce"
}