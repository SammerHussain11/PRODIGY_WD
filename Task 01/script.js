document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar a");
  const searchButton = document.querySelector(".search-bar button");

  // Change background color on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#222";
    } else {
      navbar.style.backgroundColor = "#333";
    }
  });

  // Change color on hover
  navLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      this.style.color = "#ff6347";
    });
    link.addEventListener("mouseout", function () {
      this.style.color = "#fff";
    });
  });

  // Add search button click functionality (optional)
  searchButton.addEventListener("click", function () {
    const searchText = document.querySelector(".search-bar input").value;
    alert(`You searched for: ${searchText}`);
  });
});
