// Show/hide popup video handler
const btnClose = document.querySelector(
  ".home #popup-play-video .iframe-wrapper button"
);
const bg = document.querySelector(".home #popup-play-video .bg");
bg?.addEventListener("click", () => {
  const popup = document.querySelector(".home #popup-play-video ");

  popup.classList.add("close");
  const timer = setTimeout(() => (popup.style.display = "none"), 300);
  return () => {
    clearTimeout(timer);
  };
});
btnClose?.addEventListener("click", () => {
  const popup = document.querySelector(".home #popup-play-video ");

  popup.classList.add("close");
  const timer = setTimeout(() => (popup.style.display = "none"), 300);
  return () => {
    clearTimeout(timer);
  };
});
const btnShow = document.querySelector(".home .player .container .play-icon");
btnShow.addEventListener("click", () => {
  const popup = document.querySelector(".home #popup-play-video ");

  popup.classList.remove("close");
  popup.style.display = "flex";
});

$(".home .what-people-say #carousel-content").owlCarousel({
  loop: true,
  //   margin: 10,
  // autoplay:true,
  dots: true,
  center: true,
  items: 1,
});
