'use strict';
Meteor.startup(function() {

    Cloudinary.config({
    cloud_name: 'bone',
    api_key: process.env.APIKEY,
    api_secret: process.env.SECRET
  });

  Meteor.methods({
    save_url:function(image) {
      console.log(image);
      Dogs.insert(image.upload_data);
    }
  });

});
