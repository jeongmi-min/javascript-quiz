const modal = document.getElementById("modal");
const modalCloseButton = document.getElementById("modal-close-btn");
const contentForm = document.getElementById("contnent-form");
const modalText = document.getElementById("modal-text");
const modalSubmitBtn = document.getElementById("modal-submit-btn");
const modalResetBtn = document.getElementById("modal-reset-btn");

setTimeout(function () {
  (modal.style.display = "inline"), 1500;
});

modalCloseButton.addEventListener("click", function () {
  modal.style.display = "none";
});

contentForm.addEventListener("submit", function (event) {
  event.preventDefault;

  const contentFormData = new FormData(contentForm);
});
