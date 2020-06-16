const slideshowContainer = document.querySelector(".slideshow-container")
const slide = document.querySelector(".slide") //the first image
const slideImgs = document.querySelectorAll(".slideshow-img") //all images
const bubbles = document.querySelectorAll(".bubbles i")


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


//Button listerner

nextBtn.addEventListener("click", () => {
    heartBtn.style.color = "black"
    if (counter >= slideImgs.length - 1) return
    slide.style.transition = "transform 0.5s ease-in-out"
    console.log(counter)
    bubbles[counter % 4].className = "fas fa-circle"

    counter++;
    bubbles[counter % 4].className += " bubbles-hili"
    const size = slideImgs[0].clientWidth
    slide.style.transform = `translateX(${-size * counter}px)`

})

prevBtn.addEventListener("click", () => {
    heartBtn.style.color = "black"
    if (counter <= 0) return
    slide.style.transition = "transform 0.4s ease-in-out"
    console.log(counter)
    bubbles[counter % 4].className = "fas fa-circle"
    counter--;
    bubbles[counter % 4].className += " bubbles-hili"
    const size = slideImgs[0].clientWidth
    slide.style.transform = `translateX(${-size * counter}px)`

})

slide.addEventListener("transitionend", () => {
    const size = slideImgs[0].clientWidth
    if (slideImgs[counter].id === "lastclone") {
        slide.style.transition = "none"
        counter = slideImgs.length - 2
        slide.style.transform = `translateX(${-size * counter}px)`
    }
    if (slideImgs[counter].id === "firstclone") {
        slide.style.transition = "none"
        counter = 1 //slideImgs.length - counter
        slide.style.transform = `translateX(${-size * counter}px)`
    }
})

seeAllBtn.addEventListener("click", () => {
    slideshowContainer.style.display = "block"
        // returns a number, representing the viewable width of an element in pixels, including padding

})

heartBtn.addEventListener("click", () => {
    heartBtn.style.color = "red"
})

closeBtn.addEventListener("click", () => {
    slideshowContainer.style.display = "none"
})


/*

declare the variable when you use it:
e.g. when display is none, all descendants' width and height
are 0. 

*/