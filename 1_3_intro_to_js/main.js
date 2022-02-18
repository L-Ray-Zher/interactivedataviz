console.log('hello world');
console.log('hello pet');

const label = document.getElementById("pet-label")
const input = document.getElementById("pet-input")
const button = document.getElementById("pet-submit")

let petName;

function petNameIt() {
    petName = input.value
    console.log(petName)
    label.innerText = "Wow! I love that name: " + petName
    button.innerText = "Name it again!"
    input.value = ""
} 




