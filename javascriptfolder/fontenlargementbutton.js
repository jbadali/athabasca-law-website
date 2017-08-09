    
function increaseFontSizeCommand() {
        document.getElementById('fontsizeincrease').style.fontSize = "125%";
        document.getElementById('buttonfont').style.display='none';
        document.getElementById('newtestforsizedecrease').style.display='block';
        document.getElementById('troubleviewing').style.display='none';
        document.getElementById('invisiblebracket00').style.display='none';
        document.getElementById('invisiblebracket0').style.display='none';
        document.getElementById('invisiblebracket').style.display='none';
        document.getElementById('invisiblebracket2').style.display='none';
        document.getElementById('invisiblebracket3').style.display='none';
    }
function newButtonCommand(){
        <!-- document.getElementById('newbuttonhere').innerHTML = "Return font to regular size" -->
        <!-- document.getElementById('newtestforsizedecrease').innerHTML = "Return font to regular size"; -->
        document.getElementById('fontsizeincrease').style.fontSize = "92%";
        <!-- document.getElementById('buttonfont').style.display='none'; -->
        document.getElementById('newtestforsizedecrease').style.display='none';
        document.getElementById('newtesttwo').style.display='none';
        document.getElementById('buttonfont').style.display='block';
        document.getElementById('buttonfont2').style.display='block';
    }
function increaseFontSizeCommand2() {
        document.getElementById('fontsizeincrease').style.fontSize = "125%";
        document.getElementById('buttonfont2').style.display='none';
        document.getElementById('newtestforsizedecrease').style.display='block'
        document.getElementById('troubleviewing').style.display='none';
    }


<!--below can be deleted -->
    function increaseFontSizeBy1px() {
        var id = document.getElementById('b');
        var style = window.getComputedStyle(id, null).getPropertyValue('font-size');
        var currentSize = parseInt(style);
        currentSize++;
        document.getElementById('b').style.fontSize = currentSize.toString();
    }

<!-- up to here -->




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

