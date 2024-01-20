let jsImage = document.getElementById("js-image")
let jsParagraph = document.getElementById("js-p")

jsImage.addEventListener("mouseover", () => {
    jsParagraph.innerHTML = "Work in progress"
})

jsImage.addEventListener("mouseout", () => {
    jsParagraph.innerHTML = "JavaScript"
})

let frontEndTag = document.getElementById("front-end-tag")

frontEndTag.addEventListener("mouseover", () => {
    frontEndTag.innerHTML = "Work in progress"
})

frontEndTag.addEventListener("mouseout", () => {
    frontEndTag.innerHTML = "Front End Developer"
})