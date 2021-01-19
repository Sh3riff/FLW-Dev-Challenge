# JUMGA-MART


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

# [Project Link](https://jumga-mart.herokuapp.com/)

Jumga is an e-commerce implementation of the flutterwave API V3.

# Features!
  - Register as a customer
  - Available in 4 countries (Nigeria, Ghana, Kenya & Uk)
  - Register as a merchant right from the platform
  - Make payment via multiple channels
  - pay & receive money in your most convinient currency
  - Merchant get a Flutterwave sub Account & a dedicated dispatch rider
  - purchase & sales history
  - more...
# TECH!
  - Flutterwave API
  - React
  - MongoDB
  - Express JS
  - Heroku
  - AWS
  - GIT/GITHUB
  - more...
# ABOUT!
The Jumga e-commerce app was created using MERN stack. It is an implementation of the flutterwave API V3 on the client and server application.
On first load, the app prompt the user to choose a Country (Nigeria, Kenya, Ghana, UK). Then the user gets to the landing page which display all products in the selected Country. Other part of the application can only be accessed by logged in users.
A logged in user can provide and modify profile details and checkout from cart items. User can also register to be a merchant after providing more information and paying a $ approval fee.
An approved merchant can access a store dashboard were he can upload product for sale.
At checkout, the application receives a single payment for all transactions and delivery. This payment is then splitter into appropriate subaccount.
The flutterwave API is in test mode hence, transactions were carried out using flutter wave test details.

### Installation

JUMGA requires [Node.js](https://nodejs.org/)  to run.

Installing the Web Client.

```sh
$ cd client
$ npm i
$ npm start
```

Installing the server

```sh
$ cd server
$ npm i
$ npm start
$ npm run dev // in development
```
