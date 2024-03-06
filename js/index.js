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


/* ---- Hero Color Palette Screen ---- */

const heroColorPalettes = document.querySelectorAll(".hero-color-palette");

// Function to generate random color codes and apply those to all the classes named hero-color-palette
const heroRandomColorGenerator = (item) => {
	// Generating a random number
	const randomNumber = Math.floor(Math.random() * 16777215);
	// Making the Hax code
	const randomCode = "#" + randomNumber.toString(16);
	// Applying changes to all items
	item.style.backgroundColor = randomCode;
}

// Initial call
heroColorPalettes.forEach(heroRandomColorGenerator);

// Interval call
setInterval(() => {
	heroColorPalettes.forEach(heroRandomColorGenerator);
}, 500);
