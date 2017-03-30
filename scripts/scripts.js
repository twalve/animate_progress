(function () {
    "use strict";

    const PRGRSS = {
        ANIMATIONS: "",
        SHOWS: [],
        construct: function () {
            const shelf = document.querySelector('shelf');
            const shows = PRGRSS.SHOWS;
            const compounds = CMPNNTS.createAll("ul");

            for (const show in shows) {
                const compound = CMPNNTS.createAll("li");
                const tile = CMPNNTS.create.tile();
                tile.setAttribute("style", "background: url(images/tiles/" + shows[show].file + ".png);");

                const meta = CMPNNTS.createAll("header");
                const title = CMPNNTS.createAll("h2");
                title.innerHTML = shows[show].title;
                const ident = CMPNNTS.create.ident();
                ident.setAttribute("style", "background: url(images/idents/7" + shows[show].channel + ".png);");

                const progress = CMPNNTS.create.progress(PRGRSS.progress(shows[show]));

                meta.appendChild(ident);
                meta.appendChild(title);
                tile.appendChild(meta);
                tile.appendChild(progress);
                compound.appendChild(tile);

                compounds.appendChild(compound);
            }

            shelf.appendChild(compounds);
        },
        progress: function (show) {
            const percentages = {
                className: "",
                elapsed: (1- show.elapsed / show.duration) * 100,
                remaining: (show.elapsed / show.duration) * 100,
            }

            const getPercentage = function () {
                return((percentages.remaining + "").replace(/\./gi, "") * 1);
            }

            const getRemaining = function () {
                return (show.duration - show.elapsed) * 60;
            }

            const progress = document.querySelector("#progressanimation");
            const animating = "animating-" +  getPercentage(percentages.remaining);
            const remaining =
`.` + animating + ` {
    animation-name: ` + animating  + `;
    animation-duration: ` + getRemaining(show.duration) + `s;
}

@-webkit-keyframes ` + animating  + ` {
    from { width: ` + percentages.remaining + `%; }
    to { width: 100%; }
}\n\n`;

// animation-duration: ` + getRemaining(show.duration) + `s;

            if (!!progress) {
                if (PRGRSS.ANIMATIONS.indexOf(animating) < 0) {
                    progress.innerHTML += remaining;
                    PRGRSS.ANIMATIONS += animating;
                }
            } else {
                const style = document.createElement("style");
                style.setAttribute("rel", "stylesheet");
                style.id = "progressanimation";
                style.appendChild(document.createTextNode(remaining));
                document.querySelector("head").appendChild(style);
            }

            return animating;
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
