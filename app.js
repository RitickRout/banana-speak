var btnclck = document.querySelector("#input-btn");
var inputbox = document.querySelector("#input-area");
var output= document.querySelector("#output-area");

var serverurl ="https://api.funtranslations.com/translate/minion.json"

function translatedurl(text)
{
    return serverurl+"?"+"text="+text;
}

function errorHandler()
{
  alert("something wrong with the server")
}

function clickHndler()
{
  var inputTxt = inputbox.value;

  fetch(translatedurl(inputTxt)).then(response => response.json()).then(json => { 
    var translatedtext = json.contents.translated;
    output.innerText=translatedtext;
  }).catch(errorHandler)

}

btnclck.addEventListener("click",clickHndler);