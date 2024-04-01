$('.carousel .carousel-item').each(function () {
    var minPerSlide = 4;
    var next = $(this).next();

    if (!next.length) {
        next = $(this).siblings(':first');
    }

    for (var i = 0; i < minPerSlide; i++) {
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        next = next.next();
    }
});    

    document.addEventListener("DOMContentLoaded", function () {
        // Sélectionnez les éléments du carrousel
        const carousel = document.querySelector("#carouselExample");
        const cards = carousel.querySelectorAll(".carousel-item");

        // Ajoutez un gestionnaire d'événements au bouton précédent
        document.querySelector(".carousel-control-prev").addEventListener("click", function () {
            shiftCards("left");
        });

        // Ajoutez un gestionnaire d'événements au bouton suivant
        document.querySelector(".carousel-control-next").addEventListener("click", function () {
            shiftCards("right");
        });

        function shiftCards(direction) {
            // Déplacez les cartes dans le sens spécifié
            if (direction === "left") {
                carousel.appendChild(cards[0]);
            } else if (direction === "right") {
                carousel.insertBefore(cards[cards.length - 1], cards[0]);
            }
        }
    });
