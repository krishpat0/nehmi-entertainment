//set the counter to zero
var clicks = 0;
//the button will call this function
function countClicks() {
  //increase clicks by one
  clicks = clicks + 1; //set the content of the paragraph test //with id = hdr to the current clicks number
  document.getElementById("hdr").innerText = clicks;
}
