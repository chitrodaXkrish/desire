const form = document.querySelector("#signup-form");
const note = document.querySelector("#form-note");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  note.textContent = "You're on the list. We'll be in touch soon.";
  note.classList.add("success");
  form.querySelector("button").setAttribute("aria-label", "You're on the list");
  form.reset();
});
