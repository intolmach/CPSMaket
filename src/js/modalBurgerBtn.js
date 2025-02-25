const burgerBtn = document.querySelector(".header__button--burger");
const burgerDialog = document.querySelector(".modal-burger");
const closeBurgerDialog = burgerDialog.querySelector(".mobile-header__button--close")
burgerBtn.addEventListener('click', function () {
  burgerDialog.showModal();
});
closeBurgerDialog.addEventListener('click', function () {
  burgerDialog.close();
});

burgerDialog.addEventListener('click', function (event) {
  if (event.target === burgerDialog) {
    burgerDialog.close();
  }
});