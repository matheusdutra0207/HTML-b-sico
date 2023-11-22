function addTextContent() {
    story.textContent = "Eu gosto de javascript..."
}

function clearTextContent() {
    story.textContent = ""
}

const story = document.querySelector(".story")

const setText = document.querySelector("#set-text")
setText.addEventListener("click", addTextContent)

const clearText = document.querySelector("#clear-text")
clearText.addEventListener("click", clearTextContent)

