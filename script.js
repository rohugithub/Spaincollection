gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  mutiplier:2
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



var tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
   // markers:true,
    start:"top -70%",
    end:"top -190%",
    pin:true,
    scrub:4
  }
})

tl1.from("#page1 h1",{
  y:100,
})
tl1.from("#video-cont-part2",{
  height:"140vh"
})

tl1.to("#video-cont-part2",{
  width:"700vw",
  height:"100vh"
},"anim")
tl1.to("#video-cont-part1",{
  x:-500
},"anim")
tl1.to("#video-cont-part3",{
  x:500
},"anim")

tl1.from("#page1 h2,#page1 i",{
  y:440,
})


gsap.to("#page3",{
  backgroundColor:"#FFFFFF",
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    //markers:true,
    start:"top -1%",
    end:"top 5%",
     scrub:3,
     pin:true
    
  }
})

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
   //markers:true,
    start:"top -50%",
    end:"top -90%",
    //pin:true,
    scrub:3
  }
})


tl2.from("#page4 h1",{
  y:-30
},"anim")

// tl2.to("#part1",{
//   //scale:.9,
//   height:"89.10%",
//   delay:.2,
//   duration:.3
// },"anim")
tl2.from("#part1>img",{
  //scale:.9,
  height:"80%",
  
  duration:1.3
},"anim")

tl2.from("#part2>img",{
  height:"95%",
  
  duration:1.3
},"anim")



gsap.from(".inner-div-contai",{
  
  x:250,
  delay:.2,
  duration:.5,
  scrollTrigger:{
    trigger:".inner-div-contai",
    scroller:"#main",
    //markers:true,
    start:"top 10%",
    end:"top 20%",
     scrub:5,
     smooth:true,
    
  }
})

gsap.from("#page7-part1 h1",{
  scrollTrigger:{
    trigger:"#page7-part1 h1",
    scroller:"#main",
    
  },
  y:50,
  opacity:0,
  duration:1
})