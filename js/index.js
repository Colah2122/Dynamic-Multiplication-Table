/**********************************
    File: index.js
    Github Username: Colah2122
    Author: Chris Olah
    Date: 11/1/2022
    Contact Information: Christopher_Olah@student.uml.edu
    Information: Javascript coding for form and table. 
        Does calculations and checking inputs for the 
        dynamic multiplication table and provide error 
        messages as well. 
**********************************/

var minCol;
var maxCol;
var minRow;
var maxRow;
const inputs = document.querySelector('.inputs');
const infotext = document.getElementById("infotext");
const table = document.getElementById("table");

// Creates the HTML table and fills it with correct calculations for multiplication
function create_table(minCol, maxCol, minRow, maxRow) {
    var values = "";
    values += "<center><table>";
    values +="<tr><th id = \"space\"><center>x</center></th>"
    for (var a = minCol; a <= maxCol; a++) {
        values +="<th id=\"row\"><center>" + a + "</center></th>";
    }
    values += "</tr>";
    for (var i = minRow; i <= maxRow; i++) {
        values += "<tr>";
        values += "<th id=\"row\"><center>" + i + "</center></th>"
        for (var j = minCol; j <= maxCol; j++) {
          values += "<td><center>" + i * j + "</center></td>";
        }
        values += "</tr>";
    }

    values += "</table></center>";
    return values;
}

// Check and sure input values are in fact numbers (e and pi check)
function varify_calc(value) {
    if (isNaN(value) && (value == "e" || value == "pi")) {
        value = 3;
    } 
    else if (isNaN(value) && (value == "-e" || value == "-pi")) {
        value = -3;
    } 
    else if (!isNaN(value)) {
        return Math.round(value);
    }
    return value;
}

// Incorporates table functionality, checking inputs are ok and general and display multiplication table correctly
inputs.addEventListener('submit',(e) => {
    e.preventDefault();
    minCol = varify_calc(document.getElementById("minCol").value);
    maxCol = varify_calc(document.getElementById("maxCol").value);
    minRow = varify_calc(document.getElementById("minRow").value);
    maxRow = varify_calc(document.getElementById("maxRow").value);
    if (isNaN(minCol)) {
        infotext.innerHTML = "<p>Please type in a number for Minimum Column Value</p>";
    } 
    else if (isNaN(maxCol)) {
        infotext.innerHTML = "<p>Please type in a number for the Maximum Column Value</p>";
    } 
    else if (isNaN(minRow)) {
        infotext.innerHTML = "<p>Please type in a number for the Minimum Row Value</p>";
    } 
    else if (isNaN(maxRow)) {
        infotext.innerHTML = "<p>Please type in a numebr for the Maximum Row Value</p>";
    } 
    else if (minCol > maxCol) {
        infotext.innerHTML = "<p>Minimum Column Value cannot be larger than the Maximum Column Value</p>";
    } 
    else if (minRow > maxRow) {
        infotext.innerHTML = "<p>Minimum Row Value cannot be larger than the Maximum Row Value</p>";
    } 
    else if ((maxCol - minCol) > 200) {
        infotext.innerHTML = "<p>Column range cannot exceed 200 between minimum and maximum values!<\p>";
    } 
    else if ((maxRow - minRow) > 200) {
        infotext.innerHTML = "<p>Row range cannot exceed 200 between minimum and maximum values!<\p>";
    } 
    else if ((minCol) < -50) {
        infotext.innerHTML = "<p>Please enter a value between -50 and 50<\p>";
    } 
    else if ((maxCol) > 50) {
        infotext.innerHTML = "<p>Please enter a value between -50 and 50<\p>";
    }
    else if ((minRow) < -50) {
        infotext.innerHTML = "<p>Please enter a value between -50 and 50<\p>";
    }
    else if ((maxRow) > 50) {
        infotext.innerHTML = "<p>Please enter a value between -50 and 50<\p>";
    }
    else {
        table.innerHTML = create_table(minCol, maxCol, minRow, maxRow);
    }
});