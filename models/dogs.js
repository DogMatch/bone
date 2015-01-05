Dogs = new Meteor.Collection('dogs');/* jshint ignore:line */

Dogs.allow({
  insert: function(userId, doc) {
    return userId;
  },
  update: function(userId, doc, fields, modifier) {
    // allow updating your own dog profile
    if (doc.user_id === userId) return true;

    // allow adding/removing your userId in these properties
    if (modifier.$addToSet) {
      if (modifier.$addToSet.upVotes === userId) return true;
      if (modifier.$addToSet.downVotes === userId) return true;
      if (modifier.$addToSet.matches === userId) return true;
    } else if (modifier.$unset){
      if (modifier.$unset.upVotes === userId) return true;
      if (modifier.$unset.matches === userId) return true;
    } else {
      return true;
    }
  },
  remove: function(userId, doc) {
    // can only remove your own documents
    return doc.user_id === userId;
  }
});

Dogs.deny({
  update: function(userId, doc, fields, modifier) {
    if (doc.user_id === userId && !fields.user_id) {
      // don't deny updating own dog profile, but deny updating user_id
      return false;
    } else if (_.without(fields, 'upVotes', 'downVotes', 'matches') === []) {
      // deny updating properties other than these on other dog profiles
      return true;
    } else {
      return false;
    }
  }
});
