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

    /* 首页部分 */
    // 定义3大structure对应的类
    var Achievement = function (data) {
        this.imgSrc = data.imgSrc;
        this.vidSrc = data.vidSrc;
        this.title = data.title;
        this.abstract = data.abstract;
        this.link = data.link;
    };

    // 定义3大structure在knockout中对应的数组
    self.achievementsList = ko.observableArray([]);
    model.achievementsList.forEach( function (achievement) {
        var newAchievement = new Achievement(achievement);
        self.achievementsList().push(newAchievement);
    });
};


