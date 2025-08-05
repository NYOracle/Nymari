document.getElementById("pullCard")?.addEventListener("click", async () => {
  const res = await fetch("deck.json");
  const deck = await res.json();

  const randomCard = deck[Math.floor(Math.random() * deck.length)];
  const upright = Math.random() > 0.5;

  const cardName = randomCard.card + (upright ? " (Upright)" : " (Reversed)");
  const message = upright ? randomCard.upright : randomCard.reverse;

  const cardNameEl = document.getElementById("cardName");
  const messageEl = document.getElementById("cardMessage");
  const container = document.getElementById("cardContainer");

  cardNameEl.textContent = cardName;
  messageEl.textContent = "";
  container.classList.remove("hidden");
  container.classList.add("visible");

  // Typing effect
  let i = 0;
  function typeWriter() {
    if (i < message.length) {
      messageEl.textContent += message.charAt(i);
      i++;
      setTimeout(typeWriter, 40);
    }
  }
  typeWriter();
});
