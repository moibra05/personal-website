const footer = document.querySelector("footer");

footer.textContent = `© ${new Date().getFullYear()} Mohamed Ibrahim`

const aboutMe = document.querySelector(".about-me");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

const pageSections = [aboutMe, projects, contact];

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
    });
})

pageSections.forEach(section => {
    observer.observe(section);
})
