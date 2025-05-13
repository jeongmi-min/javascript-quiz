/* <main> / <article> */
const questionRadios = document.getElementById("question-radios");
const finalAnswerBtn = document.getElementById("final-answer-Btn");
const boxScore = document.getElementById("boxScore");
const score = document.getElementById("score");

finalAnswerBtn.addEventListener("click", function (event) {
  event.preventDefault();
  boxScore.style.display = "block";
  score.textContent = 0;

  const correctAnswers = {
    question1: "6",
    question2: "2",
    question3: "female",
    question4: "사",
    question5: "051",
  };

  let userScore = 0;
  const scorePoint = 20;

  for (let key in correctAnswers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === correctAnswers[key]) {
      userScore += scorePoint;
    }
  }

  let currentScore = 0;

  //setInterval () : 정해진 시간마다 반복해서 실행되는 기능이다.
  //vs setTimeout () : 단 한번만 실행함.
  const finalScore = setInterval(() => {
    currentScore += 1;
    score.textContent = currentScore;

    //clearInterval () : 반복을 멈추는 함수
    if (currentScore >= userScore) {
      clearInterval(finalScore);
      score.textContent = userScore;

      setTimeout(function () {
        modal.style.display = "inline";
      }, 2000);
    }
  }, 20);
});

/* <modal> */

const modal = document.getElementById("modal");
const modalCloseButton = document.getElementById("modal-close-btn");
const contentForm = document.getElementById("content-form");
const modalText = document.getElementById("modal-text");
const modalSubmitBtn = document.getElementById("modal-submit-btn");
const modalResetBtn = document.getElementById("modal-reset-btn");

modalCloseButton.addEventListener("click", function () {
  modal.style.display = "none";
  boxScore.style.display = "none";
});

modalSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const contentFormData = new FormData(contentForm);
  const name = contentFormData.get("fullName");
  const email = contentFormData.get("email");
  const number = contentFormData.get("phoneNumber");

  if (name === "" || email === "" || number === "") {
    alert("다시 입력해주세요");
    return;
  }

  modalText.innerHTML = `<div class="modal-inner-loading">
   <img src="images/loading.svg" class="loading">
   <p id="upload-text">Uploading your data to the dark web...</p>
 </div>`;

  setTimeout(function () {
    const uploadText = document.getElementById("upload-text");
    uploadText.innerText = "wait please...";
  }, 1500);

  setTimeout(function () {
    const modalInner = document.getElementById("modal-inner");
    modalInner.innerHTML = `<h2 class="modal-innertitle">참여해주셔서 감사합니다 <br/> ${name}님</h2>
    <p id="last-text">당첨 되시면 ${email}과 ${number}로 </br>보내드리겠습니다.`;

    modalCloseButton.disabled = false;
  }, 3000);
});

modalResetBtn.addEventListener("click", function () {
  contentForm.reset();
});
