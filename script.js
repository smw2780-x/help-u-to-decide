// DATA
function getCategoriesData() {
    return {
        people: [
            "Alice",
            "Bob",
            "Charlie",
            "Diana",
            "Ethan",
            "Fiona",
            "George",
            "Hannah"
        ],
        tasks: [
            "Clean the kitchen",
            "Organize the desk",
            "Do laundry",
            "Water the plants",
            "Take out the trash",
            "Vacuum the living room"
        ],
        foods: [
            "Spaghetti Carbonara",
            "Chicken Stir-fry",
            "Tacos",
            "Grilled Cheese & Soup",
            "Homemade Pizza",
            "Vegetable Curry"
        ]
    };
}

// LOGIC
let lastPickedItem = null;

function pickRandomItem(categoryKey) {
    const data = getCategoriesData();
    const items = data[categoryKey];

    if (!items || items.length === 0) {
        return null;
    }

    if (items.length === 1) {
        lastPickedItem = items[0];
        return items[0];
    }

    let selectedItem;
    do {
        const randomIndex = Math.floor(Math.random() * items.length);
        selectedItem = items[randomIndex];
    } while (selectedItem === lastPickedItem);

    lastPickedItem = selectedItem;
    return selectedItem;
}

// DISPLAY
function initApp() {
    const categorySelect = document.getElementById("categorySelect");
    const pickButton = document.getElementById("pickButton");
    const resultDisplay = document.getElementById("resultDisplay");

    categorySelect.addEventListener("change", function () {
        lastPickedItem = null;
        resultDisplay.textContent = "Click button to decide!";
    });

    pickButton.addEventListener("click", function () {
        const selectedCategory = categorySelect.value;
        const decision = pickRandomItem(selectedCategory);

        if (decision) {
            resultDisplay.textContent = decision;
            resultDisplay.classList.remove("animate");
            void resultDisplay.offsetWidth;
            resultDisplay.classList.add("animate");
        } else {
            resultDisplay.textContent = "No items available.";
        }
    });
}

document.addEventListener("DOMContentLoaded", initApp);
