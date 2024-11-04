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
// Explore Properties Carousel
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-line-indicators span');
let currentIndex = 0;

function showSlide(index) {
    const totalSlides = slides.length;
    currentIndex = (index + totalSlides) % totalSlides; // Handle wraparound
    const offset = -currentIndex * (slides[0].offsetWidth + 20); // Adjust for margin-right (20px)
    document.querySelector('.carousel-track').style.transform = `translateX(${offset}px)`;
    updateIndicators();
}

function updateIndicators() {
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentIndex].classList.add('active');
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});

// Carousel Controls
document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});
document.querySelector('.carousel-control.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Auto-slide every 5 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);









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











