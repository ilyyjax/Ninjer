const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category-filter");
const jobCards = document.querySelectorAll(".job-card");
const jobCount = document.getElementById("job-count");
const darkToggle = document.getElementById("dark-toggle");

// Search
searchInput.addEventListener("input", filterJobs);
categoryFilter.addEventListener("change", filterJobs);

function filterJobs() {
  const term = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  let visible = 0;

  jobCards.forEach(card => {
    const text = card.querySelector("h3").textContent.toLowerCase();
    const matchesSearch = text.includes(term);
    const matchesCategory = category === "all" || card.dataset.category === category;

    if (matchesSearch && matchesCategory) {
      card
