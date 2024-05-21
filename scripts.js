
const button = document.querySelector(".button-main")
const selectCurrency = document.querySelector(".select-currency")
const currencyBrasil = document.querySelector(".currency-brasil")


async function inputTyped() {

    const inputValue = document.querySelector(".typed-in-input").value
    const convertedParagraph = document.getElementById("value-input")
    const valueConvertde = document.getElementById("value-converted")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(Response => Response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const libra = data.GBPBRL.high
    const bitcoin = data.BTCBRL.high
    const real = 1.00

    if (currencyBrasil.value == "dolar" && selectCurrency.value == "dolar") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
    }

    if (currencyBrasil.value == "dolar" && selectCurrency.value == "euro") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue * dolar / euro)
    }

    if (currencyBrasil.value == "dolar" && selectCurrency.value == "libra") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue * dolar / libra)
    }

    if (currencyBrasil.value == "dolar" && selectCurrency.value == "brasil") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * dolar / real)
    }

    if (currencyBrasil.value == "dolar" && selectCurrency.value == "bitcoin") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / dolar / bitcoin)
    }

    if (currencyBrasil.value == "brasil" && selectCurrency.value == "brasil") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue / real)
    }

    if (currencyBrasil.value == "brasil" && selectCurrency.value == "dolar") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolar)
    }

    if (currencyBrasil.value == "brasil" && selectCurrency.value == "euro") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euro)
    }

    if (currencyBrasil.value == "brasil" && selectCurrency.value == "libra") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libra)
    }

    if (currencyBrasil.value == "brasil" && selectCurrency.value == "bitcoin") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitcoin)
    }

    if (currencyBrasil.value == "euro" && selectCurrency.value == "euro") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
    }

    if (currencyBrasil.value == "euro" && selectCurrency.value == "brasil") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * euro / real)
    }

    if (currencyBrasil.value == "euro" && selectCurrency.value == "dolar") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue * euro / dolar)
    }

    if (currencyBrasil.value == "euro" && selectCurrency.value == "libra") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue * euro / libra)
    }

    if (currencyBrasil.value == "euro" && selectCurrency.value == "bitcoin") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / euro / bitcoin)
    }

    if (currencyBrasil.value == "bitcoin" && selectCurrency.value == "bitcoin") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)
    }

    if (currencyBrasil.value == "bitcoin" && selectCurrency.value == "brasil") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * bitcoin / real)
    }

    if (currencyBrasil.value == "bitcoin" && selectCurrency.value == "dolar") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue * bitcoin / dolar)
    }

    if (currencyBrasil.value == "bitcoin" && selectCurrency.value == "euro") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue * bitcoin / euro)
    }

    if (currencyBrasil.value == "bitcoin" && selectCurrency.value == "libra") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue * bitcoin / libra)
    }

    if (currencyBrasil.value == "libra" && selectCurrency.value == "libra") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
    }

    if (currencyBrasil.value == "libra" && selectCurrency.value == "brasil") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * libra / real)
    }

    if (currencyBrasil.value == "libra" && selectCurrency.value == "dolar") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue * libra / dolar)
    }

    if (currencyBrasil.value == "libra" && selectCurrency.value == "euro") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue * libra / euro)
    }

    if (currencyBrasil.value == "libra" && selectCurrency.value == "bitcoin") {
        convertedParagraph.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
        valueConvertde.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue * libra / bitcoin)
    }

}

function changeSelect() {

    const imgFlag = document.querySelector(".img-flag")
    const paragraphEua = document.querySelector(".eua-paragraph")


    if (selectCurrency.value == "dolar") {
        imgFlag.src = "./assets/eua.png"
        paragraphEua.innerHTML = "Dólar americano"
    }

    if (selectCurrency.value == "euro") {
        imgFlag.src = "./assets/euro.png"
        paragraphEua.innerHTML = "Euro"
    }

    if (selectCurrency.value == "libra") {
        imgFlag.src = "./assets/libra.png"
        paragraphEua.innerHTML = "Libra"
    }

    if (selectCurrency.value == "bitcoin") {
        imgFlag.src = "./assets/bitcoin.png"
        paragraphEua.innerHTML = "Bitcoin"
    }

    if (selectCurrency.value == "brasil") {
        imgFlag.src = "./assets/brasil 2.png"
        paragraphEua.innerHTML = "Brasil"
    }

    inputTyped()
}

function convertedSelect() {

    const changeFlag = document.querySelector(".flag-brasil")
    const paragraphReal = document.querySelector(".real-paragraph")

    if (currencyBrasil.value == "brasil") {
        changeFlag.src = "./assets/brasil 2.png"
        paragraphReal.innerHTML = "Brasil"
    }

    if (currencyBrasil.value == "dolar") {
        changeFlag.src = "./assets/eua.png"
        paragraphReal.innerHTML = "Dólar americano"
    }

    if (currencyBrasil.value == "libra") {
        changeFlag.src = "./assets/libra.png"
        paragraphReal.innerHTML = "Libra"
    }

    if (currencyBrasil.value == "euro") {
        changeFlag.src = "./assets/euro.png"
        paragraphReal.innerHTML = "Euro"
    }

    if (currencyBrasil.value == "bitcoin") {
        changeFlag.src = "./assets/bitcoin.png"
        paragraphReal.innerHTML = "Bitcoin"
    }

    inputTyped()

}

currencyBrasil.addEventListener("change", convertedSelect)
selectCurrency.addEventListener("change", changeSelect)
button.addEventListener("click", inputTyped)
