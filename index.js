const slideshowContainer = document.querySelector(".slideshow-container")
const slide = document.querySelector(".slide") //the first image
const slideImgs = document.querySelectorAll(".slideshow-img") //all images
const bubbles = document.querySelectorAll(".bubbles i")
const slideshowHeader = document.querySelector(".slideshow-header")


//Button
const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")
const seeAllBtn = document.querySelector("#seeAllBtn")
const heartBtn = document.querySelector("#heart")
const shareBtn = document.querySelector("#share")
const closeBtn = document.querySelector("#close")

//Counter
let counter = 0
slide.style.transform = `translateX(0px)`
counterChange = (counter) => {
    slideshowHeader.innerHTML = `${counter + 1} / ${slideImgs.length}`
}
counterChange(counter);



//Button listerner

nextBtn.addEventListener("click", () => {
    prevBtn.style.visibility = "visible"
        /* every click afterwards, the heart turns black
        heartBtn.style.color = "black" */

    if (counter === slideImgs.length - 2) {
        nextBtn.style.visibility = "hidden"
    }
    if (counter === slideImgs.length - 1) return

    slideImgs[counter].style.transition = "opacity 1s ease-in-out"
    slideImgs[counter].style.opacity = "0.4"

    slide.style.transition = "transform 1s ease-in-out 1s"
    bubbles[counter % 5].className = "fas fa-circle"

    counter++;
    counterChange(counter);

    slideImgs[counter].style.transition = "opacity 1.5s ease-in-out 1s"
    slideImgs[counter].style.opacity = "1.0"

    const size = slideImgs[0].clientWidth
    slide.style.transform = `translateX(${-size * counter}px)`
        /*
         bubbles[counter % 5].className += " bubbles-hili"
         
         */

})

prevBtn.addEventListener("click", () => {
    nextBtn.style.visibility = "visible"
        /*heartBtn.style.color = "black"*/
    if (counter < 1) return
    slide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    if (counter === 0) {
        prevBtn.style.visibility = "hidden"
    }
    if (counter > slideImgs.length - 1) return
    counterChange(counter);
    const size = slideImgs[0].clientWidth
    slide.style.transform = `translateX(${-size * counter}px)`
        /*
        bubbles[counter % 5].className = "fas fa-circle"
        bubbles[counter % 5].className += " bubbles-hili"
    
        */
})



seeAllBtn.addEventListener("click", () => {
    slideshowContainer.style.display = "block"

    slideImgs[counter].style.transitionProperty = "opacity"
    slideImgs[counter].style.transitionDuration = "1s"
    slideImgs[counter].style.transitionTimingFunction = "ease-in-out"
    slideImgs[counter].style.opacity = "1.0"

    // returns a number, representing the viewable width of an element in pixels, including padding

})

/*
heartBtn.addEventListener("click", () => {
    heartBtn.style.color = "red"
})


*/
closeBtn.addEventListener("click", () => {
        slideshowContainer.style.display = "none"
    })
    /*

    declare the variable when you use it:
    e.g. when display is none, all descendants' width and height
    are 0. 

    */