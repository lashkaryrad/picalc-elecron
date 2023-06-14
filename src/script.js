document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").onsubmit = () => {

        // fetch data from server
        fetch('https://api.freecurrencyapi.com/v1/latest?apikey=e4HSy2o8cJ2gzT2u4u61kvohmyTJKEAHfdi6Ndeg')
        // get response with json
        .then((response) => response.json())
        // get response as data
        .then(data => {


            // var pip : pips_count
            // var instrument : instrument
            // var lot : lot
            // var deposit_currency = deposit_currency

            var instrument = document.getElementById('instrument').value.toUpperCase();

            var lot = document.getElementById('lot').value;

            var frm = document.querySelector('form');

            console.log(instrument);
            
            var price = data["data"][instrument];

            var pip = (0.0001 / price) * lot

            alert( `$${pip.toFixed(2)}`)
            // document.getElementById("show-pip").innerHTML = `$${pip.toFixed(2)}`;
            frm.reset()
        })
        .catch(error => {
            console.error(error);
        })
        return false;

    }
})
