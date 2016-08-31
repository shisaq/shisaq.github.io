// 定义 knockout viewmodel
var ViewModel = function () {
    // 预存储this为self
    var self = this;

    /* 模板部分 */
    // toggle nav list by clicking hamburger button
    // 点击hamburger按钮从而使导航栏显示或消失
    self.navStatus = ko.observable(-1);
    self.toggleNav = function () {
        if (self.navStatus() <= 0) {
            self.navStatus(1);
        } else {
            self.navStatus(-1);
        }
    };

    var Degree = function (data) {
        this.degree = data.degree;
        this.memberList = data.memberList;
    }

    var Member = function (data) {
        this.imgSrc = data.imgSrc;
        this.nameEn = data.nameEn;
        this.nameZh = data.nameZh;
    }

    self.degreeArray = ko.observableArray([]);
    model.people.forEach( function(degree) {
        var item = new Degree(degree);
        self.degreeArray.push(item);
    });
};
