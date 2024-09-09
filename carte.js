const cards = document.querySelectorAll(".carte");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        let rect = card.getBoundingClientRect();
        let xAxis = (rect.width / 2 - (e.clientX - rect.left)) / 12;
        let yAxis = (rect.height / 2 - (e.clientY - rect.top)) / 12;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`; 
    });
});