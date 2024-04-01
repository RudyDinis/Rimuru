document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            startTime = null;

        function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            current = start + increment * (progress / duration) * range;

            // Assurez-vous que le compteur ne dépasse pas la valeur finale
            current = increment > 0 ? Math.min(current, end) : Math.max(current, end);

            obj.textContent = Math.floor(current);

            if ((increment > 0 && current < end) || (increment < 0 && current > end)) {
                requestAnimationFrame(updateCounter);
            }
        }

        // Options pour l'Intersection Observer
        const observerOptions = {
            threshold: 0.5, // Déclencher lorsque 50% de l'élément est visible
        };

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                // Commencez le compteur lorsque l'élément est visible
                requestAnimationFrame(updateCounter);
                observer.disconnect(); // Arrêtez l'observation après le déclenchement initial
            }
        }, observerOptions);

        // Observer l'élément cible
        observer.observe(obj);
    }

    counter("count1", 0, 405682, 10000);
});