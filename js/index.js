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


/* ---- Trending Section ---- */

const trendingPalettes = document.querySelectorAll(".trending-palette");

const checkBrightness = (haxCode) => {
	const hex = haxCode.substring(1); // removing # from hex code
    const rgb = parseInt(hex, 16); // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff; // extract red
    const g = (rgb >>  8) & 0xff; // extract green
    const b = (rgb >>  0) & 0xff; // extract blue
    const brightness = (r * 299 + g * 587 + b * 114) / 1000; // algorithm to calculate brightness

    // Setting text color based on brightness
    if (brightness > 125) {
		return false;
    } else {
		return true;
    }
}

const applyHaxCode = (item) => {
	const haxCode = item.getAttribute("style").slice(18, 25).toUpperCase();
	item.children[0].innerText = haxCode;

	const bgColorFlag = checkBrightness(haxCode);

	if(bgColorFlag){
		item.children[0].style.color = "#FFF";
	}

	item.children[0].addEventListener("click", () => {
		navigator.clipboard.writeText(haxCode);
		item.children[0].innerHTML = "<i class='bx bx-check'></i>";
		setTimeout(() => {
			item.children[0].innerText = haxCode;
		}, 2000);
	})
}

trendingPalettes.forEach(applyHaxCode);
