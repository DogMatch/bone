Meteor.startup(function () {
  //Meteor.users.remove({});
  //Dogs.remove({});

  var userCount = Meteor.users.find().count();
  var dogCount = Dogs.find().count();
  console.log('users: ' + userCount);
  console.log('dogs: ' + dogCount);

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

  if (dogCount === 0) {
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
        randomize: Math.random(),
        user_id: (usersSeed[i] || usersSeed[0])
      });
    };
  }
});
