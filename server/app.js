Router.route('/outlines/:id', function () {
    var id = parseInt(this.params.id);

    var document = Documents.findOne({id: id});

    if (document) {
        var filePath = process.env.PWD + '/documents/' + id + '/outline.svg';
        var fs = Npm.require('fs');
        var data = fs.readFileSync(filePath);
        this.response.write(data);
        this.response.end();
    } else {
        this.response.writeHead(404);
        this.response.end('resource not found');
    }
}, {where: 'server'});

Router.route('/images/:id', function () {
    var id = parseInt(this.params.id);

    var document = Documents.findOne({id: id});

    if (document) {
        var filePath = process.env.PWD + '/documents/' + id + '/image.jpg';
        var fs = Npm.require('fs');
        var data = fs.readFileSync(filePath);
        this.response.write(data);
        this.response.end();
    } else {
        this.response.writeHead(404);
        this.response.end('resource not found');
    }
}, {where: 'server'});

Meteor.publish('visitors', function () {
    return Visitors.find();
});

Meteor.publish('documents', function () {
    return Documents.find();
});

Meteor.methods({
    'logVisit': function (documentId, info) {
        Visitors.insert({
            'date': new Date(),
            'documentId': documentId,
            'info': info
        });
    },
    'document': function (documentId) {
        return Documents.findOne({
            id: documentId
        });
    }
});