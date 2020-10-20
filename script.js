const getDiscountButton = document.getElementById("getDiscount");
const wrapper = document.querySelector(".wrapper");
const result = document.querySelector(".result");
const getText = document.querySelector(".getText");
const removeResult = document.querySelector(".removeResult");
const getPercentage = document.querySelectorAll(".getPercentage");
const text = " Congratulations, you won ";
getText.innerHTML = text;

getDiscountButton.addEventListener("click", () => {
  wrapper.style.transform = "scale(0)";
  const randomNumber = Math.floor(Math.random() * 100);

  setTimeout(() => {
    result.style.transform = "scale(1)";
  }, 700);

  getPercentage.forEach((item) => {
    if (randomNumber >= 80) {
      item.innerHTML = "0%";
      getText.innerHTML =
        "<span style='color:rgb(250, 107, 219)' >Opps!</span>";
    } else if (randomNumber >= 80) {
      item.innerHTML = "5%";
    } else if (randomNumber >= 75) {
      item.innerHTML = "10%";
    } else if (randomNumber >= 65) {
      item.innerHTML = "20%";
    } else if (randomNumber >= 60) {
      item.innerHTML = "60%";
    } else if (randomNumber >= 50) {
      item.innerHTML = "70%";
    } else if (randomNumber >= 35) {
      item.innerHTML = "80%";
    } else if (randomNumber >= 25) {
      item.innerHTML = "90%";
    } else if (randomNumber >= 8) {
      item.innerHTML = "100%";
    }
  });
});

removeResult.addEventListener("click", () => {
  result.style.transform = "scale(0)";
  setTimeout(() => {
    wrapper.style.transform = "scale(1)";
  }, 700);
});
