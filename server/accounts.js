'use strict';
Accounts.onCreateUser(function(options, user) {
  // user.profile = options.profile ? options.profile : {};
  // user.profile.zip = '';
  // user.profile.current_location = null;
  // user.profile.myDogs = [];

 if(user.services.facebook) {
    user.username = user.services.facebook.name;
    user.avatar = "http://graph.facebook.com/" +
      user.services.facebook.id + "/picture/?type=square";
  }

  return user;
});
