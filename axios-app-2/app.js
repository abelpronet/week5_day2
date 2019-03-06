
let errDiv;


function getCountryInfo(theName) {
    axios.get(`https://restcountries.eu/rest/v2/name/${theName}`)
        .then(responseFromAPI => {
            removeErrDiv();
            const countryName = responseFromAPI.data[0].name;
            const countryCapital = responseFromAPI.data[0].capital;

            // instead in the console, show data in the browser using JS DOM manipulation:
            document.getElementById("countryName").innerHTML = countryName;
            document.getElementById("countryCapital").innerHTML = "Capital: " + countryCapital;
        })
        .catch(err => {
            if (err.response.status === 404) {
                removeCountryInfo();
                createDiv(`What the heck is ${theName}? 🤭`);
            } else {
                console.log('err => ', err)
            }
        })
}

function createDiv(text) {
    errDiv = document.createElement("div");
    errDiv.setAttribute("id", "error");
    document.body.appendChild(errDiv);
    const theErr = document.createTextNode(text);
    errDiv.appendChild(theErr);
}

function removeErrDiv() {
    if (document.getElementById("error")) {
        const error = document.getElementById("error");
        error.parentNode.removeChild(error);
    }
}

function removeCountryInfo() {
    document.getElementById("countryName").innerHTML = "";
    document.getElementById("countryCapital").innerHTML = "";
}

function checkInput() {
    removeErrDiv();
    if (document.getElementById("theInput").value === "") {
        document.getElementById('theButton').disabled = true;
        removeCountryInfo();
        createDiv(`Wanna input something? 🤪`);

    } else {
        document.getElementById('theButton').disabled = false;
    }
}

document.getElementById("theButton").onclick = function () {
    removeErrDiv();
    const country = document.getElementById("theInput").value;
    getCountryInfo(country);
}