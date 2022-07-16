const upload = () => {
  let count = document.querySelector(".countPercentage");
  let progreeBarWidth = document.querySelector(".progressBar");
  let width = 0;
  const number = setInterval(frame, 25);
  function frame() {
    if (width >= 100) {
      clearInterval(number);
    } else {
      width++;
      count.innerHTML = width;
      progreeBarWidth.style.width = width + "%";
    }
  }
};
