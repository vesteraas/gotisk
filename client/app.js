Meteor.subscribe("documents");

Deps.autorun(function(){
    document.title = Session.get('title');
});