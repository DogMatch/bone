Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile ? options.profile : {};
  user.profile.zip = '';
  user.profile.current_location = null;
  user.profile.myDogs = [];
  return user;
});

Meteor.publish("dogProfiles", function () {
  if(!this.userId) return null;
  return Dogs.find();
});

Meteor.publish("allUserData", function () {
  if(!this.userId) return null;
  return Meteor.users.find({}, {fields: {
    '_id': true,
    'emails': true,
    'profile': true,
  }});
});

Meteor.startup(function () {
  //Meteor.users.remove({});
  //Dogs.remove({});

  var userCount = Meteor.users.find().count();
  if ( userCount === 0) {
    console.log('Seeding data!');
    var usersSeed = [];
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
        age: Math.floor(Random.fraction()*10),
        user_id: (usersSeed[i] || usersSeed[0]),
        img: '',
        match: 0
      });
    }
    console.log(Dogs.find());
  }
});
