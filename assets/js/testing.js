// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");


// Get the button that opens the modal
var btn = document.getElementById("action");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
let score= 0;
document.querySelector("#action").addEventListener('click',function(event) {
    event.preventDefault()
    let symps = document.querySelectorAll('.symptoms') 
    
    for (let i = 0; i < symps.length; i++) {
        const element = symps[i];
        if (element.checked){
            score++;
        }
    }
    })

btn.onclick = function() {
    let tally= score;
    console.log(tally);
    if(tally>=6){
   myModal1.style.display="block"; //greater than  is danger zone
                  }
     else if (tally ==5){
        myModal2.style.display="block"; //"greater than equal to 5 is warning";
                  } else{
                    myModal3.style.display="block"; // everything else or less than 4 is "good/green"
                }                    
            
 
}

