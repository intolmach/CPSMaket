const phoneBtn = document.querySelectorAll(".mobile-contact__button--phone");
const phoneDialog = document.querySelector(".modal-phone");
const closePhoneDialog = phoneDialog.querySelector(".menu-modal__button-close")
phoneBtn.forEach(button => {
  button.addEventListener('click', function () {
    phoneDialog.showModal();
  });
});
closePhoneDialog.addEventListener('click', function () {
  phoneDialog.close();
});
window.addEventListener('click', function (event) {
  if (event.target === phoneDialog.backrop) {
    closeModal();
  }
});

phoneDialog.addEventListener('click', function (event) {
  if (event.target === phoneDialog) {
    phoneDialog.close();
  }
});