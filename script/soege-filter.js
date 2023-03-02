const opskriftCardTemplate = document.querySelector("[data-opskrift-template]")
const opskriftCardContainer = document.querySelector("[data-opskrift-cards-container]")
const searchInput = document.querySelector("[data-search]")
const meatFilter = document.querySelector("[data-filter-meat]")
const vegetarianFilter = document.querySelector("[data-filter-vegetarian]")
const veganFilter = document.querySelector("[data-filter-vegan]")
const pescetarianFilter = document.querySelector("[data-filter-pescetarian]")


const opskriftArray = [
    {image: '../img/ramen-med-kylling-og-grøntsager.jpeg' , name: 'Ramen m. Kylling', type: 'meat'},
    {image: '../img/sashimi.jpg' , name: 'Sashimi m. Laks', type: 'pescetarian'},
    {image: '../img/reje-2.jpg' , name: 'Tempura Rejer m. Salat', type: 'pescetarian'},
    {image: '../img/miso-2.jpg' , name: 'Miso m. Oksekød', type: 'meat'},
    {image: '../img/sushi.jpg' , name: 'Sushi m. Avokado', type: 'pescetarian'},
    {image: '../img/miso.jpg' , name: 'Ramen m. Tofu', type: 'vegetarian'},
    {image: '../img/dumpling.jpg' , name: 'Spicy Dumplings m. Svinekød', type: 'meat'},
    {image: '../img/fiskebolle.jpg' , name: 'Fiskeboller m. Tangsalat', type: 'pescetarian'},
    {image: '../img/reje.jpg' , name: 'Rejer m. Ris og Miso', type: 'pescetarian'},
]

let opskrifter = []

const filterOpskrifter = () => {
    const searchValue = searchInput.value.toLowerCase()
    const isMeatFilterActive = meatFilter.classList.contains('active')
    const isVegetarianFilterActive = vegetarianFilter.classList.contains('active')
    const isVeganFilterActive = veganFilter.classList.contains('active')
    const isPescetarianFilterActive = pescetarianFilter.classList.contains('active')


    opskrifter.forEach(opskrift => {
        const nameMatch = opskrift.name.toLowerCase().includes(searchValue)

        let isVisible = false

        if (!isMeatFilterActive && !isVegetarianFilterActive && !isVeganFilterActive && !isPescetarianFilterActive) {
            isVisible = nameMatch
        } else if (nameMatch) {
            if (isMeatFilterActive && opskrift.type === 'meat') {
                isVisible = true
            }
            if (isVegetarianFilterActive && opskrift.type === 'vegetarian') {
                isVisible = true
            }
            if (isVeganFilterActive && opskrift.type === 'vegan') {
                isVisible = true
            }
            if (isPescetarianFilterActive && opskrift.type === 'pescetarian') {
                isVisible = true
            }
        }

        opskrift.element.classList.toggle('hide', !isVisible)
    })
}



searchInput.addEventListener('input', () => {
    filterOpskrifter() // callback function 
})

meatFilter.addEventListener('click', () => {
    meatFilter.classList.toggle('active')
    filterOpskrifter() // callback function 
})

vegetarianFilter.addEventListener('click', () => {
    vegetarianFilter.classList.toggle('active')
    filterOpskrifter() // callback function 
})

veganFilter.addEventListener('click', () => {
    veganFilter.classList.toggle('active')
    filterOpskrifter() // callback function 
})
pescetarianFilter.addEventListener('click', () => {
    pescetarianFilter.classList.toggle('active')
    filterOpskrifter() // callback function 
})


const displayOpskrifter = arr => {
    opskrifter = arr.map(opskrift => {
        const card = opskriftCardTemplate.content.cloneNode(true).children[0]
        // her laver vi en variabel der repræsenterer de elementer vi skal bruge
        const header = card.querySelector("[data-opskrift-card-header]")
        // her indsætter vi vores textcontent i de forskellige sektioner i vores card
        card.style.backgroundImage = `url(${opskrift.image})`
        header.textContent = opskrift.name
        // her "append'er" vi det card vi her har lavet til vores userCardContainer
        opskriftCardContainer.append(card)
        // her returnerer vi et object
        return { image: opskrift.image , name: opskrift.name, type: opskrift.type, element: card }
    })
}



displayOpskrifter(opskriftArray)

