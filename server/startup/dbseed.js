Meteor.startup(function () {
  //Meteor.users.remove({});
  //Dogs.remove({});

  Cloudinary.config({
    cloud_name: 'bone',
    api_key: '327823257725943',
    api_secret: 'emw0eJqOE0T-4ZQR1p7x_jHMik8'
  });

  Meteor.methods({
    save_url:function(image){
      console.log(image);
      Images.insert(image.upload_data);
    }
  });

  //Dogs.update({}, {$addToSet: {randomize: Math.random()}}, {multi: true});

  var userCount = Meteor.users.find().count();
  if ( userCount === 0) {
    console.log('Seeding data!');
    var usersSeed = []
    usersSeed.push(Accounts.createUser({
      username: 'lance',
      email: 'l@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'david',
      email: 'd@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'glenn',
      email: 'g@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'martin',
      email: 'm@oo.com',
      password: '123456'
    }));
    userCount = Meteor.users.find().count();
  }
  console.log(userCount);

  if (Dogs.find().count() === 0) {
    var names = [
      "Ada",
      "Grace",
      "Marie",
      "Carl",
      "Nikola",
      "Claude"
    ];
    var breeds = [
      "Beagle",
      "Poodle",
      "Black Lab",
      "Collie",
      "Aussie",
      "Aussie"
    ];

    for (var i = 0; i < names.length; i++) {
      Dogs.insert({
        name: names[i],
        breed: breeds[i],
        sex: "",
        bio: "",
        test: "",
        age: Math.floor(Random.fraction()*10),
        user_id: (usersSeed[i] || usersSeed[0])
      });
    };
  }
});
