document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('water-counter');
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const speed = 200; // Adjust this value for animation speed (larger value = slower animation)
    
    // Check if the element is in the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const updateCounter = () => {
                    const increment = target / speed;
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCounter, 1);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    observer.observe(counter);
});