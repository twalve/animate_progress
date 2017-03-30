(function () {
    "use strict";

    const CMPNNTS = {
        create: {
            ident: function () {
                const ident = document.createElement("img");
                ident.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");

                return ident;
            },
            progress: function (classname) {
                const duration = document.createElement("duration");
                const elapsed = document.createElement("span");
                elapsed.classList.add(classname);
                duration.appendChild(elapsed);

                return duration;
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
