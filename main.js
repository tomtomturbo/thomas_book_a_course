function myFunction(event){
    switch (event.currentTarget.id) {
        case "englisch":
            sessionStorage.setItem("course", "englisch");
            break;
        
        default:
            sessionStorage.setItem("course", "we bugged out!!");
    } 
    document.location = "selection.html";
}

function validateForm(){
    let x = document.forms["myForm"]["sprache"].value;
    if (x==""){
        alert("Bitte gib eine Sprache ein.");
        return false;
    }
    sessionStorage.setItem("spracheInput", document.getElementById("sprache").value);

    let y = document.forms["myForm"]["level"].value;
    if (y==""){
        alert("Bitte gib einen Level ein");
        return false;
    }
    sessionStorage.setItem("levelInput", document.getElementById("level").value);

    let z = document.getElementById("date").value;
    if (z==""){
        alert("Bitte gib ein Datum ein");
        return false;
    }
    sessionStorage.setItem("dateInput", document.getElementById("date").value);

    let w = document.getElementById("age").value;
    if (isNaN(w) || w < 1 || w > 120){
        alert("bitte gib ein Alter zwischen 1 und 120 ein");
        return false;
    }
    sessionStorage.setItem("ageInput",document.getElementById("age").value);

    return true;
}

// diese Funktion wird von der Seite "confirmation.html" aufgerufen:
function displayUserData(){
   let spracheInput = sessionStorage.getItem("spracheInput");
   let levelInput = sessionStorage.getItem("levelInput");
   let dateInput = sessionStorage.getItem("dateInput"); 
   let ageInput = sessionStorage.getItem("ageInput");

   document.getElementById("output").innerHTML = 
    `Sprache: ${spracheInput}<br>
     Level: ${levelInput}<br>
     Datum: ${dateInput}<br>
     Alter: ${ageInput}`;
   

}












// von ralph (ich verstehe es momentan gar nicht, so macht mich das nur wütend!..)

/*Array.from(document.getElementsByClassName("course-button")).forEach((button) => {
    console.log("adding listener");
    button.addEventListener("click", (event) => {
        event.preventDefault();     
        myFunction(event);
    });
});
*/











