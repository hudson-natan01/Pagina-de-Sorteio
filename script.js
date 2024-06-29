const button = document.querySelector("button")
const minFunction = document.querySelector(".min")
const maxFunction = document.querySelector(".max")

function toRank(){
    
    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)
    const numberResult = document.querySelector(".number-result")
    const finalResult = document.querySelector(".final")

    const draw =  Math.floor(Math.random() * (max - min + 1)) + min;

    finalResult.style.visibility = "visible"
    numberResult.innerHTML = draw

}

function resetResult(){
    const finalResult = document.querySelector(".final")

    finalResult.style.visibility = "hidden"
}


button.addEventListener("click", toRank)
minFunction.addEventListener("click",resetResult)
maxFunction.addEventListener("click",resetResult)