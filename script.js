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
}, 2000);









// Feedback Carousel Functionality
let currentIndex2 = 0;
const feedbackCards = document.querySelectorAll(".feedback-card");
const totalCards = feedbackCards.length;
const carouselContainer = document.querySelector(".carousel-container");
const slideWidth = feedbackCards[0].clientWidth + 10; // Adjust based on margin

function updateCarousel() {
    const visibleCards = window.innerWidth < 768 ? 1 : 2; // One card on mobile, two on larger screens
    const maxIndex = totalCards - visibleCards;

    if (currentIndex2 > maxIndex) {
        currentIndex2 = 0; // Reset to start
    } else if (currentIndex2 < 0) {
        currentIndex2 = maxIndex; // Move to end
    }

    const offset = -currentIndex2 * slideWidth;
    document.querySelector(".carousel-slide").style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    currentIndex2++;
    updateCarousel();
}

function prevSlide() {
    currentIndex2--;
    updateCarousel();
}

// Auto-scroll every 5 seconds
let autoScroll = setInterval(nextSlide, 5000);

// Event Listeners
document.querySelector(".carousel-next")?.addEventListener("click", () => {
    clearInterval(autoScroll); // Pause auto-scroll on manual interaction
    nextSlide();
    autoScroll = setInterval(nextSlide, 5000); // Resume auto-scroll
});

document.querySelector(".carousel-prev")?.addEventListener("click", () => {
    clearInterval(autoScroll);
    prevSlide();
    autoScroll = setInterval(nextSlide, 5000);
});

// Update carousel on window resize
window.addEventListener("resize", updateCarousel);

// Initial call to set carousel position
updateCarousel();


// Video Overlay Functions
function openVideo() {
    document.getElementById("videoOverlay").style.display = "flex";
}

function closeVideo() {
    document.getElementById("videoOverlay").style.display = "none";
}







// HERO FORM //
// Function to send email using EmailJS
function sendEmail() {
    let params = {
        address: document.getElementById("address").value,
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
    };

    emailjs.send("service_al5v0rr", "template_3vn1tt6", params)
    .then(response => {
        alert("Message sent successfully");
        
        // Optionally, reset the form fields after submission
        document.getElementById("contactForm").reset();
    }, error => {
        alert("Failed: " + JSON.stringify(error));
    });
}

// Attach sendEmail to form submit event
document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    sendEmail(); // Call the sendEmail function
};





// MODAL FORM //
// Function to send email using EmailJS
function sendEmailModal() {
    let params = {
        user_address: document.getElementById("user_address").value,
        user_name: document.getElementById("user_name").value,
        user_phone: document.getElementById("user_phone").value,
        user_email: document.getElementById("user_email").value,
    };

    console.log("Form Data:", params); // Log form data to ensure accuracy

    emailjs.send("service_al5v0rr", "template_2uhxa2f", params)
    .then(response => {
        alert("Message sent successfully");
        
        // Reset the form
        document.getElementById("contactForm").reset();
    }, error => {
        alert("Failed: " + JSON.stringify(error));
    });
}

// Attach sendEmail to form submit event if it's not inline in HTML
document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    sendEmail();
};




     


