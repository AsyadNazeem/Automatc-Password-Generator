const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
    "%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")


function randomCharacter(){
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function getRandomPassword(){
    let passwordLength = document.getElementById("letterAmount")
    let passLength = passwordLength.value
    let randomPassword = ""
    for (let i = 0; i < passLength; i++){
        randomPassword += randomCharacter()
    }
    return randomPassword
}

function copy(that){
    let clipBord = document.getElementById("clipBoard")
    let inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
    clipBord.textContent = "The text Has been Copied to the Clipboard"
}

function pass(){
    pass1.textContent = getRandomPassword()
    pass2.textContent = getRandomPassword()
}



