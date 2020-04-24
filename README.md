# Sprint Challenge: Authentication - Dad Jokes

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment, please work on it alone. It is an opportunity to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

If the instructions are not clear, please seek support from your TL and Instructor on Slack.

The Minimum Viable Product must be completed in three hours.

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add your _Team Lead_ as collaborator on Github.
- [x] Clone your forked version of the Repository.
- [x] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
- [x] Implement the project on this Branch, committing changes regularly.
- [x] Push commits: git push origin `firstName-lastName`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `firstName-lastName` branch into `master` on your fork. **Please don't make Pull Requests against Lambda's repository**.
- [ ] Please don't merge your own pull request.
- [ ] Add your _Team Lead_ as a Reviewer on the Pull-request
- [ ] Your _Team Lead_ will count the challenge as done by merging the branch into _master_.

## Commits

Commit your code regularly and use descriptive messages. This helps both you (in case you ever need to return to old code) and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] What is the purpose of using _sessions_?

  Sessions are a way to save user data on the server across multiple uses of the site. This is a pretty flexible term and can be used for many things. One common use-case is to store an acknowledgement that a user has logged in so they do not need to login every time they use the site.

- [x] What does bcrypt do to help us store passwords in a secure manner.

  bcrypt allows us to hash passwords before storing them in a database. Hashes are a one way operation, meaning that a password can not be found using the hash of that password. Saving only the hash of a password on the server means that if you server is compromised, attackers will not be able to steal user passwords.

- [x] What does bcrypt do to slow down attackers?

  One way bcrypt slows down attackers, in addition to simply hashing, is by using either multiple rounds or seeds. Seeds are strings that are appended to the end of a string before it is hashed. Rounds correspond to hashing a string and then re-hashing the output 2^number of rounds times. Both of these methods result in more differentiated output making it difficult for attackers to guess known common hashes to access your site.

- [x] What are the three parts of the JSON Web Token?

  The three components are the header, payload, and signature. The header includes the type of token and encryption algorithm. The payload contains any information you would like to save in the token. And the signature is the result of signing the header and payload with a secure secret key.

## Minimum Viable Product

Implement an User Authentication System. Hash user's passwords before saving them to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

- [x] Implement the `register` and `login` functionality inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [x] Implement the `authenticate` middleware inside `/auth/authenticate-middleware.js`.
- [ ] Write a **minimum of 2 tests** per API endpoint. Write more tests if you have time.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

## Stretch Problem

Build a front end to show the jokes.

- [ ] Add a React client that connects to the API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- [ ] Once you have the functionality down, style it!
