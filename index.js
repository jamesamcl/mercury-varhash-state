
var hg = require('mercury');
var extend = require('xtend');

function state(obj) {
    var copy = extend(obj);
    var $channels = copy.channels;
    var $handles = copy.handles;

    if ($channels) {
        copy.channels = hg.value(null);
    } else if ($handles) {
        copy.handles = hg.value(null);
    }

    var observ = hg.varhash(copy);
    if ($channels) {
        observ.channels.set(hg.channels($channels, observ));
    } else if ($handles) {
        observ.handles.set(hg.channels($handles, observ));
    }
    return observ;
}

module.exports = state;


