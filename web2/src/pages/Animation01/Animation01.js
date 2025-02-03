export default function animateEgg() {
    const frontEgg = document.querySelector(".front_egg");
    const backEggTop = document.querySelector(".back_egg_top");
  
    if (!frontEgg || !backEggTop) return;
  
    frontEgg.addEventListener("click", function () {
      frontEgg.classList.add("break");
      setTimeout(function () {
        backEggTop.classList.add("moveUp");
        setTimeout(function () {
          frontEgg.classList.remove("break");
          backEggTop.classList.remove("moveUp");
        }, 2000);
      }, 2000);
    });
}
