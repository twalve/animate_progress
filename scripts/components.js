(function () {
    "use strict";

    const CMPNNTS = {
        create: {
            ident: function () {
                const ident = document.createElement("img");
                ident.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");

                return ident;
            },
            shelf: function () {
                return document.createElement("shelf");
            },
            tile: function () {
                return document.createElement("tile");
            }
        },
        createAll: function (tag) {
            return document.createElement(tag);
        },
        init: function () {}
    };

    window.CMPNNTS = CMPNNTS;
}());
