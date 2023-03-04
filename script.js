let yield = 0
let amount = 0
let numOfYears = 0
let months = 0
let ukupnoDividendi = 0
let mesecniYield = 0
let iteration = 0
let rezultat = document.getElementById('rezultat')
let ukupno = document.getElementById('ukupno')
let fondSize = document.getElementById('fondSize')
let getStarted = document.getElementById('getStarted')
let welcome = document.getElementById('welcome')
let form = document.getElementById('form')
/**
 * formrula potrebna
 *  
 * mesecniYield = ((amount * (yield / 100)) / 12) * 0.85 
 * amount += amount + mesecniYield
 * 
 * 
 * ukupnoDividendi += mesecniYield
 * 
 * */

function calculate() {
    ukupnoDividendi = 0
    yield = document.getElementById('yield').value
    amount = document.getElementById('amount').value
    months = document.getElementById('months').value
    numOfYears = document.getElementById('years').value
    iteration = amount

    const  numOfMonths = months ? months : numOfYears * 12
    for(let i = 0;i < numOfMonths; i++ ) {
        mesecniYield = ((iteration * (yield / 100)) / 12) * 0.85 
        iteration = +iteration + +amount + +mesecniYield
        ukupnoDividendi = ukupnoDividendi + mesecniYield
        if(i == (numOfMonths-1)) {
            console.log('ja radim')
            rezultat.innerText = Math.trunc(mesecniYield*100)/100
            ukupno.innerText = Math.trunc(ukupnoDividendi*100)/100
            fondSize.innerText = Math.trunc((iteration - amount)*100)/100 
        }
    }
    console.log(mesecniYield)
    //console.log(amount) 
}

getStarted.addEventListener('click',()=>{
    welcome.style.display = 'none'
    form.style.display = 'block'
})