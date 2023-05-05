import { recettesDB } from "./recettesDB.js";


const parmas = new URLSearchParams(window.location.search)
var id = parmas.get('recipe')
console.log(id);
var menu = document.querySelector('.menu');
var ul = document.querySelector('ul')

menu.addEventListener('click', () => {
    ul.classList.toggle('displays')
})
document.addEventListener('scroll', () => {
    ul.classList.add('displays')
})
var details = document.querySelector('.recipe_details')
var ingredients = document.getElementById('ingredients')
var instructions = document.getElementById('instructions')
var comments = recettesDB[id].comments
var groupeComments = document.querySelector('.comments')
var moy=0;
var i=0;
comments.forEach(comment => {
i++
moy=moy+comment.rating
    groupeComments.innerHTML += `
    <div class="comment">
                    <div>
                        <img src="../assets/social media/user.png" alt="">
                        <h2>${comment.user}</h2>
                    </div>
                    <h2>${comment.rating } /5</h2>
                    <p> ${comment.content}</p>
                </div>
    `
})
moy=moy/i;
for (let index = 0; index < recettesDB[id].ingredients.length; index++) {

    ingredients.innerHTML += `-${recettesDB[id].ingredients[index]} <br>`

}
for (let index = 0; index < recettesDB[id].instructions.length; index++) {

    instructions.innerHTML += `-${recettesDB[id].instructions[index]} <br>`

}

id++
function detail() {
    details.innerHTML = ` 
    <div class="details">
                <div class="face">
                    <div>
                        <h2>
                            ${recettesDB[id - 1].name}
                        </h2>
                        <h2>
                           ${moy}
                        </h2>
                        <div class="groupe_crycle">
                            <h2 class="crycle">
                                <span>  ${recettesDB[id - 1].duration}</span>

                            </h2>
                            <h2 class="crycle">
                                <span>Category :  ${recettesDB[id - 1].category} </span>

                            </h2>
                            <h2 class="crycle">
                                <span> Caountry :  ${recettesDB[id - 1].country}</span>

                            </h2>
                        </div>
                    </div>       
                    <img src="../assets/recettes/${id}/1.png" alt="">
                </div>
                ${ingredients.outerHTML} 
                ${instructions.outerHTML} 
                <h2> more images :  </h2>
                <div class="imgs">
                    <img src="../assets/recettes/${id}/${2}.png" alt="">
                    <img src="../assets/recettes/${id}/${3}.png" alt="">
                    <img src="../assets/recettes/${id}/${4}.png" alt="">
                </div>
            </div>
           ${groupeComments.outerHTML}    
    `
}
detail()
