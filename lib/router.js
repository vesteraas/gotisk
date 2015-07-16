Router.route('/', function () {
    this.redirect('/1');
});

Router.route('/:id', function () {
    Session.set('documentId', this.params.id);
    this.render('home');
});