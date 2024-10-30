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
// Feedback Carousel Functionality
let currentFeedbackIndex = 0;
const feedbackSlideContainer = document.querySelector(".carousel-slide");
const feedbackCards = document.querySelectorAll(".feedback-card");

// Check if feedback cards and carousel controls exist
if (feedbackSlideContainer && feedbackCards.length > 0) {
    const cardHeight = feedbackCards[0].offsetHeight + 20; // Includes card margin
    const totalFeedbackSlides = Math.ceil(feedbackCards.length / 2);

    function showNextFeedback() {
        currentFeedbackIndex = (currentFeedbackIndex + 1) % totalFeedbackSlides;
        updateFeedbackDisplay();
    }

    function showPrevFeedback() {
        currentFeedbackIndex = (currentFeedbackIndex - 1 + totalFeedbackSlides) % totalFeedbackSlides;
        updateFeedbackDisplay();
    }

    function updateFeedbackDisplay() {
        feedbackSlideContainer.style.transform = `translateY(-${currentFeedbackIndex * cardHeight * 2}px)`;
    }

    // Add event listeners if controls are present
    const nextButton = document.querySelector(".carousel-next");
    const prevButton = document.querySelector(".carousel-prev");

    if (nextButton) nextButton.addEventListener("click", showNextFeedback);
    if (prevButton) prevButton.addEventListener("click", showPrevFeedback);

    // Auto-rotate every 5 seconds
    setInterval(showNextFeedback, 5000);
}

// Video Overlay Functions
function openVideo() {
    document.getElementById("videoOverlay").style.display = "flex";
}

function closeVideo() {
    document.getElementById("videoOverlay").style.display = "none";
}





