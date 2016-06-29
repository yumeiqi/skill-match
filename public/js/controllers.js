var app = angular.module('skillApp', []);

app.controller('SkillCtrl', function($scope, $sce, $log) {

    $scope.searchTexts = "";

    var datas  = 
      [
        {
          "salary": "8k-12k",
          "advance": "职位诱惑 : 我们给你一个平台，你给自己一个机会。",
          "describe": "职位描述\n        \n薪资待遇：\n??? 1.工作时间：上午10点至下午19点，可执行弹性工时制；\n??? 2.薪资结构：基本工资+岗位工资+绩效工资+午餐补助+五险一金+年终奖等\n??? 3.其他福利：双休+法定假日休+过节费/节日礼品+年休假等。\n\n\n岗位职责：\n? ? ?1、实现对当前主流网站的页面分析；\n? ? ?2、参与公司管理系统、广告业务系统前端接口及页面开发和维护；\n? ? ?3、组织测试数据，实现对现有开发产品的测试及上线，并监控产品服务，及时处理线上异常；\n? ? ?4、能够独立制作和维护简单网站。\n岗位要求：\n? ? ?1、有很强的责任心、分析和解决问题的能力；\n? ? ?2、熟练使用常见的AngularJS，Boostrap，JQuery等框架；\n? ? ?3、熟悉HTML/CSS、JS等前端技术，熟悉常见跨浏览器问题；\n? ? ? 4、能使用Mysql数据库，能编写简单的SQL语句；\n\n\n工作地址：\n北京市海淀区学清路8号科技财富中心B座8层B801A，乘坐地铁13号线到五道口或15号线到六道口倒公交到学知园站下车即到。",
          "title": "日月同行技术开发部招聘\n                        JavaScript工程师",
          "company": "日月同行\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人",
          "source": "拉钩"
        },
        {
          "salary": "8k-15k",
          "advance": "职位诱惑 : 晋升空间，带薪年假",
          "describe": "职位描述\n        ?\n岗位职责： \n?\n1.负责产品编码工作.\n?\n2.对产品进行调试，解决问题。 \n?\n3.能较好的从用户体验角度，提升和优化代码及实现方式。\n?\n任职要求：\n?\n1.软件开发及相关专业,专科及以上学历; \n?\n2.熟悉Html5，CSS3，JavaScript语言;\n?\n3.理解并掌握JavaScript语言核心技术DOM、BOM、Ajax、JSON等，对javascript框架应用（如jQuery/d3/Ext等）有一定的经验，掌握面向对象编程思想，具备高效的手写和修改script脚本代码的能力；\n?\n4.熟悉后端Node.js者优先；\n?\n5.熟练阅读英文技术者优先;\n?\n6.具备良好的学习能力、沟通能力、分析及解决问题能力，优秀的团队协作精神。\n?",
          "title": "北京凯博创盈科技发展有限公司技术招聘\n                        JavaScript",
          "company": "北京凯博创盈科技发展有限公司\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人",
          "source": "拉钩"
        },
        {
          "salary": "8k-16k",
          "advance": "职位诱惑 : 晋升空间",
          "describe": "职位描述\n        \n岗位职责： \n\n1.负责产品编码工作.\n\n2.对产品进行调试，解决问题。 \n\n3.能较好的从用户体验角度，提升和优化代码及实现方式。\n\n任职要求：\n\n1.软件开发及相关专业,专科及以上学历; \n\n2.熟悉Html5，CSS3，JavaScript语言;\n\n3.理解并掌握JavaScript语言核心技术DOM、BOM、Ajax、JSON等，对javascript框架应用（如jQuery/d3/Ext等）有一定的经验，掌握面向对象编程思想，具备高效的手写和修改script脚本代码的能力；\n\n4.熟悉后端Node.js者优先；\n\n5.熟练阅读英文技术者优先;\n\n6.具备良好的学习能力、沟通能力、分析及解决问题能力，优秀的团队协作精神。\n\n7.薪资8k-16k;",
          "title": "北京凯博创盈科技发展有限公司技术招聘\n                        JavaScript",
          "company": "北京凯博创盈科技发展有限公司\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人",
          "source": "拉钩"
        },
        {
          "salary": "15k-30k",
          "advance": "职位诱惑 : 良好的晋升空间，广阔的平台",
          "describe": "职位描述\n        岗位职责：\n1、熟悉Ajax，jquery，Ajax, json等动态网页的技术，浏览器与 Web 服务器传输技术,熟悉解决http请求跨越问题的方法,熟悉js与node express后台程序的请求返回流程。\n2、精通js面向对象编程。\n3、精通Web前端基础技术，包括HTML、CSS2/3、Javascript。CSS样式兼容性处理以及新特性，熟悉各主流浏览器的差异，能规范书写兼容各主流浏览器的页面代码。\n4、熟悉Jquery等主流JS框架，精通react.js者优先。\n任职要求：\n1.熟练掌握HTML、CSS3、JavaScript开发 -\n2.熟悉W3C标准与ES6规范，熟悉Web语义化，熟悉amd、cmd规范，用过requirejs、seajs对js模块化了解，gurnt gulp webpack 对打包工具熟悉\n3.熟练掌握盒模型、以及常用布局\n4. 熟练掌握响应式布局的各种技巧 ?\n5.熟练使用至少一种JS框架，掌握其原理，能独立开发常用组件 ?\n6.熟练使用各种调试、抓包工具，能独立分析、解决和归纳问题?\n7.具有至少一门服务器端编程的实战经验?\n8.具有性能优化经验，熟悉各种常用设计模式和常用MV*框架?\n9. 使用过bower npm 对js依赖的包管理工具。熟练使用sass less（最好是sass） 样式预处理，angular react对流行框架的使用（有项目经验）\n10.有ReactJS经验者优先?\n11. 能熟练使用git管理项目代码.\n工作地址北京市海淀区上地国际创业园东区2号楼7E",
          "title": "快人科技研发招聘\n                        JavaScript",
          "company": "快人科技\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人",
          "source": "拉钩"
        },
        {
          "salary": "10k-15k",
          "advance": "职位诱惑 : 前端JS开发 猛戳1!!1！！",
          "describe": "职位描述\n        职位描述：\n-利用HTML/CSS/JavaScript?等各种Web技术进行产品的界面开发;\n-进行丰富互联网的Web开发，致力于通过技术改善用户体验;\n-Web前端框架及各模块代码调优；\n? ??? ??? ??\n任职要求：\n-熟练掌握Web前端开发技术，包括：HTML、CSS、javascript;\n-精通使用jquery，熟悉seajs、requirejs等模块化开发，可以熟练使用jquery开发前端组件，能够基于jquery开发UI组件；\n-能够熟练运用前端技术处理多浏览器兼容，能够熟练使用浏览器调试工具；\n-需要具有web前端性能优化经验；\n-至少要有一种（如：asp.net、php、jsp、java、C#）后台开发语言经验;\nWeb开发二年以上工作经验；",
          "title": "联想利泰招聘\n                        JavaScript（联想项目工作...",
          "company": "联想利泰\n                                                    \n                    拉勾认证企业",
          "scale": "规模 500-2000人",
          "source": "拉钩"
        },
        {
          "salary": "15k-25k",
          "advance": "职位诱惑 : JS全栈工程师，实战最新JS技术",
          "describe": "职位描述\n        熟练使用 ReactJS，ES6，并且精通至少一个框架的底层代码\n熟悉 Node.js ，使用babel做JS转换，基于webpack做项目工程化，对NPM生态及热门项目有一定了解\n熟悉git命令及常用的bash命令，有过开源项目参与经验\n至少熟悉一门非前端的语言（如Java/PHP/C/C++/Python/Ruby），并有实践经验\n熟悉react native及有移动端开发经验的优先\n\n能够选择最合适的技术实现需求，对JS技术有持续的学习热情",
          "title": "百容千域招聘\n                        JS 工程师",
          "company": "百容千域\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人",
          "source": "拉钩"
        },
        {
          "salary": "12k-20k",
          "advance": "职位诱惑 : 轻松的工作氛围，良好的晋升通道",
          "describe": "职位描述\n        岗位职责：\n1、熟悉Ajax，jquery，Ajax, json等动态网页的技术，浏览器与 Web 服务器传输技术,熟悉解决http请求跨越问题的方法,熟悉js与PHP后台程序的请求返回流程。\n2、精通js面向对象编程。\n3、精通Web前端基础技术，包括HTML、CSS2/3、Javascript。CSS样式兼容性处理以及新特性，熟悉各主流浏览器的差异，能规范书写兼容各主流浏览器的页面代码。\n4、熟悉Jquery等主流JS框架，精通angular.js 或 backbone.js者优先。\n5、熟练h5新技术，接口，功能，语义化。\n\n任职要求：\n1.熟练掌握HTML5、CSS3、JavaScript开发 -\n2.熟悉W3C标准与ES规范，熟悉Web语义化 -\n3.熟练掌握盒模型、常用布局以及浏览器和移动设备兼容性 ?\n4. 熟练掌握响应式布局的各种技巧 ?\n5.熟练使用至少一种JS框架，掌握其原理，能独立开发常用组件 ?\n6.熟练使用各种调试、抓包工具，能独立分析、解决和归纳问题?\n7.具有至少一门服务器端编程的实战经验?\n8.具有性能优化经验?\n9.熟悉各种常用设计模式和常用MV*框架?\n10.有ReactJS, AngularJS经验者优先?\n11. 能熟练使用github管理项目和代码",
          "title": "快人科技技术研发部招聘\n                        JS高级开发工程师",
          "company": "快人科技\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人",
          "source": "拉钩"
        },
        {
          "salary": "15k-25k",
          "advance": "职位诱惑 : 绩效奖金 五险一金 超长年假 节假日福利",
          "describe": "职位描述\n        HTML5讲师岗位职责：1、负责规划和讲授前端开发（HTML5）的课程；2、负责实习实训、毕业设计等项目的教学工作；3、制定教学计划、各类软件实训方案。任职资格：1.两年以上前端开发工作经验；2.精通html5、css3，javascript,jq等开发技术，熟悉jquery?Mobil库；3.有html5项目开发经验，能运用HTML5开发Mobile?APP界面和体验效果的应用；4.有Mobile?Web的开发经验，能开发兼容移动版浏览器的应用，并且能实现各种交互效果；5.对新兴web标准和web发展趋势有良好洞察力；6.热爱教育事业，责任心强，沟通能力强。?",
          "title": "千锋教育教学部招聘\n                        JS讲师",
          "company": "千锋教育\n                                                    \n                    拉勾未认证企业",
          "scale": "规模 500-2000人",
          "source": "拉钩"
        },
        {
          "salary": "12k-18k",
          "advance": "职位诱惑 : 扁平化管理，良好的晋升空间。",
          "describe": "职位描述\n        岗位职责：\n1、熟悉Ajax，jquery，Ajax, json等动态网页的技术，浏览器与 Web 服务器传输技术,熟悉解决http请求跨越问题的方法,熟悉js与PHP后台程序的请求返回流程。\n2、精通js面向对象编程。\n3、精通Web前端基础技术，包括HTML、CSS2/3、Javascript。CSS样式兼容性处理以及新特性，熟悉各主流浏览器的差异，能规范书写兼容各主流浏览器的页面代码。\n4、熟悉Jquery等主流JS框架，精通angular.js 或 backbone.js者优先。\n5、熟练h5新技术，接口，功能，语义化。\n\n任职要求：\n1.熟练掌握HTML5、CSS3、JavaScript开发 -\n2.熟悉W3C标准与ES规范，熟悉Web语义化 -\n3.熟练掌握盒模型、常用布局以及浏览器和移动设备兼容性 ?\n4. 熟练掌握响应式布局的各种技巧 ?\n5.熟练使用至少一种JS框架，掌握其原理，能独立开发常用组件 ?\n6.熟练使用各种调试、抓包工具，能独立分析、解决和归纳问题?\n7.具有至少一门服务器端编程的实战经验?\n8.具有性能优化经验?\n9.熟悉各种常用设计模式和常用MV*框架?\n10.有ReactJS, AngularJS经验者优先?\n11. 能熟练使用github管理项目和代码",
          "title": "快人科技技术研发招聘\n                        高级JS开发工程师",
          "company": "快人科技\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人",
          "source": "拉钩"
        },
        {
          "salary": "8k-10k",
          "advance": "职位诱惑 : 五险一金带薪年假年底双薪定期体检全勤奖",
          "describe": "职位描述\n        岗位职责：\n1、大专以上学历，计算机相关专业，3年以上JS前端开发工作经验。\n2、按研发计划以及公司研发流程的要求，负责web开发项目的开发工作。\n3、完成PC版Web页面与移动端页面的开发任务。\n4、前端界面的编码和调试，定位和解决系统问题。\n5、基于JQuery、RequireJS、BackboneJS等前端开发技术者\n任职要求：\n1、大专以上学历，计算机相关专业，3年以上JS前端开发工作经验。\n2、按研发计划以及公司研发流程的要求，负责web开发项目的开发工作。\n3、完成PC版Web页面与移动端页面的开发任务。\n4、前端界面的编码和调试，定位和解决系统问题。\n5、基于JQuery、RequireJS、BackboneJS等前端开发技术者",
          "title": "云教科技班校通招聘\n                        Js前端工程师",
          "company": "云教科技\n                                                    \n                    拉勾认证企业",
          "scale": "规模 50-150人",
          "source": "拉钩"
        },
        {
          "salary": "12k-24k",
          "advance": "职位诱惑 : 公司氛围好、发展战略清晰",
          "describe": "职位描述\n        岗位职责：1、充分理解产品需求，与后端工程师等共同制定项目实现方案； 2、将UI设计还原为html、css，协助后端工程师维护模板； 3、Javascript程序开发，实现功能及交互设计； 4、优化前端代码，并整理出可复用的程序模块；5、紧跟技术潮流，不断引入新技术推动技术团队发展。\n任职资格：1、1年以上前端开发工作经验，有后端开发经验更佳； 2、扎实的css基础，页面还原追求完美并对页面重构有深度思考； 3、扎实的javascript基础，大量Ajax开发经验，能够迅速给出前端功能实现方案，具备迅速解决问题能力（与第2项可有部分侧重）； 4、熟悉移动端web app开发，有html5应用开发经验优先； 5、思路清晰，能够与业务、产品、技术人员良好沟通； 6、认真的工作态度，抗压能力好，强烈的责任感。\n你将加入这样团队：\n?崇尚自由、平等、冒险，提倡简单、透明和分享?对新事物充满好奇，对技术充满热情?热爱生活，试图改变世界：）",
          "title": "博大融科招聘\n                        web 前端开发 ／Javascript",
          "company": "博大融科\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人",
          "source": "拉钩"
        },
        {
          "salary": "5k-10k",
          "advance": "职位诱惑 : 拒绝码农，只为有创意的你",
          "describe": "职位描述\n        \n \n [左脑] ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? 善于使用HTML5/CSS绘出赏心图画 ? ? ? ? ? ? ? ? ? ?轻松使用JS演奏动人篇章 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? 独立制作项目的经验 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? 掌握并善于学习ajax/jQuery/Angular等 ? ? ? ?了解JAVA及数据库等后端基础技术 ? ? ? ? ? ? ? ? ?我们拒绝码农，我们需要艺术家气质的工程师。我们为你准备：良好舒适的创作环境，免费午餐，按照每个人条件定制的薪资待遇，匹配公司规划和你的职业计划。待遇按照个人能力匹配。",
          "title": "易商迅达研发中心招聘\n                        前端开发工程师［HTML/JS/WEB］",
          "company": "易商迅达\n                                                    \n                    拉勾未认证企业",
          "scale": "规模 15-50人",
          "source": "拉钩"
        },
        {
          "salary": "8k-15k",
          "advance": "职位诱惑 : 前端JS开发 看过来~~( ﹁ ﹁ ) ~~~",
          "describe": "职位描述\n        -负责 Web端设计开发:\n-JS熟练优先\n-掌握HTML,JavaScript，Ajax\n-至少熟悉使用过一种成熟的前端开发工具包，bootStrap,EXT、Jquery等",
          "title": "联想利泰招聘\n                        前端JS开发工程师（联想工...",
          "company": "联想利泰\n                                                    \n                    拉勾认证企业",
          "scale": "规模 500-2000人",
          "source": "拉钩"
        },
        {
          "salary": "10k-15k",
          "advance": "职位诱惑 : 企业云产品项目 使劲儿砸简历",
          "describe": "职位描述\n        职位描述：\n-企业云产品前端开发，使用JS等相关技术开发产品Web页面\n\n职位要求：\n-精通掌握HTML5、CSS3、Javascript、Ajax等Web开发相关技术；\n-精通Bootstrap及相关扩展插件的实用和开发；\n-精通jQuery,jQueryUI,Extjs,Angular UI及其他插件；\n-精通RequireJS(AMD)，Sea.js（CMD）模块化开发。\n-对于浏览器兼容开发方面有丰富经验。\n-能够熟练应用grunt、gulp构建工具协助开发。\n-熟悉CSS?预处理器Sass、LESS、Stylus?，能使用Compass构建自己的样式库。\n-熟悉javascript主流的MVC开发框架，能熟练使用(Backbone.js、Angularjs)中的一种。",
          "title": "联想利泰招聘\n                        web前端（联想企业云项目平...",
          "company": "联想利泰\n                                                    \n                    拉勾认证企业",
          "scale": "规模 500-2000人",
          "source": "拉钩"
        },
        {
          "salary": "8k-12k",
          "advance": "职位诱惑 : node js 前端开发",
          "describe": "职位描述\n        岗位职责：- 负责nodejs功能模块编写- 负责与前端的(ajax,websocket）数据交互- 负责代码版本控制和不同环境部署以及一部分测试- 持续优化，以提高前端的用户体验- 分析项目需求，能给出良好的解决方案，并协助其他人员完成开发及调试工作。岗位要求：- 本科及以上学历- 有2年以上相关项目经验- 至少1年以上Node.js、ExpressJS和Mongodb开发经验，并精通调试技巧- 熟练使用数据库，如：redis, mongodb, mySQL或其它- 掌握JS面向对象的编程思想，继承，原型，闭包的使用- 熟练掌握事件模型、回调和单线程非阻塞工作原理- 精通Nodejs服务端开发，掌握各个系统模块的使用，理解Tcp/IP、Http、Websocket通讯协议- 熟练使用常用的Nodejs的第三方模块，如：express,redis,mongoose,jsdom,xml2js,socket.io,async,log4js,underscore,moment- 对Restful API理念认同并有项目实践- 熟悉Web性能测试- 熟悉HTML、CSS等前端知识- 熟悉Linux/Unix者优先- 学习能力强，拥有优秀的逻辑思维能力- 自我管理能力强，有良好的执行力- 有较好的沟通和团队协作能力",
          "title": "国人未来技术招聘\n                        node js",
          "company": "国人未来\n                                                    \n                    拉勾认证企业",
          "scale": "规模 50-150人",
          "source": "拉钩"
        },
        {
          "salary": "8k-10k",
          "advance": "职位诱惑 : 薪资优厚、六险一金、员工福利、咖啡零食",
          "describe": "职位描述\n        岗位职责：\n1、需要持续关注HTML5、CSS3等各种有趣特性配合UI实现；\n2、设计和建造高效、可重用的界面架构；\n3、负责网站和客户端的JS开发，使用javascript和css实现复杂的功能和界面效果；\n4、精通至少一种JS框架(jquery)或者对JS原生语言掌握较深；\n5、优化页面渲染速度，提升用户体验。\n任职要求：\n1、有良好的编码习惯，且有详实的注释说明；\n2、具有扎实的javascript语言的功底； 熟悉客户端javascript兼容主流浏览器常见手段和方法；\n3、深刻理解从客户端请求开始到进入页面事件驱动阶段之间，浏览器做的事情与流程，能对此阶段进行性能优化，尤其渲染速度； 掌握常见的客户端javascript测试框架；\n4、掌握常见的客户端javascript内存泄露检测手段；\n5、有互联网系统、电商、或物流系统的实际开发经验优先考虑；\n6、工作认真细致、责任心强、良好的团队协作精神及沟通能力，对工作成果具有完美主义的追求意识，热爱创意工作，具有全局观念，愿意与团队做自己最骄傲的事情。",
          "title": "广而告之产品部招聘\n                        JS前端",
          "company": "广而告之\n                                                    \n                    拉勾认证企业",
          "scale": "规模 50-150人",
          "source": "拉钩"
        },
        {
          "salary": "10k-18k",
          "advance": "职位诱惑 : 团队融洽、股票期权、快速晋升、地铁周边",
          "describe": "职位描述\n        智能社，渴望有梦想的人与我们同行\n\n职位描述：\n1.负责前端开发课程的教学工作\n2.参与前端页面开发的项目工作\n\n职位要求：\n1.精通JavaScript语言，独立快速完成常见功能的开发，兼容各主流浏览器，并熟悉兼容问题的解决方案\n2.熟悉HTML/CSS，可以独立完成常见页面的布局工作\n3.拥有3年以上前端开发经验，至少1年的JavaScript开发经验，参与过大型项目的开发\n4.熟悉各种主流开发框架，并了解其工作原理，如jQuery、Angular、Ext等\n5.了解各种开发工具、开发流程，并在工作中加以利用\n\n优先条件：\n1.了解HTML5/CSS3，并在工作中实际运用过，掌握一些常见库的使用方法，如zepto、JQmobile等\n2.了解后台开发语言，如Java、PHP等",
          "title": "智能社招聘\n                        前端开发讲师/工程师【Java...",
          "company": "智能社\n                                                    \n                    拉勾未认证企业",
          "scale": "规模 50-150人",
          "source": "拉钩"
        },
        {
          "salary": "8k-16k",
          "advance": "职位诱惑 : 五险一金、假期福利、期权、自由工作氛围",
          "describe": "职位描述\n        精通原生javascript、深入理解oop编程思想与js原型链和类库的实现原理、能熟练使用js操作mongoDB进行增删查改、熟悉各种网络协议：http/tcp/ip等、熟练使用express、对异步编程模型有深入理解，了解promis范式、精通html(5)/css(3),对浏览器适配与优化有独到见解、至少熟练使用一种前端mvvm框架（如angularjs、vuejs）",
          "title": "博华康生研发部招聘\n                        JavaScript",
          "company": "博华康生\n                                                    \n                    拉勾未认证企业",
          "scale": "规模 150-500人",
          "source": "拉钩"
        },
        {
          "salary": "10k-20k",
          "advance": "职位诱惑 : 五险一金，弹性工作制，晋升空间大",
          "describe": "职位描述\n        岗位职责：1、熟练掌握JavaScript，并有实际应用开发经验，2、掌握AJAX相关技术,熟悉jQuery等开源框架中的一种或多种；3、有良好的文档书写及编码习惯,有自己实现的JsFramework经验和控件开发经验者优先考虑；4、一年以上前端开发经验，熟练掌握DIV+CSS、XHTML等web标准化设计，有UI交互设计经验者优先考虑；5、具有良好的团队合作精神，善于沟通交流；6、勇于挑战，能承受一定工作压力；富有责任心，热情，积极向上\n任职要求：1、一年以上工作经验；2、精通各种Web前端技术，包括XHTML/XML/CSS/Javascript等；3、深刻理解Web标准，对可用性、可访问性等相关知识有实际的了解和实践经验；4、熟悉Javascript、熟悉jQuery者优先；5、良好的编码习惯、沟通协作能力和学习能力；6、能够根据需求，分析并给出最优的前端技术解决方案。",
          "title": "胜联信息技术研发部招聘\n                        JavaScript",
          "company": "胜联信息\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人",
          "source": "拉钩"
        },
        {
          "salary": "7k-14k",
          "advance": "职位诱惑 : 发展前景广阔，待遇优厚。",
          "describe": "职位描述\n        任职资格： 1、学历要求： 全日制统招本科及以上学历； 2、工作经验： 1年以上开发实际工作经验； 3、能力要求：\n熟悉Java开发,熟悉IntelliJ?IDEA等主流IDE工具； 熟悉html5,熟练使用bootstrap,jquery,echarts等前端框架； 了解ant,maven,git,ci等源码管理工具； 熟悉Windows(CMD)/Linux(sh)下常用命令脚本； 熟悉oracle,mysql,pgsql等主流关系型数据库； 了解CouchBase,Memcache等内存数据库；\n4、素质要求： 工作踏实，态度积极，能够承受工作压力，能适应严格项目管理； 责任心强，正直诚实，值得信赖。",
          "title": "格瑞利招聘\n                        JavaScript",
          "company": "格瑞利\n                                                    \n                    拉勾未认证企业",
          "scale": "规模 15-50人",
          "source": "拉钩"
        },
        {
          "salary": "7k-13k",
          "advance": "职位诱惑 : 项目丰富，发展好，老板nice",
          "describe": "职位描述\n        负责智慧城市相关业务系统PC端和移动端系统的前端设计与开发工作。\n\n岗位描述：\n1) 系统原型与用户UI设计；\n2) Web前端代码编写与调试；\n3) Web系统前后台交互代码编写与调试。\n\n岗位要求：\n1) 计算机相关专业，大学本科及以上学历，1-5年软件开发经验；\n2) 精通Html、CSS、Javascript等前端开发技术，熟悉JQuery/EasyUI/ExtJs等前端开发框架，具有丰富的前端开发经验；\n3) 熟悉Ajax、Xml、Json等网络通信技术和数据交换格式；\n4) 熟悉W3C标准，能够熟练解决程序与不同浏览器间的兼容问题；\n5) 具备一定的J2EE技术基础和项目开发经验，可以独立完成前后台交互代码的编写与调试。\n优先条件：\n6) 熟练使用DreamWeaver/FireWorks/Photoshop等设计、开发工具者优先；\n7) 熟悉Android开发技术，具有移动端开发经验者优先。",
          "title": "联创世界招聘\n                        JavaScript",
          "company": "联创世界\n                                                    \n                    拉勾未认证企业",
          "scale": "规模 50-150人",
          "source": "拉钩"
        },
        {
          "salary": "8k-9k",
          "advance": "职位诱惑 : 薪资可根据个人能力面议，发展平台很好",
          "describe": "职位描述\n        1、精通Javascript，熟悉React/AngularJS/Vue等主流框架；\n2、理解并掌握JavaScript语言核心技术DOM、BOM、Ajax、JSON等，对javascript框架应用（如jQuery/d3/Ext等）有一定的经验，掌握面向对象编程思想，具备高效的手写和修改script脚本代码的能力；\n3、熟悉后端Node.js者优先；\n4、熟悉html5，熟悉Single Page Application Model的其中一种类库，例如AngularJS、Durandal等；\n任职资格：\n1、大专以上学历，计算机相关专业；2年以上Web前端开发经验；\n2、熟练应用JQuery前端框架;\n3、精通web前端技术，包括HTML、XML、CSS、Javascript、Ajax等开发技术；\n4、具备良好的学习能力、沟通能力、分析及解决问题能力，优秀的团队协作精神。",
          "title": "军朗广告技术部招聘\n                        JavaScript",
          "company": "军朗广告\n                                                    \n                    拉勾认证企业",
          "scale": "规模 15-50人",
          "source": "拉钩"
        },
        {
          "salary": "20k-40k",
          "advance": "职位诱惑 : 前沿技术，扁平管理，外企独资，全球视角",
          "describe": "职位描述\n        参与开发面向全球的基于云的互联网服务，面向各种平台，精易敏捷开发，开发人员全局参与，跨国界深度协作，为开发高手提供更广的技能和能力的纵深。\n职位要求\n??计算机或相关专业，学士或硕士学位 ??不少于二年的Web前端开发经验 ??丰富的HTML, CSS, ?JavaScript开发经验??丰富的JavaScript开发经验, 熟练使用流行的JavaScript框架，例如Dojo、jQuery等??熟悉开发高性能Web站点的相关技术??有responsive UI开发经验、理解并掌握相关最佳实践者优先??具有Web服务端开发经验者优先，比如LAMP, Ruby on Rails, ASP.net, JEE或Node.js??良好的书面与口语沟通技能，良好的人际关系技能??创造性的解决问题能力，良好的判断能力??注重细节，良好的组织、分析与时间管理技能",
          "title": "Esri 研发中心北京研发中心招聘\n                        Web HTML JS",
          "company": "Esri 研发中心\n                                                    \n                    拉勾认证企业",
          "scale": "规模 2000人以上",
          "source": "拉钩"
        },
        {
          "salary": "10k-18k",
          "advance": "职位诱惑 : 团队融洽、股票期权、快速晋升、地铁周边",
          "describe": "职位描述\n        智能社，渴望有梦想的人与我们同行\n\n职位描述：\n1.负责前端开发课程的教学工作\n2.参与前端页面开发的项目工作\n\n职位要求：\n1.精通JavaScript语言，独立快速完成常见功能的开发，兼容各主流浏览器，并熟悉兼容问题的解决方案\n2.熟悉HTML/CSS，可以独立完成常见页面的布局工作\n3.拥有3年以上前端开发经验，至少1年的JavaScript开发经验，参与过大型项目的开发\n4.熟悉各种主流开发框架，并了解其工作原理，如jQuery、Angular、Ext等\n5.了解各种开发工具、开发流程，并在工作中加以利用\n\n优先条件：\n1.了解HTML5/CSS3，并在工作中实际运用过，掌握一些常见库的使用方法，如zepto、JQmobile等\n2.了解后台开发语言，如Java、PHP等",
          "title": "智能社招聘\n                        前端开发讲师/工程师【Java...",
          "company": "智能社\n                                                    \n                    拉勾未认证企业",
          "scale": "规模 50-150人",
          "source": "拉钩"
        },
        {
          "salary": "5000-8000元/月",
          "advance": "5000-8000元/月\n        五险一金\n        晋升空间大\n        带薪年假\n        年终多薪\n        员工持股\n        内部培训",
          "describe": "岗位职责\n    \n        \n            \n任职资格：\n1.应往届理工科相关专业（如计算机、机械、电子信息、通信、环境园林、土建等）；\n2.应届生有无经验均可，有经验者经考核合格直接上岗，无经验且符合条件者可申请实训后上岗，入职转正薪资5000~8000元；\n3.对IT/互联网行业不感兴趣者，请勿投简历(面试时请携带学历证书等相关证件)\n\n岗位职责：\n1、公司有完善的新人培训体系，新人在项目经理带领下掌握PHP开发语言、Think php、Linux、Mysql、JavaScript及HTML5等；\n2、由项目经理带领完成大型网站架构等项目；\n\n待遇：\n1、试用期1-3个月,转正后享有平均月薪范围5000-8000元；\n2、五险一金,年底双薪,超长带薪年假,公司组织聚餐、KTV、烧烤、季度旅游等；\n3、公司有广阔晋升空间，技术工程师-项目组长-项目/产品经理-技术总监；\n\n工作时间:09：00至17:00(双休)            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS开发工程师实习生\n    全职",
          "company": "北京优才创智科技有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "5000-8000元/月",
          "advance": "5000-8000元/月\n        五险一金\n        带薪年假\n        年终多薪\n        期权激励\n        晋升空间大\n        内部培训",
          "describe": "岗位职责\n    \n        \n            \n任职资格：\n1.应往届理工科相关专业，其他专业优秀毕业生均可；\n2.应届生有无经验均可，有经验者经考核合格直接上岗，无经验且符合条件者可申请实训后上岗，入职转正薪资5000~8000元；\n3.对IT/互联网行业不感兴趣者，请勿投简历(面试时请携带学历证书等相关证件)\n\n岗位职责：\n1、公司有完善的新人培训体系，新人在项目经理带领下掌握Linux、Mysql、JavaScript及HTML5等；\n2、由项目经理带领完成大型网站架构等项目；\n\n待遇：\n1、试用期1-3个月,转正后享有平均月薪范围5000-8000元；\n2、五险一金,年底双薪,超长带薪年假,公司组织聚餐、KTV、烧烤、季度旅游等；\n3、公司有广阔晋升空间，技术工程师-项目组长-项目/产品经理-技术总监；\n\n工作时间:\n09：00至17:00(双休)            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS开发工程师\n    全职",
          "company": "北京优才创智科技有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "5000-8000元/月",
          "advance": "5000-8000元/月\n        五险一金\n        带薪年假\n        年终多薪\n        期权激励\n        晋升空间大\n        内部培训",
          "describe": "岗位职责\n    \n        \n            \n任职资格：\n1.应往届理工科相关专业，其他专业优秀毕业生均可；\n2.应届生有无经验均可，有经验者经考核合格直接上岗，无经验且符合条件者可申请实训后上岗，入职转正薪资5000~8000元；\n3.对IT/互联网行业不感兴趣者，请勿投简历(面试时请携带学历证书等相关证件)\n\n岗位职责：\n1、公司有完善的新人培训体系，新人在项目经理带领下掌握Linux、Mysql、JavaScript及HTML5等；\n2、由项目经理带领完成大型网站架构等项目；\n\n待遇：\n1、试用期1-3个月,转正后享有平均月薪范围5000-8000元；\n2、五险一金,年底双薪,超长带薪年假,公司组织聚餐、KTV、烧烤、季度旅游等；\n3、公司有广阔晋升空间，技术工程师-项目组长-项目/产品经理-技术总监；\n\n工作时间:\n09：00至17:00(双休)            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS开发工程师实习\n    全职",
          "company": "北京优才创智科技有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "5000-8000元/月",
          "advance": "5000-8000元/月\n        五险一金\n        年终多薪\n        绩效奖金多\n        晋升空间大\n        公司前景好",
          "describe": "岗位职责\n    \n        \n            \n任职要求：1.大专及以上学历，应往届均可，熟悉JavaScript脚本,会cocos2d-js优先2.应届生有无经验均可，有经验者经考核合格直接上岗，无经验且符合条件者可申请实训后上岗，入职转正薪资5000~8000元；4.具备良好的团队合作精神、较好的沟通能力、高度的责任感            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "js开发工程师\n    全职",
          "company": "北京优才创智科技有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "10000元以上/月",
          "advance": "10000元以上/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：\n1、精通HTML DOM对象的Javascript编程，熟悉对象化Javascript编程；\n2、熟悉HTML、CSS、JavaScript、XML等前台相关技术；\n3、熟悉HTTP协议及W3C相关互联网规范,了解不同浏览器之间的差异；\n4、有使用JS框架经验，了解不同浏览器之间的差异，写出的代码具有良好的兼容性；\n5、熟练阅读英文技术文档；\n6、有解决问题、钻研新技术的兴趣和能力，善于交流和表达。\n\n任职要求：\n1、有NodeJS、AngularJS、ReactJS开发经验者优先\n2、有Web端作品及前端经验者优先\n3、有服务端开发经验者优先\n4、有大型网站开发经验者优先\n5、211/985院校毕业者优先\n\n工作地址：\n北京市朝阳区光华东里8号院中海广场26层            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JavaScript工程师\n    全职",
          "company": "北京朱李叶健康科技有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "8000元以上/月",
          "advance": "8000元以上/月\n        五险一金\n        带薪年假\n        年终多薪\n        晋升空间大\n        期权激励\n        员工持股",
          "describe": "岗位职责\n    \n        \n            \n工作职责：能够根据需求，完成系统软件用户交互界面的页面规划及功能实现任职资格：1.计算机及设计相关专业；2. 熟悉div+css架构，并对各浏览器的不同处理方式有了解，熟悉mysql数据库开发；3.能使用一种常见js开发框架（如prototype、jQuery等）并能理解 AJAX 运作机制；4.有JS(Javascript)页面开发经验，有相关管理经验者，优先录取；；5.有较强的解决实际问题的能力及快速学习能力；6.富有激情，善于沟通和团队合作；            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS(Javascript)交互系统开发工程师\n    全职",
          "company": "上海语天信息技术有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：\n1、负责规划和讲授前端开发（HTML5）的课程；\n2、负责实习实训、毕业设计等项目的教学工作；\n3、制定教学计划、各类软件实训方案。\n\n任职资格：\n1、本科学历以上，计算机相关专业，有3年以上前端开发工作经验；\n2、精通JavaScript，能够熟练掌握一种常见JS框架，如jQuery，YUI，ExtJS等；\n3、掌握良好的前端技能，包括XHTML/XML/CSS/JavaScript，了解Web标准化、性能优化方法，了解可用性、可访问性和安全性；\n4、有Web后端脚本的语言（如Java/PHP/C#/C++/Python）开发经验者优先；\n5、以上技术熟练掌握部分者可以应征，公司提供相关岗前培训；\n6、热爱教育事业，细心，能主动与学生沟通，关心学生，并督促学生认真学习；\n7、具备较强的责任心和良好的沟通表达能力、团队合作意识；\n8、自信心强、有创新意识和激情，具备自主学习能力，愿意以培养Web前端研发人才为己任者优先考虑。\n【说明：工作地点可从以下城市选择（北京、上海、深圳、广州、大连、武汉、郑州、成都、西安、杭州、青岛）】\"            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JavaScript讲师\n    全职",
          "company": "北京千锋互联科技有限公司",
          "scale": "规模：500 - 999人",
          "source": "大街"
        },
        {
          "salary": "8000-15000元/月",
          "advance": "8000-15000元/月\n        五险一金\n        带薪年假\n        绩效奖金多\n        节假日津贴\n        弹性工作制\n        免费体检\n        定期旅游",
          "describe": "岗位职责\n    \n        \n            \n要求:\n1. 精通Javascript编程\n2. 熟悉CSS、html5等Web技术；\n3. 研究生、优秀高校、有UI技术或JavaEE经验、英语优异、可出差，均优先考虑\n4. 勤奋好学, 有责任心，乐于分享和交流\n\n职责:\n1. TWaver UI软件产品核心开发与维护\n2. 客户技术支持\n3. 二次开发、定制与客户培训            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JavaScript软件工程师\n    全职",
          "company": "赛瓦软件（上海）有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "4000-8000元/月",
          "advance": "4000-8000元/月\n        弹性工作制\n        优秀团队\n        办公环境优美气氛好\n        公司前景好\n        五险一金\n        带薪年假\n        免费体检",
          "describe": "岗位职责\n    \n        \n            \n希望你： 1. 熟练运用HTML、CSS、JavaScript和Ajax、JQuery、Bootstrap等web开发技术； 2. 理解W3C标准（HTML5、CSS3），对表现与数据分离，web语义化等有深刻理解； 3. 能够根据设计实现自适应页面，能轻松处理各种浏览器兼容问题； 4. 有网页重构及前端页面性能优化经验者优先； 5. 最最最最重要的，你是高团队协作性选手！ 备注：简历请付你认为最能体现你技术能力的作品地址            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "HTML/CSS/JavaScript前端工程师\n    全职",
          "company": "便捷社保网",
          "scale": "规模：50 - 99人",
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n岗位要求：\n1、3年以上html5开发经验\n2、精通Jquery、AngularJS等主流框架，熟练手写原声js代码，精通前台调试工具，熟悉js性能优化\n3、至少精通bootstrap,dojo等其中之一的前段布局框架 ，熟悉前端mvc框架\n4、熟悉所有常用的浏览器、能有效地解决浏览器兼容问题以及性能问题\n5、熟悉http协议并能够熟练使用websocket进行前端异步通信框架的搭建。\n6、熟悉java服务器端语言优先            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JavaScript高级前端开发（H5）\n    全职",
          "company": "上海华腾软件系统有限公司",
          "scale": "规模：1000人以上",
          "source": "大街"
        },
        {
          "salary": "3000-6000元/月",
          "advance": "3000-6000元/月\n        五险一金\n        带薪年假",
          "describe": "岗位职责\n    \n        \n            \n职位要求： \n1. 1年以上JavaScript开发经验； \n2. 熟悉HTML/XHTML、CSS、JavaScript、AJAX、JSON、XML等技术； \n3. 掌握Jquery框架，熟悉对象化Javascript编程； \n4. 有良好的OOP思想，有良好的编码习惯； \n5. 具有优化JavaScript性能的能力； \n7. 工作踏实认真、仔细、责任心强； \n8. 具备良好的学习能力、自我管理能力、热情、敬业； \n9. 具备良好的交流能力及团队协作精神。\n10.了解GIS者优先。 \n\n达到以下岗位任职要求： ? ? ? \n1.学历： ? 大学本科或以上 \n2.工作经验：一年及以上相关工作经验\n3.专业：计算机或相关专业            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "javascript前端开发工程师\n    全职",
          "company": "北京思行伟业数码科技有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "15000-30000元/月",
          "advance": "15000-30000元/月\n        五险一金\n        晋升空间大\n        办公环境优美气氛好\n        内部培训\n        优秀团队\n        试用期全薪\n        打车报销\n        定期团建",
          "describe": "岗位职责\n    \n        \n            \n职位描述：\n\n这是一项很有挑战的工作。\n这项工作的主要内容是wilddog javascript SDK的新功能开发，bug修复和周边lib库的开发工作。\nwilddog javascript SDK功能强大，逻辑复杂，对性能又有较高的要求，所以开发者必须具有良好的代码功底，算法与数据结构功底，和强大的逻辑思维能力。\n如果你觉得自己是一个优秀的JavaScript工程师，这个职位正是为了让你发挥自己的才能而设立的。\n如果你还做过JavaScript开源项目，懂得自动化测试和持续集成，JS模块化，那就更合适了！\n\n \n任职要求：\n代码功底深厚，能写出干净的面向对象的javascript代码。\n对于编程充满激情，逻辑思维能力强            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "高级JavaScript工程师\n    全职",
          "company": "野狗科技（北京）有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "10000元以上/月",
          "advance": "10000元以上/月\n        五险一金\n        带薪年假\n        公司前景好\n        办公环境优美气氛好\n        优秀团队\n        试用期全薪\n        话费补助\n        免费体检\n        免费班车\n        内部培训",
          "describe": "岗位职责\n    \n        \n            \nDescription:\nThis person will work as part of a China-based HTML5 web application development team in cooperation with teams in the United States. Design, develop, and debug software for new products/components in accordance with designated development practices and timelines. You will perform software development activities required to implement SAS next generation HTML5 products.\n\nResponsibilities:\n· Design, implement, and debug SAS web application products in HTML5.\n· Perform programming tasks including design, coding, unit-testing, debugging, and documentation.\n· Communicate and interact with foreign engineers on technical, design, documentation and support issues.\n· Analyze and inspect code written by other developers to identify potential problems.\n· Update relevant documentation as necessary. Document best practices where applicable.\n· Assist in various phases of software development life-cycle.\nRequirements:\n· Bachelors (or above) degree in Computer Science or related quantitative field.\n· Strong knowledge in JavaScript, HTML5, and proficiency in one of more of the following OO languages: Java/C#/C++\n· 2+ years of hands on development experience in web applications or common components\n· 3+ years of software development/programming experience\n· Have fast learning and problem-solving competence\n· Good interpersonal, writing, and problem-solving skills\n· Good written/reading in English\n\nPreferences:\n· Good knowledge of HTML5 and W3C standard\n· Excellent spoken and listening capability in English\n工作地址：\n北京市朝阳区望京东路1号摩托罗拉大厦            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "Javascript / HTML5 Development Engineer\n    全职",
          "company": "赛仕软件研究开发（北京）有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "4000-8000元/月",
          "advance": "4000-8000元/月\n        五险一金\n        带薪年假\n        期权激励\n        晋升空间大\n        绩效奖金多\n        员工持股",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、优化现有的技术构架（MongoDB、PostgreSQL、Node.js）2、负责公司服务器端应用的开发工作，包括网站、数据后台、APP后台等3、根据业务规划参与制定相应地技术规划，推动系统演进任职要求：1、有1年以上的Node.js服务器端技术的开发经历2、精通JavaScript，对闭包、事件和异步有独到的见解3、熟悉数据库相关技术，如MongoDB、PostgreSQL、MySQL等，熟悉开发（即写查询）4、熟悉Restful，了解HTTP缓存、优化5、熟悉Node.js标准库的使用，掌握对应技术的设计模式以及Express、async等主流框架，能独立完成相应的扩展开发6、经历过一个以上的项目开发7、善于沟通，良好的团队合作精神和高度责任感，工作细致，能够承受压力下工作并保证工作质量8、能够无障碍查阅英文资料加分项：1、游戏开发经验2、有成熟的个人作品3、提供个人的github账号4、熟练掌握Web前端技术，有React.js、jQuery等项目开发经验            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "Node.js\n    全职",
          "company": "广州小馒头计算机系统有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "15000元以上/月",
          "advance": "15000元以上/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：\n负责服务端通信框架的搭建和完善（客户端基于MQTT协议和WebRTC技术）\n\n职位要求：\n1.熟悉一门或以上服务器开发语言(python, java, php等), 一年以上的 Node.js 开发工作经验\n2.对服务端框架的机制，框架的设计模式，数据库的优化，服务器的负载均衡设计，并发时服务器的优化，服务器的压力测试以及功能模块的单元测试有了解的优先；\n3.良好的学习能力和沟通能力，编码稳健严谨，精益求精，对问题有探究精神。\n\n工作地址：\n上海市浦东新区耀华支路39弄9号 泛微软件大厦            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "Node.JS开发\n    全职",
          "company": "上海泛微网络科技股份有限公司",
          "scale": "规模：1000人以上",
          "source": "大街"
        },
        {
          "salary": "200元/月",
          "advance": "200元/月\n        五险一金\n        带薪年假\n        年终多薪\n        晋升空间大\n        牛人带",
          "describe": "实习天数\n    \n        \n        5 天 / 周",
          "title": "Node.js\n    实习",
          "company": "北京百索科技有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "15000元以上/月",
          "advance": "15000元以上/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：\n1、负责公司两大平台智课网和极智批改网各模块的深度开发、功能优化、BUG修复及日常维护；\n2、基础服务架构、开发、维护、优化。\n\n任职要求：\n1、计算机相关专业，本科及以上学历，两年以上互联网行业开发工作经验；\n2、熟悉NodeJS后端开发；\n3、熟悉整套后端开发环境、数据库、缓存；\n4、熟悉常用的数据结构和算法，有良好的编程习惯，能熟练使用git；\n5、加分项：全栈开发、有github/blog，参加过ACM等竞赛。\n\n工作地址\n北京市海淀区交大知行大厦2层            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "node.js\n    全职",
          "company": "北京创新伙伴教育科技有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "15000元以上/月",
          "advance": "15000元以上/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：\n1、负责公司两大平台智课网和极智批改网各模块的深度开发、功能优化、BUG修复及日常维护；\n2、基础服务架构、开发、维护、优化。\n\n任职要求：\n1、计算机相关专业，本科及以上学历，两年以上互联网行业开发工作经验；\n2、熟悉NodeJS后端开发；\n3、熟悉整套后端开发环境、数据库、缓存；\n4、熟悉常用的数据结构和算法，有良好的编程习惯，能熟练使用git；\n5、加分项：全栈开发、有github/blog，参加过ACM等竞赛。\n工作地址：\n北京市海淀区交大知行大厦2层            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "node.js开发工程师\n    全职",
          "company": "北京创新伙伴教育科技有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "150元/天",
          "advance": "150元/天\n        晋升空间大",
          "describe": "实习天数\n    \n        \n        4 天 / 周",
          "title": "前端开发工程师JS\n    实习",
          "company": "北京百家互联科技有限公司武汉分公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n工作内容：\n1、负责平台部门相关项目后台逻辑，数据库操作等相关工作；\n2、遵守编程规范和开发流程，编写易读、易维护、高质量的代码。\n3、负责对工作的进度安排和汇报\n4、及时提出建议和具备可行性的想法\n5、学习新技术，使用新技术\n6、配合其他部门工作\n\n职位要求：\n1.计算机或相关专业，专科以上学历，1-5年项目开发经验；\n2.精通PHP或C#（asp.net）开发语言，擅长Node.js源生代码者优先；\n3.对新知识有一定的学习能力、钻研精神；\n4.熟练掌握后端开发工具，熟练掌握相关前后台技术者优先；\n5.有独立开发网站商城平台者优先;\n6.要求二年以上，有系统分析，设计，数据库设计的经验；\n7.有高并发，高流量互联网项目经验优先\n\n工作地址：\n北京市朝阳区东三环弘燕路10号德元九和大厦908室            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "后台开发(手写node.js优先)\n    全职",
          "company": "大连文森特软件科技有限公司北京分公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：岗位职责描述:1.根据产品需求，分析并给出最优的页面前端结构解决方案；2.跟踪研究最新前端技术，参与部门前端框架和技术规范的开发制定； 任职要求：1.电子计算机专业，至少一年以上互联网工作经验；2.有良好的JavaScript 编码基 础和开发经验，了解原型继承、闭包、函数式、异步编程等JS 基础 3.有angularjs实际开发经验。4.熟悉Html5/CSS3/bootstrap。5.熟悉前端依赖管理，构建，发布流程以及相关的工具6.熟悉一种web框架，如Angular.js, React+Flux, Backbone.js, Ember.js等7.有良好的产品意识和团队合作意识，热爱学习，尽职尽责。工作地址：北京市海淀区上地东路1号盈创动力园区A座北厅2区702            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京立达智胜科技有限公司招聘web前端（angularjs javascript)\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、协助编写高品质原生JS代码，做到一个脚本兼容各种主流浏览器以及DTD；2、负责公司其他部门需要的前端技术支持； ? 3、前沿技术学习，技术创新，文档编撰。任职要求：1、了解W3C标准，精通javascript、ajax技术，精通css，最好做过web后台程序，了解前后台交互原理；2、在页面加载流程、加载速度优化、特效及动画代码编写、浏览器兼容、浏览器工作原理、页面控件封装、js脚本异步加载、浏览器缓存机制，304原理等其中一方面有特长；3、熟悉V8源码、使用Node.js做过实际项目、熟悉一种或多种其他编程语言、有学习和关注HTML5CSS3的可优先考虑； ? ?月薪：税前10-20K工作地址：徐汇区康健路135号康健大楼A座6A            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "上海骏数信息技术有限公司招聘JavaScript工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "6000元/月",
          "advance": "6000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位要求：1. 计算机科学与技术或相关专业，本科及以上学历。2. 3年及以上JS前端开发经验，严谨的逻辑思维及良好的编程习惯。3. 熟悉JS脚本相关知识4. 熟练使用Git、WebStorm办公。5. 熟练使用AngularJS、Bootstrap、ionic 等框架。6. 至少会一门后台语言：php、java、C#、python。有意者可将简历发至wangjian2254@icloud.com工作地址：天津市华苑产业区（环外）绿色产业基地J座306            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "天津市海诺科技有限公司招聘Javascript 高级工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "2000元/月",
          "advance": "2000元/月",
          "describe": "岗位职责\n    \n        \n            \n精通HTML5，CSS ,Javascript ，jQuery有经验者有产品优先考虑！工作地址：广州海珠区革新路新民六街29号            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "广州宝瓶汇网络科技有限公司招聘javascript和 H5\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "15000元/月",
          "advance": "15000元/月",
          "describe": "岗位职责\n    \n        \n            \n职位描述：1.负责产品的前端 Web 用户交互实现 2.负责前端页面的统一 Javascript框架、公共组件架构 任职资格：1.精通 Javascript ，能用 Javascript 独立开发前端展现框架； 2.精通各种 Web 前端技术，包括 Xhtml/xml/json/div+css 样式控制，熟悉 W3C 标准以及相关语言工具 3.熟练使用 jquery框架并理解其原理，了解不同浏览器之间的 差异 4.熟悉Backbone，onering、angularjs经验优先 5.对于 Web 标准有深刻认识，并乐于钻研 web 新标准、新技术 6.思维逻辑性强，善于沟通，团队协作能力强 7.有高性能网站开发经验者优先 8.有HTML5，PHP项目经验者优先公司坐标;北京海淀区西北旺东路10号院东区7号楼博彦科技大厦北区4-6层工作地址：海淀区西北旺东路10号院东区7号楼博彦科技大厦北区4-6层查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京壹号车科技有限公司招聘Javascript前端开发\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、负责开发基于浏览器的三维模型展示软件2、负责对开发的软件进行测试并编写自动化测试脚本3、负责系统性能监控和系统优化 任职要求：1、熟练掌握JavaScript2、熟悉WebGL或DirectX/OpenGL， 如Three.js、Babylone.js, 或Unity等游戏引擎，熟悉Shader编程者优先3、熟悉计算机图形学4、熟悉敏捷开发流程5、学习能力强6、掌握任意一门web开发语言7、熟悉基于git的团队协作流程 加分项：1、Comfortable with communication in English.2、熟悉node.js, Express.js, Ruby on rails, Meteor等任意一个框架者优先。3、熟悉GLSL或HLSL 优先工作地址：北京市海淀区知春路106号太平洋国际大厦7层            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北斗羲和科技发展(北京)有限公司招聘Javascript/WebGL开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n岗位职责:? 设计和开发数据分析前端平台? 敏捷开发，快速实现各种原型实现 职位要求：? 算法和数据结构基础? HTML 5 canvas, SVG 和 CSS3的相关经验? UX/UI设计经验? 至少熟悉一种后端语言，如Java、NodeJs、Python等? 熟悉一些常见的前端框架，例如SpringMVC/ SSH/ MyIbatis or AngularJS/ knockoutJS/dojoToolkit/requireJS/ backboneJS工作地址：广东省深圳市福田区深南大道1006号深圳国际创新中心A栋21楼查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "深圳市普路通供应链管理股份有限公司招聘前端Javascript开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "6000元/月",
          "advance": "6000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1.熟悉JavaScript开发、JS面向对象的开发方式；2.掌握常用的HTML,CSS；3.能够在不应用框架的前提下写JAVASCRIPT脚本；4.了解AJAX工作原理，熟练掌握异步传输；5.熟悉正则表达式，能根据需求，对网页输入框字符进行限制；6.掌握浏览器兼容性，最少了解两种：IE和FIREFOX；7.思路清晰，具有良好的沟通能力、团队配合精神,对新技术敏感。 任职要求：1.精通Javascript编程，熟悉对象化Javascript编程，了解浏览器之间的差异，写出的代码具有良好的的兼容性；2.具有良好的JS，bug定位和修复能力；3.熟悉使用Ajax与Json技术应用；4.习惯把常用功能整理成框架；5.良好的代码习惯，要求结构清晰，命名规范，逻辑性强，代码冗余率低。工作地址：山东省东营市黄河路660号仁恒名邸            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "汉威石油技术开发有限公司招聘Javascript\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "6000元/月",
          "advance": "6000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、负责公司HTML5动画开发；2、协助Web设计师进行Web界面UI的设计工作；3、承担Web动画的设计开发，按时按质按量的完成工作；任职要求：1、计算机或相关专业专科及以上学历，2年以上JavaScript和HTML5相关开发经验；2、精通HTML5、CSS3、JavaScript等Web前端开发技术，熟练使用jQuery界面插件；3、了解常用HTML5 Css3 JavaScript框架；4、较强的学习能力，有良好的团队精神，善于与人沟通；5、有Flash程序开发经验者优先录取。工作地址：南京市雨花区软件大道106号蓝筹谷大厦（雨花软件园）1栋5F/6F/8F,2栋1-2F查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "江苏华博创意产业有限公司招聘JavaScript HTML5工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "8000元/月",
          "advance": "8000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1. 参与无线产品和项目研发，配合后台开发人员实现产品前端界面效果与功能；2. 负责无线产品应用的Javascript程序模块开发，通用类库、框架编写，解决Javascript性能与兼容性问题；3. 与设计师、产品工程师紧密工作在一起，实现产品UI和交互方面的开发需求，确保产品具有优质的用户使用体验；4.验证和修正测试中发现的问题；5.学习和研究新技术以满足产品的需求；6.配合产品应用开发等其他部门，提供相关技术支持.任职要求：1. 大专以上学历，2年以上Javascript开发经验；有扎实的Javascript的语言基础；2. 熟悉JavaScript开发、JS面向对象的开发方式，能熟练使用常用框架如jQuery、seajs、zepto等；3.能够精简、优化或修改已有JS框架，并能仿照编写简单的JS框架；4.掌握JavaScript语言核心技术DOM、BOM、Ajax、JSON等；5. 熟悉JavaScript浏览器兼容性解决方案，能够解决多浏览器版本兼容问题；6.精通HTML+CSS+Javascript实现动画的技术；7.有旧项目重构，性能优化项目经验者优先，熟悉Node.js、React等优先。工作地址：北京市海淀区高梁桥斜街44号查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京交通大学出版社招聘JavaScript\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "4000元/月",
          "advance": "4000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、负责Web服务端、内部系统、移动应用服务端等的架构设计与研发，撰写并整理技术文档；2、负责优化系统性能，提高服务质量。任职要求：1、熟悉Javascript，对闭包、原型链、词法作用域、作用域链、this等有足够理解；2、熟悉Node.js，熟悉异步编程、熟练使用异步流程控制库；3、有良好的算法及数据结构基础；4、熟练使用Express/Koa等常用web框架，理解Web框架工作原理；5、对Mysql/Mongodb/Redis等数据库有实际使用、调优经验；6、熟悉Linux，熟悉常用的Shell命令，会使用pm2管理服务；7、良好的沟通、协调能力，有高度责任感和敬业精神，具有团队合作精神。优势条件：1、具备Web App商城开发经验优先。 2 ? 中级工程师，有两三年经验，看得懂apicloud!工作地址：广州海珠区革新路新民六街29号            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "广州宝瓶汇网络科技有限公司招聘js工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、参与规划、构建公司的智能硬件云平台；2、负责公司产品的持续维护改进。任职要求：1、熟悉Javascript；2、熟悉NodeJS标准库；3、了解HTTP、WebSocket等网络协议；4、熟悉MongoDB等相关数据库；5、熟悉git；6、快速学习的能力，能熟练的阅读英文资料；7、具有较强的口头和文字表达能力和优秀的组织协调能力，具备较强的责任感及进取精神，能率领团队完成既定任务，能承受较大工作压力。工作地址：重庆市渝北区黄山大道中段55号附2号麒麟D座501.504查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "重庆甲虫网络科技有限公司招聘Javascript程序员（后端NodeJS）\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "6000元/月",
          "advance": "6000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1.计算机相关专业本科以上学历。实习生、应届毕业生、社招人员均可；2.熟练掌握至少一门面向对象编程语言。熟练掌握Java语言者优先录取；3.熟练使用JavaScript语言。熟悉Html、CSS语言。具备H5编程能力；4.了解Linux系统使用，掌握基本操作命令；5.了解关系型数据库的使用，掌握数据库的基本使用原理；6.具备创业激情、热爱编程技术。拥有责任心及学习热情。任职要求：1.熟练掌握Spring、Struts、Hibernate等MVC开发框架；2.具备：Hadoop、Spark、Solr、ElasticSearch、Logstash等任意大数据相关开源项目的使用经验；3.熟练掌握Oracle、MySql等关系型数据库的使用。可熟练使用Linux操作系统；4.了解Scrum项目管理方法，具备良好的沟通协调能力，具备团结协作精神。待遇：1.应届毕业生月薪7000元起，视个人能力上不封顶。提供五险一金。项目奖金、年终奖另行核算给付；2.社招人员月薪9000元起，视个人能力上不封顶。提供五险一金。项目奖金、年终奖另行核算给付；3.外地人员入司后，一年以内提供免费住宿；4.入司新员工均配备超级笔记本电脑及超大显示器，提供一流的办公设备；5.骨干员工可享受公司期权激励政策。工作地址：北京市朝阳区清河营东路2号院3号楼1023室查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京云科凯创信息技术有限公司招聘Java开发工程师/JavaScript H5前端工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "4000元/月",
          "advance": "4000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、负责公司软件产品的开发，根据程序设计进行实际的代码编写工作，开发出真正能完成客户要求的程序。2、进行已开发代码的单元测试和集成测试；对测试出的问题及时修改；对测试人员在系统测试中发现的问题及时修改。任职要求：1、有过JavaScript或php相关软件开发经验（应届毕业生也可）；2、使用过sqlserver、mysql数据库3、具有良好的沟通能力；4、具有良好的框架概念，以及代码开发和单元测试规范性。薪酬：基本工资(3000~5000)+餐补+双休+五险，享受国家规定的法定假日。邮箱：hr@zhichen.com.cn工作地址：长春市高新技术开发区翡翠花溪紫金公寓A座查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京东方智辰科技开发有限公司长春办事处招聘JavaScript程序员(工作地长春)\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "4000元/月",
          "advance": "4000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位要求：(双休、五险一金）1. 计算机专业本科或以上学历2. 1年以上相关软件开发经验，有电子商务平台开发经验者优先3. 具备良好文档书写能力优先技术要求：1. 精通ASP.Net或MVC4、或 JavaScript CSS 或HTML5 HTML/XHTML ASP.Net php，有过3-5个相关项目经验优先2. 精通HTML/XHTML，JavaScript，CSS，JQuery熟悉HTML5者优先3. 熟悉WEB软件开发技术，能够进行WEB架构设计 ,熟悉Python或Linux技术更好4. 遵守公司的规章制度。（此岗位双休，纳缴五险一金，有旅游假及年假，节日福利）我们的福利待遇：1、 双休 +奖金+下午茶+五险一金+年终奖金+生日福利+过节福利+外出旅游；2、过年、过节都有红包、礼金或者礼品哦！3、定期都有不同水果的下午茶，总有你爱吃的水果！4、生日聚会、K歌、满足你的胃！5、每年都有不定期的省内外旅游活动！6、便利的工作地点，舒适的办公环境；7、简单的人际关系，开放、热烈、平等的工作氛围；8、有市场竞争力的薪资+奖金；9、保险保障：五险一金必须有；10、 广阔的发展、晋升空间，所有管理岗位均从内部优秀员工中提拔产生；11、 生日、端午节、中秋节均有礼品派送；12、 丰富的员工活动，每月有员工聚餐，外出旅游等；上班地点：武汉洪山区光谷工作地址：光谷中心花园C3-3001查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "武汉大拓科技有限公司招聘急聘后台开发（C#/php/JavaScript)双休+五险一金\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n工作地点在河南郑州。岗位要求：1.熟悉node.js；2.JavaScript基本功扎实，对闭包、事件和异步有独到的见解；3.熟悉Redis，MySQL等的一种或多种；4.熟悉Linux开发环境；5.至少熟悉一种后端开发语言：C/C++,C#,JAVA,php,javascript等；6.经历过一个以上的项目开发；7.良好的编码风格，有自主学习能力，良好的团队合作意识及积极的心态；8.热爱游戏。 加分项1.有游戏开发经验2.熟悉pomelo3.有个人作品 极度热爱游戏者优先考虑！薪资待遇7K-15K（税后）工作地点在河南郑州，欢迎大家加入河南游戏平台如有需要公司可提供住宿人事部招聘电话：0371-63337096工作地址：郑州市科学大道53号中原国家广告产业园3号楼14楼查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "郑州三生石科技有限公司招聘java工程师/java开发/java软件工程师/java程序员/javascript\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "8000元/月",
          "advance": "8000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1. Web前端网站产品设计/开发/维护 2. 应用新技术，设计开发极具用户体验的网站 3. 同后端工程师紧密合作，高效地完成开发工作 4. 分析、优化网站前端性能，为用户提供更好的体验任职要求：1、熟练掌握 html、css，可编写标准化的html页面；2、掌握 javascript，熟练使用jQuery； 3、熟悉 bootstrap等前端框架优先；4、了解PHP编程语言优先；5、良好的沟通能力和团队协作能力；6、善于学习，自我驱动，了解和学习业界新技术。工作地址：北京市海淀区紫竹院路116号嘉豪国际A603查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京人脉宝网络科技有限公司招聘JavaScript开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责1、负责数据产品的前端开发；2、有良好的技术钻研热情和高度的责任心，在数据产品开发中能带动和协调前后端团队工作；3、利用JavaScript/JQuery等技术进行页面动态交互特效设计；4、与网站后台开发人员配合完成数据交互工作。任职要求1、两年以上工作经验，本科及以上学历；2、熟悉html5、css3；3、熟悉http协议，熟悉与服务器端数据交互技术；熟悉至少一种流行的js框架，最好是jQuery或是YUI3；4、了解一种流行的服务端开发语言java,php,nodejs；5、精通javascript，精读过《javascript高级程序设计》或是《javascript权威指南》等高阶图书；6、熟悉常用的数据结构和算法；7、有一定的js团队合作开发经验；8、勤于思考，具有良好的分析和独立解决问题的能力。工作地址：北京市海淀区知春路7号致真大厦C座14层            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京东方金信科技有限公司招聘JavaScript开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1.负责公司相关互联网产品的前端网页设计,页面制作,从项目相关逻辑结构设计制作。2.根据公司的推广需求，与设计师和后台开发人员配合，独立高效高质的完成页面的设计和制作等实现工作。岗位要求：1.具有良好的团队精神及学习能力；2.精通JavaScript优先考虑。3.熟练掌握HTML/CSS前端开发技术，和跨浏览器、跨终端的开发；4.理解Web标准，对前端性能、可访问性、可维护性等相关知识有实际了解及实践经验；5.熟悉HTML5，前沿JS类库和MVC架构；6.有移动混编经验；7.了解相关动态语言并有项目经验及良好的逻辑分析能力，及沟通能力。工作地址：建外SOHO东区3号楼            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "广东东升信息技术有限公司招聘JavaScript开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、能够承担Web前端开发任务；2、利用HTML/CSS/JavaScript/jQuery/jQuery mobile等各种Web技术进行产品的界面开发；3、整体页面结构及样式层结构的设计、优化；4、制作标准优化的代码，并增加交互动态功能；5、进行丰富互联网的Web开发，专注于WEB前端技术开发与用户体验的持续改进；6、与后台应用开发配合持续的优化前端体验、页面响应速度和浏览器兼容性等。任职资格：1、专科及以上学历，1年以上WEB前端开发经验；优秀应届生也可考虑（包括研究生）2、熟悉DIV+CSS布局，熟悉Javascript， 熟悉Jquery框架，并且熟悉代码分析和代码调试。3、熟练使用各种 Web 前端技术,包括HTML/CSS/Javascript等，能快速处理主流浏览器的兼容问题。4、良好的职业素养，责任心强，具有良好的沟通交流技巧，团队协作能力。5、代码可读性和可维护性好；6、熟悉PHP、Java开发语言，理解后端架构，与后端工程师配合，为项目提供最优化的前端解决方案；7、有较强的书面表达能力和口头沟通能力；8、精通Photoshop切图。工作地址：杨浦区佳木斯路777号查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "上海众敏供应链管理有限公司招聘高级Javascript工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n工作地点:上海、大连岗位职责：1. 识别和管理与设计和后端之间的沟通和协作问题，提升前端团队的开发效率。2. 负责JavaScript和PHP代码框架的创建和维护。3. 提升WEB前端开发工程师的执行和开发效率，优化人员结构。任职资格：1. 计算机或相关专业，本科及以上学历，英语四级以上，能熟练阅读英文文档。2. 精通PHP, JavaScript，具备一定的框架开发能力和经验，能够深入理解WEB前台的MVC结构。3. 熟悉互联网应用的快速迭代开发流程。4. 经验要求：三年以上的互联网应用快速迭代开发经验，8. 其他要求：具备良好的前端架构分析能力与设计能力，有良好的语言表达和沟通能力，具有良好的团队合作精神和作风，乐于不断学习新技术。9. 英文读写听说流利。优先条件:1. 前端开发团队管理经验2. 有两种以上其他语言开发经验工作地址：大连市高新园区黄浦路701号查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "上海鸿影软件科技有限公司招聘JavaScript高级工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "8000元/月",
          "advance": "8000元/月",
          "describe": "岗位职责\n    \n        \n            \n前端工程师岗位要求：1、负责产品前端开发；2、负责产品易用性改进，狡猾体验改进，性能优化；岗位职责：1、计算机相关专业专科以上学历，一年以上Web前端工作经验；2、熟悉HTML/HTML5+CSS/CSS3+JS编程，熟悉各种前端调试工具，熟悉JS性能优化；3、熟悉jQuery等主流JS库，了解运行机制，具有实战经验；4、熟悉盒模型、常用布局以及浏览器和移动设备兼容性；5、有WebAPP项目经验者有限；6、有较强的学习能力及逻辑思维能力，具备良好的沟通能力和团队合作；工作地址：北京市朝阳区国贸建外SOHO东区B座703            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京市元甲律师事务所招聘JavaScript\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、负责讲授JavaScript相关课程；2、协助主管完成各类教学资料的编写；3、完成其他交办的工作。任职要求1、精通JavaScript语言，熟悉ECMAScript标准；2、具备较强的逻辑思维能力和数据结构与算法基础，熟悉常见的设计模式；3、拥有3年以上前端开发经验，至少2年的JavaScript开发经验，参与过大型项目的开发；4、熟悉各种主流开发框架，并了解其工作原理，如jQuery、Angular等；5、熟悉HTML/CSS，可以独立完成常见页面的布局工作，有过Bootstrap或ace使用经验；6、熟悉Sass/Less，熟练使用Git/SVN，熟练使用Gulp/Grunt。3、优先条件：1、了解HTML5/CSS3，并在工作中实际运用过，掌握一些常见库的使用方法，如zepto、iScroll与Swiper等；2、了解后端开发语言，NodeJS、PHP与Java等；3、编写过移动端的工具类库，或有原创的博文发布；4、有过讲师（或授课）经验。工作地址：北京市海淀区宝盛北里西区天丰利4层            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京扣丁在线科技有限公司招聘web前端讲师（JavaScript方向）\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1. 根据产品设计文档，利用HTML5相关技术开发跨平台的前端产品；2. 基于HTML5.0标准进行页面制作，编写可复用的用户界面组件；3. 优化和提高客户端代码的性能；4. 负责基于Android,iOS的移动Web应用开发，利用JS实现WebApp中的交互效果； 5. 参与软件的研发全过程，负责系统模块的设计、开发、产品化等工作，包括开发的相关文档 。任职要求：1、 计算机或相关专业专科以上学历，两年或以上Mobile Web App相关开发经验；2、精通HTML5、CSS3、JavaScript、canvas动画制作等Web前端开发技术，能手写符合W3C标准、兼容多种浏览器的前端页面代码；3、精通Ajax、DOM、XML、JSON等相关技术，能使用原生JS编程，精通面向对象，使用过至少一种js框架；4、熟悉移动端主流浏览器的适配，对Android与iOS等不同平台的html5页面适配充分了解；5、有AngularJS框架使用经验者优先。工作地址：福建省福州市六一中路28号佳盛广场C座908            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "福建斯达克信息科技有限公司招聘H5开发工程师、JavaScript\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "6000元/月",
          "advance": "6000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、负责公司软件产品的开发，根据程序设计进行实际的代码编写工作，开发出真正能完成客户要求的程序。2、进行已开发代码的单元测试和集成测试；对测试出的问题及时修改；对测试人员在系统测试中发现的问题及时修改。任职要求：1、具有2年以上JavaScript、php相关软件开发经验；2、熟悉前端页面设计，熟悉CSS、Ajax、JQuery、JavaScript等；3、熟悉sqlserver、mysql数据库的设计和开发；4、具有良好的沟通能力；5、具有良好的框架概念，以及代码开发和单元测试规范性；6、有过跨操作系统、跨浏览器开发经验者优先。薪酬：基本工资（6000~8000）+餐补+双休+五险，享受国家规定的法定假日。邮箱：hr@zhichen.com.cn工作地址：长春市高新技术开发区翡翠花溪紫金公寓A座查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京东方智辰科技开发有限公司长春办事处招聘高级JavaScript程序员（工作地长春）\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、负责网页web和苹果安卓app、WAP产品的前端UI与交互开发，确保在不同平台、设备、浏览器上均拥有良好的兼容性和优质的用户体验；2、使用HTML/CSS/Javascript/AJAX开发符合W3C标准的网站前端页面；3、需与设计人员，后台工程师配合完成系统前后端整合；4、负责web产品的测试与性能优化。任职资格：1、计算机相关专业；3年及以上前端开发工作经验；2、精通HTML/HTML5/CSS3/Javascript/页面模板等前端技术，熟悉W3C标准，能编写兼容多种浏览器的前端页面代码；3、熟悉主流移动web开发框架，并有过1年以上实际项目开发经验，比如Jquery，Jquery mobile，AngualrJS，bootstrap前端框架等；4、熟悉网页和移动端JS调试、JS性能优化；5、了解JS自动化测试框架，有JS自动化测试经验；6、熟悉后端至少一种语言，php, python或者node者优先；7、对浏览器兼容性问题有丰富经验。处理过移动web设备兼容性问题，能够通过使用的框架或者自编类库解决移动设备的显示层和业务层兼容性问题；8、具备良好的学习能力、沟通能力、分析及解决问题能力，优秀的团队协作精神。工作地址：北京市朝阳区四惠桥东南侧尚8设计+创意产业园D101-102查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京亿起联科技有限公司招聘前端开发工程师（JavaScript）\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "8000元/月",
          "advance": "8000元/月",
          "describe": "岗位职责\n    \n        \n            \n任职要求：1. 精通Javascript、Html、CSS；2. 掌握流行的前端开发框架，如JQuery、ExtJs、Angularjs等，能够独立完成通用类库、插件框架编写；3. 熟悉交互设计，对可用性，可访问性等用户体验知识有相当的了解和实践经验；4. 诚实、正直、客观，善于沟通，具有敬业精神，有团队意识工作地址：沈阳市浑南新区沈阳国际软件园 F8号楼查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "沈阳国际软件园产业发展有限公司招聘昂立信息-政企事业部-高级工程师（Javascript）\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "15000元/月",
          "advance": "15000元/月",
          "describe": "岗位职责\n    \n        \n            \n职位描述：有两年以上前端开发经验精通Javascript，了解React框架熟悉HTML5，CSS3，Git熟练使用浏览器调试工具对用户体验、交互操作流程、及用户需求有一定理解，对前端开发有浓厚兴趣，喜欢关注最新的前端技术； ?岗位职责： 负责公司最核心的C端App产品的Javascript开发 和产品经理和后端开发工程师密切沟通，不断迭代App产品加分项： 使用过React-Native 开源爱好者或喜欢业余时间做些有趣的小玩意儿 技术极客，有代码洁癖 英语良好，不用百度搜索技术问题工作地址：海淀区双清路3号中太大厦33025            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京昊恒天科技有限公司招聘JavaScript\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n1、扎实的java基础，两年以上前端网页与脚本开发经验。2、有独立完成复杂前端模块的设计与实现的经验。3、精通JavaScript、Ajax、DOM等前端技术、掌握面向对象编程思想。4、擅长Linux下的自动化部署5、熟悉或掌握一种常见JS框架（Jquery，ExtJS等)者优先。6、熟悉网络、虚拟化、集群等经验者优先。7、有强烈的上进心和求知欲，善于学习和运用新知识。工作地址：北京市海淀区中关村东路8号东升大厦9层902            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "联泰集群(北京)科技有限责任公司招聘JavaScript开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "4000元/月",
          "advance": "4000元/月",
          "describe": "岗位职责\n    \n        \n            \n注意, 该工作地点为天津注意, 该工作地点为天津注意, 该工作地点为天津岗位职责：根据要求开发课件内容.任职要求：1. 高中以上学历2. 有一定的编程基础. 3. 有一定的数学基础4. 思维清晰5. 沟通力强6. 抗压能力强可以安排周末面试有几何画板经验的 优先考虑会 java / javascript 编程的优先考虑工作地址：天津市南开区白堤路南开大学出版社查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京触学科技有限公司招聘课件开发制作 java javascript 天津工作\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、参与或负责公司产品前端开发。2、响应产品提出需求、协调并完成相应功能、特性的开发和简单测试。3、配合后台开发人员进行系统整合。任职要求：1、熟练掌握JavaScript、HTML 等Web应用前端开发技术。2、熟练掌握ajax,json等数据交互方式。3、有HTML5应用开发经验者优先。职位描述：参与webApp开发，开发内容90%以上是js，余下是一些简单的html以及css。我们使用的前段技术框架包括1、jQuery2、AngularJS3、Bootstrap4、Vue5、framework7如果你是前端牛人，来吧，高薪属于你。(15W-25W)牛人定义:写代码的同时，能做一些小组件，小公共模块，供其他不牛的人，不用学习就会使用，提高工作效率。我们提供体验非常良好的工作站1、双屏幕，或者21:9超宽屏。2、DXRACER人体工程学赛车椅。3、Perixx人体工程学外设。4、高速SSD，以及16G内存。没有无尽的加班，我们强制规定 PM 需要等到所有成员离开之后才可以离开。全天候畅通无阻的私有网络技术，让你直达世界的每一个角落。免费提供中、晚餐，拒绝外买，生活更健康。工作地址：广州市天河区天河北路725号东方之珠花园旭辉阁G座1703室查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "广州市拂晓网络科技有限公司招聘HTML5web前端JavaScript/js工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "8000元/月",
          "advance": "8000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、负责公司产品前端开发任职要求：1、大专以上学历，软件开发类专业；2、Javascript 2年以上开发经验，熟悉Javascript面向对象编程，具有良好的编程风格；3、.熟练应用HTML5 CSS3 Javascript，熟悉主流web前端框架（jquery等 ）；4、.有客户端开发经验者优先。工作地址：珠海市前山明珠南路2021号金嘉创意园3栋5层            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "珠海国芯云科技股份有限公司招聘Javascript 工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "4000元/月",
          "advance": "4000元/月",
          "describe": "岗位职责\n    \n        \n            \n职位描述：1.负责web前端开发工作，开发的系统具有高性能和高可靠性；2.JavaScript程序模块开发，通用类库、框架编写，主导前端交互框架的开发。职位要求：1. 精通JavaScript、html语法；熟悉TCP/IP、HTTP基本工作原理，及web常用开发工具；2. 精通HTML5、CSS，熟悉页面架构和布局，对Web标准和标签语义化有深入理解;3. 对Web前台的性能优化以及web常见漏洞有一定的理解和相关实践；4. 丰富的Web前端架构经验，精通各种前端技术，对于Web性能问题的定位和解决有经验者更佳；6. 对HTML5技术领域、新兴Web标准和Web发展趋势有良好洞察力和极高的关注度，有强烈的求知欲；5. 有良好的团队合作能力，善于沟通，工作自主驱动,具备良好的问题定位分析能力，有两年以上前端开发工作经验者更佳。工作地址：上海闸北区共和新路3088弄查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "上海灿迪软件有限公司招聘javascript 前端开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "6000元/月",
          "advance": "6000元/月",
          "describe": "岗位职责\n    \n        \n            \n1、精通Asp.net(C#) ,javascript, css, Ajax编程技术，熟悉Jquery者优先；2、熟悉SQL SERVERE/Oracle数据库（二选一），T-SQL；3、熟悉MVC4编程优先；4、熟悉面向对象知识，有良好的代码风格；5、有行业应用软件项目开发经验优先；任职要求：1、一年以上B/S开发经验；2、良好的阅读能力、理解能力、学习能力，思路清晰，工作规范；3、具有良好的编程习惯；4、良好的团队精神、沟通能力。工作地址：上海杨浦区军工路300号9号楼204            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "上海众鼎信息科技有限公司招聘Asp.net(C#) ,javascript, css, Ajax\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n职位描述： 1、熟练使用JavaScript开发，能熟练使用JQuery，负责web应用产品的前端架构设计、研发、维护工作；2.通过模块化、面象对象等方法，对前端代码进行优化3、服务端代码编写，参与服务端业务改造及维护； 职位要求: 1、2年Javascript与后端交互以上工作经验；2、熟悉HTTP协议及W3C相关互联网规范；熟悉Html5，CSS3，JavaScript语言;主流JS框架（例如jquery）；3、有后端开发经验优先，具备J2EE项目实际开发经验；4、了解mysql、mongodb、缓存（memcache、redis），对servlet、rpc原理有一定的了解；5、富于团队精神和敬业精神，具有良好的自学能力和独立解决问题的能力；6、有互联网工作背景者优先。工作地址：北京市海淀区上地信息路28号上地信息大厦A座7层            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京互动百科网络技术股份有限公司招聘JavaScript工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "6000元/月",
          "advance": "6000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、负责web前端页面布局,交互功能开发。2、有前端页面和脚本开发的经验。3、根据后台提供的数据接口和业务功能需求编写JS和CSS代码任职要求：1. 计算机相关专业专科以上学历；2. 熟练掌握Javascript、AJAX、JSON等Web页面技术；熟悉HTTP协议；3. 熟悉jquery，underscore,backbone(marionette),requirejs,mustache等前端框架；4. 熟悉各浏览器之间的差异,能解决常见浏览器的兼容性问题；5. 了解前后端交互的过程,有php、python、nodejs,java等后端开发经验者优先；6. 具备较强的沟通交流和团队合作能力，较强的工作主动性和学习进取精神。工作地址：深圳市福田区深南大道7006号万科富春东方大厦1607            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "深圳市中农数据有限公司招聘JavaScript工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "6000元/月",
          "advance": "6000元/月",
          "describe": "岗位职责\n    \n        \n            \n工作职责：1、设计和开发物联网产品服务器端，包括服务器结构和逻辑，数据库结构，通信协议；2、优化代码，保证服务端的性能、效率、安全性和数据完整性，并提供数据分析的各种接口；3、负责服务器端的功能开发、问题对应和用户反馈处理；4、负责服务端部分模块代码编写；5、对数据结构和算法有一定了解；6、参与制定和指导执行服务器端开发流程和标准； 职位要求：1、大专以上，有过1年以上编程语言开发经验，熟悉JavaScript，接触过Node.js开发，了解过ES6，ES7的优先；2、网络编程以及常用数据结构和算法，深刻理解面向事件编程思想；3、熟练掌握SQL语言，有较好的分布式系统、分布式数据库系统的理论基础；4、熟悉三层架构并熟练应用Apache，Tomcat，Nginx等；5、思维严谨，逻辑清晰，口头表达能力强；6、热爱物联网产品开发，愿意全身心投入技术工作。工作地址：昀迈（上海）生物科技有限公司 ? 详细信息 住所：上海查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "昀迈(上海)生物科技有限公司招聘JavaScript工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1) ? 利用HTML/CSS/JavaScript等Web技术进行产品的界面开发；2) ? 负责项目的客户端模块开发，编写可重用的代码，优化UI交互功能；3) ? 参与或负责项目需求分析、系统方案设计；4) ? 配合测试人员修改测试中发现的问题；任职要求：1) ? 精通JavaScript、HTML、CSS、XML、DOM等前台相关技术，理解W3C标准；2) ? 对JS、CSS在不同浏览器的区别有深入了解，对HTML5有一定了解；3) ? 了解前后端数据交换的原理和方式，熟练使用Ajax等异步数据的交换方式；4) ? 有2年以上Javascript项目开发经验，至少熟悉JQuery、ExtJS、Dojo等常用JS库其中一种；5) ? 计算机相关专业，全日制本科以上学历, 3年及以上相关工作经验,英语四级及以上；工作地址：深圳市南山区侨城东部工业区H-3栋3楼查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "深圳英飞拓科技股份有限公司招聘Javascript前端开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、负责公司产品、项目、网站等开发工作，可熟练应用JavaScript 实现高性能的交互效果；2、根据产品需求，熟练运用 (x)HTML,CSS 产出兼容于目前主流浏览器的前端页面；3、负责相关产品的前端实现，提供合理的前端架构；4、负责产品相关文档的编写工作； 任职要求：1、大专及以上学历，计算机相关专业，2年以上开发经验；2、负责公司项目前端开发工作，熟练使用Html5、CSS3、Javascript等技术开发PC/Mobile端；3、熟悉Web标准, 熟练解决主流浏览器及不同版本的兼容性问题（IE、Chrome、Firefox)；4、精通ExtJS、Sencha Touch等开发框架；5、熟悉后端语言经验（Node.js/Ruby/Python/PHP/ perl等）；6、能够无障碍查看英文网站。 工作地址：北京市昌平区北清路中关村生命科学园博雅CC6号楼301室查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京修业时代科技有限公司招聘javascript开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "8000元/月",
          "advance": "8000元/月",
          "describe": "岗位职责\n    \n        \n            \n工作内容：1、负责HTML页面以及javascript程序制作；2、根据产品需求开发相关的Web组件；3、验证和修正测试中发现的问题；4、学习和研究新技术以满足产品的需求；5、配合产品应用开发等其他部门，提供相关技术支持。技能要求：1、至少2年以上的Javascript研发工作经验；2、有扎实的Javascript的语言基础；3、精通HTML/XHTML,CSS，熟练使用CSS+DIV布局；4、能熟练的手写和调试符合W3C标准、兼容IE6、 IE7、 IE8、 FireFox等多种浏览器的代码；5、精通HTML+CSS+Javascript实现动画的技术；6、掌握JavaScript语言核心技术DOM、BOM、Ajax、JSON等；7、具备良好的代码编程习惯及较强的文档编写能力。工作地址：北京市朝阳区东方东路19号5号楼（亮马桥外交办公大楼）工作地址：北京市朝阳区            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "日本仕迪亚株式会社北京代表处招聘【日资广告公司】JavaScript工程师/HTML工程师/前端开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "4000元/月",
          "advance": "4000元/月",
          "describe": "岗位职责\n    \n        \n            \n1、掌握javascript、html5、Java等开发技术，解决Firefox、Chrome、Safari、IE等主流浏览器兼容性；2、能运用一种常见JS开发框架，如JQuery、JQuery UI等，参与或者开发过某种JS框架者优先；3、具有模块化编程思想、良好的代码书写习惯，有一定的数据结构和算法基础；4、熟悉交互式设计，对可用性、可访问性等用户体验知识有相当的了解和实践经验者优先；任职要求：1、计算机或软件开发等相关专业，本科及以上学历；2、热爱游戏行业，热爱互联网行业；3、思路开阔，乐于学习，有独立分析和解决问题的能力；4、工作踏实认真，有良好的学习能力、团队合作精神，能承受工作压力。工作地址：合肥市高新区黄山路599号时代数码港1907室查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "启云软件有限公司招聘Javascript前端/java开发工程师(实习岗位)\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1. 针对确认的需求说明书编写概要设计和详细设计文档；2. 在项目经理要求的进度范围内有效完成开发任务；3. 负责WEB前端架构设计，带领前端团队完成任务；4. 负责项目核心代码的编写及参与公司核心框架的代码编写；6. 前沿技术的跟踪、技术预研、技术攻坚；任职要求：1．非常熟悉HTML5/JavaScript/CSS3，具有3年以上相关工作经验；2．对浏览器的兼容性有深刻的理解并从事过浏览器兼容性处理工作；3．熟练使用jquery并精通ajax；4．从事过javascript代码优化工作且懂得部分javascript高性能写法；5．能够理解后端架构，与后端工程师配合，为项目提供最优化的技术解决方案；6．从事过javascript框架设计工作，且熟悉highcharts、bootstraps、EXTjs者优先；7．有良好的沟通协调能力，有上进心，有责任心，个性乐观开朗，思维逻辑性强。工作地址：西安高新六路38号腾飞创新中心B座            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "上海有智网络科技有限公司西安办事处招聘JavaScript高级软件工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n招聘软件开发前后端工程师、实习生，熟悉java互联网应用软件开发架构，Javascript前端开发，学习能力强，有创业精神，能够吃苦耐劳。熟悉nodejs, angularjs,bootstrap应用开发应用技术及REST架构优先录用，具体薪酬面议。工作点在郑州市高新技术开发区瑞达路合欢街5号。职位联系方式公司主页：http://www.jike-tech.com/电话：13323869602通信地址：上海市松江区南其昌路458弄198号602室 021-67736379            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "上海迹客科技有限公司招聘Java/JavaScript程序员\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "4000元/月",
          "advance": "4000元/月",
          "describe": "岗位职责\n    \n        \n            \n你是一个有想法，充满创新创意，踊跃学习，有创业精神的工程师吗？在这里你永远不会觉得无聊。具备以下条件，欢迎加入我们的行列！！ 我们并不要求你全部都会都精通，但是你要有一定的基础，和努力学习的心态有清晰的思维逻辑，能处理复杂的交互场景精通 Javascript Jquery Web 前端开发懂AngularJS， BackBoneJS, 或BootStrap等 前端开发框架掌握HTML、XML、CSS, SASS等语言，熟悉HTML5和CSS3懂得如何把用户体验做到最好懂Nodejs 为佳拥有良好的团队沟通能力，愿意毫不保留的把自己最真实的想法说出话的人，熟悉如何与后台工程师沟通工作地址：重庆市渝北区黄山大道中段麒麟D座501.504查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "重庆甲虫网络科技有限公司招聘Javascript AngularJS 前端工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "15000元/月",
          "advance": "15000元/月",
          "describe": "岗位职责\n    \n        \n            \n工作职责：1、JavaScript程序模块开发2、与设计师、开发工程师紧密工作，负责产出高质量的产品前端层3、能充分理解项目需求和设计需求，具有一定研发精神，能解决各种未知问题岗位要求： ? 1、精通DOM、Javascript、CSS、HTML等前端技术，能轻松写出符合W3C标准、兼容主流浏览器的代码； ? 2、精通至少一种JS框架(比如React、bootstrap、AngularJS)或者对JS语言本身有较深刻的理解（比如：函数式编程、闭包、事件和异步编程）；3、熟练掌握 NodeJS 核心模块，熟练使用NPM管理依赖；4、.了解掌握至少一门非前端开发语言（如PHP/Java/Python/Ruby等），并有一定的实战经验；5、对Web性能优化感到兴奋，乐于钻研前端效果的实现；6、对技术有强烈的兴趣，喜欢钻研，具有良好的学习能力，有代码洁癖者优先；7、本科以上学历；加分项：1、了解或熟悉前端MVC以及CMD/AMD开发模式2、熟练使用webpack、grunt、gulp等构建、优化静态资源3、Github重度用户，有自己的开源项目（nodejs开源项目加双倍）工作地址：完美世界大厦            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "完美世界(北京)软件有限公司招聘Javascript 研发工程师-1542\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "6000元/月",
          "advance": "6000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、负责公司软件产品的开发，根据程序设计进行实际的代码编写工作，开发出真正能完成客户要求的程序。2、进行已开发代码的单元测试和集成测试；对测试出的问题及时修改；对测试人员在系统测试中发现的问题及时修改。任职要求：1、具有2年以上JavaScript、php相关软件开发经验；2、熟悉前端页面设计，熟悉CSS、Ajax、JQuery、JavaScript等；3、熟悉sqlserver、mysql数据库的设计和开发；4、具有良好的沟通能力；5、具有良好的框架概念，以及代码开发和单元测试规范性；6、有过跨操作系统、跨浏览器开发经验者优先。薪酬：基本工资+餐补+双休+五险，享受国家规定的法定假日。邮箱：hr@zhichen.com.cn工作地址：长春市高新技术开发区翡翠花溪紫金公寓A座查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京东方智辰科技开发有限公司长春办事处招聘Web开发JavaScript高级程序员(工作地长春)\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "4000元/月",
          "advance": "4000元/月",
          "describe": "岗位职责\n    \n        \n            \n职位描述：初级程序员岗位职责：1、主要使用JavaScript语言编写前后端程序2、结合Html、css实现PC端网站、手机web端的交互页面3、开发运行于nodejs环境里的后端程序4、编写代码访问、操作数据库，特别是NoSQL类型的数据库职业成长方向：轻量级、灵活型网站的系统架构师岗位要求：a. 中专及以上学历，工科或理科专业b. 有web前端开发经验（培训经历、企业实习、课余自行开发的作品等，亦可计算在内）c. 其它编程语言（PHP、Java、C#、C++...）的编程、培训经历也可算入经验之列d. 熟悉HTML、CSS、JavaScript，了解JQuery、nodejs等框架与技术e. 了解MongoDB、Redis等NoSQL类数据库技术h. 应届生亦可关键字：JavaScript nodejs html css 周末双休 带薪年假职能类别：软件工程师该岗位为杭州浙大灵通科技有限公司代招公司简介： ? ?杭州浙大灵通科技有限公司成立于2003年2月。凭借强大的人才、技术优势和扎实的客户资源网络，公司在短短几年时间里已经发展成为浙江省内较有影响力的高新技术企业。 ? 公司立足于浙江省，将系统集成、软件研发能力与产品优势进行整合，致力于提升核心竞争能力，以市场为导向，以自主创新为根本，形成了灵通自有品牌的资源优势及产品优势，在互联网运营开发、信息系统的集成和服务、行业应用系统的产品研发及行业信息产品的销售等领域等方面都具备了雄厚的实力，是浙江省规模较大的行业信息产品提供商和服务商，与通信、教育、电力等行业有着非常广泛和深层的合作。 ? 公司依托浙江大学的科技和人才实力，秉承“求是、创新、奉献、分享”的企业精神，推行人本管理、发挥人才优势、实现人力资本的最大增值。公司拥有一支经验丰富、富有朝气和创新精神的由管理、研发、运营、市场、技术服务、客户服务等专业人才组成的精英团队，建立了完善的社保、公积金等员工福利体系，为员工设立了完整的职业发展通路，并通过健全的考核体系和完善的激励机制让所有员工不断挑战自己、再创新高！更多信息，敬请浏览公司主页：www.lingtong.cc工作地址：杭州市拱墅区祥园路139号浙大网新智慧立方D座8楼            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "杭州吾儿网网络技术有限公司招聘全栈（JavaScript）软件工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n技术研发部 ?Java开发主管 岗位职责：1、负责带领小组成员完成项目需求整理、数据库设计及系统设计，负责编写开发文档、数据库设计文档等相关技术文档2、在SSH/SSM基础上搭建代码框架3、根据系统设计文档负责具体模块的详细设计和代码开发4、现有系统功能模块的维护优化和新功能开发5、对API系统和运营系统进行日常维护和故障处理，解决系统存在的Bug岗位要求：1、本科及以上学历，计算机或相关专业，3年以上Java开发工作经验2、精通Java、Servlet、JSP、JSTL、JavaScript等，熟练使用ExtJS、EasyUI、JQuery等等JS框架进行界面组件开发，熟练应用HTML、CSS进行UI设计，熟悉SOA架构设计，熟悉webservice，熟悉webapi3、精通并熟练运用流行开源框架spring、struts、hibernate/myBatis、mina、netty；4、熟练使用Tomcat，熟练使用Linux操作系统5、熟悉uml,powerdesigner,viso等设计工具，熟悉jason、xml6、熟练使用MYSQL数据库，熟练常规的SQL语句优化，具有数据库集群、读写分离经验优先7、熟悉移动互联网开发模式，清晰理解缓存，缓存设计和模式，熟悉memcache、redis等，熟悉c++、c#等者优先8、良好的编程习惯，并对新技术有较强的学习欲望9、有良好的职业道德和工作态度，具有独立分析问题和解决问题的能力，工作认真、踏实，责任心强，有团队合作精神10、有APP团队开发经验者优先工作地址：广州天河区粤垦路188号            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "广州洛克韦陀安防科技有限公司招聘Java开发主管  JavaScript C01\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "4000元/月",
          "advance": "4000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、负责公司软件产品的开发，根据程序设计进行实际的代码编写工作，开发出真正能完成客户要求的程序。2、进行已开发代码的单元测试和集成测试；对测试出的问题及时修改；对测试人员在系统测试中发现的问题及时修改。任职要求：1、有过JavaScript或php相关软件开发经验（应届毕业生也可）；2、使用过sqlserver、mysql数据库3、具有良好的沟通能力；4、具有良好的框架概念，以及代码开发和单元测试规范性。薪酬：基本工资+餐补+双休+五险，享受国家规定的法定假日。邮箱：hr@zhichen.com.cn工作地址：长春市高新技术开发区翡翠花溪紫金公寓A座查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京东方智辰科技开发有限公司长春办事处招聘Web开发JavaScript程序员(不是美工)(工作地长春)\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "4000元/月",
          "advance": "4000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责:1、分析代码，并模仿实现要求的功能。2、软件平台的开发和设计；3、软件项目的管理。任职资格:1、数学、信息电子或计算机相关专业，本科以上学历。2、具有良好的算法与数据结构理论基础。3、了解MySQL、SQLSever、Oracle等中的一种数据库使用；4、了解HTML/JavaScript/CSS基础,熟悉C/C++，等相关编程语言。5、能阅读业内的英文资料文档。6、为人正直、诚实，具有责任心，勇于承担责任；思维清楚、逻辑好、能钻研；做事仔细严谨，有很好的团队合作精神;7、能吃苦耐劳，踏实肯干，可以承受工作压力。工作时间:08:30-11:30 12:30-17:30 有加班工作地址：临沂市高新区创新大厦A座422查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "临沂多极信息推广科技有限公司招聘JavaScript、HTML开发高级程序员，5K，合伙人，软件工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：- Web平台的开发和维护；- 完成项目开发相关文档。 任职要求：- 本科以上学历；- Web 前端应用开发经验，2年以上互联网平台相关经验；- 具备丰富的 Python，JavaScript，HTML，CSS 编程经验；- 精通 AJAX 运作机制，了解 HTML5；- 能够编写 JavaScript 单元测试，具备测试驱动开发 TDD 经验；- 熟练使用 jQuery，Bootstrap，eCharts，D3.js ?等前端框架；- 有 Web APP 开发经验者优先；- 有参与开源项目的经历尤佳。工作地址：上海浦东新区陆家嘴东路161号招商局大厦2105室。邮编：200 120            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "上海英复德人才服务有限公司招聘Python 研发工程师 - JavaScript, HTML, CSS\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "6000元/月",
          "advance": "6000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1. ? 参与产品（项目）的功能需求讨论，负责Web前端的架构设计和开发，Web界面优化等。2．根据开发规范与流程独立完成模块的设计、编码、联调以及相关文档；3．积极参与技术攻关和培训学习，不断优化产品（项目）；4. ? 负责已有项目的维护。 任职要求：1. 计算机相关专业，本科及以上学历；2. 3年（高级）或1年（中级)以上Web前端开发工作经验；3. 精通HTML/HTML5/CSS/CSS3/Javascript等前端技术, 有浏览器调试和开发经验；4. 熟练掌握JQuery、Bootstrap框架, 熟悉HTTP协议, AJAX调用，熟悉移动端开发者优先；5. 熟练使用服务器端开发语言开发Web应用, 有Java经验优先；6. 积极主动，能承受压力，良好的团队意识，易于沟通，工作仔细，责任心强。工作地址：广州市            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "上海上讯信息技术股份有限公司招聘中、高级Web、Html、Javascript前端开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "6000元/月",
          "advance": "6000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、参与产品系统架构设计、开发、测试的全流程，包括需求分析、方案设计、功能开发、系统测试，并编制相应的开发文档。2、按照系统总体架构设计，完成分配的其他工作。任职要求：1、2年以上PHP开发经验，有CRM/OA/运营平台/通信/电子商务相关项目开发经历为佳; 2、 对PHP语言有深入的了解，熟悉HTTP协议及W3C相关互联网规范 3、 熟悉LAMP架构，Nginx，LINUX系统环境开发，熟悉PHP的面向对象编程； 4、 熟练HTML,Javascript,XML,CSS,Ajax等Web前端开发技术 5、熟悉面向对象程序设计，熟悉至少一种MVC（yii/thinkphp）框架 6、 熟悉MySQL，熟悉配置、维护、性能优化，熟悉各种条件查询，复合查询等的编写能力，并有良好的数据设计能力; 7、工作认真负责，有良好的组织能力和沟通能力及良好的团队合作精神，有良好的程序构架设计以及编程习惯。工作地址：二七区二七万达广场查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "河南合冠科技有限公司招聘PHP研发工程师/thinkPHP/javascript/js/MySQL\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1.负责相关课程教学工作，按进度完成教学任务2.根据需要，改进教学方法，完善教学体系3.参与学术交流与研讨，不断提升业务水平和任职资格 任职资格：1.精通HTML5+CSS3网页布局,熟练手写代码,能处理各种浏览器的兼容，并有相关问题的解决经验2.有两年以上JavaScript开发经验，精通JavaScript设计模式，精通DOM编程3.精通至少一种前端开发框架，yui,jQuery,EXT等4.有良好的软件设计和oop开发经验5.具备独立设计和编写JavaScript框架的能力，具备良好的代码编程习惯及较强的文档编写能力6.至少熟悉一门非Web前端脚本的语言（如C#/Java/PHP等），并有项目从业经验联系电话：15378770104联系人：魏经理工作地址：河南省郑州市高新区长椿路11号大学科技园2号南配楼218查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "河南牵引力科技有限公司招聘JS工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元以上/月",
          "advance": "10000元以上/月\n        五险一金\n        带薪年假\n        年终多薪\n        绩效奖金多\n        晋升空间大\n        期权激励",
          "describe": "岗位职责\n    \n        \n            \n职位要求：1、精通Dreamwaver、Firework、Photoshop等网页设计软件，会FLASH者优先；2、熟练使用Div+Css、html、JavaScript网站制作脚本语言，有一定的手写代码的能力；3、熟悉网站建设开发流程和网页设计制作流程，能与后台程序开发人员保持良好对接；4、有一定的美学功底，美术、平面设计相关专业者优先；5、与公司共同成长，有创业者的心态和意识优先。待遇1、底薪+补贴+绩效奖金+利润分红2、节日福利+旅游            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "网页设计/网页制作/美工\n    全职",
          "company": "上海首擎信息科技有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "8000元/月",
          "advance": "8000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、使用nodejs语言进行相关系统的开发；2、负责后台系统业务逻辑的开发及维护；3、协助技术及业务部门完成其他工作；4、分析业务需求，给出良好的技术解决方案，并协助其他人员完开发及调试工作。任职要求：1、熟悉Node.js + Express开源框架、MongoDB数据库，熟悉常用Node.js扩展；2、熟悉 Node.js事件驱动和异步编程思想；3、熟悉基于JavaScript面向对象编程技术，熟悉MVC编程框架；4、了解HTML5、CSS、Javascript、AJAX、JSON、Jquery等Web页面技术；5、熟悉linux下的运行环境配置及优化者优先考虑；6、从事javascript相关工作优秀者，可以放宽条件。工作地址：深圳市南山区科园路深圳市软件产业基地5栋E座4F查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "深圳市小猫信息技术有限公司招聘Node.js开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "4000元/月",
          "advance": "4000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责:1、主要负责Web端网页开发，移动端网页开发；2、参与研发移动产品和项目研发，配合后台开发人员实现产品前端界面效果与功能；3、负责移动产品应用的Javascript程序模块开发，通用类库、框架编写，解决Javascript性能与兼容性问题，网站或者游戏的后台开发；4、与设计师、产品经理紧密工作在一起，实现产品UI和交互方面的开发需求，确保产品具有优质的用户使用体验。任职要求：1. 1-3年以上前端开发经验；2. 精通JavaScript、Ajax、DOM等前端技术，掌握面向对象编程思想；3. 能熟练使用HTML、CSS实现Web页面布局；4. 了解HTML5+CSS3技术开发移动端Web应用；5. 熟练使用JavaScript、Ajax、JSONP等技术，熟悉ECMAScript5规范；6. 良好的编码风格和规范，熟悉SVN，GIT等代码管理工具；7. 对MVC开发模式有一定的认知；8. 熟悉常用的前端性能优化原理及手段及性能分析工具；9. 对面向对象思想和面向对象程序设计有深刻的理解；10、有phonegapappcanapicloudTitanium\neactjssenchaH5 使用经验者优先，有网站后台编写开发者优先。工作地址：成都市高新区益州大道北段777号中航国际交流中心A座506查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "成都嘉承兴业科技有限公司招聘js开发工程师，网站后台/前台开发，端口对接\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "15000元/月",
          "advance": "15000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：node服务的开发和维护，及性能优化利用全栈的便利性提供便捷易用的服务岗位要求:有Node.js实战经验，熟悉node异步开发方式并了解同步开发方案熟悉并使用过conncet, express, koa之一熟悉一种数据库，mongodb, redis, mysql等对缓存方案如redis, memcached的使用有了解了解基本的Linux、git终端命令了解ES6/7，紧跟业界步伐，爱折腾工作地址：北京            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京商道金源科技有限公司招聘Node.js_BJ_00752\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n工作地点在河南郑州。岗位要求：1.熟悉node.js；2.JavaScript基本功扎实，对闭包、事件和异步有独到的见解；3.熟悉Redis，MySQL等的一种或多种；4.熟悉Linux开发环境；5.至少熟悉一种后端开发语言：C/C++,C#,JAVA,php,javascript等；6.经历过一个以上的项目开发；7.良好的编码风格，有自主学习能力，良好的团队合作意识及积极的心态；8.热爱游戏。 加分项1.有游戏开发经验2.熟悉pomelo3.有个人作品 极度热爱游戏者优先考虑！薪资待遇7-15K（税后）我们的工作地点在河南郑州，欢迎加入河南游戏平台！如有需要公司可提供住宿人事部电话：0371-63337096工作地址：郑州市科学大道53号中原国家广告产业园3号楼14楼查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "郑州三生石科技有限公司招聘node.js开发工程师/node.js服务端开发/游戏后台逻辑开发\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、熟悉Ajax，jquery，Ajax, json等动态网页的技术，浏览器与 Web 服务器传输技术,熟悉解决http请求跨越问题的方法,熟悉js与node express后台程序的请求返回流程。2、精通js面向对象编程。3、精通Web前端基础技术，包括HTML、CSS2/3、Javascript。CSS样式兼容性处理以及新特性，熟悉各主流浏览器的差异，能规范书写兼容各主流浏览器的页面代码。4、熟悉Jquery等主流JS框架，精通react.js者优先。任职要求：1.熟练掌握HTML、CSS3、JavaScript开发 -2.熟悉W3C标准与ES6规范，熟悉Web语义化，熟悉amd、cmd规范，用过requirejs、seajs对js模块化了解，gurnt gulp webpack 对打包工具熟悉3.熟练掌握盒模型、以及常用布局4. 熟练掌握响应式布局的各种技巧 ?5.熟练使用至少一种JS框架，掌握其原理，能独立开发常用组件 ?6.熟练使用各种调试、抓包工具，能独立分析、解决和归纳问题 7.具有至少一门服务器端编程的实战经验 8.具有性能优化经验，熟悉各种常用设计模式和常用MV*框架 9. 使用过bower npm 对js依赖的包管理工具。熟练使用sass less（最好是sass） 样式预处理，angular react对流行框架的使用（有项目经验）10.有ReactJS经验者优先 11. 能熟练使用git管理项目代码.工作地址：北京市海淀区上地国际创业园东区2号楼7E查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京快人科技有限公司招聘高级JS开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "8000元以上/月",
          "advance": "8000元以上/月\n        五险一金，双休，具有",
          "describe": "岗位职责\n    \n        \n            \n岗位职责:1、参与产品分析设计，完成概要设计和详细设计，并完成相关技术文档编写2、产品核心代码开发与测试3、解决开发过程中碰到的技术问题4、参与项目实施、运行和优化，提供技术支持任职资格:1、计算机相关专业本科及以上学历2、3年以上.net开发经验，精通c#语言3、熟练使用asp.net mvc, webapi，wcf等开发技术4、熟练使用html，css，javascript，jquery等前端语言5、熟练使用svn，tfs等代码管理工具6、熟悉至少一种ioc，orm框架，了解aop7、熟悉oracle、sqlserver、mysql一种或几种8、熟悉iis运维部署工作9、熟悉常用设计模式，对面向对象有深入的理解            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": ".NET高级软件开发工程师/程序员\n    全职",
          "company": "百洋医药集团有限公司",
          "scale": "规模：1000人以上",
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位描述：1、负责公司软件产品的页面功能的开发和优化2、利用各种Web技术模拟开发产品原型3、参与用户体验Demo工具的优化设计及实现4、利用HTML5/CSS3/JavaScript/Flash等各种Web技术进行产品的界面开发5、配合后台开发人员实现产品界面和功能与后台的交互6、制作标准优化的代码，并增加交互动态功能。岗位要求：1. 本科以上学历，2年以上前端开发工作经验；2. 熟练掌握Web前端技术CSS/HTML/Javascript；3. 熟悉常用Web前段框架(jQuery,Bootstrap)；4. 良好的编程习惯和较强的的学习能力；5. 有责任感和良好的团队合作精神；6. 有java开发经验者优先。 【薪资福利】薪资待遇——让你愉快的买买买，有钱，就是这么任性！晋升机会——这里有懂你的伯乐，相信总有一颗心在感知！美味食堂——拒绝快餐盒饭，拒绝自带便当，拒绝街边小店，一日三餐营养均衡，远亲不如近邻，你的健康我来照顾。定期体检——每年定期体检，为你的健康保驾护航！年度旅游——每年至少一次的国内外旅游机会，除了风情新马泰，时尚欧美灵魂尼泊尔浪漫马代都在我们的Plan A中。体育赛事——个人运动，同事竞技，让你在工作之余享受运动带来的畅快，再也不用坐公交去挤别人的场地。员工活动——他们都在意你飞得高不高，而我们在乎的，是你飞得累不累。工作地址：上海市浦东新区耀华支路39弄9号 泛微软件大厦查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "上海泛微网络科技股份有限公司招聘前端开发（react.js/angular.js）\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：任职要求：1 25—55岁，在当地有一定的网络资源，能独挡一面；2 5年以上快消品工作经历，2年以上酒水行业同等职位及以上工作经历，深谙白酒市场的销售动态，具独到的市场运营思路，成功的市场运作经历和案例；脚踏实地，勤勤恳恳，具抗压力，能按时按量完成销售指标;3 有一定的经济实力，熟悉当地市场，有当地市场的客户资源和人脉关系4 ?对公司总经理直接负责， 年利润20——50万 ；联系人 ? 金总 ? 13730800551工作地址：合肥市瑶海区当涂路325号东城时代广场7幢商务楼商业G楼1412/1412上            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "五粮液福满盛世全国营销中心招聘各县市总经销商\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：使用node.js封装websocket通讯负责H5游戏的服务器编写负责实现接口与客户端通讯负责提高服务器通讯性能，以及数据读取处理速度任职资格：1专科及以上学历，软件工程、计算机等相关专业,1年以上开发经验；精通JavaScript语言，精通node.js服务器，熟练websocket与socket.io之一有研究过pomelo框架者优先，(如果对pomelo框架了解透彻者，可直接入职)有过多人实时对战游戏开发者优先，了解其通讯原理了解linux操作系统,熟练使用gitlab,完成代码的部署和开发环境配置；熟悉 redis、mysql、有大并发开发经验的优先考虑思路清晰，具有较强的表达能力、沟通能力和学习能力，能够独立解决未知问题喜欢创业公司环境，渴望与公司一起成长工作地址：北京市海淀区上地东路9号得实大厦3层中区1号查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "北京畅聊天下科技有限公司招聘Node.js\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1.手机端Web前端开发；2.建立公司标准化前端组件及JS类库；任职要求：1.大学本科学历，两年及以上移动端JS的开发经验。2.精通jQuery及原生JavaScript开发；3.精通Ajax、Json/Jsonp等后台交互技术；4.熟悉HTTP、XML等相关技术；5.能够熟练使用HTML5、CSS3；6.有Canvas绘画开发经验优先。工作地址：深圳市福田区八卦岭617栋401            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "深圳市川崎运动用品有限公司招聘高级JS工程师（第一体育）\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "10000元/月",
          "advance": "10000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责:工作职责：1. 协助数据服务产品网站及产品开发，实现前台UI和后台交互的响应式编程；2. 改善软件产品的易用性，提升用户使用体验。3. 提高系统实时相应,分布, 容错等性能.任职资格:１.2年以上Javascript及前端开发项目经验；2. 掌握Node.js, React, HTML5、CSS3, Mongodb等；３. 对web技术钻研有强烈兴趣，有良好的学习能力和强烈的进取心, 有创新精神。工作地址：上海查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "华院数据技术(上海)有限公司招聘Node.js React开发\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "8000元/月",
          "advance": "8000元/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、负责网站js开发，使用Javascript熟练、准确地进行代码构建，实现产品所需的交互效果；2、使用HTML/CSS/XML熟练地进行页面维护。 任职要求：1、熟练HTML/XHTML、CSS等网页制作技术，熟悉页面架构和布局2、熟练JavaScript、Ajax等Web开发技术 ，有网站服务器搭建，环境部署经验3、熟悉ArcGIS API(优先考虑)4、熟练使用linux系统，并且对后台开发(Java/.net等)有一定了解（优先考虑）5、具有HTML5/CSS3开发经验。6、了解GIS相关知识，例如各种地理坐标系（优先考虑）7、良好的沟通与表达能力，较强的动手能力与逻辑分析能力8、对Web技术发展有强烈兴趣，有良好的学习能力工作地址：北京市海淀区长春桥路11号万柳亿城中心B座5层            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "中国四维测绘技术有限公司招聘JS开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、使用HTML/CSS/JavaScript开发网页及客户的交互功能；2、使用node.js开发服务器端程序；3、依据公司产品设计完成产品功能模块的编程开发；任职要求：1、计算机相关专业；2、精通HTML/CSS/DIV/JS等前端开发技术3、精通Nodejs服务端开发，掌握各个系统模块的使用，理解Tcp/IP、Http、Websocket通讯协议4、有Mysql、Redis和MongoDB等数据库开发经验；5、良好的代码风格及注释习惯，能够熟练使用svn或git等版本管理工具；6、思路清晰，具有较强的表达能力、沟通能力和学习能力，能够独立解决未知问题；7、有良好的算法及数据结构基础，有其它后端语言编程经验优先；php、python；工作地址：郑东新区商务内环路与众意西路奥园国际13号楼二单元801室            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "河南炯途网络科技有限公司招聘Node.js开发工程师\n    全职",
          "company": 0,
          "scale": 0,
          "source": "大街"
        },
        {
          "salary": "5000-8000元/月",
          "advance": "5000-8000元/月\n        五险一金\n        带薪年假\n        年终多薪\n        绩效奖金多\n        晋升空间大",
          "describe": "岗位职责\n    \n        \n            \n任职资格：\n1、大专及以上学历、专业不限\n2、较强的创意，良好的文字表达能力，思维敏捷\n3、会使用Photoshop、Flash、3DMAX、CAD等常用设计制作软件优先考虑\n4、经考核合格直接上岗，不合格者先实训后上岗，起薪5000~8000。\n5、有无经验均可，我们会针对你的情况进行实训，实训后上岗就业，入职前同意参加三到四个月的岗前实训。\n\n岗位职责：\n1、公司有完善的新人培训体系，新人在项目经理带领下掌握PS、AI、手绘与色彩表现、SSH框架、GUI/WUI、HTML/CSS、H5等；\n2、由项目经理带领完成移动端页面制作、图标设计、交互设计、移动端APP设计、可穿戴智能硬件设计、智能电视界面设计等项目；\n\n待遇：\n1、试用期1-3个月,转正后享有平均月薪范围5000-8000元；\n2、五险一金,年底双薪,超长带薪年假,公司组织聚餐、KTV、烧烤、季度旅游等；\n3、未来可以胜任品牌设计、WEB界面 、电子商务、WEB前端制作、UI视觉设计；\n\n工作时间:09：00至17:00(双休            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JavaScript工程师\n    全职",
          "company": "北京优才创智科技有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "5000-8000元/月",
          "advance": "5000-8000元/月\n        五险一金\n        晋升空间大\n        绩效奖金多\n        公司前景好\n        年终多薪",
          "describe": "岗位职责\n    \n        \n            \n任职资格：\n1.应往届理工科相关专业（如计算机、机械、电子信息、通信、环境园林、土建等）；\n2.应届生有无经验均可，有经验者经考核合格直接上岗，无经验且符合条件者可申请实训后上岗，入职转正薪资5000~8000元；\n3.对IT/互联网行业不感兴趣者，请勿投简历(面试时请携带学历证书等相关证件)\n\n岗位职责：\n1、公司有完善的新人培训体系，新人在项目经理带领下掌握PHP开发语言、Think php、Linux、Mysql、JavaScript及HTML5等；\n2、由项目经理带领完成高并发量大型网站架构等项目；\n\n待遇：\n1、试用期1-3个月,转正后享有平均月薪范围5000-8000元；\n2、五险一金,年底双薪,超长带薪年假,公司组织聚餐、KTV、烧烤、季度旅游等；\n3、公司有广阔晋升空间，技术工程师 项目组长 项目/产品经理 技术总监；\n\n工作时间:09：00至17:00(双休)            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JavaScript开发\n    全职",
          "company": "北京优才创智科技有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "8000-15000元/月",
          "advance": "8000-15000元/月\n        五险一金\n        优秀团队\n        公司前景好",
          "describe": "岗位职责\n    \n        \n            \n职位描述：负责网站服务器搭建与实现任职要求：1）2年以上网页开发经验2) 精通JavaScript等Web前端开发技术3）了解基于JS的前端、后端框架技术4）熟悉NODEJS            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JavaScript工程师\n    全职",
          "company": "北京飞趣旅游科技有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "8000-15000元/月",
          "advance": "8000-15000元/月\n        五险一金\n        带薪年假\n        年终多薪\n        绩效奖金多\n        晋升空间大\n        节假日津贴\n        公司前景好\n        办公环境优美气氛好\n        弹性工作制\n        内部培训",
          "describe": "岗位职责\n    \n        \n            \n此职位面向前端中的javascript开发，要求本科学历、英语阅读良好，最少1年以上相关工作经验！岗位职责1、前端开发, html5和javascript方向;2、配合美工, 在js层面实现业务层, 衔接前后端;3、web和微信, app方面的js的架构开发和测试;任职要求1、熟悉node.js2、精通 javascript, 了解coffee等周边技术;3、熟练使用angular, backbone等框架, 并有相关产品上线经验;4、掌握微信页面开发, html5 webapp开发;5、做过chrome扩展者尤佳;6、良好的英文文档阅读能力, 会翻墙, 常用Google.            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JavaScript-前端\n    全职",
          "company": "深圳彩易科思网络技术有限公司北京分公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议\n        五险一金\n        绩效奖金\n        定期体检\n        员工旅游\n        节日福利",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、负责讲授JavaScript相关课程；2、协助主管完成各类教学资料的编写；3、完成其他交办的工作。任职要求：1、精通JavaScript语言，熟悉ECMAScript标准；2、具备较强的逻辑思维能力和数据结构与算法基础，熟悉常见的设计模式；3、拥有3年以上前端开发经验，至少2年的JavaScript开发经验，参与过大型项目的开发；4、熟悉各种主流开发框架，并了解其工作原理，如jQuery、Angular等；5、熟悉HTML/CSS，可以独立完成常见页面的布局工作，有过Bootstrap或ace使用经验；6、熟悉Sass/Less，熟练使用Git/SVN，熟练使用Gulp/Grunt。优先条件：1、了解HTML5/CSS3，并在工作中实际运用过，掌握一些常见库的使用方法，如zepto、iScroll与Swiper等；2、了解后端开发语言，NodeJS、PHP与Java等；3、编写过移动端的工具类库，或有原创的博文发布；4、有过讲师（或授课）经验。工作地址：北京市海淀区宝盛北里西区28号天丰利商厦4层，或者北京市昌平区沙河镇沙阳路18号北京科技职业学院中心服务楼地上2层            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "web前端讲师（JavaScript方向）\n    全职",
          "company": "北京千锋互联科技有限公司",
          "scale": "规模：500 - 999人",
          "source": "大街"
        },
        {
          "salary": "3000元/月",
          "advance": "3000元/月\n        五险一金\n        带薪年假\n        绩效奖金多\n        晋升空间大\n        年终多薪",
          "describe": "实习天数\n    \n        \n        5 天 / 周",
          "title": "javascript实习生\n    实习",
          "company": "沈阳华威天下科技有限公司",
          "scale": "规模：50 - 99人",
          "source": "大街"
        },
        {
          "salary": "4000-15000元/月",
          "advance": "4000-15000元/月\n        五险一金\n        带薪年假\n        绩效奖金多\n        晋升空间大\n        年终多薪",
          "describe": "岗位职责\n    \n        \n            \n遨游在网络的世界我们要的就是喜欢科技、喜欢挑战的你即使你是没有翅膀我们也会带你飞上网络的天际 ?岗位及要求：1.对互联网行业感兴趣，热爱电脑办公，理工类；2.工作长远发展、稳定、有晋升空间；3.学习能力强，工作热情高，富有责任感，工作认真、细致、敬业，责任心强；4.本岗位欢迎优秀应往届毕业生前来应聘。5.本科及以上学历（理工科）6.能够尽快入职、长期稳定工作；五险一金，双休，住房补助，午餐补助，法定节假日。            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "javascript初级工程师\n    全职",
          "company": "沈阳华威天下科技有限公司",
          "scale": "规模：50 - 99人",
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议\n        五险一金\n        定期体检\n        专业培训\n        绩效奖金",
          "describe": "岗位职责\n    \n        \n            \n岗位职责1、负责讲授JavaScript相关课程；2、协助主管完成各类教学资料的编写；3、完成其他交办的工作。任职要求1、精通JavaScript语言，熟悉ECMAScript标准；2、具备较强的逻辑思维能力和数据结构与算法基础，熟悉常见的设计模式；3、拥有3年以上前端开发经验，至少2年的JavaScript开发经验，参与过大型项目的开发；4、熟悉各种主流开发框架，并了解其工作原理，如jQuery、Angular等；5、熟悉HTML/CSS，可以独立完成常见页面的布局工作，有过Bootstrap或ace使用经验；6、熟悉Sass/Less，熟练使用Git/SVN，熟练使用Gulp/Grunt。3、优先条件：1、了解HTML5/CSS3，并在工作中实际运用过，掌握一些常见库的使用方法，如zepto、iScroll与Swiper等；2、了解后端开发语言，NodeJS、PHP与Java等；3、编写过移动端的工具类库，或有原创的博文发布；4、有过讲师（或授课）经验。            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "web前端讲师（JavaScript方向）\n    全职",
          "company": "北京千锋互联科技有限公司",
          "scale": "规模：500 - 999人",
          "source": "大街"
        },
        {
          "salary": "10000-30000元/月",
          "advance": "10000-30000元/月\n        五险一金\n        带薪年假\n        年终多薪\n        员工持股\n        期权激励\n        晋升空间大",
          "describe": "岗位职责\n    \n        \n            \n【你会承担】\n1.跨平台的电商终端的开发(ionic框架)；\n2.其他O2O产品的终端的开发；\n3.与其他技术合作团队协作，积累分享技术；\n\n【我们希望你】\n1 精通Javascript；\n2.熟练掌握HTML5、CSS3等前端知识；\n3.可开发Javascript组件，最好熟悉ionic等终端框架。\n\n【我们能给你】\n1.追求自由、平等，提倡简单、透明和分享的小伙伴\n2.充满激情的工作氛围\n3.成为下一个千万富翁的机会！全员持股，根据绩效授予的期权机制，真正成为公司合伙人！            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JavaScript\n    全职",
          "company": "深圳开思时代科技有限公司",
          "scale": "规模：50 - 99人",
          "source": "大街"
        },
        {
          "salary": "3000-4000元/月",
          "advance": "3000-4000元/月\n        五险一金\n        带薪年假\n        带薪病假\n        周末双休\n        年底双薪",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、根据客户提供的问卷需求，采用JavaScript编写后台逻辑；2、要求按时、正确的交付项目；3、通过电话会议、邮件与客户沟通确认项目需求；4、将最终采集的数据结果交付给客户。职位要求：1、 计算机，软件工程，电子商务等相关专业；2、 熟练应用JavaScript及XML语言；3、 英语四级及以上；4、 有团队合作意识，良好的职业素养与敬业精神；5、 有程序开发工作经验者优先考虑。            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "Javascript开发程序员\n    全职",
          "company": "塔塔信息技术（中国）股份有限公司",
          "scale": "规模：1000人以上",
          "source": "大街"
        },
        {
          "salary": "15000-20000元/月",
          "advance": "15000-20000元/月\n        晋升空间大\n        五险一金\n        住房补贴\n        期权激励",
          "describe": "岗位职责\n    \n        \n            \n入职后公司负责提供住宿和每日饭补。 ?岗位职责： 1. 协助开发公司在线平台产品； 2. 协助创建并完善内部的前端工具和框架； 3. 与后端工程师合作, 定义程序接口，保证代码质量； 4. 移动端前沿技术研究和新技术调研。 ?工作要求： 1. 精通Javascript、HTML/HTML5等技术，了解ES6标准，并应用到实际开发； 2. 精通javascript面向对象和各种设计模式； 3. 熟悉主流JavaScript框架和库，有react.js开发经验者更佳； 4. 掌握HTML5相关技术要点，并在实际项目中有应用经验； 5. 有强烈的上进心和求知欲，善于学习和运用新知识； 6. 善于沟通和逻辑表达，良好的团队合作精神和积极主动的沟通意识。            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "Javascript开发工程师\n    全职",
          "company": "上海图畅云计算科技有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "8000-15000元/月",
          "advance": "8000-15000元/月\n        带薪年假\n        工作餐\n        晋升空间大\n        五险一金",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：\n1、开发，维护和改进针对桌面以及移动H5端的App及其他项目；\n2、参与官方网站，微信服务号网站，内部管理网站的整体架构的迭代开发；\n3、部署、监控与评价分析前端网站页的性能；\n4、主要利用HTML、CSS和JavaScript等编程语言为网站编写新的功能以及相关的后台工具，不断重构与改进前端代码架构；\n5、诊断分析用户在使用网站时所遇到的问题并提供改进方案；\n6、在平等开放的工作环境中与产品经理以及其他团队的同事一起合作，打造高质量的产品。            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JavaScript\n    全职",
          "company": "中治创投（北京）投资咨询有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "10000-15000元/月",
          "advance": "10000-15000元/月\n        五险一金\n        带薪年假\n        年终多薪\n        晋升空间大",
          "describe": "岗位职责\n    \n        \n            \n1.精通java script,熟练掌握语言本质，常规函数对象，DOM操作和事件处理机制等。\n2.能使用java script编写封装良好的前端交互组件，对用户体验有丰富的理解。\n3.熟悉jauery,能熟练运用jauery及扩展。\n4.熟悉HTML/CSS网页制作技术，对页面的结构设计和样式应用有充分的理解。\n\n岗位职责\n1.负责产品java script的架构和编程。\n2.利用java script/HTML/CSS等各种前端技术编写web ui。\n3.优化产品页面的前端性能。\n4.保证产品页面的高质高素，解决主流游览器及不同版本之间兼容性问题。\n\n工作地址\n北京市朝阳区望京中环南路9号望京大厦C座4层            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JAVASCRIPT技术开发\n    全职",
          "company": "北京万邦华唐科技有限公司",
          "scale": "规模：50 - 99人",
          "source": "大街"
        },
        {
          "salary": "5000-8000元/月",
          "advance": "5000-8000元/月\n        五险一金\n        带薪年假\n        年终多薪\n        期权激励\n        晋升空间大\n        内部培训",
          "describe": "岗位职责\n    \n        \n            \n任职资格：\n1.应往届理工科相关专业，其他专业优秀毕业生均可；\n2.应届生有无经验均可，有经验者经考核合格直接上岗，无经验且符合条件者可申请实训后上岗，入职转正薪资5000~8000元；\n3.对IT/互联网行业不感兴趣者，请勿投简历(面试时请携带学历证书等相关证件)\n岗位职责：\n1、公司有完善的新人培训体系，新人在项目经理带领下掌握Linux、Mysql、JavaScript及HTML5等；\n2、由项目经理带领完成大型网站架构等项目；\n待遇：\n1、试用期1-3个月,转正后享有平均月薪范围5000-8000元；\n2、五险一金,年底双薪,超长带薪年假,公司组织聚餐、KTV、烧烤、季度旅游等；\n3、公司有广阔晋升空间，技术工程师-项目组长-项目/产品经理-技术总监；\n工作时间:09：00至17:00(双休)            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS开发工程师实习\n    全职",
          "company": "北京优才创智科技有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "5000-8000元/月",
          "advance": "5000-8000元/月\n        五险一金\n        带薪年假\n        年终多薪\n        期权激励\n        晋升空间大\n        内部培训",
          "describe": "岗位职责\n    \n        \n            \n任职资格：\n1.应往届理工科相关专业，其他专业优秀毕业生均可；\n2.应届生有无经验均可，有经验者经考核合格直接上岗，无经验且符合条件者可申请实训后上岗，入职转正薪资5000~8000元；\n3.对IT/互联网行业不感兴趣者，请勿投简历(面试时请携带学历证书等相关证件)\n\n岗位职责：\n1、公司有完善的新人培训体系，新人在项目经理带领下掌握Linux、Mysql、JavaScript及HTML5等；\n2、由项目经理带领完成大型网站架构等项目；\n\n待遇：\n1、试用期1-3个月,转正后享有平均月薪范围5000-8000元；\n2、五险一金,年底双薪,超长带薪年假,公司组织聚餐、KTV、烧烤、季度旅游等；\n3、公司有广阔晋升空间，技术工程师-项目组长-项目/产品经理-技术总监；\n\n工作时间:\n09：00至17:00(双休)            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS开发工程师实习\n    全职",
          "company": "北京优才创智科技有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "10000-20000元/月",
          "advance": "10000-20000元/月\n        年终多薪\n        期权激励\n        员工持股\n        晋升空间大\n        绩效奖金多",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、参与公司互联网产品前端开发工作；2、参与并负责HTML5、WebGL相关产品的研发与开发工作；3、主要完成基于WebGL的3D展示以及交互操作的开发。4、完成研发部门老大安排的其它工作任职资格：1. 熟练掌握three.js 的开发基础，有three.js 开发经验；2. 熟悉三维图形图像的理论基础，掌握基本的三维计算相关的数学知识；3. 精通JavaScript、Ajax，熟悉jQuery，bootstrap等前端框架,有模块化开发和编写单元测试能力4. 熟悉HTML、DIV+CSS等前端技术，熟悉DOM模型，对浏览器兼容性、http协议、前端性能优化等有深入理解5. 对技术有强烈的进取心，具有良好的沟通能力和团队合作精神、优秀的分析问题和解决问题的能力;6. 有THREE.JS项目经验者优先            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "Three.Js开发工程师（webgl方向）\n    全职",
          "company": "深圳市网汇天下网络技术有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "10000元以上/月",
          "advance": "10000元以上/月\n        五险一金\n        绩效奖金\n        补充医疗保险\n        包吃\n        弹性工作\n        节日福利\n        加班补助",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、根据游戏策划案，开发手机游戏HTML5客户端；2、开发微信HTML5小游戏。任职资格：1、计算机或者软件类相关专业本科以上毕业；2、精通JavaScript，HTML，CSS，Lua，至少两年以上开发经验；3、熟悉cocos2d-js引擎，掌握HTML5游戏开发技巧；4、有iPhone、Android等手机游戏开发经验；5、责任心强，学习快，热衷于技术钻研，工作踏实诚恳，有较强的抗压能力。工作地址：上海市徐汇区云锦路500号绿地汇中心A栋            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "Cocos2d-js开发工程师\n    全职",
          "company": "上海好体信息科技有限公司",
          "scale": "规模：50 - 99人",
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议\n        五险一金\n        绩效奖金\n        加班补助\n        餐补\n        带薪年假\n        弹性工作\n        定期体检\n        节日福利",
          "describe": "岗位职责\n    \n        \n            \n任职要求：1、计算机相关专业，本科或以上学历；2、具有2年以上从事前端开发的经历，最好有中大型网站的工作经验；能够提出网站前端性能优化的相关建议；3、熟悉jQuery框架开发，有独立开发jQuery插件的能力；4、具有较强的自主学习能力，具有高度责任心，较高的职业化态度；5、能够自我驱动，有一定的管理协调能力；6、具备较好的技术文档撰写能力。岗位职责：1、负责项目的页面前端开发制作；2、根据业务和项目需求，了解后端技术实施，分析并给出最优的前台技术实现方案。工作地址：西安市雁塔区云水一路与天谷八路十字西北角（环普产业园西边），中软新基地            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "中高级js开发工程师\n    全职",
          "company": "中软国际科技技术服务有限公司",
          "scale": "规模：1000人以上",
          "source": "大街"
        },
        {
          "salary": "8000-15000元/月",
          "advance": "8000-15000元/月\n        五险一金\n        带薪年假\n        绩效奖金多\n        晋升空间大",
          "describe": "岗位职责\n    \n        \n            \n热爱node.js/meteor开发理念热爱全栈编程技术热爱nodeql非关系型数据库熟练前端大加分创业经验大加分Linux/Mac开发大加分Github重度使用大加分            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "node.js\n    全职",
          "company": "开业啦（上海）网络技术有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "6000元以上/月",
          "advance": "6000元以上/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：该职位主要为欧美客户提供微软开发平台的咨询与支持，负责为开发人员通过网络论坛和电子邮件、网上聊天等方式提供代码建议及解决方案, 确保顾客对于微软的服务与产品持续地认可与满意。任职要求：1.大学英语四级以上，读写熟练2.两年以上开发经验，熟练使用Node.js开发语言，同时熟悉以下开发技术优先：C#、Java、JavaScript、XAML、ASP.NET、Python、PHP3.熟悉Visual Studio开发平台优先考虑4.积极进取，能够自我驱动,有一定的自学能力，有对技术钻研的热情；5.善于沟通，抗压能力强，能够适应快节奏的工作内容；6.热爱技术，对微软的产品技术感兴趣            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "Node.js开发支持工程师\n    全职",
          "company": "上海微创软件股份有限公司",
          "scale": "规模：1000人以上",
          "source": "大街"
        },
        {
          "salary": "10000元以上/月",
          "advance": "10000元以上/月\n        五险一金\n        带薪年假\n        晋升空间大",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：1、参与web开发项目，负责网页制作及前端交互开发； 2、全面理解和分析网站结构，优化架构标准，提高网站的实用性； 3、配合项目组内其他工作，保持与其他成员的良好沟通，推进项目进度，保证项目质量。任职要求：1、精通原生JavaScript面向对象机制，理解JS执行机制，对原型，作用域等有深刻的认识；2、熟悉jQuery框架； 3、有独立编写JavaScript交互插件的能力；4、熟悉语义化HTML，了解盒模型及定位； 5、3-5年以上前端页面与脚本开发经验。            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS开发工程师\n    全职",
          "company": "大连大商天狗电子商务有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "10000-20000元/月",
          "advance": "10000-20000元/月\n        五险一金\n        带薪年假\n        节假日津贴\n        办公环境优美气氛好\n        弹性工作制\n        免费体检\n        不限量水果零食",
          "describe": "岗位职责\n    \n        \n            \n1）参与公司项目的原型设计、界面设计和DEMO制作2）根据需求进行相关页面编码工作2）根据需求进行视觉和交互优化工作必要条件：1）本科及以上学历，1年以上相关工作经验2）精通HTML+DIV+CSS，熟悉各种页面布局，熟悉HTML5和CSS33）熟练掌握Javascript，DOM和JSON对象，理解Ajax原理4）熟练使用Photoshop、Dreamwever等工具，熟悉eclipse和SVN5）具有良好的设计理念，以及色彩感觉和审美能力，对视觉和交互体验有深刻理解和创新精神6）良好的团队合作精神和高度的责任感，能够承受压力，保证工作质量            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "jS开发工程师（上海）\n    全职",
          "company": "上海至臻信息科技有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "10000元以上/月",
          "advance": "10000元以上/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：\n1. 依据产品需求完成高质量的Web前端开发和维护；\n2. 与产品人员、设计师沟通协调，完成设计内容的技术实现，与后端开发人员紧密配合，完成产品的整体开发；\n3. 熟练使用各种脚本调试器、dom查看器等定位问题。\n\n任职要求：\n1. 本科以上学历，1年以上Web前端开发经验；\n2. 精通各种Web前端技术，包括HTML/CSS/Javascript；\n3. 熟悉模块化、前端编译和构建工具，如seajs/webpack；\n4. 深刻理解Web标准，对可用性、可访问性等相关知识有实际的了解和实践经验；\n5. 对技术有强烈的进取心，具有良好的沟通能力和团队合作精神、优秀的分析问题和解决问题的能力；\n6. 有react JS开发经验者，优先考虑。\n\n工作地址：\n上海市闸北区彭江路602号大宁德必易园E座339室            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS开发工程师\n    全职",
          "company": "上海飞牛集达电子商务有限公司",
          "scale": "规模：1000人以上",
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n职位描述：大专以上学历，3年以上工作经验，Java基础好，熟悉Javascript，JQuery组件或JS，3年以上开发经验，学习能力，理解能力，逻辑思维能力好，熟悉华为Jalor5开发框架优先。            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS开发工程师\n    全职",
          "company": "软通动力信息技术（集团）有限公司",
          "scale": "规模：1000人以上",
          "source": "大街"
        },
        {
          "salary": "20000-30000元/月",
          "advance": "20000-30000元/月\n        绩效奖金多\n        年终多薪\n        晋升空间大",
          "describe": "岗位职责\n    \n        \n            \n1.使用js设计并实现流畅的交互流程\n2.使用js读取后台数据，在前端渲染成HTML代码\n3.发掘有益提高用户体验的各个方面\n4.与后台工程师协同完成各种特效及数据交互功能\n\n技术要求：\n1.精通javascript，jQuery框架\n2.熟悉CSS，HTML等前端相关技术\n3.有丰富的关于Web标准、易用性、浏览器端原理以及网站性能等方面的知识\n4 英语好\n5 带领过团队\n\n经验要求：\n1. 根据HTML原型快速实现整站的交互设计\n2、熟悉HTML、CSS、 JS，熟练手写代码；\n3、精通HTML DOM对象的JavaScript编程；了解并使用过常用JavaScript框架（如jQuery、artDialog等）；\n4、了解W3C标准，了解不同浏览器之间的差异，制作出的页面能够有很好的兼容性；\n5、至少1年相关Web前端开发经验。有过编写JavaScript 控件经验和基于JavaScript、Ajax框架的项目经验；\n6、对HTML5/CSS3有所了解；\n7、 有解决问题、钻研新技术的兴趣和能力，具有良好的沟通能力和团队合作意识。            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS高端工程师\n    全职",
          "company": "北京军朗广告有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "15000元以上/月",
          "advance": "15000元以上/月",
          "describe": "岗位职责\n    \n        \n            \n工作职责：\n1.负责使用HTML5+NODE.JS+Javascript开发本地桌面应用。\n2.负责Node.js、Javascript开发技术培训。\n\n任职要求：\n1、两年以上Javascript开发经验，对Node.js、Javascript以及其他新技术充满热情；\n2、熟练掌握Javascript语言编程，熟悉Node.js标准库的使用，能完成相应的扩展开发；\n3、具备Express、async、connect等框架的使用经验，熟悉HTTP，TCP/IP网络协议；\n4、精通MySQL等关系型数据库应用系统设计及优化，熟悉存储引擎及存储过程；\n5、精通Jquery、JqueryU等前端库。\n6、熟练掌握HTML5、CSS3\n6、高度的责任心以及良好团队合作精神。\n7、有Nw.js以及Hex 开发经验者优先。\n\n工作地址：\n北京市顺义区天竺空港工业区A区天纬四街7号，雅昌艺术中心            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "高级NODE.JS开发工程师\n    全职",
          "company": "雅昌企业（集团）有限公司",
          "scale": "规模：1000人以上",
          "source": "大街"
        },
        {
          "salary": "6000-15000元/月",
          "advance": "6000-15000元/月\n        五险一金\n        带薪年假\n        人工智能\n        高速发展",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：\n1.负责开放平台、云服务API等后台服务的开发\n\n岗位要求：\n1.良好的代码规范，注重细节；\n2.具备Node.js全栈开发能力 ；\n3.掌握以下技术点的大多数：git、github、express、koa、restify、nam、promise、mongo、redis 、socket、linux、i18n、nginx、nfs、grunt、less、html⋯⋯\n4.喜欢体验互联网产品；            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "Node.js开发\n    全职",
          "company": "广州图普网络科技有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "8000-10000元/月",
          "advance": "8000-10000元/月\n        五险一金\n        年终多薪\n        晋升空间大\n        免费体检",
          "describe": "岗位职责\n    \n        \n            \n职责：\n为前端工程师提供支持并协作，负责前端组件库及框架的开发和维护；\n维护及优化网站页面的前端性能，优化代码并保持良好兼容性；\n协助后台开发人员解决前端技术问题；\n\n要求：\n两年以上前端开发工作经验，注重细节，具有良好的UE视角；\n具备良好的编码规范和抽象意识，我们更希望专注的程序猿而不是花哨的前端狗；\n精通html5、CSS3，Javascript，能够偏执于优雅的code；\n丰富浏览器兼容开发经验，有移动端前端开发的经验者我们会优先考虑；\n了解一种以上的后端开发语言，比如JSP/PHP/.net/Python，这对于协作会有很大帮助；\n精通一种或以上的开源js框架，有独立前端框架或组件开发经验者我们灰常欢迎；            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS开发工程师\n    全职",
          "company": "湖北博盛数字教育服务有限公司",
          "scale": "规模：50 - 99人",
          "source": "大街"
        },
        {
          "salary": "4000-8000元/月",
          "advance": "4000-8000元/月\n        五险一金\n        最前沿技术的实战机会\n        带薪年假\n        晋升空间大\n        节假日津贴\n        优秀团队\n        免费体检",
          "describe": "岗位职责\n    \n        \n            \n【工作职责】\n1、负责nodejs后端开发；\n2、负责项目的设计、编码、测试及bug处理；\n3、负责配合移动客户端进行编码开发。\n\n【能力要求】\n1、精通JavaScript，熟悉nodejs，并可以独立开发nodejs module；\n2、熟练使用git；\n3、熟悉CoffeeScript者优先；\n4、没用过nodejs，熟悉或了解python,ruby其中一种或几种语言亦可；\n5、熟悉linux操作系统，有服务器运维经验者优先。            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "Node.js开发工程师\n    全职",
          "company": "武汉合元信息技术有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "20000-30000元/月",
          "advance": "20000-30000元/月\n        绩效奖金多\n        年终多薪\n        晋升空间大",
          "describe": "岗位职责\n    \n        \n            \n1.使用js设计并实现流畅的交互流程\n2.使用js读取后台数据，在前端渲染成HTML代码\n3.发掘有益提高用户体验的各个方面\n4.与后台工程师协同完成各种特效及数据交互功能\n\n技术要求：\n1.精通javascript，jQuery框架\n2.熟悉CSS，HTML等前端相关技术\n3.有丰富的关于Web标准、易用性、浏览器端原理以及网站性能等方面的知识\n4 英语好\n5 带领过团队\n\n经验要求：\n1. 根据HTML原型快速实现整站的交互设计\n2、熟悉HTML、CSS、 JS，熟练手写代码；\n3、精通HTML DOM对象的JavaScript编程；了解并使用过常用JavaScript框架（如jQuery、artDialog等）；\n4、了解W3C标准，了解不同浏览器之间的差异，制作出的页面能够有很好的兼容性；\n5、至少1年相关Web前端开发经验。有过编写JavaScript 控件经验和基于JavaScript、Ajax框架的项目经验；\n6、对HTML5/CSS3有所了解；\n7、 有解决问题、钻研新技术的兴趣和能力，具有良好的沟通能力和团队合作意识。            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS高端开发工程师\n    全职",
          "company": "北京军朗广告有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "10000-15000元/月",
          "advance": "10000-15000元/月\n        五险一金\n        年终多薪\n        带薪年假\n        零食无限",
          "describe": "岗位职责\n    \n        \n            \n#岗位职责#\n1. 负责 node.js 项目的功能模块编写\n2. 负责接口层的数据交互，比如 ajax , websocket\n \n#任职期望#\n1. 熟悉 node.js 和 javascript 开发，一年服务器端开发经验\n2. 掌握 js 面向对象的编程思想，继承，原型，闭包的使用\n3. 熟悉 socket 编程，HTTP、TCP/IP网络协议\n4. 熟悉 mysql, redis 数据库\n5. 熟悉 express 框架\n6. 熟悉 node.js 部署环境与项目维护\n \n#加分项#\n有大规模 socket 连接处理经验优先\n有自己的技术博客，经常总结与分享技术\n有一定的英文阅读能力\n良好的自我管理者，会对自己做时间管理或使用效率软件来提高自己的工作\n \n计算机、通信、数学等相关专业毕业，有激情有梦想有野心，最重要的是具备优秀的自学能力。            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "Node.js 开发工程师\n    全职",
          "company": "成都逸创信息技术有限公司",
          "scale": "规模：50 - 99人",
          "source": "大街"
        },
        {
          "salary": "8000-10000元/月",
          "advance": "8000-10000元/月\n        绩效奖金多\n        年终多薪\n        晋升空间大",
          "describe": "岗位职责\n    \n        \n            \n岗位描述：\n1、对Web前端开发充满兴趣，熟练掌握各种WEB前端技术:Javascript/HTML5/CSS等\n2、熟练掌握前端和后端的数据交换机制\n3、在熟悉JQuery等开源框架的基础上，对原生Javascript也能熟练编写.了解其他常见的js库 （EXTjs、Prototype、YUI等）;\n4、能独立设计js框架优先;\n5、工作踏实肯投入、对工作有很强的责任心，具有很强的学习能力和对新技术的追求精神，对用户交互设计有浓厚的兴趣，并乐于钻研Web前端效果的技巧与实现。\n\n岗位要求：\n1. 本科以上学历，两年以上工作经验，对JavaScript语言有十分深入的了解；\n2. 掌握至少一门服务器端编程语言，对OOP有一定的认识，对前后端分工与合作有不错的认知； 3. 具备优秀的编程能力，对富客户端架构具有相当的了解；\n4. 熟练掌握HTML/CSS/XML/JSON，对HTTP协议足够熟悉；\n5. 对互联网产品有着良好的感觉，对人机交互、用户体验等有较为深入的了解；\n6. 思路清晰，具备良好的沟通能力和理解能；            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS前端开发工程师\n    全职",
          "company": "北京军朗广告有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "6000-8000元/月",
          "advance": "6000-8000元/月\n        绩效奖金多\n        带薪年假\n        年终多薪",
          "describe": "岗位职责\n    \n        \n            \n岗位描述：\n1、对Web前端开发充满兴趣，熟练掌握各种WEB前端技术:Javascript/HTML5/CSS等\n2、熟练掌握前端和后端的数据交换机制\n3、在熟悉JQuery等开源框架的基础上，对原生Javascript也能熟练编写.了解其他常见的js库 （EXTjs、Prototype、YUI等）;\n4、能独立设计js框架优先;\n5、工作踏实肯投入、对工作有很强的责任心，具有很强的学习能力和对新技术的追求精神，对用户交互设计有浓厚的兴趣，并乐于钻研Web前端效果的技巧与实现。\n\n岗位要求：\n1. 本科以上学历，两年以上工作经验，对JavaScript语言有十分深入的了解；\n2. 掌握至少一门服务器端编程语言，对OOP有一定的认识，对前后端分工与合作有不错的认知； 3. 具备优秀的编程能力，对富客户端架构具有相当的了解；\n4. 熟练掌握HTML/CSS/XML/JSON，对HTTP协议足够熟悉；\n5. 对互联网产品有着良好的感觉，对人机交互、用户体验等有较为深入的了解；\n6. 思路清晰，具备良好的沟通能力和理解能；            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS前端开发工程师\n    全职",
          "company": "北京军朗广告有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "8000-10000元/月",
          "advance": "8000-10000元/月\n        绩效奖金多\n        年终多薪\n        晋升空间大",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：\n1. 根据公司产品发展方向，负责/参与网站制作html编码；\n2. 负责产品的页面制作及维护，根据设计图完成页面编码;\n3. 根据业务功能需求，编写JS和CSS代码；\n4. 协助后台程序员完成功能镶嵌和调试.\n\n技能要求：\n1.2年以上工作经验，精通HTML/HTML5/CSS/CSS3/JavaScript/AJAX，熟悉W3C标准，对页面的性能和浏览器兼容有丰富的实践经验；\n2.丰富的web前端研发经验，参与过大型互联网产品的设计研发工作;\n3.熟悉各种HTML5框架，如Bootstrap,有过响应式页面开发经验***;\n4.熟练掌握前端页面与后台服务的数据交换机制,有PHP开发经验并熟悉后台语言者***;\n5.丰富的CSS/Javascript优化、兼容性经验;\n6.至少1年以上HTML5网站开发经验；\n7.有相关HTML5网站制作经验者优先;            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS/JQERY工程师\n    全职",
          "company": "北京军朗广告有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n职位描述\n1）本科及以上学历，3年以上相关工作经验\n2）精通HTML+DIV+CSS，熟悉各种页面布局，熟悉HTML5和CSS3\n3）熟练掌握Javascript，DOM和JSON对象，理解Ajax原理\n4）熟练使用Photoshop、Dreamwever等工具，熟悉eclipse和SVN\n5）具有良好的设计理念，以及色彩感觉和审美能力，对视觉和交互体验有深刻理解和创新精神\n6）良好的团队合作精神和高度的责任感，能够承受压力，保证工作质量\n工作地址：\n上海 查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "前端开发工程师（（偏重JS））\n    全职",
          "company": "大连阿尔泰克信息技术有限公司",
          "scale": "规模：500 - 999人",
          "source": "大街"
        },
        {
          "salary": "6000-15000元/月",
          "advance": "6000-15000元/月\n        五险一金\n        绩效奖金多\n        晋升空间大\n        带薪年假\n        节假日津贴\n        弹性工作制\n        内部培训\n        公司前景好\n        行业领先薪酬待遇",
          "describe": "岗位职责\n    \n        \n            \n任职要求：1、计算机相关专业，本科或以上学历；2、具有2年以上从事前端开发的经历，最好有中大型网站的工作经验；能够提出网站前端性能优化的相关建议；3、熟悉jQuery框架开发，有独立开发jQuery插件的能力；4、具有较强的自主学习能力，具有高度责任心，较高的职业化态度；5、能够自我驱动，有一定的管理协调能力；6、具备较好的技术文档撰写能力。岗位职责：1、负责项目的页面前端开发制作；2、根据业务和项目需求，了解后端技术实施，分析并给出最优的前台技术实现方案。            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "js开发工程师\n    全职",
          "company": "中软国际科技服务有限公司",
          "scale": "规模：1000人以上",
          "source": "大街"
        },
        {
          "salary": "15000元以上/月",
          "advance": "15000元以上/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责:\n1. 利用HTML5、CSS3等相关技术开发手机、平板电脑等多平台上的WEB/WAP前端应用；\n2. 利用JavaScript实现WebApp中的交互效果；\n3. 负责产品的持续迭代工作；\n4. 负责前端代码开发;\n5. 配合产品经理和UI设计师 ，研究并改善用户体验；\n\n任职要求:\n1. 2-3年 JavaScript开发工作经验；\n2.熟悉HMTL5、CSS3新增标签、属性及操作\n3.熟悉jquery mobile,seajs，framework7等框架\n\n工作地址：\n北京海淀区北三环西路43号中航广场1号楼6层            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "移动端Js工程师（搜悦子公司）\n    全职",
          "company": "人人贷商务顾问（北京）有限公司",
          "scale": "规模：50 - 99人",
          "source": "大街"
        },
        {
          "salary": "15000-30000元/月",
          "advance": "15000-30000元/月\n        五险一金\n        晋升空间大\n        期权激励\n        员工持股\n        办公环境优美气氛好\n        弹性工作制\n        优秀团队\n        公司前景好\n        试用期全薪",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：\n后台系统开发\n\n岗位要求：\n1、两年以上服务器开发经验，对Node.js以及其他新技术充满热情；\n2、熟练掌握Javascript语言编程，熟悉Node.js标准库的使用，能完成相应的扩展开发；\n3、具备Express、async等框架的使用经验，熟悉HTTP，TCP/IP网络协议；\n4、精通MySQL等关系型数据库应用系统设计及优化，熟悉存储引擎及存储过程；\n5、精通 Redis；\n6、熟悉使用Git管理代码；\n7、具有Linux上的开发经验，能够编写常用和基本的Shell脚本；\n8、高度的责任心以及良好团队合作精神。\n9、有高并发Web项目后端开发和海量数据处理经验的优先；            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "Node.js\n    全职",
          "company": "北京花花草草科技有限公司",
          "scale": "规模：50 - 99人",
          "source": "大街"
        },
        {
          "salary": "4000-8000元/月",
          "advance": "4000-8000元/月\n        不打卡\n        不加班\n        额外项目奖金\n        中医体检",
          "describe": "岗位职责\n    \n        \n            \n任职要求:1、熟悉Node.js，websocket编程2、具有流媒体技术相关经验3、熟悉Linux编程4、计算机、通信等相关专业，大专以上学历，1年以上相关工作经验我们提供的薪酬优于西安市90%以上公司，别的公司有的普通体检我们也有，还有常年的中医养生保健为您服务！补充医疗保险、商业保险是必须的！不加班，不打卡，工作时间弹性定！节日福利小礼品，还有咖啡饮料常供应！            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "node.js工程师\n    全职",
          "company": "西安万像电子科技有限公司",
          "scale": "规模：50 - 99人",
          "source": "大街"
        },
        {
          "salary": 0,
          "advance": "薪资面议",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：\n1、负责公司网站平台的设计制作；\n2、负责公司Web应用的设计和开发；\n3、依据需求，完成网页活动页面、版块的更新及维护；\n4、配合网站编辑完成突发性内容的更新及维护；\n5、参与网站改版，负责页面代码重构；\n6、领导安排的其他工作。\n\n任职要求：\n1、专科及以上学历，三年以上团队协作开发经验，有责任心，爱钻研，爱思考；\n2、绝对熟练DIV+CSS制作方式，对网页标准有独特的见解；\n3、精通JavaScript，熟练使用JavaScript前端脚本，最好有常用效果和功能的积累。会用常见的JavaScript类库，如jQuery等；\n4、理解异步请求的原理，能够配合后端开发简单的Ajax应用；\n5、热爱前端工作，并计划长期从事该方向的工作；\n7、具备初级网页设计能力，有自己的作品、个人网站者优先；\n8、了解后台语言，例如PHP，NodeJS等者优先；\n9、熟练HTML5、CSS3者优先。\n\n工作地址：\n北京市朝阳区东三环弘燕路10号德元九和大厦908室            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS开发工程师\n    全职",
          "company": "大连文森特软件科技有限公司北京分公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "10000-15000元/月",
          "advance": "10000-15000元/月\n        带薪年假\n        绩效奖金多\n        晋升空间大",
          "describe": "岗位职责\n    \n        \n            \n岗位职责： \n1、熟练使用javascript开发，能熟练使用JQuery，负责web应用产品的前端架构设计、研发、维护工作； \n2、熟知W3C标准及规范，熟练应用HTML+CSS构架页面，了解响应式布局以及页面优化等规则； \n3、熟悉移动开发框架； \n4、JavaScript程序模块开发，通用类库、框架编写； \n5、负责系统Web前端页面开发,以及交互的技术设计、开发、代码优化等。 \n\n职位要求： \n1、一年Javascript与后端交互以上工作经验； \n2、熟悉Javascript/CSS/HTML前端开发技术； \n3、熟悉javascript面向对象机制；至少熟悉一种javascript框架，能够使用框架快速开发； \n4、熟悉前端模块化概念优先、对前端有全局观者优先； \n5、有后端开发经验优先、有熟悉fis、gulp、grunt之类Javascript构建工具优先； \n6、严格遵守团队的代码格式、结构的规定，编写易读、易维护、高质量、高效率的代码； \n7、具有较强的分析和解决问题的能力，具备良好的团队合作精神； \n8、具备较强的学习能力和主动性，有良好的时间和流程意识； \n9、真正热爱前端及技术。            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "js/jq高级工程师\n    全职",
          "company": "北京军朗广告有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "8000-15000元/月",
          "advance": "8000-15000元/月\n        带薪年假\n        绩效奖金多\n        晋升空间大",
          "describe": "岗位职责\n    \n        \n            \n岗位职责： \n1、熟练使用javascript开发，能熟练使用JQuery，负责web应用产品的前端架构设计、研发、维护工作； \n2、熟知W3C标准及规范，熟练应用HTML+CSS构架页面，了解响应式布局以及页面优化等规则； \n3、熟悉移动开发框架； \n4、JavaScript程序模块开发，通用类库、框架编写； \n5、负责系统Web前端页面开发,以及交互的技术设计、开发、代码优化等。 \n\n职位要求： \n1、一年Javascript与后端交互以上工作经验； \n2、熟悉Javascript/CSS/HTML前端开发技术； \n3、熟悉javascript面向对象机制；至少熟悉一种javascript框架，能够使用框架快速开发； \n4、熟悉前端模块化概念优先、对前端有全局观者优先； \n5、有后端开发经验优先、有熟悉fis、gulp、grunt之类Javascript构建工具优先； \n6、严格遵守团队的代码格式、结构的规定，编写易读、易维护、高质量、高效率的代码； \n7、具有较强的分析和解决问题的能力，具备良好的团队合作精神； \n8、具备较强的学习能力和主动性，有良好的时间和流程意识； \n9、真正热爱前端及技术。            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "js原生工程师\n    全职",
          "company": "北京军朗广告有限公司",
          "scale": "规模：1 - 49人",
          "source": "大街"
        },
        {
          "salary": "8000元以上/月",
          "advance": "8000元以上/月",
          "describe": "岗位职责\n    \n        \n            \n职位描述：\n1.大专或以上学历，计算机或者相关专业毕业\n2.3年左右NodeJS开发经验\n3.非常熟悉NodeJS LTS (4.2.x)的特性，有PostgreSQL开发经验\n4.熟悉Hapi系列modules，以及Chai系列和Sinon系列的单元测试modules\n5.熟悉基于Express框架的开发，熟练使用HTML/CSS/客户端JavaScript\n6.有AngularJS开发经验者优先考虑\n7.有Rabbit Message Queue的开发经验或者Elasitc Search开发经验者优先考虑\n8.能够阅读英文文档，具备一定英文编写能力，能够使用英语进行简单沟通\n9.良好的编程风格，独立思考有高度的工作责任感\n10.具有团队开发意识；良好的沟通协调能力，较好的语言表达能力，较好的文字处理能力            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "高级Node.js开发工程师\n    全职",
          "company": "广州诺特软件开发有限公司",
          "scale": "规模：100 - 499人",
          "source": "大街"
        },
        {
          "salary": "6000-10000元/月",
          "advance": "6000-10000元/月\n        绩效奖金多\n        五险一金\n        晋升空间大\n        公司前景好\n        弹性工作制\n        免费体检\n        免费班车",
          "describe": "岗位职责\n    \n        \n            \n1 : ?2本及2本以上学历2：有1年前端开发经验3：有好学精神，，团队精神，有抗压能力 ，            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "JS\n    全职",
          "company": "深圳软通动力科技有限公司",
          "scale": "规模：————",
          "source": "大街"
        },
        {
          "salary": "10000元以上/月",
          "advance": "10000元以上/月",
          "describe": "岗位职责\n    \n        \n            \n岗位职责：\n1.负责服务端通信框架的搭建和完善（客户端基于MQTT协议和WebRTC技术）\n\n职位要求：\n1.熟悉一门或以上服务器开发语言(python, java, php等), 一年以上的 Node.js 开发工作经验\n2.对服务端框架的机制，框架的设计模式，数据库的优化，服务器的负载均衡设计，并发时服务器的优化，服务器的压力测试以及功能模块的单元测试有了解的优先；\n3.良好的学习能力和沟通能力，编码稳健严谨，精益求精，对问题有探究精神\n工作地址：\n上海市浦东新区耀华支路39弄9号 泛微软件大厦 查看职位地图            \n\n\n        \n        \n            登录后即可查看具体职位信息并进行申请职位等操作。 没有帐号？?\n            立即加入",
          "title": "node.js开发工程师\n    全职",
          "company": "上海泛微网络科技股份有限公司",
          "scale": "规模：1000人以上",
          "source": "大街"
        }
      ]
    $scope.items = datas;

    $scope.search = function(){
      $scope.items = datas;
      var searchTexts = $scope.searchTexts.split(" ");
      $scope.items.forEach(function(item){
        var found = 0;
        searchTexts.forEach(function(searchText){
          // console.log(keyword);
          // var reg = new RegExp("searchText", 'i');
          var describe = item.describe.toLowerCase();
          searchText = searchText.toLowerCase();
          if(describe.indexOf(searchText) >= 0){
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
    

