import loveQuotesByPercentage from "./quotes.js";

const calCulateBtn = document.getElementById("calculate_btn");
const checkAgainBtn = document.getElementById("check_again");
const mainForm = document.getElementById("main_form");
const userResult = document.getElementById("user_result");
const myNameCrushName = document.getElementById("mynamae_crush_name");
const resultMessege = document.getElementById("result_msg");
const lovePercentage = document.getElementById("love_percentage");
const rpbWrapper = document.querySelector(".rpb_wrapper");

calCulateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const myName = document.getElementById("my_name");
  const myCrushName = document.getElementById("my_crush_name");

  if (myName.value && myCrushName.value) {
    // random number generate 1 - 100
    const randomLoveScore = Math.floor(Math.random() * 100) + 1;

    mainForm.style.display = "none";
    userResult.style.display = "block";
    rpbWrapper.style.background = `conic-gradient(#fff 0% ${randomLoveScore}%, #1a1a1a ${randomLoveScore}% 100%)`;
    myNameCrushName.innerText = `${myName.value} & ${myCrushName.value} 👇`;
    lovePercentage.innerText = `${randomLoveScore}%`;

    // dynamic result messege
    const expectedQuote = loveQuotesByPercentage.find(
      (elem) =>
        randomLoveScore >= elem.range[0] && randomLoveScore <= elem.range[1]
    );
    resultMessege.innerText = expectedQuote.quote;
    // console.log(expectedQuote);
  } else {
    alert("All fields are required.");
  }
});



// check again button
checkAgainBtn.addEventListener("click", () => {
  window.location.reload();
});