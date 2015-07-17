Router.route('/outlines/:id', function () {
    var id = this.params.id;

    var filePath = process.env.PWD + '/documents/' + id + '/outline.svg';
    var fs = Npm.require('fs');
    var data = fs.readFileSync(filePath);
    this.response.write(data);
    this.response.end();
}, {where: 'server'});

Router.route('/images/:id', function () {
    var id = this.params.id;

    var filePath = process.env.PWD + '/documents/' + id + '/image.jpg';
    var fs = Npm.require('fs');
    var data = fs.readFileSync(filePath);
    this.response.write(data);
    this.response.end();
}, {where: 'server'});

Meteor.publish("visitors", function () {
    return Visitors.find();
});

Meteor.methods({
    'logVisit': function (info) {
        console.log(info);
        Visitors.insert({
            'date': new Date(),
            'info': info
        });
    }
});