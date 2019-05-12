
function pimpText(){
    let myText = document.getElementById("textfield");
    myText.style.fontSize = '24pt';
}

function changeStyle(){
    let myText = document.getElementById("textfield");
    if(document.getElementById("bling").checked){
        myText.style.fontWeight = 'bold';
        myText.style.textDecoration = 'underline blink';
        myText.style.color = 'green';
        myText.style.fontStyle = 'italic';
        myText.style.fontFamily = 'Comic Sans MS, Comic Sans, cursive';
    }else{
        myText.style.fontWeight = 'normal';
        myText.style.textDecoration = '';
        myText.style.color = '';
        myText.style.fontStyle = '';
        myText.style.fontFamily = 'monospace';
    }
}

function snoop(){
    let myText = document.getElementById("textfield");
    let value = myText.value.trim();
    value = value.toUpperCase();
    let parts = value.split('.');
    for (var i = 0; i < parts.length-1; i++) {
        parts[i] += '-izzle.';
      }
    myText.value = parts.join('').trim();
}