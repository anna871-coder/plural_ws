//létrehoozzuk a _load függvényt
function _load() {
    //Deklaráljuk a rootE-t,mely a "root" ID-jú elemet jelöli ki
    let rootE = document.getElementById("root");
    //Deklaráljuk a TextArray tömböt, megadjuk [] között a tömb elemeit.
    let aTextArray = ["alma", "cseresznye", "eper", "dinnye", "szeder", "mandarin", "ribizli", "narancs", "paradicsom", "citrom", "datolya", "szilva", "kivi", "barack", "pomelo", "grapefruit", "kaki"];
    //Kilogoltattuk az aTextArray tömbnek a hosszát
    /*    console.log(aTextArray.length); */

    //Létrehoztuk a for ciklust, ahol az aTextArray hosszánál kisebb elemekig egyesével hozzáadja a tömb elemeihez egy fruit class-ű divet, amelynek a textNode-ja az adott indexű eleme az aTextArray-nek.
    for (let index = 0; index < aTextArray.length; index++) {
        //Kiírjuk, hogy hány elemből áll az aTextArray.
        /*     console.log(aTextArray[index]); */

        rootE.insertAdjacentHTML("beforeend", `
            <div class="fruit">${aTextArray[index]}</div>
        `);

    }
    /* console.log(document.getElementsByClassName("fruit"));   */

    //Létrehozzuk a fruitDivs-t, amely a rootE-nek az összes fruit class-ét kiválasztja, utána a fruitDivs tömb hosszát kiiratjuk a console-ra
    let fruitDivs = rootE.querySelectorAll(".fruit");
    console.log(fruitDivs.length)

    //A for ciklust létrehozzuk, amiben:
    //-  ha a fruitdivs eleme páros, akkor hozzáadja a "trueClass"-t,
    //- ha a fruitDivs fennmaradó elemei öttel oszthatóak, akkor az "anotherClass"t,
    //- minden más esetben a "falseClass"-t adja hozzá
    for (let index = 0; index < fruitDivs.length; index++) {
        /*      console.log(fruitDivs[index]); */
        /*     fruitDivs[index].classList.add("anotherClass"); */

        /*   console.log(index === 1); */
        /*   console.log(index % 2 === 0); */
        if (index % 2 === 0) {
            fruitDivs[index].classList.add("trueClass");

        }
        else if (index % 5 === 0) {
            fruitDivs[index].classList.toggle("anothereClass");
        }
        else {
            fruitDivs[index].classList.add("falseClass");

        }
    }



}
//Betölti az oldal a "_load" függvényt a window-on
window.addEventListener("load", _load)