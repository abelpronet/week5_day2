document.getElementsByTagName('button')[0].onclick = () => {

    const value = document.getElementById('country').value;

    axios.get(`https://restcountries.eu/rest/v2/name/${value}`)
        .then(response => print(response))
        .catch(err => console.log(`¡Ops! Error :( -> ${err}`))
}


const print = response => {

    const name = response.data[0].name
    const currency = response.data[0].currencies[0].code

    document.getElementById('countryName').innerText = name
    document.getElementById('countryCurr').innerText = currency


}