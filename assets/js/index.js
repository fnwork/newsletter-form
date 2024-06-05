let dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const dismiss = document.getElementById('dismiss');
const emailMsg = document.getElementById('error__msg');
const emailBox = document.getElementById('email');


form.addEventListener('submit', function(e){
  e.preventDefault();
  
  validateEmail();
});

function validateEmail(){
  const emailVal = emailBox.value.trim();
  if(emailVal === ''){
    emailMsg.innerText = "Valid email required";
  }else if(!Emailchk(emailVal)){
    emailMsg.innerText = "Valid email required";
    emailBox.classList.add("error");
    console.log('Y')
  }else{
    emailMsg.innerText = "";
    emailBox.classList.remove("error");
    dialog.showModal();
  }
}
function Emailchk(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

dismiss.addEventListener("click", function(){
  dialog.close();
});