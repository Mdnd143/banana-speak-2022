var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// this is my url, for banana talk

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?text=" + text
}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json => {
        console.log(json)
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(e=>console.log(e,e.message))
};

btnTranslate.addEventListener("click", clickHandler)