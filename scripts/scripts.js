(function () {
    "use strict";

    const PRGRSS = {
        SHOWS: [],
        construct: function () {
            const shelf = document.querySelector('shelf');
            const shows = PRGRSS.SHOWS;
            const compounds = document.createElement("ul");

            for (const show in shows) {
                const compound = document.createElement("li");
                const stage = document.createElement("div");
                stage.setAttribute("style", "background: url(images/tiles/" + shows[show].file + ".png);");
                const title = document.createElement("h2");
                title.innerHTML = shows[show].title;

                stage.appendChild(title);
                compound.appendChild(stage);

                compounds.appendChild(compound);
            }

            shelf.innerHTML = compounds.innerHTML;
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
