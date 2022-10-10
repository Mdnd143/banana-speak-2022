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
        if(json.contents){
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        }
        else{
            outputDiv.innerText = json.error.message;
        }
        
    })
    .catch(e=>console.log('error ha bhaiya',e,e.message))
};

btnTranslate.addEventListener("click", clickHandler)