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

    /* lab events部分 */
    // 初始化currentEvent为相关数组中第一个元素
    self.currentEvent = ko.observable(model.labEvents[0]);

    // 点击标签时，把被点击的标签所对应的数据赋给currentEvent
    self.updateEvent = function (event) {
        self.currentEvent(event);
    };
};
