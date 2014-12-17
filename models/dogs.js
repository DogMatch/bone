Dogs = new Meteor.Collection('dogs');

Images = new Meteor.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});
