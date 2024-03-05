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
