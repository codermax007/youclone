function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "-200px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-200px";
  }
}

function searchVideos() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".video-card");

  cards.forEach(card => {
    const title = card.querySelector(".video-title").textContent.toLowerCase();
    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Hide sidebar initially for toggle
document.getElementById("sidebar").style.left = "-200px";
