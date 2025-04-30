const sections = document.querySelectorAll("section");  // Select all sections
const navLinks = document.querySelectorAll("nav a");  // Select all nav links

// Function to update the active link based on scroll position
function setActiveLink() {
  let current = "";  // Keep track of the current section's id

  // Loop through all sections to check if the current scroll position is within the section
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;  // Top offset of the section (adjust for header)
    const sectionHeight = section.clientHeight;  // Height of the section

    // If the scroll position is within the section, update the 'current' variable
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");  // Get the id of the current section
    }
  });

  // Loop through all nav links and set the 'active' class based on the section currently in view
  navLinks.forEach(link => {
    link.classList.remove("active");  // Remove 'active' class from all links
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");  // Add 'active' class to the link corresponding to the current section
    }
  });
}

// Trigger the setActiveLink function on scroll event
window.addEventListener("scroll", setActiveLink);

function handleSearch(event) {
  event.preventDefault();
  const input = document.getElementById('searchInput').value.toLowerCase();

  if (input.includes("socials") || input.includes("facebook") || input.includes("instagram")|| input.includes("tiktok")|| input.includes("linkedin")) {
    window.location.href = "#home";
  } else if (input.includes("contact") || input.includes("email")) {
    window.location.href = "#about";
  } else if (input.includes("projects")) {
    window.location.href = "#projects";
  } else if (input.includes("quizzes")) {
    window.location.href = "#quizzes";
  } else {
    alert("No matching section found!");
  }
}


function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}
