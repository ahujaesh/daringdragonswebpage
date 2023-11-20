const teamMembers = [
    { name: "Sahasra K", link: "sahasra_k.html" },
    { name: "Sahasra V", link: "sahasra_v.html" },
    { name: "Sristi S", link: "sristi_s.html" },
    { name: "Gokul S", link: "gokul_s.html" },
    { name: "Varun I", link: "varun_i.html" },
    { name: "Eshaan A", link: "eshaan_a.html" },
    { name: "Ruchika Joshi - The Team Manager", link: "rj.html" }
];

const searchInput = document.getElementById("search");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMembers = teamMembers.filter(member =>
        member.name.toLowerCase().includes(searchTerm)
    );

    displayResults(filteredMembers);
});

function displayResults(results) {
    searchResults.innerHTML = "";

    if (results.length === 0) {
        searchResults.innerHTML = "No results found.";
        return;
    }

    results.forEach(member => {
        const memberLink = document.createElement("a");
        memberLink.href = member.link;
        memberLink.textContent = member.name;
        searchResults.appendChild(memberLink);
    });
}

// Clear the results when the search input is empty
searchInput.addEventListener("input", () => {
    if (searchInput.value === "") {
        searchResults.innerHTML = "";
    }
});


function toggleTheme() {
    // Function to toggle the theme
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        themeIcon.innerText = "☀️ Light Mode";
    } else {
        body.classList.add("dark-theme");
        themeIcon.innerText = "🌙 Dark Mode";
    }
}