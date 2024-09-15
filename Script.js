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
        
        
        document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.querySelector('.menu-toggle');
            const nav = document.querySelector('nav ul');

            menuToggle.addEventListener('click', function () {
                nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
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

