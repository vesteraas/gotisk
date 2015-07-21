Template.home.helpers({
    'documents': function() {
        return Documents.find({}, {sort: {year: 1}});
    }
})