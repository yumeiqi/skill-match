var app = angular.module('skillApp', []);

// app.controller('skillCtrl', ['$scope', 'UserInfo', function($scope, UserInfo, $log, $http) {
app.controller('skillCtrl',function($scope, $log, $http) {

    $scope.searchTexts = "";

    // $scope.datas  = [];
    var datas = [];

    // $http.get('/lib/data').success(function(data) {  
    //   datas= data;
    // })  


    // $scope.$on("$ionicView.enter", function() {
    //   var dataes = [];
    //   api.get('/lib/datas' , function(data) {
    //     data.libs.forEach(function(lib) {
    //         dataes.push(lib);
    //     });
    //   });
    //     datas = dataes;
    //     console.log(datas);
    //     skill.init(dataes);
    // });

      // $http.get('/lib/data/').success(function(data){
      //   datas = data;
      //   console.log(datas);

      // });

      $http({
          url:'db.json',
          method:'GET'
          }).success(function(data,header,config,status){
          datas = data;

          }).error(function(data,header,config,status){
          //处理响应失败
          });

      // var promise = UserInfo.query(); // 同步调用，获得承诺接口  
      // promise.then(function(data) {  // 调用承诺API获取数据 .resolve  
      //   for(var i=0;i<data.length;i++){
      //     $scope.datas = data;
      //   } 
      // });    

    // $scope.items = $scope.datas;
    $scope.items = datas;

    console.log($scope.items);

    // $scope.search = function(){
    //   $scope.items = datas;
    //   var searchTexts = $scope.searchTexts.split(" ");
    //   $scope.items.forEach(function(item){
    //     var found = 0;
    //     searchTexts.forEach(function(searchText){
    //       // console.log(keyword);
    //       // var reg = new RegExp("searchText", 'i');
    //       var describe = item.describe.toLowerCase();
    //       searchText = searchText.toLowerCase();
    //       if(describe.indexOf(searchText) >= 0){
    //         found ++;
    //       }
    //       // console.log('found: ' + keyword + ' ' + found + ' times.');
    //     item.match = found;
    //     // ng-click="search()"
    //     });

    //   })
    // }
    // $scope.datas  = $scope.datas.slice(0, 10);

    // $scope.order = "match";

// }]);
});


// app.service('UserInfo', ['$http', '$q', function ($http, $q) {  
//   return {  
//     query : function() {  
//       var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
//       $http({method: 'GET', url: 'db.json'}).  
//       success(function(data, status, headers, config) {  
//         deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
//       }).  
//       error(function(data, status, headers, config) {  
//         deferred.reject(data);   // 声明执行失败，即服务器返回错误  
//       });  
//       return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
//     } // end query  
//   };  
// }]);
    
