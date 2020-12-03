// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var bgmodal = document.getElementById("timeOutBG");

var exit = document.getElementById("exit3");

// Get the button that opens the modal
var btn = document.getElementById("action");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


let myModal= ".modal";
  

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


action.onclick = function() {
    timeOutBG.style.display="block";
    let tally= score;
    console.log(tally);
    if(tally>=6){ 
   myModal1.style.display="block"; //greater than  is danger zone
                  }
     else if (tally ==5){
        myModal2.style.display="block"; //"greater than equal to 5 is warning";
                  }  else if (tally > 1){
                    myModal3.style.display="block"; //"greater than equal to 5 is warning";
                              } else{
                    myModal4.style.display="block"; // everything else or less than 4 is "good/green"
                }                      
}

//action.onclick = function() {
  //  document.getElementById("action").disabled = true;
