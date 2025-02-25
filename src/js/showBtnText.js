const textBlock = document.querySelector(".main__text")
const btnAll = document.querySelector(".main__button");
btnAll.addEventListener('click', function () {
  textBlock.classList.toggle('main__text--all');
});