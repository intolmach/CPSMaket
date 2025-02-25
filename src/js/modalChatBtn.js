const feedbackBtn = document.querySelectorAll(".mobile-contact__button--chat");
const feedbackDialog = document.querySelector(".modal-feedback");
const closeFeedbackDialog = feedbackDialog.querySelector(".menu-modal__button-close")
feedbackBtn.forEach(button => {
  button.addEventListener('click', function () {
    feedbackDialog.showModal();
  });
});
closeFeedbackDialog.addEventListener('click', function () {
  feedbackDialog.close();
});

feedbackDialog.addEventListener('click', function (event) {
  if (event.target === feedbackDialog) {
    feedbackDialog.close();
  }
});