const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');



// Fetch exchange rates and update the DOM
function caclulate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    fetch(`https://api.exchangerate.host/convert?from=${currency_one}&to=${currency_two}`)
        .then(res => res.json())
        .then(data => {
            amountEl_two.value = (data.result * amountEl_one.value).toFixed(2);
            console.log(data.result)
        });
}

function calculateSwitch() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    console.log(currencyEl_one.value, currencyEl_two.value);
    fetch(`https://api.exchangerate.host/convert?from=${currency_one}&to=${currency_two}`)
        .then(res => res.json())
        .then(data => {
            amountEl_one.value = (1 / data.result * amountEl_two.value).toFixed(2);
            console.log(data.result)
        });
}

function switchValues() {
    let temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    document.getElementById("currency-one").value = currencyEl_one.value;
    document.getElementById("currency-two").value = currencyEl_two.value;
    caclulate();
    calculateSwitch();
}
// Event listeners
currencyEl_one.addEventListener('change', caclulate);
amountEl_one.addEventListener('input', caclulate);
currencyEl_two.addEventListener('change', calculateSwitch);
amountEl_two.addEventListener('input', calculateSwitch);



