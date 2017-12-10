
// create an HTML page that contains a text area and a button labeled Create.

/* when the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card. */

/* when the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM. */

// target text area and button
let input = document.getElementById("textBox");
let createBtn = document.getElementById("createBtn");
let outputDiv = document.getElementById("outputDiv");

// get text area content
 createBtn.addEventListener("click", cardMaker);

// create card in DOM and add text from input area
function cardMaker() {
  let card = document.createElement("div");
  card.setAttribute("id", "card");
  card.style.border = ("3px solid");
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "delete");
  deleteBtn.innerHTML = "Delete";
  let text = input.value;
  card.innerHTML = `<p>${text}</p>`;
  card.appendChild(deleteBtn);
  outputDiv.appendChild(card);
  // put event listener inside this function so value wouldn't be null
  document.getElementById("delete").addEventListener("click", vanishDiv);
}

// delete card from parent div
function vanishDiv() {
  outputDiv.removeChild(card);
}