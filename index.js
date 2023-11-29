//1 uzduotis
// let kiekSkaiciu = parseInt(prompt("kiek skaiciu: "));
// for(let i = 0; i <= kiekSkaiciu; i++){
//     let kokieSkaiciai = parseInt(prompt("Iveskite skaiciu: "));
//     if(kokieSkaiciai < 0){
//     alert(`pirmas neigiamas skaicius buvo ${kokieSkaiciai}`)
//     break;
//     }
// }
//2 uzduotis
// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0)
//         continue;
//         console.log(i)
// }
//3
// for(let i = 2; i <= 12; i++){
//     kubas = i**3
//     console.log(`Skaiciaus ${i} pakeltas kubu yra ${kubas}`);
// }
//4uzduotis
// const persons = {
//     jonas: 30,
//     petras: 26,
//     ona:45,
//     maryte:36,
//     antanas:77,
//     "teta Zita":86,
// };
// let skait = 0;
// for(let key in persons){
//     skait++
//     console.log(`${key}: ${persons[key]} metai.`);
// }

//5uzduotis
// const hero = {
//     name: "Spider-man",
//     "real name": "Peter Parker",
//     age: 25,
//     "got bit by": "a spider",
//     "costume color": "red and blue",
//     character: "caring",
// };
// let skait2 = 0;
// for(let key in hero){
//     skait2++;
// }
// console.log(`Objekte yra ${skait2}-ios savybes`);

//6uzduotis

// let sakinys = prompt("Iveskite sakini");
// let zodziai = sakinys.split(" ");
// for(let zodis of zodziai){
//     console.log(zodis);
// }

//7uzduotis

// let tekstas = "Sesios zasys su sesiais zasyciais";

// let skaitl3 = 0;
// for (let char of tekstas){
//         skaitl3++;
// }
// console.log(`Sakinys "${tekstas}" turi ${skaitl3} simbolius.\n Patikrinimas su length: ${tekstas.length}`);

//8uzduotis

// let lygSkaicius = 20;
// while(lygSkaicius <= 50){
//     if(lygSkaicius % 2 ===0){
//     console.log(`Lyginis ${lygSkaicius}`);
//     }
//     lygSkaicius++
// }

//9uzduotis
// let skaicius = 0;

// do{
//     skaicius = parseInt(prompt("Iveskite skaiciu: "));
//     if(skaicius % 2 === 0){
//         skaicius++
//     } else{
//         alert("Jus ivedete nelygini skaiciu!");
//         break;
//     }
// } while(skaicius > 0);


//10uzduotis

// let sk = 0;
// let suma = 0;
// let ivedimas = 0;
// do{
//     ivedimas = parseInt(prompt("Iveskite skaicius: "));
//     if(ivedimas > 0){
//         sk++
//         suma += ivedimas;
//     } else if (ivedimas === 0){
//         alert("Skaicius 0 negalimas");
//         break;
//     } else {
//         alert("Neigiami skaiciai negalimi");
//         break;
//     }
// } while(ivedimas > 0);
// alert(`Jusu ivestu skaiciu suma yra ${suma}.`);
