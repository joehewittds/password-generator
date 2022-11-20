import {characters} from "./characters.js";

const genBtn = document.getElementById("Generate")
const passW1 = document.getElementById("pass1")
const passW2 = document.getElementById("pass2")
const passLength = document.getElementById("passLength")

genBtn.addEventListener("click", () => {
    let x = 0
    let passArr = ""
    let passL = passLength.value
    if(passLength.value == null || passLength.value == undefined || passLength.value == ""){
        passL = 15
    }
 

    while(x<2){
        for (let i = 0; i < passL; i++){
            passArr += characters[Math.floor(Math.random()*characters.length)]
        }
        if(x == 0){
            passW1.querySelector("p").textContent = `${passArr}`
            passArr = ""
        }
        if(x == 1){
            passW2.querySelector("p").textContent = `${passArr}`
            passArr = ""
        }
        x++
    }
})

passW1.addEventListener("click", () => {
    navigator.clipboard.writeText(passW1.querySelector("p").textContent)
    alert("Copied the text: " + passW1.querySelector("p").textContent);
})

passW2.addEventListener("click", () => {
    navigator.clipboard.writeText(passW2.querySelector("p").textContent)
    alert("Copied the text: " + passW1.querySelector("p").textContent);
})