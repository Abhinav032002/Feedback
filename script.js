const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (e) => {
    removeActive();
    selectedRating = e.target.innerText || e.target.parentNode.innerText;
    e.target.parentNode.classList.add("active");
    e.target.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <strong>Thank You!</strong>
        <br />
        <br />
        <strong>Feedback:${selectedRating}</strong>
        <p>We'll use your feedback to improve our services</p>
    `;
  }
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
