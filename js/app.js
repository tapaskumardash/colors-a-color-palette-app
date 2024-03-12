/* ---- Navigation Bar ---- */

const sidebar = document.querySelector(".navigation-link-container");
const openSidebarButton = document.getElementById("menu-open-icon");

// Function to handle the openings and closings in the mobile screen
const sidebarOpenClose = () => {
	sidebar.classList.toggle("navigation-link-container-active");

	openSidebarButton.classList.toggle("bx-x", sidebar.classList.contains("navigation-link-container-active"));
	openSidebarButton.classList.toggle("bx-menu", !sidebar.classList.contains("navigation-link-container-active"));
}

openSidebarButton.addEventListener("click", sidebarOpenClose);


/* ---- Palettes ---- */

const generateButton = document.getElementById("generate-btn");
const addButton = document.getElementById("add-btn");
const paletteContainer = document.querySelector(".palette-container");

// Function to generate color palettes
const generate = (item) => {
    const hexCodeText = item.children[1];
    // Generating a random number
    const randomNumber = Math.floor(Math.random() * 16777215);
    // Making the hex code
    const randomCode = "#" + randomNumber.toString(16);
    // Applying changes to all the items (.palettes)
    item.style.backgroundColor = randomCode;

    // Calculating brightness
    const hex = randomCode.substring(1); // removing # from hex code
    const rgb = parseInt(hex, 16); // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff; // extract red
    const g = (rgb >>  8) & 0xff; // extract green
    const b = (rgb >>  0) & 0xff; // extract blue
    const brightness = (r * 299 + g * 587 + b * 114) / 1000; // algorithm to calculate brightness

    // Setting text color based on brightness
    if (brightness > 125) {
        hexCodeText.style.color = "#000"; // light color, set text color to black
    } else {
        hexCodeText.style.color = "#FFF"; // dark color, set text color to white
    }

    hexCodeText.innerText = randomCode.toUpperCase();
}

// Function to handle popup
const showCopiedPopup = () => {
	const copiedPopup = document.getElementById("copied-popup");
	copiedPopup.classList.toggle("active-copied-popup");
	setTimeout(() => {
		copiedPopup.classList.toggle("active-copied-popup")
	}, 2000);
}

const generateClickEvent = () => {
	const palettes = document.querySelectorAll(".palettes");
	palettes.forEach(generate);
}

// Function to add elements to the DOM
const addElements = () => {
	// Creating the main div
	const divElement = document.createElement("div");
	divElement.classList.add("palettes");

	// Creating remove icon
	const removeIconElement = document.createElement("i");
	removeIconElement.classList.add("bx", "bx-x", "clear-palette");
	divElement.appendChild(removeIconElement);

	// For the removal of palette
	removeIconElement.addEventListener("click", () => removeElement(divElement));

	// Creating hex code text
	const hexCodeElement = document.createElement("span");
	hexCodeElement.classList.add("hex-code");
	divElement.appendChild(hexCodeElement);

	// Copy to clipboard (hex code)
	hexCodeElement.addEventListener("click", () => {
		navigator.clipboard.writeText(hexCodeElement.innerText);
		showCopiedPopup();
	})

	// Adding to DOM
	paletteContainer.appendChild(divElement);

	// generating color for new element
	generate(divElement);
}

// Function to remove the palettes
const removeElement = (paletteElement) => {
	paletteElement.remove();
}

// Function to explicitly add palettes
const addMultiplePalettes = (paletteCount) => {
	for(let i = 0; i < paletteCount; i++){
		addElements();
	}
}

generateButton.addEventListener("click", generateClickEvent);
addButton.addEventListener("click", addElements);

document.addEventListener("keydown", (event) => {
	if(event.code === "Space" || event.key === " "){
		event.preventDefault();
		generateClickEvent();
	}
	else if(event.code === "NumpadAdd"){
		event.preventDefault();
        addElements();
	}
})

// Initial calls
generateClickEvent();
// Initially there will be four palettes
addMultiplePalettes(4);
