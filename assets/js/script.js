let frontEndTag = document.getElementById("front-end-tag")

frontEndTag.addEventListener("mouseover", () => {
    frontEndTag.innerHTML = "Work in progress"
})

frontEndTag.addEventListener("mouseout", () => {
    frontEndTag.innerHTML = "Front End Developer"
})