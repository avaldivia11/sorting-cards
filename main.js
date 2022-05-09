

let btnDraw = document.querySelector('#btnDraw')
let btnSort = document.querySelector('#btnSort')
let nroCards = document.querySelector('#nro_cards')
let randomCards= document.querySelector('.random-cards')
let sortCards= document.querySelector('.step-sorting-card')

let cards = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let icons = ['spade', 'cubs', 'diamond', 'heart']

let cards_generated=[]


btnDraw.addEventListener('click', ()=>{
    let total = nroCards.value
    if(total >0){
        cards_generated=[]
        while(total>0){
            let c = cards[Math.floor(Math.random()* cards.length)]
            let i = icons[Math.floor(Math.random()* icons.length)]
            cards_generated.push({nro: c, icon: i})
            total--;
        }
        generateCards()
    }
})

btnSort.addEventListener('click', ()=>{
    sortCards.innerHTML=''
    sortingCards(cards_generated) 
})

const generateCards = () =>{
    randomCards.innerHTML=''
    
    cards_generated.forEach((card)=>{
        return randomCards.appendChild(drawCard(card)) 
    })

}


const drawCard = (card) =>{

    let divCard = document.createElement('div')
    let divNumber = document.createElement('div')
    divCard.classList.add('card')
    divNumber.classList.add("number",card.icon)
    divNumber.innerHTML= changeValue(card.nro)
    divCard.appendChild(divNumber)
    return divCard
}

const changeValue=(nro)=>{
    switch(nro){
        case 1:
            return 'A'
        case 11: 
            return 'J'
        case 12:
            return 'Q'
        case 13:
            return 'K'
        default:
            return nro
    }
}

const sortingCards=(arr)=>{
    let wall = arr.length-1
    while (wall >0) {
        for (let index = 0; index < wall; index++) {
            if(arr[index].nro > arr[index+1].nro){
                let aux = arr[index]
                arr[index] = arr[index+1]
                arr[index+1]= aux
            } 
            generateSortCards()           
        }
        wall--
    }
}

const generateSortCards = () =>{
    
    let randCards=document.createElement('div')
    randCards.classList.add('random-cards')
    cards_generated.forEach((card)=>{
        randCards.appendChild(drawCard(card)) 
    })
    sortCards.appendChild(randCards)

}

