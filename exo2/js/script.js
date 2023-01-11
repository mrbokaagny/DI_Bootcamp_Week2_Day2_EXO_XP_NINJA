
// Exercice2
//sans regex
const myRegrex = prompt("Veuillez renseigner votre code postal ")
if(String(myRegrex).length != 5 ||  !Number(myRegrex)){
    console.log("error")
} else {
    console.log("succès")
}

// avec regex
const regrexPostale = prompt("Veuillez renseigner votre code postal ")
const numberRegex = /^[\d+]{5}$/; 
if(numberRegex.test(regrexPostale)){
    console.log("succès")
} else {
    console.log("error")
}