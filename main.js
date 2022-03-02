function myFunction(){
    document.location = "selection.html";
};

function validateForm(){
    let x = document.forms["myForm"]["sprache"].value;
    if (x==""){
        alert("Bitte gib eine Sprache ein.");
        return false;
    }

    let y = document.forms["myForm"]["level"].value;
    if (y==""){
        alert("Bitte gib einen Level ein");
        return false;
    }

    let z = document.getElementById("datum").value;
    if (z==""){
        alert("Bitte gib ein Datum ein");
        return false;
    }
    
    let w = document.getElementById("age").value;
    if (isNaN(w) || w < 1 || w > 120){
        alert("bitte gib ein Alter zwischen 1 und 120 ein");
        return false;
    }

    return true;
}


