
// goqr/api

const input = document.querySelector("#qr-input");
const btn = document.querySelector("#qr-btn");
const image = document.querySelector("#qr-img");


btn.addEventListener("click", () => {
  let inputVal = input.value;
  if(!inputVal){
    alert("Please enter url");
  } else {
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;
  }

  console.log("clicked");
})