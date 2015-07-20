var animateFadeIn = function (group) {
    group.animate({
        'stroke-opacity': '0.25',
        'stroke-width': 10
    }, 1000);
}

var animateFadeOut = function (group) {
    group.animate({
        'stroke-opacity': '0.0',
        'stroke-width': 5
    }, 1000);
}

var getTitle = function (group) {
    var children = group.children();
    for (var n = 0; n < children.length; n++) {
        var child = children[n];
        if ('title' === child.type) {
            if (child.node.textContent) {
                return child.node.textContent.toLowerCase();
            } else {
                return child.node.innerHTML.toLowerCase();
            }
        }
    }
    return null;
}

Template.page.onRendered(function () {
    var that = this;

    var documentId = parseInt(Session.get('documentId'));

    Meteor.call('logVisit', documentId, bowser);

    Meteor.call('document', documentId, function(err, document) {
        Session.set('document', document);
    });

    var getNaturalSortedKeys = function (obj) {
        var keys = [];

        for (var key in obj) {
            keys.push(key);
        }

        var sortedKeys = keys.sort(function (a, b) {
            return obj[a] - obj[b]
        });

        var result = sortedKeys.sort(function (a, b) {
            var a1 = typeof a, b1 = typeof b;
            return a1 < b1 ? -1 : a1 > b1 ? 1 : a < b ? -1 : a > b ? 1 : 0;
        });

        return result;
    }

    var scan = function (groups) {
        var result = {};

        _.each(groups, function (group) {
            var title = getTitle(group);

            if (title) {
                if (!result[title]) {
                    result[title] = [];
                }

                result[title].push(group);
            }
        });

        return result;
    }

    var assignHoverAnims = function (groups) {
        _.each(groups, function (group, index) {
            if (index > 0) {
                group.hover(function (event) {
                    if (!that.symbolSelections[getTitle(group)]) {
                        this.animate({
                            'stroke-opacity': '0.25',
                            'stroke-width': 10
                        }, 1000);
                    }
                }, function () {
                    if (!that.symbolSelections[getTitle(group)]) {
                        this.animate({
                            'stroke-opacity': '0.0',
                            'stroke-width': 5
                        }, 1000);
                    }
                });
            }
        });
    }

    var imageElement = document.getElementById('image');

    imageElement.onload = function () {
        var svgElement = Snap('#svg');

        Snap.load('/outlines/' + documentId, function (svgFragment) {
            svgElement.append(svgFragment);
            svgFragment = Snap('#svg');

            $('#svg').attr('width', $('#image').width());
            $('#svg').attr('height', $('#image').height());

            var groups = svgFragment.selectAll('g');
            that.groups = groups;

            _.each(groups, function (group) {
                group.attr({
                    'stroke-opacity': '0.0'
                })
            });

            var symbolMap = scan(groups);
            Session.set('symbols', getNaturalSortedKeys(symbolMap));

            that.symbolMap = symbolMap;
            that.symbolSelections = {};

            $('body').keyup(function (e) {
                if (e.keyCode == 27) { // escape key maps to keycode `27`

                    _.each(groups, function (group) {
                        animateFadeOut(group);
                    });

                    $(".nav>li").removeClass('active');
                }
            });

            assignHoverAnims(groups);
        });
    }

    imageElement.src = '/images/' + documentId;
});

Template.page.helpers({
    'symbols': function () {
        return Session.get('symbols');
    },
    'document': function () {
        return Session.get('document');
    }
});

Template.page.events({
    'mousedown .symbol': function (event, template) {
        if (!$(event.currentTarget).hasClass('active')) {
            $(event.currentTarget).addClass('active');
            var title = $(event.currentTarget).children()[0];

            var symbol;

            if (title.textContent) {
                symbol = $(event.currentTarget).children()[0].textContent;
            } else {
                symbol = $(event.currentTarget).children()[0].innerHTML;
            }

            template.symbolSelections[symbol] = true;

            var showGroups = template.symbolMap[symbol];

            _.each(showGroups, function (group) {
                animateFadeIn(group);
            });
        } else {
            $(event.currentTarget).removeClass('active');
            var title = $(event.currentTarget).children()[0];

            var symbol;

            if (title.textContent) {
                symbol = $(event.currentTarget).children()[0].textContent;
            } else {
                symbol = $(event.currentTarget).children()[0].innerHTML;
            }

            template.symbolSelections[symbol] = false;

            var hideGroups = template.symbolMap[symbol];

            _.each(hideGroups, function (group) {
                animateFadeOut(group);
            });
        }
    },
    'mousedown #reset': function (event, template) {
        _.each(template.groups, function (group) {
            template.symbolSelections[getTitle(group)] = false;
            animateFadeOut(group);
            $(".nav>li").removeClass('active');
        });
    }
});