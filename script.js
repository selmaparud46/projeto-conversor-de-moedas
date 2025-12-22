
// 1. Mapear o botão e os seletores
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Valor Moeda Estrangeira

    const dolarToday = 5.20
    const euroToday = 5.50
    const bitcoinToday = 500000.00
    const libraToday = 6.40        // Adicionado
    const dolarCanadenseToday = 3.80 // Adicionado
    const ieneToday = 0.035        // Adicionado

    // Formata o valor que estamos digitando (Real)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    // Verifica qual moeda está selecionada e faz o cálculo
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "dolar-canadense") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue / dolarCanadenseToday)
    }

    if (currencySelect.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }

}

// 2. Função que troca a bandeira e o nome da moeda
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/bandeira dos stados unidos.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/moeda do euro.png" // Verifique se tem essa imagem na pasta assets
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin-btc-logo.png" // Verifique se tem essa imagem na pasta assets
    }
if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra-logo.jpg" 
    }

    if (currencySelect.value == "dolar-canadense") {
        currencyName.innerHTML = "Dólar Canadense"
        currencyImage.src = "./assets/moeda canadense.png" 
    }

    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene Japonês"
        currencyImage.src = "./assets/logo-iene-japones.png" 
    }
    // Sempre que trocar a moeda, ele chama a conversão para atualizar os números
    convertValues()
}

// Ouvintes de eventos: Avisam quando o usuário clica ou troca a moeda
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
            
