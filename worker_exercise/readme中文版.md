# 这个小项目展示了一个___Web Worker___工作的简单例子

> 参考 MDN [使用 Web Workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)

> 原始版本: [simple web worker](https://github.com/mdn/simple-web-worker)

## 好处
通过`web worker`的帮助，我们能够把一些复杂，并与页面渲染无关的工作分成2个（或更多）线程工作，从而使页面渲染更快。

## 原理
  1. 2个等待用户输入的数字，相乘，并输出结果；
  2. 运行的JavaScript中，分为2个线程：`main` 和 `worker`；
  3. `main` 线程负责除去计算2个数乘积之外的所有工作；
  4. `worker` 仅负责接收2个数，计算乘积，并返回给 `main`。

## 具体步骤
  1. Enter the link, means sending a request to get the page;
  1. 输入网页链接，发出页面请求；
  2. 得到HTML文件，建立HTML节点，建立DOM树；
  3. 在`<head>`中找到`style.css`，并开始建立CSSOM树；
  4. 在`<body>`尾部暂停建立CSSOM树，并请求`main.js`；
  5. 下载并运行`main.js`，并在`main.js`的第7行请求`myworker.js`；
  6. 下载并运行`myworker.js`，然后继续建立CSSOM树；
  7. 合并DOM树和CSSOM树，建立render树；
  8. 根据屏幕大小布局，并绘制页面；
  9. `main.js`等待我们输入2个数字。所以输入number 1，如 `24`;
  10. `main.js`在控制台输出number 1的数值，并用`myworker.js`建立一个web worker；
  11. 在`main.js`第9行意思是，光标在number 1的输入框中移出后，名为`first.onchange`的功能函数将运行；
  12. ***`myWorker.postMessage`意思是把数据传入`myworker.js`进行处理；***
  13. ***转到`myworker.js`中，名为`onmessage`的功能函数作用是接收`main.js`利用`myWorker.postMessage`发来的数据；***
  14. ***`e.data[0]`即代表输入的number 1，也就是`24`，然后将number 1和number 2相乘，乘积赋给`workerResult`；***
  15. ***`postMessage`则会将`workerResult`传回给`main.js`；***
  16. ***在`main.js`的第18行，名为`myWorker.onmessage`的功能函数会接收从`myworker.js`中`postMessage`传来的数据，并把`.result`的内容加上最终结果；***
  17. 页面刷新，显示结果。
