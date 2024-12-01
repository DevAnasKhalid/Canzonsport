let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const circles = document.querySelectorAll('.circle');
const totalSlides = slides.length;

function showSlide(index) {
    // Wrap around the slides
    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;

    // Move the slider
    const offset = -currentSlide * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

    // Update active circle indicator
    circles.forEach((circle, i) => {
        circle.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function setSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Auto slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

// Initialize slider
showSlide(currentSlide);


let timeout;
const socialIcons = document.querySelector('.social-icons');

function handleScroll() {
    // Show the social icons
    socialIcons.classList.remove('hidden');

    // Clear the previous timeout
    clearTimeout(timeout);

    // Set a new timeout to hide the icons after 3 seconds of inactivity
    timeout = setTimeout(() => {
        socialIcons.classList.add('hidden');
    }, 3000); // 3000ms = 3 seconds
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initially hide the social icons
socialIcons.classList.add('hidden');


// menu toggle

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeToggle = document.querySelector('.close-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        nav.style.display = 'flex';
        menuToggle.style.display = 'none'; // Hide menu toggle
        closeToggle.style.display = 'block'; // Show close toggle
    });

    closeToggle.addEventListener('click', function () {
        nav.style.display = 'none';
        closeToggle.style.display = 'none'; // Hide close toggle
        menuToggle.style.display = 'block'; // Show menu toggle
    });


    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (window.innerWidth < 768) {
                nav.style.display = 'none';
            }
        });
    });


    
    // short video
    const video = document.getElementById('myVideo');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play(); // Play video when it is visible
            } else {
                video.pause(); // Pause video when it goes out of view
            }
        });
    });

    // Observe the video element
    observer.observe(video);

        // short video end
    
    // FAQ toggle functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const isOpen = answer.classList.contains('open');

            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('open');
                ans.previousElementSibling.querySelector('i').classList.remove('fa-minus');
                ans.previousElementSibling.querySelector('i').classList.add('fa-plus');
            });

            // Toggle the clicked answer
            if (isOpen) {
                answer.classList.remove('open');
                this.querySelector('i').classList.remove('fa-minus');
                this.querySelector('i').classList.add('fa-plus');
            } else {
                answer.classList.add('open');
                this.querySelector('i').classList.remove('fa-plus');
                this.querySelector('i').classList.add('fa-minus');
            }
        });
    });


    // Adjust nav display on window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
});

    // video gallary


document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.video-container');
    const leftButton = document.querySelector('.scroll-left');
    const rightButton = document.querySelector('.scroll-right');
    const videoItems = document.querySelectorAll('.video-item');
    let currentIndex = 0;

    function updateGallery() {
        const itemWidth = videoItems[0].offsetWidth;
        container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function scrollLeft() {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    }

    function scrollRight() {
        if (currentIndex < videoItems.length - (window.innerWidth > 768 ? 3 : 1)) {
            currentIndex++;
            updateGallery();
        }
    }

    leftButton.addEventListener('click', scrollLeft);
    rightButton.addEventListener('click', scrollRight);

    // Touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    container.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            scrollRight();
        }
        if (touchEndX > touchStartX) {
            scrollLeft();
        }
    }

    // Initial update
    updateGallery();

    // Update on window resize
    window.addEventListener('resize', updateGallery);
});


// testimonials JS
// testimonials JS

const container = document.querySelector('.testimonials-container');
const wrapper = document.querySelector('.testimonials-wrapper');
const testimonials = document.querySelectorAll('.testimonial');

let currentIndex = 0;
const totalTestimonials = testimonials.length;
let visibleTestimonials = window.innerWidth >= 768 ? 3 : 1;
let autoRotateInterval;

function updateTestimonials() {
    const translateX = -currentIndex * (100 / visibleTestimonials);
    wrapper.style.transform = `translateX(${translateX}%)`;
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % (totalTestimonials - visibleTestimonials + 1);
    updateTestimonials();
}

function startAutoRotate() {
    stopAutoRotate();
    autoRotateInterval = setInterval(nextTestimonial, 5000);
}

function stopAutoRotate() {
    clearInterval(autoRotateInterval);
}

// Resize event to adjust visible testimonials
window.addEventListener('resize', () => {
    const newVisibleTestimonials = window.innerWidth >= 768 ? 3 : 1;
    if (newVisibleTestimonials !== visibleTestimonials) {
        visibleTestimonials = newVisibleTestimonials;
        currentIndex = 0;
        updateTestimonials();
    }
});

updateTestimonials();
startAutoRotate();



// gallery

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.getElementsByClassName('close')[0];

// Sample image URLs (replace with your actual image URLs)
const images = [
    'https://res.cloudinary.com/dgjlnqft1/image/upload/v1726502318/Garment_Manufacturer_and_Supplier_custom_clothing_dgn7oa.jpg',
    'https://res.cloudinary.com/dgjlnqft1/image/upload/v1726502318/Manufacturer_Garment_and_Supplier_of_custom_clothing_bbikrm.png',
    'https://res.cloudinary.com/dgjlnqft1/image/upload/v1726502295/CANZON_SPORT_Company_manufacturer_and_exporter_of_High_Quality_Apparel_Textile_Clothing._We_Provide_Customized_Clothing_with_Low_MOQs._rexbfr.png',
    'https://res.cloudinary.com/dgjlnqft1/image/upload/v1726851056/Canzon_sport_kvgbe4.jpg',
    'https://res.cloudinary.com/dgjlnqft1/image/upload/v1726502319/Garment_Manufacturer_and_Supplier_of_custom_clothing_cnz3qe.png',
    'https://res.cloudinary.com/dgjlnqft1/image/upload/v1726851057/CUSTOM_CLOTHING_MANUFACTURER___po3afg.png',
    'https://res.cloudinary.com/dgjlnqft1/image/upload/v1726851057/Canzon_Sport_zon_bo49qp.jpg',
    'https://res.cloudinary.com/dgjlnqft1/image/upload/v1726851062/Custom_Clothing_Manufacturer_11zon_ms7sj1.png',
    'https://res.cloudinary.com/dgjlnqft1/image/upload/v1726503019/Quality_needs_Concentration_2_veadnv.jpg',
    'https://res.cloudinary.com/dgjlnqft1/image/upload/v1726503019/Our_Display_Centre_jzqdyl.jpg',

];

// Populate gallery
images.forEach((src, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Canzon Sport Image ${index + 1}`;
    item.appendChild(img);
    gallery.appendChild(item);

    // Open full image   
    // item.onclick = () => {
    //     modal.style.display = 'block';
    //     modalImg.src = src;
    // };
});

// Close modal
closeBtn.onclick = () => {
    modal.style.display = 'none';
};

// Close modal when clicking outside the image
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
