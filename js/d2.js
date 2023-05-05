import { recettesDB } from "./recettesDB.js";

const parmas = new URLSearchParams(window.location.search)
var id = parmas.get('recette')

var nom = document.querySelector('.nomrecette')
nom.innerHTML = `  </h1> ${recettesDB[id].name}<h1>

`
var containers = document.querySelector('.containers')
containers.innerHTML = `  
<img class="photo"src="../assets/recettes/${id+1}/2.png" alt="">
`
var detail = document.querySelector('.detail')
detail.innerHTML=`
    
<div class="category">
<h2>category:</h2>
<h3>${recettesDB[id].category}</h3>
</div>
<div class="country">
<h2>country:</h2>
<h3>${recettesDB[id].country}</h3>
</div>
<div class="duration">
<h2>duration:</h2>
<h3>${recettesDB[id].duration}</h3>
</div>
`
var ingredients = document.querySelector('.ingredients ul')
var instructions = document.querySelector('.instructions p')

for (let index = 0; index < recettesDB[id].ingredients.length; index++) {
    
    ingredients.innerHTML += `<li>${recettesDB[id].ingredients[index]} </li>`
    
}
for (let index = 0; index < recettesDB[id].instructions.length; index++) {
    
    instructions.innerHTML += `${recettesDB[id].instructions[index]} <br> `
    
}
var images = document.querySelector('.images')
images.innerHTML=`
<img src="../assets/recettes/${parseInt(id)+1}/2.png" alt="">
<img src="../assets/recettes/${id+1}//3.png" alt="">
<img src="../assets/recettes/${id+1}//4.png" alt="">
`
