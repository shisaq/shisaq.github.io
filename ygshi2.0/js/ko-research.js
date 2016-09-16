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

    /* research部分 */
    var Achievement = function (data) {
        this.imgSrc = data.imgSrc;
        this.vidSrc = data.vidSrc;
        this.short = data.short;
        this.title = data.title;
        this.details = ko.observable(data.details);
    };

    // 构建research中3大结构所含内容的数组
    self.achievementsList = ko.observableArray([]);
    model.achievementsDetail.forEach( function(achievement) {
        var newAchievement = new Achievement(achievement);
        self.achievementsList.push(newAchievement);
    });

    // 定义currentAchievement的值
    self.currentAchievement = ko.observable(function () {
        // 取url中问号后面的数据
        var num = window.location.search;
        // 取该数据最后一位，赋给i
        var i = num.charAt(num.length - 1);
        // 当num存在，且i的值在achievementsList的数组长度内时，
        // currentAchievement应为第i个元素
        if (num && i >= 0 && i<= self.achievementsList().length) {
            return self.achievementsList()[i];
        } else {
            // 否则默认显示第1个元素
            return self.achievementsList()[0];
        }
    }());

    // 根据点击的标题更新currentAchievement
    self.updateAchievement = function (achievement) {
        $('.achievement-details').css('opacity', 0);

        window.setTimeout(function () {
            self.currentAchievement(achievement);
            $('.achievement-details').css('opacity', 1);
        }, 200);
    };
};
