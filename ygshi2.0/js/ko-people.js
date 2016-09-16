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

    self.degreeArray = ko.observableArray([]);
    model.people.forEach( function(degree) {
        self.degreeArray.push(degree);
    });

    // alumni弹出对话框设置
    self.alumniList = ko.observableArray([]);
    model.alumniList.forEach( function(alumni) {
        self.alumniList.push(alumni);
    });

    self.currentAlumni = ko.observable();

    self.popupBoxStatus = ko.observable(false);

    self.updateCurrentAlumni = function (alumni) {
        self.currentAlumni(alumni);
        self.popupBoxStatus(true);
    }

    self.hideAlumni = function () {
        self.popupBoxStatus(false);
    };
};
