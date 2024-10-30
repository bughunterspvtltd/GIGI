$(document).ready(function () {
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.text().replace(/\D/g,''); // Remove non-numeric characters
        
        $this.prop('Counter', 0).animate({
            Counter: countTo
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $this.text(Math.ceil(now) + '+');
            }
        });
    });
});


// Form Validation Placeholder
$('#cashOfferForm').on('submit', function (event) {
    event.preventDefault();
    const address = $('#address').val();
    const name = $('#name').val();
    const phone = $('#phone').val();
    const email = $('#email').val();
    const terms = $('#terms').is(':checked');

    if (address && name && phone && email && terms) {
        alert('Form is valid! Add SMTP later.');
    } else {
        alert('Please fill in all fields and accept the terms.');
    }
});


// Explore Properties 
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', function() {
    goToSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', function() {
    goToSlide(currentSlide - 1);
});

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}







// Feedback Carousel Functionality
let currentFeedbackIndex = 0;
const feedbackSlideContainer = document.querySelector(".carousel-slide");
const feedbackCards = document.querySelectorAll(".feedback-card");
const feedbackCardsPerView = 2; // Number of cards to show per view
const totalFeedbackSlides = Math.ceil(feedbackCards.length / feedbackCardsPerView);

function showNextFeedback() {
    currentFeedbackIndex = (currentFeedbackIndex + 1) % totalFeedbackSlides;
    updateFeedbackDisplay();
}

function showPrevFeedback() {
    currentFeedbackIndex = (currentFeedbackIndex - 1 + totalFeedbackSlides) % totalFeedbackSlides;
    updateFeedbackDisplay();
}

function updateFeedbackDisplay() {
    const cardHeight = feedbackCards[0].offsetHeight + 10; // Card height with margin
    feedbackSlideContainer.style.transform = `translateY(-${currentFeedbackIndex * cardHeight * feedbackCardsPerView}px)`;
}

document.querySelector(".carousel-next").addEventListener("click", showNextFeedback);
document.querySelector(".carousel-prev").addEventListener("click", showPrevFeedback);

setInterval(showNextFeedback, 5000); // Auto-rotate every 5 seconds




