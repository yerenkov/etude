import {text} from "./text.js"

let pageN = 0
let t
let textArray = text.split(". ")
console.log(textArray[14]);
let sAmount = 50

function handlePage() {
    t = textArray.slice(pageN*sAmount, pageN*sAmount+sAmount).join(". ")+". "
    p.innerHTML = t
    page.innerHTML = pageN + 1
}

handlePage()

next.onclick = () => {
    if (pageN < textArray.length/sAmount-1) {
        pageN++
        handlePage()
        document.documentElement.scrollTop = 0;
    }
}

prev.onclick = () => {
    if (pageN > 0) {
        pageN--
        handlePage()
        document.documentElement.scrollTop = 0;
    }
}