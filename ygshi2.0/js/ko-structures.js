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

    self.updateOri = function (ori) {
        self.currentOri(ori);
    }

    self.currentStructure = ko.observable(model.structures[0].categoryList[0].allStructures[0][0].sList[0]);
    self.currentStatus = ko.observable(false);
    self.bodyOverflow = ko.observable(false);

    self.showCurrentStructure = function (currentItem) {
        self.currentStructure(currentItem);
        self.currentStatus(true);
        if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
            self.bodyOverflow(true);
            $('.page-footer').addClass('nooverflow');
        }
    }

    self.hidePopupBox = function () {
        self.currentStatus(false);
        self.bodyOverflow(false);
        $('.page-footer').removeClass('nooverflow');
    }
};
