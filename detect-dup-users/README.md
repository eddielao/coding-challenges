# Developer Assessment

To complete the assessment you need to implement both tasks described below. Please, use Node.js/Express as a technology for the first task and AngularJS 1.x or Angular, ReactJS or Vue.js for the second.

Please provide  detailed instructions how to launch your project.

We’re expecting production quality code and a high quality user interface so we can determine your strengths and weaknesses.

## Background

Site X is getting new users everyday, some create fake duplicate accounts to increase chances of participating in paid research studies (e.g duplicate Facebook or LinkedIn profiles). Some are incomplete profiles (e.g with empty LinkedIn positions). Our mission is delivering high-quality, verified user profiles to our clients (researchers).

Currently we have to go through the user database manually and mark users as “duplicate” or temporarily freeze their profile if they appear to creating false profiles. We currently use fields on the LinkedIn profile (number of connections, email, positions) to compare and determine if a user is “duplicate”.

Here is an example of the problem: A user signs up as a user using LinkedIn, the same user signs up again later with a Facebook account and as a result has 2 accounts with different employment or demographics details.

## Goal

Develop an algorithm to detect duplicate or bad quality users based on user profile data. You can use any available data points to develop your algorithm . (email, date of birth, location, Linkedin or Facebook profile data etc...).

## Confidentiality
By taking this test you agree to treat data as confidential and not reuse profile data in any way.

### Task 1 – Backend

#### Node.js/Express Server

Create a couple of REST endpoints to help you achieve the goal above and build a search interface on Task 2.

Suggested endpoints (up to you for naming routes)

Webpage
* /

JSON
* /users/search
* /users/:id

Feel free to add more endpoints as you see fit, this is just a starting point.

#### Redis

Feel free to use Redis to cache some of your results if you deem it necessary since  MongoDB is readonly.

#### MongoDB database

There is a database set up for you to use with 2600 profiles, there are some inconsistencies with the data (location) but this is part of the challenge.

Connection  (readonly user)
* User: candidate
* Password: ilovemongodb
* Database: respondentio-test
* Connection: ds131900.mlab.com:31900

All responses must be JSON formatted

### Task 2 – Frontend

Please use AngularJS 1.x, Angular, ReactJS or  Vue.js  to display a search screen for Respondents. Couple of filters you can use:

- Location
- Email matching
- Dates created
- Name
- Filter by duplicate

Feel free to add filters you see necessary.
Use the result of task 1 to signal on your search if a user is a potential duplicate or bad quality user. If so  allow for the user to see  who is/are the duplicate(s). Potentially show a score of how good/bad the user might be.

#### Layout & Design

You have complete freedom regarding the layout of that screen. You can use tabular (no table please), card layout etc.

Please use a CSS framework such as bootstrap and feel free to tweak it to make it look good.

Note : If using Vue.js, React or Angular 2.x please provide instructions on how to run it. Webpack, babel, browserify whatever you would like to use needs to be included.
