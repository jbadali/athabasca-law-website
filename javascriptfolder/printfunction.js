function printDiv(divName) {

 var printContents = document.getElementById("parts-i-wanted-printed").innerHTML;
 w=window.open();
 w.document.write(printContents);
 w.print();
 w.close();
}

//Below are functions to better specify div tags for even more printer-friendly options, if time permits

/*function printDiv(divName) {

 var printContents = document.getElementById("parts-i-wanted-printed1").innerHTML;
 w=window.open();
 w.document.write(printContents);
 w.print();
 w.close();
}

function printDiv(divName) {

 var printContents = document.getElementById("parts-i-wanted-printed2").innerHTML;
 w=window.open();
 w.document.write(printContents);
 w.print();
 w.close();
}

function printDiv(divName) {

 var printContents = document.getElementById("parts-i-wanted-printed3").innerHTML;
 w=window.open();
 w.document.write(printContents);
 w.print();
 w.close();
}
*/