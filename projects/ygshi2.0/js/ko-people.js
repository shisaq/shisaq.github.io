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

    /* people部分 */
    // 按不同学位将数据存到degreeArray中
    self.degreeArray = ko.observableArray([]);
    model.people.forEach( function(degree) {
        self.degreeArray.push(degree);
    });

    // alumni弹出对话框设置
    self.alumniList = ko.observableArray([]);
    model.alumniList.forEach( function(alumni) {
        self.alumniList.push(alumni);
    });

    // 初始化currentAlumni和对话框显示状态的值
    self.currentAlumni = ko.observable();
    self.popupBoxStatus = ko.observable(false);

    // 当点击链接时，显示currentAlumni对话框
    self.updateCurrentAlumni = function (alumni) {
        self.currentAlumni(alumni);
        self.popupBoxStatus(true);
    };

    // 当点击阴影或者x时，隐藏currentAlumni对话框
    self.hideAlumni = function () {
        self.popupBoxStatus(false);
    };
};
