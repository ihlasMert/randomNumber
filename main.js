let getFactBtn = document.getElementById("get-fact-btn");
let ranFactBtn = document.getElementById("ran-fact-btn");

let fact = document.querySelector(".fact");
let url = "http://numbersapi.com/";

let fetchFact = (num) => {
  let finalUrl = url + num;
  fetch(finalUrl)
    .then((resp) => resp.text())
    .then((data) => {
      fact.style.display = "block";

      fact.innerHTML = `<h2>${num}</h2>
        <p>${data}</p>`;
      document.querySelector(".container").append(fact);
    });
};

let getFact = () => {
  let num = document.getElementById("num").value;
  if (num) {
    if (num >= 0 && num <= 300) {
      fetchFact(num);
    } else {
      fact.getElementsByClassName.display = "block";
      fact.innerHTML = `<p class="msg">Please enter a number between 0 to 300.</p>`;
    }
  } else {
    fact.getElementsByClassName.display = "block";
    fact.innerHTML = `<p class="msg">The input filed cannot be empty</p>`;
  }
};

let getRandomFact = () => {
  let num = Math.floor(Math.random() * 301);
  fetchFact(num);
};
getFactBtn.addEventListener("click", getFact);
ranFactBtn.addEventListener("click", getRandomFact);
window.addEventListener("load", getRandomFact);
