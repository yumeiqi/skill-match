var app = angular.module('skillApp', []);

app.controller('SkillCtrl', function($scope, $sce, $log) {

    $scope.searchTexts = "";

    var datas  = 
      [
        {
          "salary": "8k-12k",
          "advance": "职位诱惑 : 我们给你一个平台，你给自己一个机会。",
          "describe": "职位描述\n        \n薪资待遇：\n    1.工作时间：上午10点至下午19点，可执行弹性工时制；\n    2.薪资结构：基本工资+岗位工资+绩效工资+午餐补助+五险一金+年终奖等\n    3.其他福利：双休+法定假日休+过节费/节日礼品+年休假等。\n\n\n岗位职责：\n     1、实现对当前主流网站的页面分析；\n     2、参与公司管理系统、广告业务系统前端接口及页面开发和维护；\n     3、组织测试数据，实现对现有开发产品的测试及上线，并监控产品服务，及时处理线上异常；\n     4、能够独立制作和维护简单网站。\n岗位要求：\n     1、有很强的责任心、分析和解决问题的能力；\n     2、熟练使用常见的AngularJS，Boostrap，JQuery等框架；\n     3、熟悉HTML/CSS、JS等前端技术，熟悉常见跨浏览器问题；\n      4、能使用Mysql数据库，能编写简单的SQL语句；\n\n\n工作地址：\n北京市海淀区学清路8号科技财富中心B座8层B801A，乘坐地铁13号线到五道口或15号线到六道口倒公交到学知园站下车即到。",
          "title": "日月同行技术开发部招聘\n                        JavaScript工程师",
          "company": "日月同行\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人"
        },
        {
          "salary": "8k-15k",
          "advance": "职位诱惑 : 晋升空间，带薪年假",
          "describe": "职位描述\n         \n岗位职责： \n \n1.负责产品编码工作.\n \n2.对产品进行调试，解决问题。 \n \n3.能较好的从用户体验角度，提升和优化代码及实现方式。\n \n任职要求：\n \n1.软件开发及相关专业,专科及以上学历; \n \n2.熟悉Html5，CSS3，JavaScript语言;\n \n3.理解并掌握JavaScript语言核心技术DOM、BOM、Ajax、JSON等，对javascript框架应用（如jQuery/d3/Ext等）有一定的经验，掌握面向对象编程思想，具备高效的手写和修改script脚本代码的能力；\n \n4.熟悉后端Node.js者优先；\n \n5.熟练阅读英文技术者优先;\n \n6.具备良好的学习能力、沟通能力、分析及解决问题能力，优秀的团队协作精神。",
          "title": "北京凯博创盈科技发展有限公司技术招聘\n                        JavaScript",
          "company": "北京凯博创盈科技发展有限公司\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人"
        },
        {
          "salary": "8k-16k",
          "advance": "职位诱惑 : 晋升空间",
          "describe": "职位描述\n        \n岗位职责： \n\n1.负责产品编码工作.\n\n2.对产品进行调试，解决问题。 \n\n3.能较好的从用户体验角度，提升和优化代码及实现方式。\n\n任职要求：\n\n1.软件开发及相关专业,专科及以上学历; \n\n2.熟悉Html5，CSS3，JavaScript语言;\n\n3.理解并掌握JavaScript语言核心技术DOM、BOM、Ajax、JSON等，对javascript框架应用（如jQuery/d3/Ext等）有一定的经验，掌握面向对象编程思想，具备高效的手写和修改script脚本代码的能力；\n\n4.熟悉后端Node.js者优先；\n\n5.熟练阅读英文技术者优先;\n\n6.具备良好的学习能力、沟通能力、分析及解决问题能力，优秀的团队协作精神。\n\n7.薪资8k-16k;",
          "title": "北京凯博创盈科技发展有限公司技术招聘\n                        JavaScript",
          "company": "北京凯博创盈科技发展有限公司\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人"
        },
        {
          "salary": "15k-30k",
          "advance": "职位诱惑 : 良好的晋升空间，广阔的平台",
          "describe": "职位描述\n        岗位职责：\n1、熟悉Ajax，jquery，Ajax, json等动态网页的技术，浏览器与 Web 服务器传输技术,熟悉解决http请求跨越问题的方法,熟悉js与node express后台程序的请求返回流程。\n2、精通js面向对象编程。\n3、精通Web前端基础技术，包括HTML、CSS2/3、Javascript。CSS样式兼容性处理以及新特性，熟悉各主流浏览器的差异，能规范书写兼容各主流浏览器的页面代码。\n4、熟悉Jquery等主流JS框架，精通react.js者优先。\n任职要求：\n1.熟练掌握HTML、CSS3、JavaScript开发 -\n2.熟悉W3C标准与ES6规范，熟悉Web语义化，熟悉amd、cmd规范，用过requirejs、seajs对js模块化了解，gurnt gulp webpack 对打包工具熟悉\n3.熟练掌握盒模型、以及常用布局\n4. 熟练掌握响应式布局的各种技巧  \n5.熟练使用至少一种JS框架，掌握其原理，能独立开发常用组件  \n6.熟练使用各种调试、抓包工具，能独立分析、解决和归纳问题 \n7.具有至少一门服务器端编程的实战经验 \n8.具有性能优化经验，熟悉各种常用设计模式和常用MV*框架 \n9. 使用过bower npm 对js依赖的包管理工具。熟练使用sass less（最好是sass） 样式预处理，angular react对流行框架的使用（有项目经验）\n10.有ReactJS经验者优先 \n11. 能熟练使用git管理项目代码.\n工作地址北京市海淀区上地国际创业园东区2号楼7E",
          "title": "快人科技研发招聘\n                        JavaScript",
          "company": "快人科技\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人"
        },
        {
          "salary": "10k-15k",
          "advance": "职位诱惑 : 前端JS开发 猛戳1!!1！！",
          "describe": "职位描述\n        职位描述：\n-利用HTML/CSS/JavaScript 等各种Web技术进行产品的界面开发;\n-进行丰富互联网的Web开发，致力于通过技术改善用户体验;\n-Web前端框架及各模块代码调优；\n            \n任职要求：\n-熟练掌握Web前端开发技术，包括：HTML、CSS、javascript;\n-精通使用jquery，熟悉seajs、requirejs等模块化开发，可以熟练使用jquery开发前端组件，能够基于jquery开发UI组件；\n-能够熟练运用前端技术处理多浏览器兼容，能够熟练使用浏览器调试工具；\n-需要具有web前端性能优化经验；\n-至少要有一种（如：asp.net、php、jsp、java、C#）后台开发语言经验;\nWeb开发二年以上工作经验；",
          "title": "联想利泰招聘\n                        JavaScript（联想项目工作...",
          "company": "联想利泰\n                                                    \n                    拉勾认证企业",
          "scale": "规模 500-2000人"
        },
        {
          "salary": "15k-25k",
          "advance": "职位诱惑 : JS全栈工程师，实战最新JS技术",
          "describe": "职位描述\n        熟练使用 ReactJS，ES6，并且精通至少一个框架的底层代码\n熟悉 Node.js ，使用babel做JS转换，基于webpack做项目工程化，对NPM生态及热门项目有一定了解\n熟悉git命令及常用的bash命令，有过开源项目参与经验\n至少熟悉一门非前端的语言（如Java/PHP/C/C++/Python/Ruby），并有实践经验\n熟悉react native及有移动端开发经验的优先\n\n能够选择最合适的技术实现需求，对JS技术有持续的学习热情",
          "title": "百容千域招聘\n                        JS 工程师",
          "company": "百容千域\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人"
        },
        {
          "salary": "12k-20k",
          "advance": "职位诱惑 : 轻松的工作氛围，良好的晋升通道",
          "describe": "职位描述\n        岗位职责：\n1、熟悉Ajax，jquery，Ajax, json等动态网页的技术，浏览器与 Web 服务器传输技术,熟悉解决http请求跨越问题的方法,熟悉js与PHP后台程序的请求返回流程。\n2、精通js面向对象编程。\n3、精通Web前端基础技术，包括HTML、CSS2/3、Javascript。CSS样式兼容性处理以及新特性，熟悉各主流浏览器的差异，能规范书写兼容各主流浏览器的页面代码。\n4、熟悉Jquery等主流JS框架，精通angular.js 或 backbone.js者优先。\n5、熟练h5新技术，接口，功能，语义化。\n\n任职要求：\n1.熟练掌握HTML5、CSS3、JavaScript开发 -\n2.熟悉W3C标准与ES规范，熟悉Web语义化 -\n3.熟练掌握盒模型、常用布局以及浏览器和移动设备兼容性  \n4. 熟练掌握响应式布局的各种技巧  \n5.熟练使用至少一种JS框架，掌握其原理，能独立开发常用组件  \n6.熟练使用各种调试、抓包工具，能独立分析、解决和归纳问题 \n7.具有至少一门服务器端编程的实战经验 \n8.具有性能优化经验 \n9.熟悉各种常用设计模式和常用MV*框架 \n10.有ReactJS, AngularJS经验者优先 \n11. 能熟练使用github管理项目和代码",
          "title": "快人科技技术研发部招聘\n                        JS高级开发工程师",
          "company": "快人科技\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人"
        },
        {
          "salary": "15k-25k",
          "advance": "职位诱惑 : 绩效奖金 五险一金 超长年假 节假日福利",
          "describe": "职位描述\n        HTML5讲师岗位职责：1、负责规划和讲授前端开发（HTML5）的课程；2、负责实习实训、毕业设计等项目的教学工作；3、制定教学计划、各类软件实训方案。任职资格：1.两年以上前端开发工作经验；2.精通html5、css3，javascript,jq等开发技术，熟悉jquery Mobil库；3.有html5项目开发经验，能运用HTML5开发Mobile APP界面和体验效果的应用；4.有Mobile Web的开发经验，能开发兼容移动版浏览器的应用，并且能实现各种交互效果；5.对新兴web标准和web发展趋势有良好洞察力；6.热爱教育事业，责任心强，沟通能力强。",
          "title": "千锋教育教学部招聘\n                        JS讲师",
          "company": "千锋教育\n                                                    \n                    拉勾未认证企业",
          "scale": "规模 500-2000人"
        },
        {
          "salary": "12k-18k",
          "advance": "职位诱惑 : 扁平化管理，良好的晋升空间。",
          "describe": "职位描述\n        岗位职责：\n1、熟悉Ajax，jquery，Ajax, json等动态网页的技术，浏览器与 Web 服务器传输技术,熟悉解决http请求跨越问题的方法,熟悉js与PHP后台程序的请求返回流程。\n2、精通js面向对象编程。\n3、精通Web前端基础技术，包括HTML、CSS2/3、Javascript。CSS样式兼容性处理以及新特性，熟悉各主流浏览器的差异，能规范书写兼容各主流浏览器的页面代码。\n4、熟悉Jquery等主流JS框架，精通angular.js 或 backbone.js者优先。\n5、熟练h5新技术，接口，功能，语义化。\n\n任职要求：\n1.熟练掌握HTML5、CSS3、JavaScript开发 -\n2.熟悉W3C标准与ES规范，熟悉Web语义化 -\n3.熟练掌握盒模型、常用布局以及浏览器和移动设备兼容性  \n4. 熟练掌握响应式布局的各种技巧  \n5.熟练使用至少一种JS框架，掌握其原理，能独立开发常用组件  \n6.熟练使用各种调试、抓包工具，能独立分析、解决和归纳问题 \n7.具有至少一门服务器端编程的实战经验 \n8.具有性能优化经验 \n9.熟悉各种常用设计模式和常用MV*框架 \n10.有ReactJS, AngularJS经验者优先 \n11. 能熟练使用github管理项目和代码",
          "title": "快人科技技术研发招聘\n                        高级JS开发工程师",
          "company": "快人科技\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人"
        },
        {
          "salary": "8k-10k",
          "advance": "职位诱惑 : 五险一金带薪年假年底双薪定期体检全勤奖",
          "describe": "职位描述\n        岗位职责：\n1、大专以上学历，计算机相关专业，3年以上JS前端开发工作经验。\n2、按研发计划以及公司研发流程的要求，负责web开发项目的开发工作。\n3、完成PC版Web页面与移动端页面的开发任务。\n4、前端界面的编码和调试，定位和解决系统问题。\n5、基于JQuery、RequireJS、BackboneJS等前端开发技术者\n任职要求：\n1、大专以上学历，计算机相关专业，3年以上JS前端开发工作经验。\n2、按研发计划以及公司研发流程的要求，负责web开发项目的开发工作。\n3、完成PC版Web页面与移动端页面的开发任务。\n4、前端界面的编码和调试，定位和解决系统问题。\n5、基于JQuery、RequireJS、BackboneJS等前端开发技术者",
          "title": "云教科技班校通招聘\n                        Js前端工程师",
          "company": "云教科技\n                                                    \n                    拉勾认证企业",
          "scale": "规模 50-150人"
        },
        {
          "salary": "12k-24k",
          "advance": "职位诱惑 : 公司氛围好、发展战略清晰",
          "describe": "职位描述\n        岗位职责：1、充分理解产品需求，与后端工程师等共同制定项目实现方案； 2、将UI设计还原为html、css，协助后端工程师维护模板； 3、Javascript程序开发，实现功能及交互设计； 4、优化前端代码，并整理出可复用的程序模块；5、紧跟技术潮流，不断引入新技术推动技术团队发展。\n任职资格：1、1年以上前端开发工作经验，有后端开发经验更佳； 2、扎实的css基础，页面还原追求完美并对页面重构有深度思考； 3、扎实的javascript基础，大量Ajax开发经验，能够迅速给出前端功能实现方案，具备迅速解决问题能力（与第2项可有部分侧重）； 4、熟悉移动端web app开发，有html5应用开发经验优先； 5、思路清晰，能够与业务、产品、技术人员良好沟通； 6、认真的工作态度，抗压能力好，强烈的责任感。\n你将加入这样团队：\n•崇尚自由、平等、冒险，提倡简单、透明和分享•对新事物充满好奇，对技术充满热情•热爱生活，试图改变世界：）",
          "title": "博大融科招聘\n                        web 前端开发 ／Javascript",
          "company": "博大融科\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人"
        },
        {
          "salary": "5k-10k",
          "advance": "职位诱惑 : 拒绝码农，只为有创意的你",
          "describe": "职位描述\n        \n \n [左脑]                                                           善于使用HTML5/CSS绘出赏心图画                    轻松使用JS演奏动人篇章                                 独立制作项目的经验                                     掌握并善于学习ajax/jQuery/Angular等        了解JAVA及数据库等后端基础技术                  我们拒绝码农，我们需要艺术家气质的工程师。我们为你准备：良好舒适的创作环境，免费午餐，按照每个人条件定制的薪资待遇，匹配公司规划和你的职业计划。待遇按照个人能力匹配。",
          "title": "易商迅达研发中心招聘\n                        前端开发工程师［HTML/JS/WEB］",
          "company": "易商迅达\n                                                    \n                    拉勾未认证企业",
          "scale": "规模 15-50人"
        },
        {
          "salary": "8k-15k",
          "advance": "职位诱惑 : 前端JS开发 看过来~~( ﹁ ﹁ ) ~~~",
          "describe": "职位描述\n        -负责 Web端设计开发:\n-JS熟练优先\n-掌握HTML,JavaScript，Ajax\n-至少熟悉使用过一种成熟的前端开发工具包，bootStrap,EXT、Jquery等",
          "title": "联想利泰招聘\n                        前端JS开发工程师（联想工...",
          "company": "联想利泰\n                                                    \n                    拉勾认证企业",
          "scale": "规模 500-2000人"
        },
        {
          "salary": "10k-15k",
          "advance": "职位诱惑 : 企业云产品项目 使劲儿砸简历",
          "describe": "职位描述\n        职位描述：\n-企业云产品前端开发，使用JS等相关技术开发产品Web页面\n\n职位要求：\n-精通掌握HTML5、CSS3、Javascript、Ajax等Web开发相关技术；\n-精通Bootstrap及相关扩展插件的实用和开发；\n-精通jQuery,jQueryUI,Extjs,Angular UI及其他插件；\n-精通RequireJS(AMD)，Sea.js（CMD）模块化开发。\n-对于浏览器兼容开发方面有丰富经验。\n-能够熟练应用grunt、gulp构建工具协助开发。\n-熟悉CSS 预处理器Sass、LESS、Stylus ，能使用Compass构建自己的样式库。\n-熟悉javascript主流的MVC开发框架，能熟练使用(Backbone.js、Angularjs)中的一种。",
          "title": "联想利泰招聘\n                        web前端（联想企业云项目平...",
          "company": "联想利泰\n                                                    \n                    拉勾认证企业",
          "scale": "规模 500-2000人"
        },
        {
          "salary": "8k-12k",
          "advance": "职位诱惑 : node js 前端开发",
          "describe": "职位描述\n        岗位职责：- 负责nodejs功能模块编写- 负责与前端的(ajax,websocket）数据交互- 负责代码版本控制和不同环境部署以及一部分测试- 持续优化，以提高前端的用户体验- 分析项目需求，能给出良好的解决方案，并协助其他人员完成开发及调试工作。岗位要求：- 本科及以上学历- 有2年以上相关项目经验- 至少1年以上Node.js、ExpressJS和Mongodb开发经验，并精通调试技巧- 熟练使用数据库，如：redis, mongodb, mySQL或其它- 掌握JS面向对象的编程思想，继承，原型，闭包的使用- 熟练掌握事件模型、回调和单线程非阻塞工作原理- 精通Nodejs服务端开发，掌握各个系统模块的使用，理解Tcp/IP、Http、Websocket通讯协议- 熟练使用常用的Nodejs的第三方模块，如：express,redis,mongoose,jsdom,xml2js,socket.io,async,log4js,underscore,moment- 对Restful API理念认同并有项目实践- 熟悉Web性能测试- 熟悉HTML、CSS等前端知识- 熟悉Linux/Unix者优先- 学习能力强，拥有优秀的逻辑思维能力- 自我管理能力强，有良好的执行力- 有较好的沟通和团队协作能力",
          "title": "国人未来技术招聘\n                        node js",
          "company": "国人未来\n                                                    \n                    拉勾认证企业",
          "scale": "规模 50-150人"
        },
        {
          "salary": "8k-10k",
          "advance": "职位诱惑 : 薪资优厚、六险一金、员工福利、咖啡零食",
          "describe": "职位描述\n        岗位职责：\n1、需要持续关注HTML5、CSS3等各种有趣特性配合UI实现；\n2、设计和建造高效、可重用的界面架构；\n3、负责网站和客户端的JS开发，使用javascript和css实现复杂的功能和界面效果；\n4、精通至少一种JS框架(jquery)或者对JS原生语言掌握较深；\n5、优化页面渲染速度，提升用户体验。\n任职要求：\n1、有良好的编码习惯，且有详实的注释说明；\n2、具有扎实的javascript语言的功底； 熟悉客户端javascript兼容主流浏览器常见手段和方法；\n3、深刻理解从客户端请求开始到进入页面事件驱动阶段之间，浏览器做的事情与流程，能对此阶段进行性能优化，尤其渲染速度； 掌握常见的客户端javascript测试框架；\n4、掌握常见的客户端javascript内存泄露检测手段；\n5、有互联网系统、电商、或物流系统的实际开发经验优先考虑；\n6、工作认真细致、责任心强、良好的团队协作精神及沟通能力，对工作成果具有完美主义的追求意识，热爱创意工作，具有全局观念，愿意与团队做自己最骄傲的事情。",
          "title": "广而告之产品部招聘\n                        JS前端",
          "company": "广而告之\n                                                    \n                    拉勾认证企业",
          "scale": "规模 50-150人"
        },
        {
          "salary": "10k-18k",
          "advance": "职位诱惑 : 团队融洽、股票期权、快速晋升、地铁周边",
          "describe": "职位描述\n        智能社，渴望有梦想的人与我们同行\n\n职位描述：\n1.负责前端开发课程的教学工作\n2.参与前端页面开发的项目工作\n\n职位要求：\n1.精通JavaScript语言，独立快速完成常见功能的开发，兼容各主流浏览器，并熟悉兼容问题的解决方案\n2.熟悉HTML/CSS，可以独立完成常见页面的布局工作\n3.拥有3年以上前端开发经验，至少1年的JavaScript开发经验，参与过大型项目的开发\n4.熟悉各种主流开发框架，并了解其工作原理，如jQuery、Angular、Ext等\n5.了解各种开发工具、开发流程，并在工作中加以利用\n\n优先条件：\n1.了解HTML5/CSS3，并在工作中实际运用过，掌握一些常见库的使用方法，如zepto、JQmobile等\n2.了解后台开发语言，如Java、PHP等",
          "title": "智能社招聘\n                        前端开发讲师/工程师【Java...",
          "company": "智能社\n                                                    \n                    拉勾未认证企业",
          "scale": "规模 50-150人"
        },
        {
          "salary": "8k-16k",
          "advance": "职位诱惑 : 五险一金、假期福利、期权、自由工作氛围",
          "describe": "职位描述\n        精通原生javascript、深入理解oop编程思想与js原型链和类库的实现原理、能熟练使用js操作mongoDB进行增删查改、熟悉各种网络协议：http/tcp/ip等、熟练使用express、对异步编程模型有深入理解，了解promis范式、精通html(5)/css(3),对浏览器适配与优化有独到见解、至少熟练使用一种前端mvvm框架（如angularjs、vuejs）",
          "title": "博华康生研发部招聘\n                        JavaScript",
          "company": "博华康生\n                                                    \n                    拉勾未认证企业",
          "scale": "规模 150-500人"
        },
        {
          "salary": "10k-20k",
          "advance": "职位诱惑 : 五险一金，弹性工作制，晋升空间大",
          "describe": "职位描述\n        岗位职责：1、熟练掌握JavaScript，并有实际应用开发经验，2、掌握AJAX相关技术,熟悉jQuery等开源框架中的一种或多种；3、有良好的文档书写及编码习惯,有自己实现的JsFramework经验和控件开发经验者优先考虑；4、一年以上前端开发经验，熟练掌握DIV+CSS、XHTML等web标准化设计，有UI交互设计经验者优先考虑；5、具有良好的团队合作精神，善于沟通交流；6、勇于挑战，能承受一定工作压力；富有责任心，热情，积极向上\n任职要求：1、一年以上工作经验；2、精通各种Web前端技术，包括XHTML/XML/CSS/Javascript等；3、深刻理解Web标准，对可用性、可访问性等相关知识有实际的了解和实践经验；4、熟悉Javascript、熟悉jQuery者优先；5、良好的编码习惯、沟通协作能力和学习能力；6、能够根据需求，分析并给出最优的前端技术解决方案。",
          "title": "胜联信息技术研发部招聘\n                        JavaScript",
          "company": "胜联信息\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人"
        },
        {
          "salary": "7k-14k",
          "advance": "职位诱惑 : 发展前景广阔，待遇优厚。",
          "describe": "职位描述\n        任职资格： 1、学历要求： 全日制统招本科及以上学历； 2、工作经验： 1年以上开发实际工作经验； 3、能力要求：\n熟悉Java开发,熟悉IntelliJ IDEA等主流IDE工具； 熟悉html5,熟练使用bootstrap,jquery,echarts等前端框架； 了解ant,maven,git,ci等源码管理工具； 熟悉Windows(CMD)/Linux(sh)下常用命令脚本； 熟悉oracle,mysql,pgsql等主流关系型数据库； 了解CouchBase,Memcache等内存数据库；\n4、素质要求： 工作踏实，态度积极，能够承受工作压力，能适应严格项目管理； 责任心强，正直诚实，值得信赖。",
          "title": "格瑞利招聘\n                        JavaScript",
          "company": "格瑞利\n                                                    \n                    拉勾未认证企业",
          "scale": "规模 15-50人"
        },
        {
          "salary": "7k-13k",
          "advance": "职位诱惑 : 项目丰富，发展好，老板nice",
          "describe": "职位描述\n        负责智慧城市相关业务系统PC端和移动端系统的前端设计与开发工作。\n\n岗位描述：\n1) 系统原型与用户UI设计；\n2) Web前端代码编写与调试；\n3) Web系统前后台交互代码编写与调试。\n\n岗位要求：\n1) 计算机相关专业，大学本科及以上学历，1-5年软件开发经验；\n2) 精通Html、CSS、Javascript等前端开发技术，熟悉JQuery/EasyUI/ExtJs等前端开发框架，具有丰富的前端开发经验；\n3) 熟悉Ajax、Xml、Json等网络通信技术和数据交换格式；\n4) 熟悉W3C标准，能够熟练解决程序与不同浏览器间的兼容问题；\n5) 具备一定的J2EE技术基础和项目开发经验，可以独立完成前后台交互代码的编写与调试。\n优先条件：\n6) 熟练使用DreamWeaver/FireWorks/Photoshop等设计、开发工具者优先；\n7) 熟悉Android开发技术，具有移动端开发经验者优先。",
          "title": "联创世界招聘\n                        JavaScript",
          "company": "联创世界\n                                                    \n                    拉勾未认证企业",
          "scale": "规模 50-150人"
        },
        {
          "salary": "8k-9k",
          "advance": "职位诱惑 : 薪资可根据个人能力面议，发展平台很好",
          "describe": "职位描述\n        1、精通Javascript，熟悉React/AngularJS/Vue等主流框架；\n2、理解并掌握JavaScript语言核心技术DOM、BOM、Ajax、JSON等，对javascript框架应用（如jQuery/d3/Ext等）有一定的经验，掌握面向对象编程思想，具备高效的手写和修改script脚本代码的能力；\n3、熟悉后端Node.js者优先；\n4、熟悉html5，熟悉Single Page Application Model的其中一种类库，例如AngularJS、Durandal等；\n任职资格：\n1、大专以上学历，计算机相关专业；2年以上Web前端开发经验；\n2、熟练应用JQuery前端框架;\n3、精通web前端技术，包括HTML、XML、CSS、Javascript、Ajax等开发技术；\n4、具备良好的学习能力、沟通能力、分析及解决问题能力，优秀的团队协作精神。",
          "title": "军朗广告技术部招聘\n                        JavaScript",
          "company": "军朗广告\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人"
        },
        {
          "salary": "20k-40k",
          "advance": "职位诱惑 : 前沿技术，扁平管理，外企独资，全球视角",
          "describe": "职位描述\n        参与开发面向全球的基于云的互联网服务，面向各种平台，精易敏捷开发，开发人员全局参与，跨国界深度协作，为开发高手提供更广的技能和能力的纵深。\n职位要求\n• 计算机或相关专业，学士或硕士学位 • 不少于二年的Web前端开发经验 • 丰富的HTML, CSS,  JavaScript开发经验• 丰富的JavaScript开发经验, 熟练使用流行的JavaScript框架，例如Dojo、jQuery等• 熟悉开发高性能Web站点的相关技术• 有responsive UI开发经验、理解并掌握相关最佳实践者优先• 具有Web服务端开发经验者优先，比如LAMP, Ruby on Rails, ASP.net, JEE或Node.js• 良好的书面与口语沟通技能，良好的人际关系技能• 创造性的解决问题能力，良好的判断能力• 注重细节，良好的组织、分析与时间管理技能",
          "title": "Esri 研发中心北京研发中心招聘\n                        Web HTML JS",
          "company": "Esri 研发中心\n                                                    \n                    拉勾认证企业",
          "scale": "规模 2000人以上"
        },
        {
          "salary": "10k-18k",
          "advance": "职位诱惑 : 团队融洽、股票期权、快速晋升、地铁周边",
          "describe": "职位描述\n        智能社，渴望有梦想的人与我们同行\n\n职位描述：\n1.负责前端开发课程的教学工作\n2.参与前端页面开发的项目工作\n\n职位要求：\n1.精通JavaScript语言，独立快速完成常见功能的开发，兼容各主流浏览器，并熟悉兼容问题的解决方案\n2.熟悉HTML/CSS，可以独立完成常见页面的布局工作\n3.拥有3年以上前端开发经验，至少1年的JavaScript开发经验，参与过大型项目的开发\n4.熟悉各种主流开发框架，并了解其工作原理，如jQuery、Angular、Ext等\n5.了解各种开发工具、开发流程，并在工作中加以利用\n\n优先条件：\n1.了解HTML5/CSS3，并在工作中实际运用过，掌握一些常见库的使用方法，如zepto、JQmobile等\n2.了解后台开发语言，如Java、PHP等",
          "title": "智能社招聘\n                        前端开发讲师/工程师【Java...",
          "company": "智能社\n                                                    \n                    拉勾未认证企业",
          "scale": "规模 50-150人"
        }
      ];
    $scope.items = datas;

    $scope.search = function(){
      $scope.items = datas;
      var searchTexts = $scope.searchTexts.split(" ");
      $scope.items.forEach(function(item){
        var found = 0;
        searchTexts.forEach(function(searchText){
          // console.log(keyword);
          if(item.describe.indexOf(searchText) >= 0){
            found ++;
          }
          // console.log('found: ' + keyword + ' ' + found + ' times.');
        item.match = found;
        // ng-click="search()"
        });

      })
    }

    $scope.order = "match";

});
    

