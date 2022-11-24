const likeButton = document.querySelector(".like-button");
const likesCounter = document.querySelector(".likes-counter");
const svg = document.querySelector("svg");

svg.addEventListener("click", (e) => e.stopPropagation());

const clickHandler = (e) => {
  if (e.target.checked) {
    likesCounter.innerText = 1;
  } else {
    likesCounter.innerText = 0;
  }
};

likeButton.addEventListener("click", clickHandler);
