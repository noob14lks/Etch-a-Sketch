const size = document.querySelector(".num");
const slider = document.getElementById("range");

size.innerHTML = slider.value;
slider.addEventListener("input", () => {
  size.innerHTML = slider.value;
  const value = parseInt(slider.value);
  for(let i = 0; i < value**2; ++i){
    let div = document.createElement("div");
  }
});

