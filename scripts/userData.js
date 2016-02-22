(function(module) {
  'use strict';
//***test variables and functions, to be deleted***


// ***end delete test section***
  CurrentUser.all = [];
  //creates a new object for the user with properties to match data input
  function CurrentUser(ops) {
    Object.keys(ops).forEach(function(e, index, keys) {
      this[e] = ops[e];
    },this);
  }
  //pulls data from Firebase if the user has an id
  CurrentUser.pullData = function(userId) {
    var userInfo = new Firebase('https://blinding-fire-6623.firebaseio.com/web/data/' + userId);
    userInfo.on('value', function(snapshot){
      if(snapshot.val()){
        CurrentUser.all = new CurrentUser(snapshot.val());
      }
      else{
        console.log('No existing data');
      }
    }, function(error){
      console.log('Read failed', error);
    });
  };
  //Saves data to Firebase, will overwrite any existing data for the specific user.
  CurrentUser.saveData = function(userId) {
    var userInfo = new Firebase('https://blinding-fire-6623.firebaseio.com/web/data/');
    var storeData = userInfo.child(userId);
    storeData.set(CurrentUser.all);
  };
  //erases the data in firebase for the specific user
  CurrentUser.eraseData = function(userId) {
    if(userId){
      var userData = new Firebase('https://blinding-fire-6623.firebaseio.com/web/data/' + userId);
      userData.remove();
    }
  };

  module.CurrentUser = CurrentUser;
}(window));

var test;
var baseData = [];
function kitData() {
  $.getJSON('data/baseKit.json')
  .done(function(data){
    baseData = data;
    baseData.forEach(function(ele){
      $('.base-kit').append(appendToPage(ele));
    });
  });
};

function appendToPage(ele) {
  var template = Handlebars.compile($('#check-box-template').text());
  console.log(ele.item);
  return template(ele);
};
