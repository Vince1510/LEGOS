import functionality from './data.js';

// 1. Get a reference to the DOM element where you want to add the cards.
const functionalitySection = document.getElementById("functionality");

// 2. Call the function, passing the container element as an argument.
if (functionalitySection) {
    addFunctionalities(functionalitySection);
}

function addFunctionalities(targetElement) {
    // Creating the feature-cards div
    const containerDiv = document.createElement("div");
    containerDiv.className = "feature-cards"
    
    // Adding a div for each feature card
    for (let i = 0; i < functionality.length; i++) {
        const div = document.createElement("div");
        // Use classList.add() to add classes
        div.classList.add("card", "feature");

        // Adding the content for the card
        div.innerHTML = `
            <img src="" alt="" />
            <h4>${functionality[i].title}</h4>
            <p>${functionality[i].content}</p>
        `;

        // 3. Append the newly created card to its parent container.
        containerDiv.appendChild(div);
    }

    // 4. Append the parent container (with all its cards) to the target element on the page.
    targetElement.appendChild(containerDiv);
}
