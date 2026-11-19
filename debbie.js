
document.addEventListener("DOMContentLoaded", function () {
  const letterButton = document.getElementById("letter-button");
  const letter = document.getElementById("letter");

  if (!letterButton || !letter) {
    console.error("The surprise letter or its button could not be found.");
    return;
  }

  letter.hidden = true;
  letterButton.setAttribute("aria-expanded", "false");

  letterButton.addEventListener("click", function () {
    const isOpening = letter.hidden;

    letter.hidden = !isOpening;

    letterButton.textContent = isOpening
      ? "Close message ↑"
      : "Open your little message 🤎";

    letterButton.setAttribute("aria-expanded", String(isOpening));
  });
});
