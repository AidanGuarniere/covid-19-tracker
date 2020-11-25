//get modal
let modalText = document.querySelector('#modal-text');

//modal

// Get the modal
var modal = document.querySelector('#myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modalText.textContent = ' '
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalText.textContent = ' '
  }
}


