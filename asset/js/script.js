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

let result1 = document.getElementById("result1")
let operator = document.getElementById("operator")
let result2 = document.getElementById("result2")
let finalResult = document.getElementById("finalresult")

// * on regarde si il y a un point seulement.
let checkForDecimal = /\.{1}/

/*
todo: si finalresult a une valeur, quand on clique sur un bouton, 
todo: la calculatrice doit reset
todo: catch les différentes erreurs, catch infi, catch les résultats en .333
todo: rename certaines variables pour plus de clareté
*/

zero.addEventListener('click', function () {
    if (operator.innerHTML == "") {
        result1.innerHTML += 0
    } else
        result2.innerHTML += 0
})

one.addEventListener('click', function () {
    if (operator.innerHTML == "") {
        result1.innerHTML += 1
    } else
        result2.innerHTML += 1

})

two.addEventListener('click', function () {
    if (operator.innerHTML == "") {
        result1.innerHTML += 2
    } else
        result2.innerHTML += 2
})

three.addEventListener('click', function () {
    if (operator.innerHTML == "") {
        result1.innerHTML += 3
    } else
        result2.innerHTML += 3
})

four.addEventListener('click', function () {
    if (operator.innerHTML == "") {
        result1.innerHTML += 4
    } else
        result2.innerHTML += 4
})

five.addEventListener('click', function () {
    if (operator.innerHTML == "") {
        result1.innerHTML += 5
    } else
        result2.innerHTML += 5
})

six.addEventListener('click', function () {
    if (operator.innerHTML == "") {
        result1.innerHTML += 6
    } else
        result2.innerHTML += 6
})

seven.addEventListener('click', function () {
    if (operator.innerHTML == "") {
        result1.innerHTML += 7
    } else
        result2.innerHTML += 7
})

eight.addEventListener('click', function () {
    if (operator.innerHTML == "") {
        result1.innerHTML += 8
    } else
        result2.innerHTML += 8
})

nine.addEventListener('click', function () {
    if (operator.innerHTML == "") {
        result1.innerHTML += 9
    } else
        result2.innerHTML += 9
})

//! all clear
ac.addEventListener('click', function () {
    result1.innerHTML = ""
    operator.innerHTML = ""
    result2.innerHTML = ""
    finalResult.innerHTML = ""
})


divide.addEventListener('click', function () {
    if (result1.innerHTML == "") {
        // si on a pas d'opération en cours, rien ne s'affichera
        result1.innerHTML = ""
    } else
        operator.innerHTML += "/"
})

multiply.addEventListener('click', function () {
    if (result1.innerHTML == "") {
        // si on a pas d'opération en cours, rien ne s'affichera
        result1.innerHTML = ""
    } else
        operator.innerHTML += "X"
})

substract.addEventListener('click', function () {
    if (result1.innerHTML == "") {
        // si on a pas d'opération en cours, rien ne s'affichera
        result1.innerHTML = ""
    } else
        operator.innerHTML += "-"
})

addition.addEventListener('click', function () {
    if (result1.innerHTML == "") {
        // si on a pas d'opération en cours, rien ne s'affichera
        result1.innerHTML = ""
    } else
        operator.innerHTML += "+"
})

equal.addEventListener('click', function () {
    let nb1 = 0
    let nb2 = 0

    //check float premier nombre
    if (checkForDecimal.test(result1.innerHTML) == true) {
        nb1 = parseFloat(result1.innerHTML)
    } else {
        nb1 = parseInt(result1.innerHTML)
    }

    //check float second nombre
    if (checkForDecimal.test(result2.innerHTML) == true) {
        nb2 = parseFloat(result2.innerHTML)
    } else {
        nb2 = parseInt(result2.innerHTML)
    }

    //résultat final selon string operator
    switch (operator.innerHTML) {
        case "+":
            finalResult.innerHTML = (nb1 + nb2)
            break;
        case "-":
            finalResult.innerHTML = (nb1 - nb2)
            break;
        case "X":
            finalResult.innerHTML = (nb1 * nb2)
            break;
        case "/":
            finalResult.innerHTML = (nb1 / nb2)
            break;
    }

    //si result 2 vide, revoyer result 1
    if (operator.innerHTML == "") {
        finalResult.innerHTML = result1
        console.log(finalResult.innerHTML)
    }

})


point.addEventListener('click', function () {
    if (operator.innerHTML == "") {
        if (result1.innerHTML == "") {
            //affiche 0 s'il n'y a pas de chiffre entré au début, comme sur les vraies calculettes
            result1.innerHTML += "0."
        } else if (result1.innerHTML != "") {
            //check si il y a un point
            if (checkForDecimal.test(result1.innerHTML) == true) {
                result1.innerHTML += ""
                // ! pas de nouveau point si il y en a déjà un
            } else {
                result1.innerHTML += "."
            }
        }
    } else
        if (result2.innerHTML == "") {
            //affiche 0 s'il n'y a pas de chiffre entré au début, comme sur les vraies calculettes
            result2.innerHTML += "0."
        } else if (result2.innerHTML != "") {
            //check si il y a un point
            if (checkForDecimal.test(result2.innerHTML) == true) {
                result2.innerHTML += ""
                //! pas de nouveau point si il y en a déjà un
            } else {
                result2.innerHTML += "."
            }
        }
})
