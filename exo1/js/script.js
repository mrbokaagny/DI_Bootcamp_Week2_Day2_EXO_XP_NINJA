// Exercice1
let current_date = new Date().getFullYear();
let birthdayOne = prompt("Entrer la date de naissance de la premiere personne")
let birthdayTwo = prompt("Entrer la date de naissance de la deuxieme personne")
// verifier si les valeurs entrées sont des nombres
if(!Number(birthdayOne) || !Number(birthdayTwo)) {
    console.log('Veuillez respecter ce format svp YYYY')
}else{
    let  ageOfPersonneOne = current_date - birthdayOne
    let ageOfPersonneTwo = current_date - birthdayTwo
    let tempDate; 
    if ( ageOfPersonneOne > ageOfPersonneTwo) {
        tempDate =  ageOfPersonneOne - 2*ageOfPersonneTwo;
    }
    else {
        tempDate = ageOfPersonneTwo - 2* ageOfPersonneOne;
    }
    console.log(tempDate)
    console.log(current_date)
    let gooDate = current_date + tempDate
    let message = "L'année à laquelle l'age de la personne 2 est la moitié de l'age de la personne 1 est " + String(gooDate)
    console.log(gooDate)
    alert(message);
}  
