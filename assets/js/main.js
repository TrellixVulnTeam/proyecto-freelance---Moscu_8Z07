//gsap library coding for hand's animation.
gsap.to('.banner__punch--animation', {
    duration: 2,
    y: '-100%',
    opacity: 1
});

let tl = gsap.timeline({
    delay: 2,
    repeat: -1,
    yoyo: true,
    defaults: { duration: 1 }
})

tl.to('.banner__punch--animation', {
    rotation: -6
})

    .to('.banner__punch--animation', {
        rotation: 6
    });



