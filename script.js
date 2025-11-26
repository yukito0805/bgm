const sound = document.getElementById("sound");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  sound.currentTime = 0; // 毎回頭から再生
  sound.play();
});
