let yield = 0
let amount = 0
let numOfYears = 0
let months = 0
let ukupnoDividendi = 0
let mesecniYield = 0
let iteration = 0
let appreciation = 0
let fond = 0 
let mon = document.getElementById('months')
mon.style.display = 'none'
let rezultat = document.getElementById('rezultat')
let ukupno = document.getElementById('ukupno')
let fondSize = document.getElementById('fondSize')
let getStarted = document.getElementById('getStarted')
let welcome = document.getElementById('welcome')
let form = document.getElementById('form')

function getValues() {
    yield = document.getElementById('yield').value
    amount = document.getElementById('amount').value
    months = document.getElementById('months').value
    numOfYears = document.getElementById('years').value
    appreciation = document.getElementById('appreciation').value
}

function toggleSwitch() {
    let year = document.getElementById('years')
    let switchInput = document.getElementById('toggle')
    if(switchInput.checked) {
        mon.style.display = "block";
        year.style.display = "none"
    }else {
        mon.style.display = "none"
        year.style.display = "block";
    }
  }

function calculate() {
    console.log('zovem')
    getValues()
    ukupnoDividendi = 0
    fond = 0
    iteration = amount
    const  numOfMonths = months ? months : numOfYears * 12
    fond = amount * numOfMonths

    for(let i = 0;i < numOfMonths; i++ ) {
        amount = amount * (100 -(appreciation / 12)) / 100
        mesecniYield = ((iteration * (yield / 100)) / 12) * 0.85 
        iteration = +iteration + +amount + +mesecniYield
        ukupnoDividendi = ukupnoDividendi + mesecniYield
    }

    fond = +fond + +ukupnoDividendi
    showResult()
}

function showResult() {
    rezultat.innerText = Math.trunc(mesecniYield*100)/100
    ukupno.innerText = Math.trunc(ukupnoDividendi*100)/100
    fondSize.innerText = Math.trunc((fond)*100)/100 
}

getStarted.addEventListener('click',()=>{
    welcome.style.display = 'none'
    form.style.display = 'block'
})

