Template.home.onRendered(function() {
    Session.set('title', 'goti.sk');
});

Template.home.helpers({
    'documents': function() {
        return Documents.find({}, {sort: {year: 1}});
    }
})