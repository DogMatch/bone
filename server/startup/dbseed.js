'use strict';
Meteor.startup(function() {
      // Meteor.users.remove({});
      // Dogs.remove({});

  var userCount = Meteor.users.find().count();
  var dogCount = Dogs.find().count();
  console.log('users: ' + userCount);
  console.log('dogs: ' + dogCount);

  if (userCount === 0) {
    console.log('Seeding data!');
    var usersSeed = [];
    usersSeed.push(Accounts.createUser({
      username: 'erin',
      email: 'e@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'hannah',
      email: 'h@oo.com',
      password: '123456'
    }));
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
    usersSeed.push(Accounts.createUser({
      username: 'Agnes',
      email: 'a1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Bertha',
      email: 'b1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Catherine',
      email: 'c1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Dora',
      email: 'd1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Ella',
      email: 'e1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Francesca',
      email: 'f1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Gertie',
      email: 'g1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Henrietta',
      email: 'h1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Irene',
      email: 'i1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Jane',
      email: 'j1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Katherine',
      email: 'k1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Larissa',
      email: 'l1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Margaret',
      email: 'm1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Netty',
      email: 'n1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Opal',
      email: 'o1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Polyanna',
      email: 'p1@oo.com',
      password: '123456'
    }));
    usersSeed.push(Accounts.createUser({
      username: 'Queenie',
      email: 'q1@oo.com',
      password: '123456'
    }));
    userCount = Meteor.users.find().count();
  }

  if (dogCount === 0) {
    var names = [
      'Issy',
      'Bully',
      'CeilingDog',
      'Carl',
      'Nicki',
      'Claude & Cindy',
      'Doge',
      'Kiki',
      'Cinderella',
      'Small Puppy',
      'Rover',
      'Sara',
      'Brock',
      'Maury',
      'Fletch',
      'Josephine',
      'Joey',
      'Cora',
      'Business Dog',
      'Oliver',
      'Meg'
    ];
    var breeds = [
      'Basenji',
      'Rottweiler',
      'Husky',
      'Bulldog',
      'Chihuahua',
      'Cat-Dog Hybrid',
      'Shiba Inu',
      'Basenji',
      'Toy Bulldog',
      'Retriever',
      'Golden Retriever',
      'Toy',
      'Insane Terrier',
      'Retriever',
      'Mix',
      'Rotty Mix',
      'Lab',
      'Pointy',
      'Bull',
      'Cigar Lover',
      'Husky'
    ];
    var sexes = [
      'F',
      'F',
      'M',
      'F',
      'M',
      'M',
      'M',
      'M',
      'F',
      'M',
      'F',
      'F',
      'M',
      'F',
      'F',
      'M',
      'F',
      'M',
      'M',
      'F'

    ];
    var bios = [
      'I\'m out of control!',
      'Kill sticks but don\'t kill time',
      'fart-machine',
      'Love to Sit!',
      'HEY WHAT\'S UP WHAT ARE YOU DOING LET\'s DO IT TOGETHER YEAH COMEONCOMEONCOMEON',
      'Love us, human!',
      'Wow. Much relevance. Such match.',
      'surprisingly calm',
      'Want to wear sweaters together?',
      'I don\'t really look like this...',
      'running is my life!',
      'Rub My Beelllllyyyyy',
      'Small breakable dogs 2 the front',
      'I can see through time',
      'Sniff everything!',
      'Super friendly, just want to meet other big dogs',
      'What is life?',
      'what do you all smell like out there?',
      'Good at Business',
      'Want to eat things with new people.',
      'I\'m watching'
    ]

    var urls = ['http://res.cloudinary.com/bone/image/upload/v1418968183/Issey_uawrwx.jpg',
    'http://res.cloudinary.com/bone/image/upload/v1418969217/bully_pbtdak.jpg',
    'http://res.cloudinary.com/bone/image/upload/v1418969230/CeilingDog_bvqpbb.png',
    'http://res.cloudinary.com/bone/image/upload/v1418969230/ChairDog_vb4rdx.png',
    'http://res.cloudinary.com/bone/image/upload/v1418969230/chihuahuaRunRunRun_z40qut.jpg',
    'http://res.cloudinary.com/bone/image/upload/v1418969231/dogandcat_kiaptv.png',
    'http://res.cloudinary.com/bone/image/upload/v1418969231/DOGE_ykluek.png',
    'http://res.cloudinary.com/bone/image/upload/v1418969239/kiki_kuyfqh.png',
    'http://res.cloudinary.com/bone/image/upload/v1418969238/LittleBull_t3fuaf.png',
    'http://res.cloudinary.com/bone/image/upload/v1418969238/littlepuppy_mzi0if.jpg',
    'http://res.cloudinary.com/bone/image/upload/v1418969238/Retriever_rv60vm.png',
    'http://res.cloudinary.com/bone/image/upload/v1418969240/Rolly_lqjcuz.png',
    'http://res.cloudinary.com/bone/image/upload/v1418969239/Scary_yytjsg.jpg',
    'http://res.cloudinary.com/bone/image/upload/v1418969239/SeeThroughTim_oytqug.jpg',
    'http://res.cloudinary.com/bone/image/upload/v1418969239/Shaney1_lkldp9.jpg',
    'http://res.cloudinary.com/bone/image/upload/v1418969239/Shaney2_tcyahl.jpg',
    'http://res.cloudinary.com/bone/image/upload/v1418969239/Shaney3_sbws75.jpg',
    'http://res.cloudinary.com/bone/image/upload/v1418969240/Shaney5_xs0a1i.jpg',
    'http://res.cloudinary.com/bone/image/upload/v1418969240/Shaney6_a2jnbo.jpg',
    'http://res.cloudinary.com/bone/image/upload/v1418969241/Shaney7_nvyixc.jpg',
    'http://res.cloudinary.com/bone/image/upload/v1418969242/Starey_sgqckl.png'];

    for (var i = 0; i < names.length; i++) {
      Dogs.insert({
        name: names[i],
        breed: breeds[i],
        url: urls[i],
        sex: sexes[i],
        bio: bios[i],
        age: Math.floor(Random.fraction() * 10),
        randomize: Math.random(),
        upVotes: [],
        downVotes: [],
        matches: [],
        user_id: (usersSeed[i] || usersSeed[0])
      });
    }
  }
});
