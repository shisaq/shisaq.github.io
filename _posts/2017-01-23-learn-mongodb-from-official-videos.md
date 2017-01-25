---
author: shisaq
comments: true
date: 2017-01-23 16:43:35+00:00
layout: post
title: Learn MongoDB From The Official Video Tutorial
categories:
- frontend
---

> The best way to learn is to get your hands dirty.

## Background

Recently, after having handled the basic knowledge of React, I started the new journey -- NodeJS & MongoDB. I successfully finished 2 projects: Chat Server and Countdown Web App. In order to be more comprehensive in programming, and of course to get a better chance for the job opportunities, I think it's time to alter myself to be a full stack engineer.

After having browsed several stacks, I picked these below:

* Python
* Node.js
* MongoDB

Actually, Python is as great as Node.js, and persenally, I prefer Python, cuz it has different capabilities such as making whole back end, web spider, tiny tools, etc. Nevertheless, I dicide to learn Node.js, due to some recent job requirements.

## Source

* [Node.js YouTube Tutorial](https://www.youtube.com/playlist?list=PLoYCgNOIyGAACzU6GliHJDp4kmOw3NFsh)

* [MongoDB Official Video Tutorial](https://university.mongodb.com/courses/M101JS/about)

## Progress

Now I'm learning the first week of MongoDB. I gotta say:

the official videos are AWESOME. But, well, there is a but. But, it's pretty hard for people to keep up to date of the video tutorials. Since this tutorial was done 2 years ago, I have to deal with the updated features and conflicts. Actually, it's totally fine to just use the code they offered; but it's simply not acceptable for me to not keep tracking the latest versions.

## What I found

* `app.use(errorHandler);`

This error handler code has to be **AFTER** all other `app.use()` and routes calls. Otherwise, it won't work properly. See [Node.js Doc](https://expressjs.com/en/guide/error-handling.html).

* `app.use(app.router);`

This code has already been deprecated. What we need to do is simply remove this code, it will work perfectly.

## What I learned

### MongoDB Config

* `mongod`: to start database server.

* `mongo`: to run MongoDB shell and manipulate data.

* Once we are in MongoDB shell, we can:

  * `show dbs`: to show all the databases we have.

  * `help`: to check all commands we have.

  * `use abc`: switch to db `abc`.

  * `show collections`: show all collections inside db `abc`.

  * `db.collection.find()`: if there is a collection called `collection` in db `abc`, we're able to check all the data inside it.

* `mongorestore dump`: if we have a bson and a json file for our database, we can dump it into our database. Haven't made sure how to create the files, but once we have the files, we can wrap them into `dump` directory and run this command to store the data to our MongoDB.

* `bodyParser`: This middleware is quite important. It helps to parse POST data. (usage: `var bodyParser = require('body-parser');  app.use(bodyParser.urlencoded({ extended: true }));`) With its help, we can easily get the data from POST request by using `req.body`.

* callback function (the first parameter is `err`).

```javascript
db.collection('movies').insertOne({ title, year, imdb }, (err, r) => {
    assert.equal(null, err);
    res.status(200).send('The inserted ID is: ' + r.insertedId);
});
```

### Database "CRUD"

|  Acronym  |  Meaning  |
|---        |---        |
|     C     |   Create  |
|     R     |   Read    |
|     U     |   Update  |
|     D     |   Delete  |
