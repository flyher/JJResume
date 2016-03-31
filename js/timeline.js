/*
*2015-07-22 create by flyher
*2016-03-31 update
*/
var timelineApp = angular.module("timelineApp", []);
timelineApp.controller("timelineController", function ($scope) {
    $scope.timeline = {
        title: "个人简历",
        author:"flyher",
        create:[
            {
                time: "2013-07-22"
            }
        ],
        update: [
            {
                time: "2014-05-06"
            }, {
                time: "2016-01-06"
            }, {
                time: "2016-03-28 重写模板"
            }
        ],
        meta: {
            keywords: "个人简历,前端,后端,Resume,Web,JavaScript,JS,JQuery,AngularJS,ReactJS,NodeJS,Asp.Net,C#,WebSerice",
            description:"欢迎访问我的个人简历,寻找Web前端(全栈)的工作机会"
        },
        info:{
            experience: "三年",
            sex: "男",
            year: "28岁",
            educations: [
                {
                    id: 0,
                    date: "2009/9-2013/6",
                    school: "郑州大学",
                    major: "软件开发(.NET)",
                    level:"本科",
                    description: "高等数学、大学英语、工程数学、计算机基础知识、办公软件使用、硬件构成原理、计算机网络技术、操作系统原理、编译原理 、数据结构、需求分析与系统设计、软件测试技术、项目管理技术、桌面数据库开发、算法与程序设计、高级程序设计、网页制作技术、Web开发技术、解决方案与架构设计、Linux 开发、C++、游戏开发、毕业设计及综合实训等。"
                }
            ],
            companys: [
                {
                    id: 0,
                    name: "梅花信息股份有限公司",
                    industry: "传播媒体/广告",
                    job: "Web开发",
                    date: "2014年06月-目前",
                    people: "150-500人、民营公司",
                    type: "全职",
                    description: "负责公司网站，营销工具，CRM开发和维护"
                },
                {
                    id: 1,
                    name: "宇达电脑(上海)有限公司",
                    industry: "计算机服务(系统、数据服务、维修)",
                    job: ".NET软件开发",
                    date: "2013年04月-2014年06月",
                    people: "50-150人、合资",
                    type: "全职"
                }
            ],
            email: "admin#99diary.com",
            phone:"185 2159 2798",
            introductions: [
                {
                    id: 0,
                    description: "工作项目经历：http://resume.99diary.com"
                },
                {
                    id: 1,
                    description: "个人项目：http://blog.99diary.com/about/skill/"
                },
                {
                    id: 2,
                    description: "个人博客：http://blog.99diary.com"
                },
                {
                    id: 3,
                    description: "Github地址：https://www.github.com/flyher"
                },
                {
                    id: 4,
                    description: "微信公众号：jjdiary"
                },
                {
                    id: 5,
                    description: "技能："
                },
                {
                    id: 6,
                    description: ".NET系列：ASP.NET，.NET MVC，WP8，Web服务 等"
                },
                {
                    id: 7,
                    description: "JS系列：JQuery，AngularJS1，React(学习中)，AngularJS2(学习中)"
                },
                {
                    id: 8,
                    description: "CSS系列：BootStrap 等"
                },
                {
                    id: 9,
                    description: "工具：WebPack(学习中)"
                },
                {
                    id: 10,
                    description: "其他：写过D3JS，改过ASP，python代码，看过dephin，学过C++游戏开发(还做过一个简单的小游戏，不过已经忘记)"
                }

            ],
            keywords: "Web开发 AngularJS ASP.NET C# HTML CSS SQL Oracle 互联网 电子商务",
            location: "上海",
            industry: "计算机软件 | 互联网/电子商务 | 广告 | 影视/媒体/艺术/文化传播 |其它",
            job: "全栈工程师 | Web前端开发 | 互联网软件开发工程师 | 软件UI设计师/工程师 | 软件工程师",
            jobtype: "全职",
            price: "14K",
            arrivaltime: "一个月内",
            trainings: [
                {
                    id: 0,
                    title: "2012/7-2012/11 浙大网新",
                    description:"培训内容包含了C#基本语法，WinForm开发，ASP.NET开发，SQl与Oracle数据库使用，XMl，JS，jQuery，LINQ，三层架构，MVC架构，培训构成中完成了以WinForm为基础的用户管理和进销系统和以MVC架构为基础的办公OA系统"
                }
            ],
            languages: [
                {
                    id: 0,
                    name: "英语",
                    contents: [
                        {
                            id: 0,
                            description: "CET-4"
                        }
                        , {
                            id: 1,
                            description: "能够读懂一般英文文档"
                        }
                    ]
                }
            ]
        },
        projects:[
            {
                id:6,
                time: "2016年",
                status:true,
                historys: [
                    {
                        date: "01～目前",
                        title: "Mexpo2016(北京/上海站)",
                        envir: "VS2012",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "AngularJS1"
                            },
                            {
                                id: 3,
                                description: "Bootstrap"
                            },
                            {
                                id: 4,
                                description: "响应式"
                            }
                        ],
                        module: "全站",
                        description: "梅花网2016年传播业大展(北京/上海站)",
                        urls: [
                            {
                                id: 0,
                                url: "http://mexpo.meihua.info"
                            }

                        ],
                        version: "1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "01～目前",
                        title: "Mone后台管理",
                        envir: "VS2012",
                        stacks: [
                            {
                                id: 0,
                                description: "HTML"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "AngularJS1"
                            },
                            {
                                id: 3,
                                description: "Bootstrap"
                            }
                        ],
                        module: "前端",
                        description: "梅花网Mone营销工具后台业务管理",
                        urls: [],
                        version: "1.0",
                        image: "",
                        enable: true
                    }
                ]
            },
			{
                id:5,
			    time: "2015年",
			    status: true,
                historys: [
					{
                        date: "06～目前",
                        title: "Mone.Contact(客户与联系人管理)",
                        envir: "VS2012",
                        stacks: [
                            {
                                id: 0,
                                description: "HTML"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "AngularJS1"
                            },
                            {
                                id: 3,
                                description: "Bootstrap"
                            }
                        ],
                        module: "前端(1.0，2.0，3.0)",
                        description: "客户及联系人管理项目前端所有内容",
                        urls: [
                            {
                                id: 0,
                                url: "http://contact.m1world.com"
                            }
                        ],
						version:"3.0",
                        image: "",
                        enable: true
                    },
					{
                        date: "05～12",
                        title: "Mexpo2015(梅花网传播业大展)",
                        envir: "VS2012",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            }
                        ],
                        module: "全站",
                        description: "梅花网2015年传播业大展",
                        urls: [
                            {
                                id: 0,
                                url: "http://mexpo.meihua.info/2015"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
					{
                        date: "02～06",
                        title: "梅花网微博监测",
                        envir: "VS2010+SQL2008",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "MSSQL"
                            }
                        ],
                        module: "数据抓取",
                        description: "梅花网微博监测数据抓取开发(C#)和数据维护",
                        urls: [
                            {
                                id: 0,
                                url: "http://wbm.meihua.info"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
					{
                        date:"03～至今",
                        title:"梅花网销售CRM系统",
                        envir: "VS2005->VS2010->VS2012 +SQL2008",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "MSSQL"
                            }
                        ],
                        module:"全站",
                        description: "梅花网销售CRM系统新功能(新权限，新产品等等模板)开发与维护，",
                        urls: [
                            {
                                id: 0,
                                url: "http://crm.meihua.info"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "01～03",
                        title: "Mone.EDM(编辑制作电子邮件营销工具)",
                        envir: "VS2012",
                        stacks: [
                            {
                                id: 0,
                                description: "HTML"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            }
                        ],
                        module: "负责前端编辑器编写(v1.0)",
                        description: "梅花网统一平台Mone.EDM营销工具",
                        urls: [
                            {
                                id: 0,
                                url: "http://edm.m1world.com"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    }
				]
			},
            {
                id:4,
                time: "2014年",
                status: true,
                historys: [
                    {
                        date: "2014.11～2015.02",
                        title: "MONE(mone营销管理平台)",
                        envir: "VS2010+SQL2008",
                        stacks: [
                            {
                                id: 0,
                                description: ".NET MVC4"
                            },
                            {
                                id: 1,
                                description: "HTML"
                            },
                            {
                                id: 2,
                                description: "JQuery"
                            },
                            {
                                id: 3,
                                description: "AngularJS1"
                            },
                            {
                                id: 4,
                                description: "MSSQL"
                            }
                        ],
                        module: "负责 Mone后端搭建,登录,新浪,谷歌,百度,苹果商店 Oauth2 授权对接(V1.0)",
                        description: "梅花网统一平台Mone营销工具",
                        urls: [
                            {
                                id: 0,
                                url: "http://mone.meihua.info"
                            },
                            {
                                id: 1,
                                url: "http://www.m1world.com"
                            }

                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "2014.09～2015.01",
                        title: "Mexpo2014站+Mawards2014站(梅花网传播业大展+梅花网评选与颁奖网站)",
                        envir: "VS2005+VS2010+SQL2008",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "MSSQL"
                            },
                            {
                                id: 2,
                                description: "JQuery"
                            }
                        ],
                        module: "全站",
                        description: "Mexpo的新功能开发与维护,Mawards2014颁奖礼网站的开发与维护",
                        urls: [
                            {
                                id: 0,
                                url: "http://mexpo.meihua.info/2014"
                            },
                            {
                                id: 1,
                                url: "http://mawards.meihua.info/2014"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "2014.10～2015.02",
                        title: "梅花网活动站",
                        envir: "VS2005->VS2010+SQL2008",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "HTML"
                            },
                            {
                                id: 2,
                                description: "JQuery"
                            },
                            {
                                id: 3,
                                description: "MSSQL"
                            }
                        ],
                        module: "全站",
                        description: "活动站(老版) 开发与维护",
                        urls: [
                            {
                                id: 0,
                                url: "http://www.meihua.info/event"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "09～12",
                        title: "梅花网产业地图站",
                        envir: "VS2010+SQL2008",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "HTML"
                            },
                            {
                                id: 2,
                                description: "JQuery"
                            },
                            {
                                id: 3,
                                description: "MSSQL"
                            }
                        ],
                        module: "全站",
                        description: "梅花网产业地图站维护",
                        urls: [
                            {
                                id: 0,
                                url: "http://maps.meihua.info"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "09～10",
                        title: "打卡门禁考情系统APP",
                        envir: "VS2012+SQL2008",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "HTML"
                            },
                            {
                                id: 2,
                                description: "JQuery"
                            },
                            {
                                id: 3,
                                description: "MSSQL"
                            }
                        ],
                        module: "负责 数据库MSSQL+服务端API编写+硬件调试",
                        description: "结合GPS定位的打卡、门禁、考情系统APP(IOS+Android),获 明道黑马大赛 团队第二名(4人团队)",
						urls:[],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "10",
                        title: "梅花网应用商店Oauth2授权",
                        envir: "VS2010+SQL2008",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "HTML"
                            },
                            {
                                id: 2,
                                description: "JQuery"
                            },
                            {
                                id: 3,
                                description: "MSSQL"
                            }
                        ],
                        module: "全站",
                        description: "梅花网应用商店Oauth2授权体系搭建(用于应用商店)",
                        urls: [
                            {
                                id: 0,
                                url: "http://mstore.meihua.info"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "09～目前",
                        title: "梅花网VIP站",
                        envir: "VS2005->VS2012+SQL2008",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "HTML"
                            },
                            {
                                id: 2,
                                description: "JQuery"
                            },
                            {
                                id: 3,
                                description: "MSSQL"
                            }
                        ],
                        module: "全站",
                        description: "梅花网VIP站项目的的开发和维护",
                        urls: [
                            {
                                id: 0,
                                url: "http://vip.meihua.info"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "09～12",
                        title: "梅花网应用商店",
                        envir: "VS2010+SQL2008",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "HTML"
                            },
                            {
                                id: 2,
                                description: "JQuery"
                            },
                            {
                                id: 3,
                                description: "MSSQL"
                            }
                        ],
                        module: "全站",
                        description: "某网应用商店新功能开发与维护",
                        urls: [
                            {
                                id: 0,
                                url: "http://mstore.meihua.info"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "08",
                        title: "新闻监测维护",
                        envir: "VS2005->VS2010+SQL2008",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "HTML"
                            },
                            {
                                id: 2,
                                description: "JQuery"
                            },
                            {
                                id: 3,
                                description: "MSSQL"
                            }
                        ],
                        module: "pdf文档报表生成模块",
                        description: "期间开发了动态数据生成文档报表pdf的方案,使用wkhtmltopdf",
                        urls: [
                            {
                                id: 0,
                                url: "http://news.meihua.info"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "07～目前",
                        title: "梅花网业务部门和项目宣传EDM制作(HTML兼容Outlook)与发送",
                        envir: "VS2010->VS2012+SQL2008+MySQL",
                        stacks: [
                            {
                                id: 0,
                                description: "C#"
                            },
                            {
                                id: 1,
                                description: "HTML"
                            },
                            {
                                id: 2,
                                description: "JQuery"
                            },
                            {
                                id: 3,
                                description: "MSSQL"
                            },
                            {
                                id: 4,
                                description: "MySQL"
                            }
                        ],
                        module: "全站",
                        description: "(8-12月每月20+,1-7月每月10封左右,重写某网EDM发送工具,已将其设计为傻瓜式配置即可发送的工具 C#) ",
                        urls: [
                            {
                                id: 0,
                                url: "http://edm.meihua.info/日期/index.html"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "06～07",
                        title: "梅花网CIS",
                        envir: "VS2010",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "HTML"
                            },
                            {
                                id: 2,
                                description: "JQuery"
                            }
                        ],
                        module: "全站",
                        description: "梅花网CIS宣传与沟通网站,申请试用页面，申请和宣传站",
                        urls: [
                            {
                                id: 0,
                                url: "http://cis.meihua.info"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "06～07",
                        title: "梅花蓝V",
                        envir: "VS2010",
                        stacks: [
                            {
                                id: 0,
                                description: "HTML"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "D3JS"
                            }
                        ],
                        module: "全站",
                        description: "基于D3JS的项目(HTML+D3JS),蓝V监测网页版",
                        urls: [
                            {
                                id: 0,
                                url: "http://v.meihua.info"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "06下旬",
                        title: "上海",
                        envir: "",
                        module: "",
                        description: "进入上海梅花信息股份有限公司",
						urls:"",
						version:"1.0",
                        image: "",
                        enable: true
                    },
				
                    {
                        date: "06",
                        title: "某建筑公司官方站",
                        envir: "VS2010",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "Sqlite"
                            }
                        ],
                        module: "全站",
                        description: "分为公司简介，公司能力，合作项目，成功案例，党委介绍等页面，和后台管理",
						urls:[],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "06",
                        title: "自学Object-C(已挖坑，待填坑)",
                        envir: "VM+MAC OS",
                        stacks: [
                            {
                                id: 0,
                                description: "Object-C"
                            }
                        ],
                        module: "",
                        description: "别扭的虚拟机代码生活",
						urls:[],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "05",
                        title: "PM2.5分析模块",
                        envir: "VS2010",
                        stacks: [
                            {
                                id: 0,
                                description: "VB.NET"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "Oracle"
                            }
                        ],
                        module: "PM2.5监视",
                        description: "包括PM2.5公司监控和上海官方发布对比，趋势图，邮件预警等。",
                        urls: [],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "02~05",
                        title: "某太阳能光伏监控系统模块",
                        envir: "VS2010",
                        stacks: [
                            {
                                id: 0,
                                description: "VB.NET"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "Oracle"
                            }
                        ],
                        module: "电能监控模块",
                        description: "外部ERP。电能监控图，趋势分析图和每日，每月，每年，最近24小时等分析报表。自己总结出一个JS插件JqTimeLine",
                        urls: [
                            {
                                id: 0,
                                url: "http://flyher.github.io/JqTimeLine"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    }
				]
            },
            {
                id:3,
                time: "2013年",
                status: true,
                historys: [
                    {
                        date: "2013.12~2014.01",
                        title: "公司ERP系统",
                        envir: "VS2010",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "Oracle"
                            }
                        ],
                        module: "负责离职、报销模块",
                        description: "外部ERP。离职模块包括申请，签核，物品交接等小模块，邮件自动发送，提醒和签核审批；报销模块包括申请，签核，费用统计和分析，报表，打印等小模块。",
						urls:[],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "11",
                        title: "海关条形码扫描系统",
                        envir: "VS2010",
                        stacks: [
                            {
                                id: 0,
                                description: "C#"
                            }
                        ],
                        module: "公司报单扫描",
                        description: "外部ERP。对公司报单扫描件自动识别、归纳、重命名和入库登记。",
						urls:[],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "10",
                        title: "车辆维护系统",
                        envir: "VS2010+Oracle",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "Oracle"
                            }
                        ],
                        module: "公司车辆管理系统",
                        description: "内部ERP。对车辆保险，报单，维护，租借等的网络化，实现相关车辆申请，调配，到期维护，报表自动生成和邮件发送。",
						urls:[],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "09",
                        title: "光伏数据采集系统",
                        envir: "VS2010+Oracle",
                        stacks: [
                            {
                                id: 0,
                                description: "C#"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "Oracle"
                            }
                        ],
                        module: "某光伏监控系统模块",
                        description: "外部ERP。对该光伏发电系统相关数据进行的采集数据和分析。",
						urls:[],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "08",
                        title: "流量监控与报警系统",
                        envir: "VS2010+Oracle",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "Oracle"
                            }
                        ],
                        module: "企业流量监控模块",
                        description: "内部ERP。每周流量监控统计，流量分析，报表自动生成和邮件发送。",
						urls:[],
						version:"1.0",
                        image: "",
                        enable: true
                    },
					{
                        date: "06.28",
                        title: "四年大学毕业了",
                        envir: "",
                        module: "",
                        description: "",
						urls:[],
						version:"1.0",
                        image: "",
                        enable: true
                    },
					{
                        date: "06",
                        title: "苏州富榕咨询(ASP+Access)",
                        envir: "ASP",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "Access"
                            }
                        ],
                        module: "苏州富榕咨询官方站",
                        description: "http://www.flconsulte.com/",
                        urls: [
                            {
                                id: 0,
                                url: "http://www.flconsulte.com/"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
					{
                        date: "04.12",
                        title: "上海",
                        envir: "",
                        stacks: [],
                        module: "",
                        description: "疯狂被面试了两周，进入宇达电脑(上海)有限公司，遗憾没能进MS",
                        urls: [
                            {
                                id: 0,
                                url: "http://www.mitacservice.com/"
                            }
                        ],
						version:"1.0",
                        image: "",
                        enable: true
                    },
					{
                        date: "03",
                        title: "苏州",
                        envir: "",
                        stacks: [],
                        module: "",
                        description: "项目已经完成，临近毕业，再次面临找工作。",
						urls:[],
						version:"1.0",
                        image: "",
                        enable: true
                    },
					{
                        date: "01.05",
                        title: "毕业答辩",
                        envir: "",
                        stacks: [],
                        module: "",
                        description: "毕业答辩完美搞定;浙大网新结业。",
						urls:[],
						version:"1.0",
                        image: "",
                        enable: true
                    }
                ]
            },
            {
                id:2,
                time: "2012年",
                status: true,
                historys: [
                    {
                        date: "2012.10～2013.03",
                        title: "苏州新工业 3.0",
                        envir: "VS2010+SQL2005",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "MSSQL"
                            }
                        ],
                        module: "完成大部分功能模块，已经上线，一个人的项目，真的很艰难。",
                        description: "基于B/S的ASP.NET项目，包括资讯、图集、搜索、讨论等相关模块，关注苏州工业发展的中小型网站。",
                        urls: [
                            {
                                id: 0,
                                url: "http://www.industrysz.com"
                            }
                        ],
						version:"3.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "10～11",
                        title: "郑州大学社团在线报名系统 V1.00(毕业设计)",
                        envir: "VS2010+SQL2008",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "MSSQL"
                            }
                        ],
                        module: "能自己完成毕业设计，项目文档，其实也很cool的一件事。",
                        description: "当前郑州大学社团报名和活动参与均是通过现场人工服务和校园小广告完成，效率低下，浪费人力财力，且不能有效地收集意见反馈和通知相关活动。本系统根据当前郑大现状，采用人性化的设计，即使不是专业人员也能轻易发布和管理活动。已经为校园学生用户实现注册登记、社团信息查询、在线报名、活动发布、公告发布、活动相册等功能，为社团用户提供公告管理、社员审核和社员管理等功能，为管理员提供学生管理、社团管理、联系信息管理、公告管理和相册管理等管理功能。系统采用三层架构和工厂设计模式，能更好的维护全局代码；同时，可以依据本系统演化出更多类似报名和信息采集系统。计划下一个版本将添加用户密码加密，社团、学生互动留言板和打印报表等功能，计划编写适于WP7的手持设备版本。",
                        urls: [],
						version:"1.0",
						image: "",
                        enable: true
                    },
                    {
                        date: "10",
                        title: "苏州",
                        envir: "",
                        stacks: [],
                        module: "",
                        description: "进入苏州腾飞工业信息技术有限公司(实习)",
						urls:[],
						version:"1.0",
                        image: "",
                        enable: true
                    },
                    {
                        date: "09",
                        title: "在线OA(inOffice_OA办公系统) (培训项目)",
                        stacks: [
                            {
                                id: 0,
                                description: ".NET MVC3"
                            },
                            {
                                id: 1,
                                description: "JQuery"
                            },
                            {
                                id: 2,
                                description: "MSSQL"
                            }
                        ],
                        envir: "VS2010+SQL2008",
                        module: "网络硬盘模块的开发。",
                        description: "在线OA(即inOffice_OA办公系统)是将现代化办公和计算机网络功能结合起来的一种新型的办公方式。本系统包括我的办公桌、公共事务、人力资源管理、信息交流管理、工作流程管理、客户关系管理、系统配置七个大功能和三十多个小模块，功能齐全，同时可动态添加功能，完全可以满足大中小企业的日常办公需求。系统且采用MVC3开发技术，有利于系统的安全性和后期管理和维护，代码更直观。",
                        urls:[],
						version:"1.0",
						image: "",
                        enable: true
                    },
                    {
                        date: "09",
                        title: "小型BBS(个人项目)",
                        envir: "VS2010+SQL2008",
                        stacks: [
                            {
                                id: 0,
                                description: "ASP.NET"
                            },
                            {
                                id: 2,
                                description: "MSSQL"
                            }
                        ],
                        module: "第一次独立做了个三层的小系统，花了周六周末两天，第一次自豪感的来源。",
                        description: "小部分兴趣爱好者或者网络讨论组因为交流不便常会遇到各种问题，本小型BBS系统可由用户注册，并且具备等级制度方便管理员管理，用户拥有不同的权限，并附加天气等相关widge栏目。",
                        urls:[],
						version:"1.0",
						image: "",
                        enable: true
                    },
                    {
                        date: "08",
                        title: "进销存储系统(培训项目)",
                        envir: "VS2010+Oracle",
                        stacks: [
                            {
                                id: 0,
                                description: "C#"
                            },
                            {
                                id: 2,
                                description: "Oracle"
                            }
                        ],
                        module: "独立完成项目开发，遇到关于三层架构各层次调用之间的问题。",
                        description: "进销存储系统是为了满足一般公司的进销而研发的系统，其目的是为了使公司进销工作更加简明，快捷。 基于WinForm的系统和WCF服务开发，使用三成架构(UI，BLL，DAL)实现，实现了公司进销功能，包括订单增删改查，产品增删改查，订单与产品的关联修改和订单的提交。系统可满足大部分公司的进销需求。",
                        urls:[],
						version:"1.0",
						image: "",
                        enable: true
                    },
                    {
                        date: "07.20～07.25",
                        title: "家庭理财(仿紫辰记账本) (培训项目)",
                        envir: "VS2010+SQL2008",
                        stacks: [
                            {
                                id: 0,
                                description: "C#"
                            },
                            {
                                id: 2,
                                description: "MSSQL"
                            }
                        ],
                        module: "参与系统全程开发，并且利用其他时间自己优化各种功能。在提供的文档的基础自己新增了注册和权限功能，通过网上学习我将保存用户密码采用混沌加密算法。",
                        description: "家庭理财系统可用于管理个人家庭支持收入情况，为更好的理财提供便利。系统根据使用者的实际情况，设置包括支出、收入，以适应社会不同阶层， 不同行业人士的应用，包括记账、账目管理、账户、分类、借款人管理、搜索等功能。并设置权限，更保证了数据的安全性。数据分为三大模块，即登陆用户的详细信息、用户花费情况和银行的收取款。",
                        urls:[],
						version:"1.0",
						image: "",
                        enable: true
                    }
                ]
            },
            {
                id:1,
                time: "2009年",
                status: true,
                historys:[
                    {
                        date: "08.28",
                        title: "郑州",
                        envir: "",
                        stacks: [],
                        module: "",
                        description: "进入郑州大学(计算机科学与技术专业),选择了.NET方向",
                        urls:[],
						version:"1.0",
						image: "",
                        enable: true
                    }
                ]
            },
            {
                id:0,
                time: "1988年",
                status: true,
                histroys: [
                    {
                        date: "11",
                        title: "",
                        envir: "",
                        stacks: [],
                        module: "",
                        description: "Born 吼吼，破壳了",
                        urls:[],
						version:"1.0",
						image: "",
                        enable:true
                    }
                ]
            }

        ],
        opensource: [
            {
                date: "2014.03.05~",
				update:"",
                title: "Identicons",
                envir: "VS2010",
                module: "关于identicons,一种类似于Gravatar的小东西",
                description: "关于identicons,一种类似于Gravatar的小东西,可将本类库引用,随机生成,保存数组到数据库,调用时用类库解析即可",
                image: "",
                url: "https://github.com/flyher/Identicons",
				version:"0.1",
                enable: true
            },
            {
                date: "2013.07.30~目前",
				update:"",
                title: "System.Road",
                envir: "VS2010~VS2012~VS2015",
                module: "个人早期C#成长之路开源类库",
                description: "该项目目前已并入JJProject计划,并只维护爬虫相关底层",
                image: "",
                url: "https://github.com/flyher/System.Road",
                enable:true
            },
            {
                date: "2013-05-20~2014-04-14",
				update:"",
                title: "Diary365 for Windows",
                envir: "VS2010~VS2012",
                module: "Diary365 for Windows http://www.diary365.net ",
                description: "该项目已停止维护。模拟http请求,已经基本实现该站所有功能,包括阅读,备份(批量)日志,留言(批量)备份。2015年4月的时候重构了一个简单的在线阅读功能:http://www.odzen.com/home/last",
                image: [],
                url: "https://github.com/flyher/Diary365",
                enable: false
            } ,
            //{
            //    date: "2013-05-20~2014-04-14",
            //    title: "Diary365 for Windows",
            //    envir: "VS2010~VS2012",
            //    module: "Diary365 for Windows http://www.diary365.net 该项目已停止维护",
            //    description: "模拟http请求,已经基本实现该站所有功能,包括阅读,备份(批量)日志,留言(批量)备份。另一个简单的在线阅读功能:http://www",
            //    image: [],
            //    url: "https://github.com/flyher/Identicons",
            //    enable: false
            //}
        ],
        team: [
            {
                name: "vwtog开发团队(we walk together team)",
                url: "http://www.vwtog.com",
                description: "",
                member: [
                    {
                        name: "flyher",
                        description:""
                    },
                    {

                    }
                ]
            }
        ]
    };

    $scope.ie8 = false;

    $scope.projects_tmp =angular.copy($scope.timeline.projects);

    $scope.colors = [
        {
            id: 0,
            key:"#1DB702",
            value: "浅绿色"
        },
        {
            id: 1,
            key: "#5C3317",
            value:"巧克力色"
        },
        {
            id: 2,
            key: "#9F5F9F",
            value: "蓝紫色"
        },
        {
            id: 3,
            key: "#855E42",
            value: "暗木色"
        },
        {
            id: 4,
            key: "#D98719",
            value: "冷铜色"
        },
        {
            id: 5,
            key: "#FF7F00",
            value: "橙色"
        },
        {
            id: 6,
            key: "#428BCA",
            value:"天蓝色"
        }


    ];

    $scope.linecolor = "#428bca";

    /*slide project line*/
    $scope.slideline = function (project) {
        //for (var i = 0; i < $scope.timeline.projects.length; i++) {
        //    if ($scope.timeline.projects[i].id==project.id) {
        //        $scope.timeline.projects[i].status = !project.status;
        //    }
        //}
        //project.status = !project.status;
        //$scope.$apply();
    };
    /*open link
    $scope.open_link = function (url) {
    referer
    };*/

    $scope.change_theme = function (color) {
        $scope.linecolor = color.key;
    }

    $scope.search_tag = function () {
        //var projects_tmp = []
        //for (var i = 0; i < $scope.timeline.projects.length; i++) {
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
        //}
        //$scope.projects_tmp = projects_tmp;

    }
});