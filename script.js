document.addEventListener("DOMContentLoaded", () => {
  const containerEl = document.getElementById("colorContainer");
  const regenerateButton = document.getElementById("regenerateButton");

  regenerateButton.addEventListener("click", () => {
    containerEl.innerHTML = "";
    generateColors(containerEl);
  });

  generateColors(containerEl);
});

function generateColors(containerEl) {
  for (let index = 0; index < 50; index++) {
    const colorContainerEl = createColorContainer();
    containerEl.appendChild(colorContainerEl);
  }
}

function createColorContainer() {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");

  const colorCodeEl = document.createElement("span");
  colorCodeEl.classList.add("color-code");
  colorContainerEl.appendChild(colorCodeEl);

  const copyButtonEl = document.createElement("button");
  copyButtonEl.innerText = "Copy";
  colorContainerEl.appendChild(copyButtonEl);

  generateColor(colorContainerEl);

  copyButtonEl.addEventListener("click", () => {
    const colorCode = colorCodeEl.innerText;
    copyToClipboard(colorCode);
  });

  return colorContainerEl;
}

function generateColor(colorContainerEl) {
  const newColorCode = randomColor();
  const colorCodeEl = colorContainerEl.querySelector(".color-code");
  colorContainerEl.style.backgroundColor = "#" + newColorCode;
  colorCodeEl.innerText = "#" + newColorCode;
}

function randomColor() {
  const chars = "0123456789ABCDEF";
  const colorCodeLength = 6;
  let colorCode = "";

  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars[randomNum];
  }

  return colorCode;
}

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copied to Clipboard: " + text);
    })
    .catch((error) => {
      console.log("Failed to Copy to Clipboard", error);
    });
}
