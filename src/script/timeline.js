/*
*2015-07-22 create by flyher
*2016-03-31 update
*2016-04-01 update
*2018-01-14 update
*/
var timelineApp = angular.module('timelineApp', []);
timelineApp.controller('timelineController', function ($scope) {
  $scope.timeline = {
    title: '个人简历',
    author: 'flyher',
    create: [
      {
        time: '2013-07-22'
      }
    ],
    update: [
      {
        time: '2014-05-06'
      }, {
        time: '2016-01-06'
      }, {
        time: '2016-03-28 重写模板'
      }, {
        time: '2018-01-15 ng1版本，重写编译脚本，支持webpack打包'
      }
    ],
    meta: {
      keywords: '个人简历,前端,后端,Resume,Web,JavaScript,JS,JQuery,AngularJS,ReactJS,NodeJS,Asp.Net,C#,WebSerice',
      description: '欢迎访问我的个人简历,寻找Web前端(全栈)的工作机会'
    },
    info: {
      experience: '经验',
      sex: '性别',
      year: '年龄',
      educations: [
        {
          id: 0,
          date: '2009/9-2013/6',
          school: '学校名称',
          major: '专业名称',
          level: '本科',
          description: '专业描述'
        }
      ],
      companys: [
        {
          id: 0,
          name: '公司2',
          industry: '行业类型2',
          job: '职位2',
          date: '时间范围2',
          people: '公司人数2',
          type: '全职',
          description: '职位职责2'
        },
        {
          id: 1,
          name: '公司1',
          industry: '行业类型1',
          job: '职位1',
          date: '时间范围1',
          people: '公司人数1',
          type: '全职'
        }
      ],
      email: '你的联系邮箱',
      phone: '你的联系电话',
      introductions: [
        {
          id: 0,
          description: '工作项目经历：'
        },
        {
          id: 1,
          description: '个人项目：'
        },
        {
          id: 2,
          description: '个人博客：'
        },
        {
          id: 3,
          description: 'Github地址：https://www.github.com/flyher'
        },
        {
          id: 4,
          description: '微信公众号：'
        },
        {
          id: 5,
          description: '技能：'
        },
        {
          id: 6,
          description: '.NET系列：ASP.NET，.NET MVC，WP8，Web服务 等'
        },
        {
          id: 7,
          description: 'JS系列：JQuery，AngularJS1，React(学习中)，AngularJS2(学习中)'
        },
        {
          id: 8,
          description: 'CSS系列：BootStrap 等'
        },
        {
          id: 9,
          description: '工具：WebPack(学习中)'
        },
        {
          id: 10,
          description: '其他：'
        },
        {
          id: 11,
          description: '外包公司请勿打扰，谢谢理解！'
        }
      ],
      keywords: 'Web开发 AngularJS ASP.NET C# HTML CSS SQL Oracle 互联网 电子商务',
      location: '求职地点',
      industry: '计算机软件 | 互联网/电子商务 | 广告 | 影视/媒体/艺术/文化传播 |其它',
      job: '全栈工程师 | Web前端开发 | 互联网软件开发工程师 | 软件UI设计师/工程师 | 软件工程师',
      jobtype: '全职',
      price: '薪资范围',
      arrivaltime: '到岗时间',
      trainings: [
        {
          id: 0,
          title: '培训公司',
          description: '培训内容'
        }
      ],
      languages: [
        {
          id: 0,
          name: '日语',
          contents: [
            {
              id: 0,
              description: '二级'
            }, {
              id: 1,
              description: '能够读懂一般日语文档'
            }
          ]
        }
      ]
    },
    projects: [
      {
        id: 6,
        time: '2016年',
        status: true,
        historys: [
          {
            date: '01～目前',
            title: '项目名称1',
            envir: 'VS2012',
            stacks: [
              {
                id: 0,
                description: 'ASP.NET'
              },
              {
                id: 1,
                description: 'JQuery'
              },
              {
                id: 2,
                description: 'AngularJS1'
              },
              {
                id: 3,
                description: 'Bootstrap'
              },
              {
                id: 4,
                description: '响应式'
              }
            ],
            module: '全站',
            description: '项目描述1',
            urls: [
              {
                id: 0,
                url: 'http://项目地址1'
              }

            ],
            version: '1.0',
            image: '',
            enable: true
          },
          {
            date: '01～目前',
            title: '项目2',
            envir: 'VS2012',
            stacks: [
              {
                id: 0,
                description: 'HTML'
              },
              {
                id: 1,
                description: 'JQuery'
              },
              {
                id: 2,
                description: 'AngularJS1'
              },
              {
                id: 3,
                description: 'Bootstrap'
              }
            ],
            module: '前端',
            description: '项目描述2',
            urls: [],
            version: '项目版本号',
            image: '项目截图地址',
            enable: true
          }
        ]
      }

    ],
    opensource: [
      {
        date: '2014.03.05~',
        update: '',
        title: 'Identicons',
        envir: 'VS2010',
        module: '关于identicons,一种类似于Gravatar的小东西',
        description: '关于identicons,一种类似于Gravatar的小东西,可将本类库引用,随机生成,保存数组到数据库,调用时用类库解析即可',
        image: '',
        url: 'https://github.com/flyher/Identicons',
        version: '0.1',
        enable: true
      },
      {
        date: '',
        update: '',
        title: '',
        envir: '',
        module: '',
        description: '',
        image: [],
        url: 'https://github.com/flyher/xxx',
        enable: false
      }
    ],
    team: [
      {
        name: '个人团队',
        url: 'http://团队网址',
        description: '',
        member: [
          {
            name: '成员名称',
            description: ''
          },
          {

          }
        ]
      }
    ],
    config: {
      account: 'root',
      passwords: [
        '%23Y12mL',
        '1241212'
      ],
      haslogin: false,
      error: false
    }
  };

  $scope.totoro = {
    user: {
      un: '',
      pwd: '',
    }
  }

  $scope.ie8 = false;

  $scope.projects_tmp = angular.copy($scope.timeline.projects);

  $scope.colors = [
    {
      id: 0,
      key: '#1DB702',
      value: '浅绿色'
    },
    {
      id: 1,
      key: '#5C3317',
      value: '巧克力色'
    },
    {
      id: 2,
      key: '#9F5F9F',
      value: '蓝紫色'
    },
    {
      id: 3,
      key: '#855E42',
      value: '暗木色'
    },
    {
      id: 4,
      key: '#D98719',
      value: '冷铜色'
    },
    {
      id: 5,
      key: '#FF7F00',
      value: '橙色'
    },
    {
      id: 6,
      key: '#428BCA',
      value: '天蓝色'
    }
  ];

  $scope.linecolor = '#428bca';

  /* slide project line */
  $scope.slideline = function (project) {
    // for (var i = 0; i < $scope.timeline.projects.length; i++) {
    //    if ($scope.timeline.projects[i].id==project.id) {
    //        $scope.timeline.projects[i].status = !project.status;
    //    }
    // }
    // project.status = !project.status;
    // $scope.$apply();
  };
  /* open link
  $scope.open_link = function (url) {
  referer
  }; */

  $scope.change_theme = function (color) {
    $scope.linecolor = color.key;
  };

  $scope.login = function () {
    if (encodeURIComponent($scope.totoro.user.un) === $scope.timeline.config.account) {
      var pwd = encodeURIComponent($scope.totoro.user.pwd);
      var status = false;
      // $scope.timeline.config.passwords.forEach(element => {
      //   if (element === pwd) {
      //     status = true;
      //   }
      // });
      for (var index = 0; index < $scope.timeline.config.passwords.length; index++) {
        if($scope.timeline.config.passwords[index]===pwd){
          status = true;
        }
      }
      if (status) {
        $scope.timeline.config.haslogin = true;
        $scope.timeline.config.error = false;
      }
      else {
        $scope.timeline.config.haslogin = false;
        $scope.timeline.config.error = true;
      }
    } else {
      $scope.timeline.config.haslogin = false;
      $scope.timeline.config.error = true;
    }
  }

  // $scope.search_tag = function () {
  // var projects_tmp = []
  // for (var i = 0; i < $scope.timeline.projects.length; i++) {
  //    var project_tmp = {};
  //    var historys_tmp = [];
  //    for (var j = 0; j < $scope.timeline.projects[i].historys.length; j++) {
  //        var skip = false;
  //        for (var k = 0; k < $scope.timeline.projects[i].historys[j].stacks.length; k++) {
  //            if ($scope.timeline.projects[i].historys[j].stacks[k].description.indexOf($scope.keyword) >= 0) {
  //                skip = true;
  //                historys_tmp.push($scope.timeline.projects[i]);
  //            }
  //            if (skip) {
  //                break;
  //            }
  //        }
  //    }
  //    project_tmp = angular.copy($scope.timeline.projects[i]);
  //    project_tmp.historys = historys_tmp;
  //    projects_tmp.push(project_tmp);
  // }
  // $scope.projects_tmp = projects_tmp;
  // }
});
