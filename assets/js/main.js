let tl1 = gsap.timeline({
    defaults: { duration: 1 }
})

tl1.to('.banner__punch--animation', {
    y: '-50%',
})

    .to('.banner__punch--animation', {
        y: '-100%',
        opacity: 1
    });

let tl2 = gsap.timeline({
    delay: 2,
    repeat: -1,
    yoyo: true,
    defaults: { duration: 1 }
})

tl2.to('.banner__punch--animation', {
    rotation: -6
})

    .to('.banner__punch--animation', {
        rotation: 6
    });



