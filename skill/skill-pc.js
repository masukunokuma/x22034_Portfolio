const water = document.querySelector('.OutWater');
const Pr = document.querySelector('.Pr');
const Ae = document.querySelector('.Ae');
const Maya = document.querySelector('.Maya');
const Ai = document.querySelector('.Ai');
const Ps = document.querySelector('.Ps');
const Web = document.querySelector('.Web');


// Pr
Pr.addEventListener("mouseover", () => {
    water.classList.add('active-Pr');
})
Pr.addEventListener("mouseleave", () => {
    water.classList.remove('active-Pr');
})

// Ae
Ae.addEventListener("mouseover", () => {
    water.classList.add('active-Ae');
})
Ae.addEventListener("mouseleave", () => {
    water.classList.remove('active-Ae');
})

// Maya
Maya.addEventListener("mouseover", () => {
    water.classList.add('active-Maya');
})
Maya.addEventListener("mouseleave", () => {
    water.classList.remove('active-Maya');
})

// Ai
Ai.addEventListener("mouseover", () => {
    water.classList.add('active-Ai');
})
Ai.addEventListener("mouseleave", () => {
    water.classList.remove('active-Ai');
})

// Ps
Ps.addEventListener("mouseover", () => {
    water.classList.add('active-Ps');
})
Ps.addEventListener("mouseleave", () => {
    water.classList.remove('active-Ps');
})

// Web
Web.addEventListener("mouseover", () => {
    water.classList.add('active-Web');
})
Web.addEventListener("mouseleave", () => {
    water.classList.remove('active-Web');
})