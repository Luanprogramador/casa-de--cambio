const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")




function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")/*valor em real*/ 
    const currencyValueConverted = document.querySelector(".currency-value") /*outras moedas*/ 

console.log("currecySelect.value")


const dolarToday = 5.2
const euroToday = 6.2
const bitcoinToday = 2.0
const libraToday  = 5.7



if(currencySelect.value == "dolar"){
    currencyValueConverted.innerHTML = new Intl .NumberFormat("en-us",{
        style:"currency",
        currency:"USD"
    }).format(inputCurrencyValue / dolarToday)
    
}

if(currencySelect.value == "euro"){
currencyValueConverted.innerHTML = new Intl .NumberFormat("de-DE",{
    style:"currency",
    currency:"EUR"
}).format(inputCurrencyValue / euroToday)
}

if(currencySelect.value == "bitcoin"){
    currencyValueConverted.innerHTML = new Intl .NumberFormat("en-us",{
        style:"currency",
        currency:"USD"
    }).format(inputCurrencyValue / bitcoinToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl .NumberFormat("uk-UK",{
            style:"currency",
            currency:"UK"
        }).format(inputCurrencyValue / libraToday)
        }


currencyValueToConvert.innerHTML = new Intl .NumberFormat("pt-br",{
    style:"currency",
    currency:"BRL"
}).format(inputCurrencyValue)
}
function changeCurrency (){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "./assets/dolar.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.Png"
    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    convertValues()


}

currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click",convertValues)