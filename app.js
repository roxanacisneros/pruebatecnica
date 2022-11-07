const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function addData(){
    var username = document.getElementById('username').ariaValueMax;
    var password= document.getElementById('password').value;

    localStorage.setItem('username',username);
    localStorage.setItem('userpassword',pass);
    
    function redirecion(){
      location.href="index.html"
    }
}