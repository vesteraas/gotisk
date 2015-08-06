/**
 * Created by werner on 06.08.15.
 */
Template.stats.onCreated(function() {
    var that = this;
    this.browsers = new ReactiveVar();
    Meteor.call('browsers', function(err, browsers) {
        that.browsers.set(browsers);
    });
});

Template.stats.helpers({
    'browsers': function() {
        return Template.instance().browsers.get();
    },
    'isTotal': function(index) {
        return index == -1;
    }
})