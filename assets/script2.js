gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);
var x = window.matchMedia("(max-width: 575px)");
var x2 = window.matchMedia("(max-width: 992px)");

if (x.matches) {
    Draggable.create('.sd-1',{
        bounds: ".pods-slider",
        type: 'x',
        onDrag: function(){
            $(".psw-1").width(220-this.x);
        }
    });
    Draggable.create('.sd-2',{
        bounds: ".pods-slider",
        type: 'x',
        onDrag: function(){
            $(".psw-2").width(220-this.x);
        }
    });
    Draggable.create('.sd-3',{
        bounds: ".pods-slider",
        type: 'x',
        onDrag: function(){
            $(".psw-3").width(220-this.x);
        }
    });
    
} else {
    Draggable.create('.sd-1',{
        bounds: ".pods-slider",
        type: 'x',
        onDrag: function(){
            $(".psw-1").width(280-this.x);
        }
    });
    Draggable.create('.sd-2',{
        bounds: ".pods-slider",
        type: 'x',
        onDrag: function(){
            $(".psw-2").width(280-this.x);
        }
    });
    Draggable.create('.sd-3',{
        bounds: ".pods-slider",
        type: 'x',
        onDrag: function(){
            $(".psw-3").width(280-this.x);
        }
    });
    

    // Slider drag animation
    gsap.to("#section-2 .sd-1", {
        duration:1,
        x: 50,
        scrollTrigger: {
            trigger: "#section-2",
            start: "25% center", 
            end: "25% center",
        }, 
    });
    gsap.to("#section-2 .psw-1", {
        duration:1,
        width:"220px",
        scrollTrigger: {
            trigger: "#section-2",
            start: "25% center", 
            end: "25% center",
        }, 
    });

    gsap.to("#section-2 .sd-2", {
        duration:1,
        x: 30,
        scrollTrigger: {
            trigger: "#section-2",
            start: "25% center", 
            end: "25% center",
        }, 
    });
    gsap.to("#section-2 .psw-2", {
        duration:1,
        width:"240px",
        scrollTrigger: {
            trigger: "#section-2",
            start: "25% center", 
            end: "25% center",
        }, 
    });

    gsap.to("#section-2 .sd-3", {
        duration:1,
        x: 20,
        scrollTrigger: {
            trigger: "#section-2",
            start: "25% center", 
            end: "25% center",
        }, 
    });
    gsap.to("#section-2 .psw-3", {
        duration:1,
        width:"250px",
        scrollTrigger: {
            trigger: "#section-2",
            start: "25% center", 
            end: "25% center",
        }, 
    });
    // Slider drag animation
    
    // PARALLAX FLOATING
    gsap.from("#section-2 .fti-1", {
        yPercent: 300,
        scrollTrigger: {
            trigger: "#section-2",
            start: "-150px top", 
            end: "65% top",
            scrub: true,
        }, 
    });

    gsap.from("#section-2 .fti-2", {
        yPercent: 500,
        scrollTrigger: {
            trigger: "#section-2",
            start: "-150px top", 
            end: "65% top",
            scrub: true
        }, 
    });
    // PARALLAX FLOATING

    // Circle Rotate
    gsap.to("#section-2 .background-abu", {
        y:300,
        duration:2,
        scrollTrigger: {
            trigger: "#section-2",
            start: "70% center", 
            end: "70% center",
            toggleActions: "restart none none reverse"
        }, 
    });

    gsap.to("#section-2 .circle-way", {
        rotation:150,
        duration:2,
        scrollTrigger: {
            trigger: "#section-2",
            start: "70% center", 
            end: "70% center",
            toggleActions: "restart none none reverse"
        }, 
    });
    // Circle Rotate
}

// Scale Animation
if (x2.matches) {

} else {
    gsap.from("#section-2 .vape-1", {
        duration:1,
        scale: 0,
        ease: Bounce.easeOut,
        scrollTrigger: {
            trigger: "#section-2",
            start: "25% bottom", 
            end: "25% bottom",
        }, 
    });
    
    gsap.from("#section-2 .vape-2", {
        duration:1,
        scale: 0,
        ease: Bounce.easeOut,
        scrollTrigger: {
            trigger: "#section-2",
            start: "30% bottom", 
            end: "30% bottom",
        }, 
    });
}

gsap.from("#section-2 .praktis img", {
    duration:0.25,
    scale: 0,
    rotation:30,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#section-2",
        start: "60% bottom", 
        end: "60% bottom"
    }, 
});
// Scale Animation

// Text Animation
let tinggivape = document.querySelector(".tinggi-vape");
let beratvape = document.querySelector(".berat-vape");
let counter = {value:0}

gsap.to(counter, {
    duration:2,
    value:8,
    onUpdate: () => tinggivape.innerText = Math.round(counter.value),
    scrollTrigger: {
        trigger: "#section-2",
        start: "70% center", 
        end: "70% center",
        toggleActions: "restart none none reverse"
    }, 
});
gsap.to(counter, {
    duration:2,
    value:30,
    onUpdate: () => beratvape.innerText = Math.round(counter.value),
    scrollTrigger: {
        trigger: "#section-2",
        start: "70% center", 
        end: "70% center",
        toggleActions: "restart none none reverse"
    }, 
});

// Text Animation