
// Exercice3
const incommingNumber = prompt("Veillez entrer un mot")
const motSansVoyelle = incommingNumber.replace(/[aeiou]/gi, '');
console.log("le mot sans les voyelles est " +motSansVoyelle);
//bonus
const a = 1
const e = 2
const i= 3
const o = 4
const u = 5
const  motSansVoyelleA = incommingNumber.replace(/[a]/gi, a)
const  motSansVoyelleAE = motSansVoyelleA.replace(/[e]/gi, e)
const  motSansVoyelleAEI = motSansVoyelleAE.replace(/[i]/gi, i)
const  motSansVoyelleAEIO = motSansVoyelleAEI.replace(/[o]/gi, o)
const  motSansVoyelleAEIOU = motSansVoyelleAEIO.replace(/[u]/gi, u)
console.log("Le nouveau mot apres avoir remplacé les voyelles par des caracteres est " +motSansVoyelleAEIOU)