
        gsap.registerPlugin(ScrollTrigger);
        
        let sections = document.querySelectorAll(".section");
        let totalWidth = 0;
        
        sections.forEach(section => totalWidth += section.offsetWidth);
        
        gsap.to(".wrapper", {
            x: () => `-${totalWidth - window.innerWidth}px`,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                pin: true,
                scrub: 1,
                end: () => `+=${totalWidth}`,
            }
        });
        
        ScrollTrigger.create({
            trigger: "#section4",
            start: "left center",
            end: "left center",
            onEnter: () => {
                document.querySelector(".wrapper").style.overflow = "hidden";
                document.querySelector("#section4").style.overflowY = "auto";
            },
            onLeaveBack: () => {
                document.querySelector(".wrapper").style.overflow = "visible";
            },
            onLeave: () => {
                gsap.to(".wrapper", {
                    x: () => `-${totalWidth - window.innerWidth}px`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".wrapper",
                        start: "top top",
                        scrub: 1,
                    }
                });
            },
        });
   

