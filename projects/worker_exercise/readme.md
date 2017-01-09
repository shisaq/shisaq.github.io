# This demo shows a simple example of how ___Web Worker___ works.

> From MDN [Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

> The original version: [simple web worker](https://github.com/mdn/simple-web-worker)

## Benefits
With the help of `web worker`, we can split some complex works with render works, to make page render faster.

## Theory

  1. 2 numbers, waiting for user's input, multiply and shows the rusult;
  2. There are 2 threads running JavaScript: `main` thread and `worker` thread;
  3. `main` thread is in charge of everything except the calculation;
  4. `worker` just focus on calculation. Receives data from `main`, calculates, post back to `main`.

## Step by step
  1. Enter the link, means sending a request to get the page;
  2. Get the HTML file, build nodes from HTML and establish DOM tree;
  3. Pick `style.css` from `<head>` and establish CSSOM;
  4. Block CSSOM to request `main.js`;
  5. When loaded, run it, and request `myworker.js` at line 7 of `main.js`;
  6. Load `myworker.js` and run it, then continue building CSSOM;
  7. Composite DOM and CSSOM to make out render tree;
  8. Layout and paint every element;
  9. `main.js` is waiting me to input 2 numbers. So input number 1, say `24`;
  10. `main.js` log number 1 and build a web worker of `myworker.js`;
  11. In line 9 of `main.js` means after the cursor moves out of input, `first.onchange` will run;
  12. ***`myWorker.postMessage` means post data to `myworker.js` to deal with;***
  13. ***There is `onmessage` in `myworker.js` to receive data from `main.js` by using `myWorker.postMessage`;***
  14. ***`e.data[0]` delegates 24(number 1), then multiply `24`(number 1) with number 2;***
  15. ***`postMessage` posts the workerResult back to `main.js`;***
  16. ***`myWorker.onmessage` in line 18 of `main.js` receives the data from `postMessage` of `myworker.js`, and changes the content of `.result`;***
  17. Page updates to show the new result.
