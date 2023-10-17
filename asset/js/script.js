let zero = document.getElementById("zero")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let ac = document.getElementById("ac")
let divide = document.getElementById("divide")
let multiply = document.getElementById("multiply")
let substract = document.getElementById("substract")
let addition = document.getElementById("addition")
let point = document.getElementById("point")
let equal = document.getElementById("equal")

let screen = document.getElementById("screen")



//todo : faire en sorte que chaque input s'ajoute l'un après l'autre"

zero.addEventListener('click', function () {
    screen.innerHTML = 0
})

one.addEventListener('click', function () {
    screen.innerHTML = 1
})

two.addEventListener('click', function () {
    screen.innerHTML = 2
})

three.addEventListener('click', function () {
    screen.innerHTML = 3
})

four.addEventListener('click', function () {
    screen.innerHTML = 4
})

five.addEventListener('click', function () {
    screen.innerHTML = 5
})

six.addEventListener('click', function () {
    screen.innerHTML = 6
})

seven.addEventListener('click', function () {
    screen.innerHTML = 7
})

eight.addEventListener('click', function () {
    screen.innerHTML = 8
})

nine.addEventListener('click', function () {
    screen.innerHTML = 9
})

ac.addEventListener('click', function () {
    screen.innerHTML = "clear"
})

divide.addEventListener('click', function () {
    screen.innerHTML = "/"
})

multiply.addEventListener('click', function () {
    screen.innerHTML = "x"
})

substract.addEventListener('click', function () {
    screen.innerHTML = "-"
})

addition.addEventListener('click', function () {
    screen.innerHTML = "+"
})

equal.addEventListener('click', function () {
    screen.innerHTML = "="
})

point.addEventListener('click', function () {
    screen.innerHTML = "."
})
