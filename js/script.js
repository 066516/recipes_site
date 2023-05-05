import { recettesDB } from "./recettesDB.js";

var indexDefaultRcipe = document.querySelector('.default_recipe')
// //  this part i work in index.html
// // responsive page//
var menu1 = document.querySelector('.menu');
var ul1 = document.querySelector('ul')

menu1.addEventListener('click', () => {
    ul1.classList.toggle('displays')
})
document.addEventListener('scroll', () => {
    ul1.classList.add('displays')
})
//this functin on reloed will change recipe
function getRandomNonRepeatingIntegers(min, max) {
    // Create an array of integers between min and max
    let integers = [];

    for (let i = min; i <= max; i++) {
        integers.push(i);

    }

    // Shuffle the array
    for (let i = integers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [integers[i], integers[j]] = [integers[j], integers[i]];
    }

    // Return the first 3 elements of the shuffled array
    return integers.slice(0, 3);
}

// Example usage:

var tableRandom = getRandomNonRepeatingIntegers(1, 10);


function default_recipe() {

    for (let index = 0; index < tableRandom.length; index++) {
        let moy = 0;
        let i = 0;
        var comments = recettesDB[tableRandom[index]-1].comments
        comments.forEach(comment => {
            i++
            moy = moy + comment.rating
        })
        moy = moy / i;
        indexDefaultRcipe.innerHTML +=
            `  
            <div class="card recipe">
                <div class="face front">
                <img src="../assets/recettes/${tableRandom[index]}/2.png" alt=""> 
                <h2> ${recettesDB[tableRandom[index] - 1].name}</h2>
                </div>
                <div class="face back">

                    <h2> Category : ${recettesDB[tableRandom[index] - 1].category} </h2>
                    <h2> Origin: ${recettesDB[tableRandom[index] - 1].country}</h2>
                    <h2> duree: ${recettesDB[tableRandom[index] - 1].duration}</h2>
                    <h2> Rating: ${moy}</h2>
                    <button id='${tableRandom[index] - 1}'>see details</button>
                </div>
        </div>
            
`
    }
}
default_recipe()
var btn = document.getElementById('btnrecipe')
function changeLocation() {
    location = '../html/catalogue.html'
}
btn.addEventListener('click', changeLocation)
var btns = indexDefaultRcipe.getElementsByTagName('button')
for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener('click', () => {

        location = '../html/details.html?recipe=' + btns[index].id
    })



}
var img = document.querySelector('.imgs1')
var about = document.getElementById('about-us')
setInterval(() => {
    img.setAttribute('src', `/assets/food/food${Math.floor(Math.random() * 3 + 2)}.jpeg`)
}, 1000)
setInterval(() => {
    about.setAttribute('src', `/assets/food/food${Math.floor(Math.random() * 3 + 2)}.jpeg`)
}, 2000)
