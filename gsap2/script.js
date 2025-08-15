
const images = document.querySelectorAll('.image-box1,.image-box2,.image-box3 ');

    const tl = gsap.timeline()

    images.forEach((img) => {
      tl.from(img, {
        scale: 0,
        opacity: 0,
        delay:0.5,
        skewX: 20,
        duration: 2,
      })

    })
     tl.to('.image-box1',{
      duration: 1,
      opacity:0,
      scale:0
    })
     tl.to('.image-box2',{
      duration: 1,
      opacity:0,
      scale:0
    })
    tl.to('.image-box3',{
      duration: 1,
      opacity:0,
      scale:0
    })


    tl.to('.logo img',{
        x: "-45vw",
        y: "-45vh",
        scale: 1.5,
        duration: 3,
        ease: "power2.inOut",
      })
     tl.to('.logo img',{
      opacity:0,
      duration:2,
      ease:"power2.in"
    })
    
   