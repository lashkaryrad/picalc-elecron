document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").onsubmit = () => {
        // becuase for now I don't have a Internet I use json but you shuld change it to freecurrencyapi.com's API
        // fetch('https://api.freecurrencyapi.com/v1/latest?apikey=e4HSy2o8cJ2gzT2u4u61kvohmyTJKEAHfdi6Ndeg')
        fetch("../data/db.json")
        .then((response) => response.json())
        .then(data => {
            var currency = document.getElementById('currency').value.toUpperCase();
            var lot = document.getElementById('lot').value;
            var frm = document.querySelector('form');
            console.log(currency);
            
            var price = data["data"][currency];

            var pip = (0.0001 / price) * lot

            document.getElementById("show-pip").innerHTML = `$${pip.toFixed(2)}`;
            frm.reset()
        })
        .catch(error => {
            console.error(error);
        })
        return false;

    }
})
