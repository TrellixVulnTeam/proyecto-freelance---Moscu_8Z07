//gsap library coding for hand's animation.
gsap.to('.handMoving', {
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

tl.to('.handMoving', {
    rotation: -6
})

    .to('.handMoving', {
        rotation: 6
    });



