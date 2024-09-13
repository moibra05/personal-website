const footer = document.querySelector("footer");

// Updates copyright year
footer.textContent = `© ${new Date().getFullYear()} Mohamed Ibrahim`



const aboutMe = document.querySelector(".about-me");
const projectSection = document.querySelector(".projects");
const contact = document.querySelector(".contact");
const allProjects = document.querySelectorAll(".project");

const pageSections = [aboutMe, projectSection, contact];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.toggle("show");
      observer.unobserve(entry.target)
      }
  })
}, 
{
  threshold: 0.4
})

pageSections.forEach(section => {
  observer.observe(section);
})
allProjects.forEach(project => {
  observer.observe(project);
})
