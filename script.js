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











// HERO FORM //
// Function to send email using EmailJS
function sendEmail() {
    let params = {
        address: document.getElementById("address").value,
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
    };

    emailjs.send("service_rcsc7m9", "template_ul20uxf", params)
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

    emailjs.send("service_rcsc7m9", "template_6o3cmzn", params)
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
    sendEmailModal();
};




     





// Infinite Vertical Carousel with Seamless Loop
const feedbackContainer = document.querySelector(".vertical-carousel-slide");
const feedbackCards = document.querySelectorAll(".feedback-card-vertical");
const slideHeight = feedbackCards[0].clientHeight + 20; // Adjust for margin/padding if necessary
let verticalIndex = 0;

// Duplicate the feedback cards for a smooth infinite loop effect
feedbackContainer.innerHTML += feedbackContainer.innerHTML; // Duplicate the content for looping
const totalCards = feedbackContainer.children.length;

// Function to update the carousel position
function updateVerticalCarousel() {
    verticalIndex++;
    feedbackContainer.style.transition = "transform 0.5s ease";
    feedbackContainer.style.transform = `translateY(${-verticalIndex * slideHeight}px)`;

    // Reset position without transition for a seamless loop
    if (verticalIndex >= totalCards / 2) {
        setTimeout(() => {
            feedbackContainer.style.transition = "none";
            verticalIndex = 0;
            feedbackContainer.style.transform = `translateY(0px)`;
        }, 500); // Delay matches the transition duration
    }
}

// Auto-scroll every 3 seconds
let autoScroll = setInterval(updateVerticalCarousel, 3000);

// Manual Control Functions
document.querySelector(".vertical-carousel-next").addEventListener("click", () => {
    clearInterval(autoScroll); // Pause auto-scroll on manual interaction
    updateVerticalCarousel();
    autoScroll = setInterval(updateVerticalCarousel, 3000); // Resume auto-scroll
});

document.querySelector(".vertical-carousel-prev").addEventListener("click", () => {
    clearInterval(autoScroll);
    verticalIndex = (verticalIndex - 1 + totalCards) % totalCards;
    feedbackContainer.style.transition = "transform 0.5s ease";
    feedbackContainer.style.transform = `translateY(${-verticalIndex * slideHeight}px)`;
    autoScroll = setInterval(updateVerticalCarousel, 3000);
});

// Update carousel position on window resize
window.addEventListener("resize", () => {
    feedbackContainer.style.transition = "none";
    feedbackContainer.style.transform = `translateY(${-verticalIndex * slideHeight}px)`;
});


// Function to open the video overlay
function openVerticalVideo() {
    const videoOverlay = document.getElementById("verticalVideoOverlay");
    videoOverlay.style.display = "flex";

    // Start video playback by setting the iframe src with autoplay
    const iframe = videoOverlay.querySelector("iframe");
    iframe.src = "https://www.youtube.com/embed/vBgWJgtcVUg?autoplay=1";
}

// Function to close the video overlay
function closeVerticalVideo() {
    const videoOverlay = document.getElementById("verticalVideoOverlay");
    videoOverlay.style.display = "none";

    // Stop video playback by removing the src attribute temporarily
    const iframe = videoOverlay.querySelector("iframe");
    iframe.src = ""; // Clear the src to stop playback
    setTimeout(() => {
        iframe.src = "https://www.youtube.com/embed/vBgWJgtcVUg"; // Restore the src without autoplay
    }, 100);
}

// Add event listeners to open and close the video overlay
document.querySelector(".video-thumbnail").addEventListener("click", openVerticalVideo);
document.querySelector(".close").addEventListener("click", closeVerticalVideo);








