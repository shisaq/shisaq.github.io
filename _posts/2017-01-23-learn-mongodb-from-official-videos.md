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

* `mongoimport`: import json database to MongoDB. For instance: `mongoimport -d crunchbase -c companies companies.json`, create a database called `crunchbase` and collection called `companies`, the source is `companies.json`. `-d` means database; `-c` means collections.

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

* `db.movieDetails.find({});` find all data in `movieDetails`

* `db.movieDetails.find({}, {title: 1}).pretty();` find all data, then output `title` of every element with `_id`

* `db.movieDetails.find({}, {title: 1, _id: 0}).pretty();` find all data, then output `title` of every element WITHOUT `_id`

* `db.movieDetails.find({title: "Muppets from Space"});` find all elements whose `title` equal to "Muppets from Space"

* `db.movieDetails.find({'countries.1': 'Sweden'}).count();` how many movies list "Sweden" SECOND in the list of countries.

* `db.movieDetails.find({'genres': ['Comedy', 'Crime']}).count();` just the following two genres: "Comedy" and "Crime" with "Comedy" listed first

* `db.movieDetails.find({'genres': { $all: ['Comedy', 'Crime'] } }).count();` how many documents in the video.movieDetails collection list both "Comedy" and "Crime" as genres regardless of how many other genres are listed

* `db.movieDetails.find({ title: {'$regex': 'abc', '$options': 'i'} });` find title that contains `abc`. `'$options': 'i'` means case insensitive.

### Sort, Skip, Limit

In Node.js, we can first specify a cursor by using `var cursor = db.collection('grades').find({some query}, {some projection});`, then add some sort, skip or limit to the cursor object.

* Sort: range data by passing in conditions. e.g: `cursor.sort({"grade": -1});` the returned data will be sorted by `grade` on descending order.

* Skip: when I'm on the second page, the data will skip the data on the first page and return the rest of it. e.g: `cursor.skip(4);` this will skip 4 data from the returned data.

* limit: how many data shall it appear. e.g: `cursor.limit(2)` only 2 data element will be returned.

### a simple sample for the usage of `$or` in Node.js driver

```javascript
query['$or'] = [
    {'overview': {'$regex': options.overview, '$options': 'i'}},
    {'tag_list': {'$regex': options.overview, '$options': 'i'}}
];
```

### Aggregation Pipeline

**Aggregation** is a pipline by offering an array with stages, then match, sort, skip and limit data.

```javascript
db.companies.aggregate([
    { $match: { founded_year: 2004 } },
    { $limit: 5 },
    { $project: {
        _id: 0,
        name: 1
    } }
]);

// Result
// { "name" : "Digg" }
// { "name" : "Facebook" }
// { "name" : "AddThis" }
// { "name" : "Veoh" }
// { "name" : "Pando Networks" }
```

```javascript
db.companies.aggregate([
    { $match: { founded_year: 2004 } },
    { $limit: 5 },
    { $sort: { name: 1 } },
    { $project: {
        _id: 0,
        name: 1
    } }
]);

// Result
// { "name" : "AddThis" }
// { "name" : "Digg" }
// { "name" : "Facebook" }
// { "name" : "Pando Networks" }
// { "name" : "Veoh" }

```

```javascript
db.companies.aggregate([
    { $match: { "relationships.person": { $ne: null } } },
    { $project: { relationships: 1, permalink: 1, _id: 0 } },
    { $unwind: "$relationships" },
    { $group: {
        _id: "$relationships.person.permalink",
        list: { $addToSet: '$permalink' }
    } },
    { $match: { '_id': 'eric-di-benedetto' } },
    { $project: {_id: 1, count: { $size: '$list' } } },
]);

// Result
// { "_id" : "eric-di-benedetto", "count" : 15 }
// Homework 6.1 from [MongoDB University](https://university.mongodb.com/courses/MongoDB/M101JS/2017_January/courseware/Week_6_The_Aggregation_Framework/56ba8617d8ca39047c3ac29c/vertical_2018b095655e)
```

### `unwind`

This can unwind elements from an array.

Before unwind:

```javascript
{
    a: 1,
    b: 2,
    c: [3, 4]
}
```

After unwind:

```javascript
{
    a: 1,
    b: 2,
    c: 3
},
{
    a: 1,
    b: 2,
    c: 4
}
```

This command can easily split an array, then sort, filter or limit.

### This is the question of Homework 6.3 of MongoDB University:

For companies in our collection founded in 2004 and having 5 or more rounds of funding, calculate the average amount raised in each round of funding. Which company meeting these criteria raised the smallest average amount of money per funding round? You do not need to distinguish between currencies. Write an aggregation query to answer this question.

### This is the answer of Homework 6.3 of MongoDB University:

```javascript
db.companies.aggregate([
    { $match: { founded_year: 2004 } },
    { $project: { founded_year: 1,
                  _id: 0,
                  permalink: 1,
                  funding_rounds: 1,
                  size_of_r: { $size: '$funding_rounds' }
    } },
    { $match: { size_of_r: { $gte: 5 } } },
    { $project: { founded_year: 1,
                  _id: 0,
                  permalink: 1,
                  funding_rounds: 1
    } },
    { $unwind: '$funding_rounds' },
    { $group: {
        _id: '$permalink',
        number: { $avg: '$funding_rounds.raised_amount'}
    }},
    { $sort: { number: -1 } }
]).pretty();
```
