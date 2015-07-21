Router.route('/', function () {
    this.render('home');
});

Router.route('/:id', function () {
    Session.set('documentId', this.params.id);
    this.render('main');
});