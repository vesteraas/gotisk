var animateFadeIn = function (symbol) {
    symbol.animate({
        'stroke-opacity': '0.25',
        'stroke-width': 10
    }, 250);
}

var animateFadeOut = function (symbol) {
    symbol.animate({
        'stroke-opacity': '0.0',
        'stroke-width': 5
    }, 250);
}

var getSymbolTitle = function (symbol) {
    var children = symbol.children();
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

    Meteor.call('document', documentId, function (err, document) {
        Session.set('document', document);
        Session.set('title', 'goti.sk - ' + document.source.description);
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

    var createSymbolMap = function (symbols) {
        var result = {};

        _.each(symbols, function (symbol) {
            var title = getSymbolTitle(symbol);

            if (title) {
                if (!result[title]) {
                    result[title] = [];
                }

                result[title].push(symbol);
            }
        });

        return result;
    }

    var assignHoverAnims = function (symbols) {
        var shouldAnimate = function (symbol) {
            return !that.symbolSelections[getSymbolTitle(symbol)];
        }

        _.each(symbols, function (symbol, index) {
            symbol.click(function () {
                console.log(getSymbolTitle(symbol), symbol.node.id);
            })
            symbol.hover(function (event) {
                if (shouldAnimate(symbol)) {
                    animateFadeIn(this);
                }
            }, function () {
                if (shouldAnimate(symbol)) {
                    animateFadeOut(this);
                }
            });
        });
    }

    var imageElement = document.getElementById('image');

    imageElement.onload = function () {
        var svgElement = Snap('#svg');

        Snap.load('/outlines/' + documentId, function (svgFragment) {
            svgElement.append(svgFragment);
            svgFragment = Snap('#svg');

            $('#svg').width($('#image').width());
            $('#svg').height($('#image').height());

            that.symbols = svgFragment.selectAll('g[id*="g"]');

            _.each(that.symbols, function (symbol) {
                symbol.attr({
                    'stroke-opacity': '0.0'
                })
            });

            that.symbolMap = createSymbolMap(that.symbols);
            Session.set('symbols', getNaturalSortedKeys(that.symbolMap));

            that.symbolSelections = {};

            $('body').keyup(function (e) {
                if (e.keyCode == 27) { // escape key maps to keycode `27`
                    _.each(that.symbols, function (symbol) {
                        animateFadeOut(symbol);
                    });
                    $(".nav>li").removeClass('active');
                }
            });

            assignHoverAnims(that.symbols);
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

var getSymbol = function (target) {
    var titleElement = target.children()[0];

    if (!titleElement) {
        return null;
    } else {
        if (titleElement.textContent) {
            return target.children()[0].textContent;
        } else {
            return target.children()[0].innerHTML;
        }
    }
}

Template.page.events({
    'mousedown .symbol': function (event, template) {
        if (!$(event.currentTarget).hasClass('active')) {
            $(event.currentTarget).addClass('active');
            var symbol = getSymbol($(event.currentTarget));

            template.symbolSelections[symbol] = true;

            var symbolsToShow = template.symbolMap[symbol];

            _.each(symbolsToShow, function (symbol) {
                animateFadeIn(symbol);
            });
        } else {
            $(event.currentTarget).removeClass('active');
            var symbol = getSymbol($(event.currentTarget));

            template.symbolSelections[symbol] = false;

            var symbolsToHide = template.symbolMap[symbol];

            _.each(symbolsToHide, function (symbol) {
                animateFadeOut(symbol);
            });
        }
    },
    'mousedown #reset': function (event, template) {
        _.each(template.symbols, function (symbol) {
            template.symbolSelections[getSymbolTitle(symbol)] = false;
            animateFadeOut(symbol);
            $(".nav>li").removeClass('active');
        });
    },
    'mousedown #home': function (event, template) {
        window.location.href = '/';
    },
    'mousedown #help': function (event, template) {
        $('#modal1').openModal();
    }
});