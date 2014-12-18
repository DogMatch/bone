Meteor.startup(function () {

  Cloudinary.config({
    cloud_name: 'bone',
    api_key: '327823257725943',
    api_secret: 'emw0eJqOE0T-4ZQR1p7x_jHMik8'
  });

  Meteor.methods({
    save_url:function(image){
      console.log(image);
      Dogs.insert(image.upload_data);
    }
  });

});
