
const intro = document.getElementById("intro");
const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const letterSection = document.getElementById("letterSection");
const backButton = document.getElementById("backButton");
const sparkles = document.getElementById("sparkles");

let isOpening = false;

// Membuat ornamen hati kecil yang melayang.
const symbols = ["♡", "✧", "✿", "·"];

for (let i = 0; i < 20; i++) {
  const sparkle = document.createElement("span");

  sparkle.className = "sparkle";
  sparkle.textContent = symbols[i % symbols.length];
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.animationDuration = `${9 + Math.random() * 12}s`;
  sparkle.style.animationDelay = `${Math.random() * 15}s`;
  sparkle.style.fontSize = `${10 + Math.random() * 13}px`;

  sparkles.appendChild(sparkle);
}

// Membuka surat.
openButton.addEventListener("click", () => {
  if (isOpening) return;

  isOpening = true;
  openButton.disabled = true;
  openButton.style.opacity = "0.65";

  envelope.classList.add("opening");

  setTimeout(() => {
    intro.hidden = true;
    letterSection.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });

    isOpening = false;
    openButton.disabled = false;
    openButton.style.opacity = "1";
  }, 850);
});

// Kembali ke sampul surat.
backButton.addEventListener("click", () => {
  letterSection.hidden = true;
  intro.hidden = false;
  envelope.classList.remove("opening");

  window.scrollTo({ top: 0, behavior: "smooth" });
});
