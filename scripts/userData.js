(function(module) {
  'use strict';
  //***test variables and functions, to be deleted***


  // ***end delete test section***
  CurrentUser.all = {};
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
        $('.emergency-contact-plan').remove();
        CurrentUser.all = new CurrentUser(snapshot.val());
        $('#homepage').append(home.render(CurrentUser.all, '#final-emergency-plan-form-template'));
        CurrentUser.all.lovedOnes.forEach(function(a) {$('#homepage').append(home.render(a, '#final-emergency-plan-lovedones-template'));
      });
        $('#homepage').append(home.render(CurrentUser.all, '#final-emergency-plan-rally-template'));
        $('#homepage').append(home.render(CurrentUser.all, '#final-emergency-plan-userkit-template'));
        $('#edit-plan').prepend(userInput.toHtml(CurrentUser.all, '#personal-info'));
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
