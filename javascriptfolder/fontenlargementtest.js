    
function increaseFontSizeCommand() {
        document.getElementById('fontsizeincrease').style.fontSize = "25px";
    }
   <!-- function increaseFontSizeBy1px() {
        var id = document.getElementById('b');
        var style = window.getComputedStyle(id, null).getPropertyValue('font-size');
        var currentSize = parseInt(style);
        currentSize++;
        document.getElementById('b').style.fontSize = currentSize.toString();
    } -->






function displayDate()
{
    document.getElementById("demo").innerHTML=Date();
}

window.onload = function() {
    var btn = document.getElementById("myButton");
    btn.onclick = document.getElementById('demo').style.fontSize='35px';
}

var d=new Date();
document.write('Today is ' + d + ' <br> ');

document.write("Jacques Fame Ndongo")