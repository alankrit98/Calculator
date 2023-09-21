document.getElementById('convert').addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromcurrency = document.getElementById("FromCurrency").value;
    const tocurrency = document.getElementById("ToCurrency").value;

    console.log(fromcurrency);
    console.log(tocurrency);

    var con_amount = amount;

    if(fromcurrency != tocurrency) {
        if(fromcurrency == "INR") {
            con_amount = amount;
        } else if(fromcurrency == "USD") {
            con_amount = amount * 81.64;
        } else if(fromcurrency == "EUR") {
            con_amount = amount * 90.32;
        } else if(fromcurrency == "YEN") {
            con_amount = amount * 0.57;
        } else if(fromcurrency == "DIN") {
            con_amount = amount * 268.35;
        } else if(fromcurrency == "WON") {
            con_amount = amount * 0.062;
        }
        if(tocurrency == "INR") {
            con_amount = con_amount;
        } else if(tocurrency == "USD") {
            con_amount *= 0.012;
        } else if(tocurrency == "EUR") {
            con_amount *= 0.011;
        } else if(tocurrency == "YEN") {
            con_amount *= 1.77;
        } else if(tocurrency == "DIN") {
            con_amount *= 0.0037;
        } else if(tocurrency == "WON") {
            con_amount *= 16.03;
        }
    }

    document.getElementById("result").textContent = `${amount} ${fromcurrency} = ${con_amount} ${tocurrency}`
})