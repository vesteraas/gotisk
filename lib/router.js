Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('home');
});

Router.route('/stats', function () {
    this.render('stats');
});

Router.route('/:id', function () {
    Session.set('documentId', this.params.id);
    this.render('page');
});