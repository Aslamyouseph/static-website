//image slider setup in homepage
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
function nextSlide() {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
}
function prevSlide() {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
}
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
setInterval(nextSlide, 1000); // Automatically move to the next slide every 3 seconds

// travel tips (read more and less section)
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "less";
    moreText.style.display = "inline";
  }
}
//form validation
function validation() {
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var address = document.getElementById("address");
  var country = document.getElementById("country");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");
  var feedback = document.getElementById("feedback");
  if (fname.value == "") {
    alert("please enter your firstname :");
    fname.focus();
    return false;
  }
  if (lname.value == "") {
    alert("please enter your lastname :");
    lname.focus();
    return false;
  }
  if (address.value == "") {
    alert("please enter your address :");
    address.focus();
    return false;
  }
  if (country.value == "") {
    alert("please enter your country name  :");
    country.focus();
    return false;
  }
  if (phone.value == "") {
    alert("please enter your phone number  :");
    phone.focus();
    return false;
  }
  if (email.value.indexOf("@", 0) < 0) {
    alert("please enter the valid email id : ");
    email.focus();
    return false;
  }
  if (email.value.indexOf(".", 0) < 0) {
    alert("please enter the valid email id : ");
    email.focus();
    return false;
  }
  if (feedback.value == "") {
    alert("please enter any feedback  :");
    feedback.focus();
    return false;
  }
  return true;
}
