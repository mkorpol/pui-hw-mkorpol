ScrollReveal().reveal('.actualcourse', {delay: 500, distance:'30em'});
ScrollReveal().reveal('.grid-item', {delay: 500, distance:'8em'});
ScrollReveal().reveal('.project-container', {delay: 500});
ScrollReveal().reveal('.about-row', {delay: 500});
new TypeIt("#hello", {
    speed: 80,
    waitUntilVisible: true,
}).go();

new TypeIt("#who", {
    speed: 80,
    waitUntilVisible: true,
}).go();

new TypeIt("#my", {
    speed: 80,
    waitUntilVisible: true,
}).go();

new TypeIt("#stuff", {
    speed: 80,
    waitUntilVisible: true,
}).go();

new TypeIt("#course", {
    speed: 80,
    waitUntilVisible: true,
}).go();

new TypeIt("#formm", {
    speed: 80,
    waitUntilVisible: true,
}).go();

new TypeIt("#things", {
    speed: 50,
    waitUntilVisible: true,
    loop: true,
    deleteSpeed: 60,
    startDelay: 2000,
})
    .break()
    .type("passionate learner 📚", { delay: 400 })
    .delete(20)
    .type("front end developer 💻", { delay: 400 })
    .pause(300)
    .delete(21)
    .type("movie enthusiast 🎥", { delay: 400 })
    .pause(300)
    .delete(18)
    .type("dog lover 🐶", { delay: 400 })
    .pause(300)
    .delete(11)
    .type("film photographer 📸", { delay: 400 })
    .pause(300)
    .delete(19)
    .go();