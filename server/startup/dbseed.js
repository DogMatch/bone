/*jshint white:true*/
'use strict';
Meteor.startup(function() {
      // Meteor.users.remove({});
      // Dogs.remove({});

  var userCount = Meteor.users.find().count();
  var dogCount = Dogs.find().count();
  console.log('users: ' + userCount);
  console.log('dogs: ' + dogCount);

  /* jshint ignore:start */
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
      'Female',
      'Female',
      'Male',
      'Female',
      'Male',
      'Male',
      'Male',
      'Male',
      'Female',
      'Male',
      'Female',
      'Female',
      'Male',
      'Female',
      'Female',
      'Male',
      'Female',
      'Male',
      'Male',
      'Female'
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
    ];
    var urls = ['http://www.ucarecdn.com/2e1e583f-8de5-49a9-b4e0-752280723467/Issey_uawrwx.jpg',
    'http://www.ucarecdn.com/91ff6b24-9a90-4e7e-85db-22decc41966f/bully_pbtdak.jpg',
    'http://www.ucarecdn.com/5c03e1b8-06ef-4a9f-ad60-edba5207474f/CeilingDog_bvqpbb.png',
    'http://www.ucarecdn.com/013fab6c-04f8-4539-aa88-ab71fc62879a/ChairDog_vb4rdx.png',
    'http://www.ucarecdn.com/577a4c37-cff8-48a0-b5a5-92440efe244d/chihuahuaRunRunRun_z40qut.jpg',
    'http://www.ucarecdn.com/de36b555-683d-496d-b18f-a17b8a8c3f7a/dogandcat_kiaptv.png',
    'http://www.ucarecdn.com/848c81b6-7818-48d5-9b9c-4d8698811908/DOGE_ykluek.png',
    'http://www.ucarecdn.com/231e03e0-e484-4e3e-9680-5823ec1c7534/kiki_kuyfqh.png',
    'http://www.ucarecdn.com/b4aab1b0-c139-40bf-8934-3d20b7fb08f0/LittleBull_t3fuaf.png',
    'http://www.ucarecdn.com/8a69395f-80b3-42f7-89a8-e262d025591d/littlepuppy_mzi0if.jpg',
    'http://www.ucarecdn.com/d29b5a5e-27ab-4668-ba00-27a1492c4e39/Retriever_rv60vm.png',
    'http://www.ucarecdn.com/bdf4ddf2-73c1-4484-a2f0-a4c19cf435e1/Rolly_lqjcuz.png',
    'http://www.ucarecdn.com/73db7b34-7de5-4321-a45a-9f6cb698b66e/Scary_yytjsg.jpg',
    'http://www.ucarecdn.com/59633d34-2aab-4705-995b-f34dac2652af/SeeThroughTim_oytqug.jpg',
    'http://www.ucarecdn.com/045f0d5e-1d66-4a13-a4c2-6a9ffc0d97d6/Shaney1_lkldp9.jpg',
    'http://www.ucarecdn.com/a6826258-a2f0-4d63-9f25-669dc019be49/Shaney2_tcyahl.jpg',
    'http://www.ucarecdn.com/55b52e4e-a109-4e94-af36-cde313d238d6/Shaney3_sbws75.jpg',
    'http://www.ucarecdn.com/2dce0a15-4f81-4892-be4c-34a9788958ab/Shaney5_xs0a1i.jpg',
    'http://www.ucarecdn.com/671a20d3-5292-449e-8132-250beb05dff0/Shaney6_a2jnbo.jpg',
    'http://www.ucarecdn.com/2e001106-4945-4da1-8dee-a1e6e51313c0/Shaney7_nvyixc.jpg',
    'http://www.ucarecdn.com/063ed119-8c09-4021-a06f-5f0c6880a8dd/Starey_sgqckl.png'];
    /* jshint ignore:start */
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
  /* jshint ignore:end */
});
