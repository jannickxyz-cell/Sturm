// Handy-Menü ein-/ausblenden
function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}

// Counter-Animation Logik
const statsSection = document.getElementById('stats-section');
const counters = document.querySelectorAll('.counter');
let hasRun = false;

const runCounters = () => {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        // Geschwindigkeit steuern: Zielwert geteilt durch Anzahl der Schritte
        const increment = target / 50; 
        
        const update = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                setTimeout(update, 30);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
};

// Intersection Observer: Startet Animation erst, wenn im Sichtfeld
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasRun) {
        runCounters();
        hasRun = true; 
    }
}, { threshold: 0.6 });

if (statsSection) {
    observer.observe(statsSection);
}
