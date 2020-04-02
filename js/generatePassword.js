var input = document.getElementById('input');
var showAndHideBtn = document.getElementById('hideAndShow');
var copiedIndicator = document.getElementById('copied');
var generateBtn = document.getElementById('generate');
var bShowPassword = false;

function checkStr(str) {
    str = str.replace(/\s+/g,"_");
    return /(\S)(\1{2,})/g.test(str);
}

function generatePassword(s){
  var generatedPassword = md5(s).substring(0, 8) + "." + md5(s).substring(8, 16).toUpperCase();
  return checkStr(generatedPassword) ? generatePassword(generatedPassword) : generatedPassword;
}

generateBtn.addEventListener( 'click', function (event) {
    event.preventDefault()

    input.value = generatePassword(input.value)
    
    input.type = 'text';
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    input.type = bShowPassword ? 'text' : 'password';
    copiedIndicator.style.display = 'inline-block';
    setTimeout(function(){
      copiedIndicator.style.display = 'none';
    }, 1000)
    input.value = ''
  }
)

showAndHideBtn.addEventListener('click', function (event) {
    event.preventDefault()
    bShowPassword = !bShowPassword;
    input.type = bShowPassword ? 'text' : 'password';
    showAndHideBtn.classList.remove(bShowPassword ? 'hiding' : 'showing');
    showAndHideBtn.classList.add(bShowPassword ? 'showing' : 'hiding');
  }
)

input.value = ''
