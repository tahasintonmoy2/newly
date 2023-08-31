var gpTl = gsap.timeline()

function revealToSpan(){
    document.querySelectorAll('.reveal')
    .forEach((elem)=>{
        let parent = document.createElement('span');
        let child = document.createElement('span');
    
        parent.classList.add('parent')
        child.classList.add('child');
    
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);
    
        elem.innerHTML = "";
        elem.appendChild(parent)
    })
}


function gsapAnimation() {
    gpTl.from("#loader .child span",{
        x: 100,
        duration:1.2,
        stagger: .2,
        delay:1,
        ease: Circ.easeInOut
    })
    .to("#loader .parent .child",{
        y: "-100%",
        duration:1,
        ease: Circ.easeInOut
    })
    .to("#loader",{
        height: 0,
        duration:1,
        ease: Circ.easeInOut
    })
    .to("#green",{
        height: "100%",
        duration:1,
        top: 0,
        delay:-.4,
        ease: Circ.easeInOut
    })
    .to("#green",{
        height: 0,
        duration:1,
        top: 0,
        delay:-.5,
        ease: Circ.easeInOut
    })
}


function textAnimation() {
    gsap.from("g path",{
        strokeDasharray: 64.68521881103516,
        strokeOffset: 64.68521881103516,
        duration: 1,
        ease:Power3
    })
}

function svgAnimation() {
    document.querySelectorAll("#Visual>g").forEach((e)=>{
        var char = e.childNodes[1].childNodes[1];

        char.style.strokeDasharray = char.getTotalLength() + 'px';
        char.style.strokeDashoffset = char.getTotalLength() + 'px';

        gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
            strokeDashoffset:0,
            duration:2,
            ease: Expo.easeInOut,
            delay:2
        })
    })
}

function animateHome() {
    gsap.set("#nav a",{
        y: "-100%",
        opacity:0
    });
    gsap.set("#home span .child",{
        y: "100%",
    })
    gsap.set("#home row img",{
        opacity: 0
    })

    var tl = gsap.timeline();

    tl.to("#nav a",{
        y:0,
        opacity: 1,
        stagger: .05,
        ease: Expo.easeInOut
    })
}

revealToSpan();
gsapAnimation();
svgAnimation();