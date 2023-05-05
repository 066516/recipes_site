import { recettesDB } from "./recettesDB.js";
var catalogueRecipes = document.querySelector('.list_recipes')
//**************************************************************************** */
//part catalogue.html


///responsive page
var menu2 = document.querySelector('.menu')
var showCategory = document.getElementById('responsive_category')
var ulCatalogue1 = document.querySelector('.ulCatalogue1')
var ulCatalogue2 = document.querySelector('.categorynav')
menu2.addEventListener('click', () => {
    if (!ulCatalogue1.classList.contains('display')) {
        ulCatalogue1.classList.add('display')
        ulCatalogue2.classList.add('display')
    } else {
        ulCatalogue1.classList.remove('display')
        ulCatalogue2.classList.remove('display')
    }
})
showCategory.addEventListener('click', () => {
    ulCatalogue2.classList.toggle('display')
})
document.addEventListener('scroll', () => {
    ulCatalogue1.classList.add('display')
    ulCatalogue2.classList.add('display')
})
var moy = 0;
var i = 0;
function set_recipes() {
    for (let index = 0; index < recettesDB.length; index++) {
        moy=0;
        i=0;
        var comments = recettesDB[index].comments
        comments.forEach(comment => {
            i++
            moy = moy + comment.rating
        })
        moy = moy / i;
        catalogueRecipes.innerHTML +=
            `  
            <div class="card recipe">
            <div class="face front">
            <img src="../assets/recettes/${index+1}/2.png" alt=""> 
            <h2> ${recettesDB[index].name}</h2>
            </div>
            <div class="face back">

                <h2> Category : ${recettesDB[index ].category} </h2>
                <h2> Origin: ${recettesDB[index ].country}</h2>
                <h2> duree: ${recettesDB[index].duration}</h2>
                <h2> Rating: ${moy}</h2>
                <button id='${index }'>see details</button>
            </div>
    </div>
        
`

    }


}

set_recipes()

var inp = document.getElementById('inp')



function search() {
    inp.addEventListener('input', () => {
        catalogueRecipes.innerHTML = ``
        for (let index = 0; index < recettesDB.length; index++) {
            if (recettesDB[index].name.toLowerCase().includes(inp.value.toLowerCase())) {
                catalogueRecipes.innerHTML +=
                    `  
                    <div class="card recipe">
                    <div class="face front">
                    <img src="../assets/recettes/${index+1}/2.png" alt=""> 
                    <h2> ${recettesDB[index].name}</h2>
                    </div>
                    <div class="face back">
        
                        <h2> Category : ${recettesDB[index ].category} </h2>
                        <h2> Origin: ${recettesDB[index ].country}</h2>
                        <h2> duree: ${recettesDB[index].duration}</h2>
                        <h2> Rating: ${moy}</h2>
                        <button id='${index }'>see details</button>
                    </div>
            </div>
`
            }

        }

        seeDetails()

    })

}

//
search()
var select = document.getElementById('select');
function selectCategory() {
    select.addEventListener('change', () => {
        console.log(select.value);
        if (select.value === 'all') {
            catalogueRecipes.innerHTML = ``
            set_recipes()
        }
        else {
            catalogueRecipes.innerHTML = ``
            for (let index = 0; index < recettesDB.length; index++) {

                if (recettesDB[index].category == select.value) {
                    catalogueRecipes.innerHTML +=
                        `  
                        <div class="card recipe">
                        <div class="face front">
                        <img src="../assets/recettes/${index+1}/2.png" alt=""> 
                        <h2> ${recettesDB[index].name}</h2>
                        </div>
                        <div class="face back">
            
                            <h2> Category : ${recettesDB[index ].category} </h2>
                            <h2> Origin: ${recettesDB[index ].country}</h2>
                            <h2> duree: ${recettesDB[index].duration}</h2>
                            <h2> Rating: ${moy}</h2>
                            <button id='${index }'>see details</button>
                        </div>
                </div>
`

                }

            }
        }
        seeDetails()
    })
}
selectCategory()
function ulCategory() {
    var ul = document.querySelectorAll('.categorynav li')
    console.log(ul);
    ul.forEach(li => {
        li.addEventListener('click', () => {
            select.value = li.id
            ul.forEach(
                li2 => {
                    li2.classList.remove("colormodify")
                }
            )
            li.classList.add("colormodify")
            catalogueRecipes.innerHTML = ``
            for (let index = 0; index < recettesDB.length; index++) {

                if (recettesDB[index].category == select.value) {
                    catalogueRecipes.innerHTML +=
                        `  
                        <div class="card recipe">
                        <div class="face front">
                        <img src="../assets/recettes/${index+1}/2.png" alt=""> 
                        <h2> ${recettesDB[index].name}</h2>
                        </div>
                        <div class="face back">
            
                            <h2> Category : ${recettesDB[index ].category} </h2>
                            <h2> Origin: ${recettesDB[index ].country}</h2>
                            <h2> duree: ${recettesDB[index].duration}</h2>
                            <h2> Rating: ${moy}</h2>
                            <button id='${index }'>see details</button>
                        </div>
                </div>
`

                }

            }
        })
    })
}
ulCategory()
function seeDetails() {
    var btns = catalogueRecipes.getElementsByTagName('button')
    for (let index = 0; index < btns.length; index++) {
        btns[index].addEventListener('click', () => {

            location = '../html/details.html?recipe=' + btns[index].id

        })

    }

    console.log('ll');
    console.log(btns.length);
}
seeDetails()
