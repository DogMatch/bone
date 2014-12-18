'use strict';
Meteor.startup(function () {

  // Meteor.users.remove({});
  // Dogs.remove({});

  var userCount = Meteor.users.find().count();
  var dogCount = Dogs.find().count();
  console.log('users: ' + userCount);
  console.log('dogs: ' + dogCount);

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

    var urls = ['http://res.cloudinary.com/bone/image/upload/v1418769938/eseheoiiidctjdyhmfay.jpg',
    'http://res.cloudinary.com/bone/image/upload/v1418769877/ja9qkisv8xmvwzgyqhcb.jpg',
    'http://res.cloudinary.com/bone/image/upload/v1418767579/ydalhps6pvwpxzppxbd8.jpg',
    'https://cloudinary.com/console/media_library#/dialog/image/upload/ywbdshfvn2jen0urp7ik',
    'http://www.metrodogstop.com/cms/wp-content/uploads/2013/05/cute-dog.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6QqkDtXMV33USkXv4GG43SoPK6zbIwip700q0m9_WnAmYpnt' ];

    for (var i = 0; i < names.length; i++) {
      Dogs.insert({
        name: names[i],
        breed: breeds[i],
        url: urls[i],
        sex: "",
        bio: "",
        age: Math.floor(Random.fraction()*10),
        randomize: Math.random(),
        upVotes: [],
        downVotes: [],
        matches: [],
        user_id: (usersSeed[i] || usersSeed[0])
      });
    }
  }
});
