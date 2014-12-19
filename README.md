![BoneLogo](public/BoneLogo.png)

###Bone is a match-making app that helps dog owners find their dogs new playmates.
---
Built with Meteor.js using Angular.js.

To get functional, fork or download a local copy of the repo. If Meteor is not installed simply run its install in the terminal:

	curl https://install.meteor.com/ | sh
Then, once Meteor is installed, navigate via the terminal to Bone root directory, and simply run:

	bone$ meteor
to download dependencies and start a local server.

#####User Instructions
Users create a user profile currently consisting of an email and password. Users then create a profile of their dog including a photo (currently hosted on Cloudinary), dog's name, age, breed, and sex.

They can then participate in the Match Game, where they view other dog's profiles one at a time and choose to either 'like' or 'dislike' them. 'Liking' another dog's profile will add that dog to a potential match list. If the other dog's user 'likes' your profile in turn in their own Match Game, then they are added to matches and the dogs' profiles will appear in the Messaging section of both users.

From the messaging page matches may be cancelled and messages may be sent between users. As of 12/19/14 the messaging is still a feature to be added.

Throw that dog a Bone! :heart: :dog2: