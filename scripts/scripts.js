(function () {
    "use strict";

    const PRGRSS = {
        SHOWS: [],
        construct: function () {
            const shelf = document.querySelector('shelf');
            const shows = PRGRSS.SHOWS;
            const compounds = CMPNNTS.createAll("ul");

            for (const show in shows) {
                const compound = CMPNNTS.createAll("li");
                const tile = CMPNNTS.create.tile();
                tile.setAttribute("style", "background: url(images/tiles/" + shows[show].file + ".png);");

                const meta =  CMPNNTS.createAll("header");
                const title = CMPNNTS.createAll("h2");
                title.innerHTML = shows[show].title;
                const ident = CMPNNTS.create.ident();
                ident.setAttribute("style", "background: url(images/idents/7" + shows[show].channel + ".png);");

                meta.appendChild(ident);
                meta.appendChild(title);
                tile.appendChild(meta);
                compound.appendChild(tile);

                compounds.appendChild(compound);
            }

            shelf.appendChild(compounds);
        },
        fetch: function () {
            PRGRSS.SHOWS = SHOWS;
        },
        init: function () {
            this.fetch();
            this.construct();
        }
    };

    window.PRGRSS = PRGRSS;
}());
