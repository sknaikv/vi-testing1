// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// scroll();


function herotext(){
    var tl = gsap.timeline();

    tl.from(".hero-text",{
        x: '-15',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    
}

function heroimg(){
    var tl = gsap.timeline();

    tl.from(".hero-img",{
        y: '-15',
        opacity: 0,
        duration: 1.5,
        stagger:.1,
        ease: Expo.easeInOut
    })
    
}

function nav(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        z: '-15',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    
}


nav();
herotext();
heroimg();


window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0;i<reveals.length;i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}