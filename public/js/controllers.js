var app = angular.module('skillApp', []);

app.controller('skillCtrl',function($scope, $log, $http) {

    $scope.searchTexts = "";

    // $scope.datas  = [];
    var datas = [];

    $http.get('/lib/data').success(function(data) {  
      datas= data.datas;
      $scope.items = datas.slice(0, 10);
    })  



    $scope.search = function(){
      $scope.items = datas;
      var searchTexts = $scope.searchTexts.split(" ");
      $scope.items.forEach(function(item){
        var found = 0;
        searchTexts.forEach(function(searchText){
          // console.log(keyword);
          // var reg = new RegExp("searchText", 'i');
          var describe = item.sk_descriptions.toLowerCase();
          searchText = searchText.toLowerCase();
          if(describe.indexOf(searchText) >= 0){
            found ++;
          }
          // console.log('found: ' + keyword + ' ' + found + ' times.');
        item.match = found;
        // ng-click="search()"
        });

      })
      $scope.items  = $scope.items.slice(0, 10);
    }

    

    $scope.order = "match";


});

