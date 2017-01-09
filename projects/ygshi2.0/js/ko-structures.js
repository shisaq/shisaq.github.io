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

    /* structure部分 */
    self.currentOri = ko.observable(model.structures[0]);

    // 点击任意一个类别，就更新内容
    self.updateOri = function (ori) {
        $('.current-orientation').css('opacity', 0);

        window.setTimeout(function () {
            self.currentOri(ori);
            $('.current-orientation').css('opacity', 1);
        }, 200);
    };

    // 初始化currentStructure，对应状态和body滚动条设置
    self.currentStructure = ko.observable(model.structures[0].categoryList[0].allStructures[0][0].sList[0]);
    self.currentStatus = ko.observable(false);
    self.bodyOverflow = ko.observable(false);

    // 当点击一个structure时，显示该structure的详细信息
    self.showCurrentStructure = function (currentItem) {
        self.currentStructure(currentItem);
        self.currentStatus(true);
        // 如果页面高度比屏幕高度大，则有滚动条，在取消滚动条时，为了防止页面抖动，需要加padding right为16px
        if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
            self.bodyOverflow(true);
            $('.page-footer').addClass('nooverflow');
        }
    };

    // 当点击阴影或者x时，隐藏对话框
    self.hidePopupBox = function () {
        self.currentStatus(false);
        // 防止页面抖动
        self.bodyOverflow(false);
        $('.page-footer').removeClass('nooverflow');
    };
};
