/* const pageTransition = gsap.timeline();

const delay = (n) => {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
};

barba.init({
    sync: true,
    transitions: [
        {
            name: "default-transition",
            async leave() {
                const done = this.async();
                pageTransition.to(".page-transition", {
                    height: "100%",
                    duration: 2,
                });
                pageTransition.to(
                    ".page-transition",
                    { top: "100%", duration: 2 },
                    "<80%"
                );
                pageTransition.set(".page-transition", { top: "-100%" });

                await delay(2000);
                done();
            },
            enter() {
                gsap.fromTo(
                    "header, main",
                    { opacity: 0, y: -30 },
                    { opacity: 1, y: 0, duration: 1 }
                );
            },
        },
    ],
});
 */

pageTransition = () => {
    var timeline = gsap.timeline();

    timeline.to("header", {
        zIndex: 1,
    });

    timeline.to(".page-transition", {
        duration: 0.5,
        height: "100%",
        top: "0%",
    });

    timeline.to(".page-transition", {
        duration: 0.5,
        height: "100%",
        top: "100%",
        delay: 0.3,
    });

    timeline.set(".page-transition", {
        top: "-100%",
    });
};

mainAnimation = () => {
    var timeline = gsap.timeline();

    timeline.from("section h1, li, .logo", {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: {
            amount: 0.4,
        },
        delay: 0.8,
    });
};

delay = (n) => {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
};

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data) {
                const done = this.async();
                pageTransition();
                await delay(1000);
                done();
            },

            async enter(data) {
                mainAnimation();
            },

            async once(data) {
                mainAnimation();
            },
        },
    ],
});
