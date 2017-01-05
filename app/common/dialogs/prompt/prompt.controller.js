angular.module('zhDialogs',[])
.controller('zhDialogsController', ['$scope', '$mdDialog', 'zhDialogsService', function($scope, $mdDialog, zhDialogsService){

// console.log($scope.postAction);
  $scope.closeDialog = function(){
    zhDialogsService.submitNotifyMe({ email_id: $scope.promptEmailId, postURL: $scope.postURL, entity_id: $scope.ctrl.entityID}).then(function(result){
    }, function(error){

    });
    $mdDialog.hide();
  }
  $scope.abortDialog = function(){
    $mdDialog.cancel();
  }
}])
// .directive('parseValidations', function(tElm, attrs) {
//   console.log(attrs);
//   var tmpElement = tElm;
//
//   if(attrs.indexOf("required")) {
//     tmpElement.addAttribute("required");
//   }
//
//   tElm.replaceWith(tmpElement);
// }
