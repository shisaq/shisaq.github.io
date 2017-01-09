/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('every feed\'s URL is not empty', function () {
            // use regex to define a url, reference:
            // https://gist.github.com/dperini/729294
            // https://mathiasbynens.be/demo/url-regex
            // advice from Udacity Reviewer
            var re_weburl = new RegExp("^" +
                // protocol identifier
                "(?:(?:https?|ftp)://)" +
                // user:pass authentication
                "(?:\\S+(?::\\S*)?@)?" +
                "(?:" +
                    // IP address exclusion
                    // private & local networks
                    "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
                    "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
                    "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
                    // IP address dotted notation octets
                    // excludes loopback network 0.0.0.0
                    // excludes reserved space >= 224.0.0.0
                    // excludes network & broacast addresses
                    // (first & last IP address of each class)
                    "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
                    "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
                    "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
                "|" +
                    // host name
                    "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
                    // domain name
                    "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
                    // TLD identifier
                    "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
                    // TLD may end with dot
                    "\\.?" +
                ")" +
                // port number
                "(?::\\d{2,5})?" +
                // resource path
                "(?:[/?#]\\S*)?" +
                "$", "i"
            );
            allFeeds.forEach( function (feed) {
                expect(feed.url).toMatch(re_weburl);
            });
        });

        it('every feed\'s name is not empty', function () {
            allFeeds.forEach( function (feed) {
                // make sure the name is defined and not empty
                expect(feed.name).toBeTruthy();
            });
        });
    });

    describe('The menu', function () {
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        it('changes visibility when clicked', function () {
            // depends on jquery `hasClass`, see reference:
            // https://api.jquery.com/hasclass/
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial entries', function () {

        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('async is done', function () {
            // if the length of `.entry` is greater than 0, that means
            //  it has some content
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function () {
        var oldFeed, newFeed;
        // oldFeed is from allFeeds[0], newFeed is from allFeeds[1].
        // if they're not the same, that means the content changed
        beforeEach(function(done) {
            loadFeed(0, function () {
                oldFeed = $('.feed').find('.entry-link').attr('href');
                done();
            });
        });
        it('content changes when a new feed is loaded', function (done) {
            loadFeed(1, function () {
                newFeed = $('.feed').find('.entry-link').attr('href');
                expect(newFeed).not.toBe(oldFeed);
                done();
            });
        });
    });
}());
