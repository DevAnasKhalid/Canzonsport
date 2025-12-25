document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Sticky Header & Mobile Menu ---
    const header = document.querySelector('header');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Sticky Header Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = 'var(--glass-bg)';
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
        }
    });

    // Mobile Menu Toggle
    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling to document
        navLinks.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.querySelector('i').classList.remove('fa-times');
            mobileToggle.querySelector('i').classList.add('fa-bars');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active')) {
            // If click is NOT inside navLinks and NOT on the toggle button
            if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileToggle.querySelector('i').classList.remove('fa-times');
                mobileToggle.querySelector('i').classList.add('fa-bars');
            }
        }
    });


    // --- 1b. Notification Bar Cycle ---
    const messages = [
        "✈️ WORLDWIDE FAST SHIPPING",
        "📷 DAILY UPDATES THROUGH VIDEOS",
        "👕 LOW CUSTOM MOQ (Only 20 Pieces Per Design)",
        "FREE Mockup designs to see your vision before production!",
    ];
    let msgIndex = 0;
    const msgElement = document.getElementById('notification-msg');
    const prevBtn = document.getElementById('prev-msg');
    const nextBtn = document.getElementById('next-msg');

    function updateMessage(index) {
        if (!msgElement) return;
        msgElement.style.opacity = '0';
        setTimeout(() => {
            msgElement.textContent = messages[index];
            msgElement.style.opacity = '1';
        }, 300); // Wait for fade out
    }

    function nextMessage() {
        msgIndex = (msgIndex + 1) % messages.length;
        updateMessage(msgIndex);
    }

    function prevMessage() {
        msgIndex = (msgIndex - 1 + messages.length) % messages.length;
        updateMessage(msgIndex);
    }

    if (msgElement) { // Only run if element exists
        let msgInterval = setInterval(nextMessage, 5000);

        if (nextBtn) nextBtn.addEventListener('click', () => {
            clearInterval(msgInterval);
            nextMessage();
            msgInterval = setInterval(nextMessage, 5000);
        });

        if (prevBtn) prevBtn.addEventListener('click', () => {
            clearInterval(msgInterval);
            prevMessage();
            msgInterval = setInterval(nextMessage, 5000);
        });
    }


    // --- 2. Hero Slider ---
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const totalSlides = slides.length;

    window.showSlide = (index) => {
        // Handle wrap around
        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1;

        // Reset all
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Set active
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        currentSlide = index;
    };

    window.nextSlide = () => showSlide(currentSlide + 1);
    window.prevSlide = () => showSlide(currentSlide - 1);
    window.setSlide = (index) => showSlide(index);

    // Auto Advance
    let slideInterval = setInterval(window.nextSlide, 5000);

    // Pause on hover
    document.querySelector('.slider').addEventListener('mouseenter', () => clearInterval(slideInterval));
    document.querySelector('.slider').addEventListener('mouseleave', () => slideInterval = setInterval(window.nextSlide, 5000));


    // --- 3. Scroll Animations (IntersectionObserver) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animatedElementsOld = document.querySelectorAll('.feature-card, .timeline-item .content, .section-header, .testimonial-card, .faq-item, .footer-grid > div');

    animatedElementsOld.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });


    // --- 4. FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close others
            faqItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            // Toggle current
            item.classList.toggle('active');
        });
    });


    // --- 5. Dynamic Scrolling Gallery Logic (Already in HTML? Or logic here?) ---
    // User logic for infinite scroll row duplication
    const row1 = document.getElementById('gallery-row-1');
    const row2 = document.getElementById('gallery-row-2');

    if (row1 && row2) {
        const imagesNodes = [
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

        const half = Math.ceil(imagesNodes.length / 2);
        const set1 = imagesNodes.slice(0, half);
        const set2 = imagesNodes.slice(half);

        const createItem = (src) => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Canzon Sport Gallery';
            img.loading = 'lazy';
            div.appendChild(img);
            return div;
        };

        const fillRow = (row, imgSet) => {
            imgSet.forEach(src => row.appendChild(createItem(src)));
            imgSet.forEach(src => row.appendChild(createItem(src)));
            imgSet.forEach(src => row.appendChild(createItem(src)));
        };

        fillRow(row1, set1);
        fillRow(row2, set2);
    }

    // --- 7. Services Mini-Carousels & Click Interaction ---
    const serviceCards = document.querySelectorAll('.service-card');
    let resumeScrollTimeout;

    serviceCards.forEach(card => {
        const slidesContainer = card.querySelector('.service-slides');
        const slides = card.querySelectorAll('.service-slides img');
        const nextBtn = card.querySelector('.svc-next');
        const prevBtn = card.querySelector('.svc-prev');
        let currentSlide = 0;

        card.addEventListener('click', (e) => {
            // Ignore clicks generated immediately after a swipe/touch drag
            if (card.dataset.swiped === 'true') { card.dataset.swiped = 'false'; return; }
            if (e.target.closest('.svc-btn')) return;

            const wasZoomed = card.classList.contains('zoomed');
            serviceCards.forEach(c => c.classList.remove('zoomed'));

            if (!wasZoomed) {
                card.classList.add('zoomed');
                if (typeof stopAutoScrollGlobal === 'function') stopAutoScrollGlobal();

                if (resumeScrollTimeout) clearTimeout(resumeScrollTimeout);
                resumeScrollTimeout = setTimeout(() => {
                    card.classList.remove('zoomed');
                    if (typeof startAutoScrollGlobal === 'function') startAutoScrollGlobal();
                }, 5000);
            } else {
                card.classList.remove('zoomed');
                if (typeof startAutoScrollGlobal === 'function') startAutoScrollGlobal();
            }
        });

        if (slides.length > 0 && nextBtn && prevBtn) {
            const updateSlide = () => {
                slidesContainer.style.transition = 'transform 0.5s ease-in-out';
                slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
            };

            // Ensure smooth initial state
            slidesContainer.style.transform = `translateX(0)`;
            slidesContainer.style.transition = 'transform 0.5s ease-in-out';

            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                currentSlide++;
                if (currentSlide >= slides.length) currentSlide = 0;
                updateSlide();
            });

            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                currentSlide--;
                if (currentSlide < 0) currentSlide = slides.length - 1;
                updateSlide();
            });

            /* Pointer / Touch swipe support for touch devices */
            let isPointerDown = false;
            let startX = 0;
            let movedX = 0;
            let isDragging = false;

            const onPointerDown = (e) => {
                isPointerDown = true;
                startX = (e.touches ? e.touches[0].clientX : e.clientX);
                movedX = 0;
                isDragging = false;
                slidesContainer.style.transition = 'none';
            };

            const onPointerMove = (e) => {
                if (!isPointerDown) return;
                const x = (e.touches ? e.touches[0].clientX : e.clientX);
                movedX = x - startX;
                if (Math.abs(movedX) > 10) {
                    isDragging = true;
                    // allow user to feel the drag
                    slidesContainer.style.transform = `translateX(calc(-${currentSlide * 100}% + ${movedX}px))`;
                }
            };

            const onPointerUp = (e) => {
                if (!isPointerDown) return;
                isPointerDown = false;
                slidesContainer.style.transition = 'transform 0.5s ease-in-out';
                if (isDragging) {
                    if (movedX < -40) {
                        currentSlide++;
                        if (currentSlide >= slides.length) currentSlide = 0;
                    } else if (movedX > 40) {
                        currentSlide--;
                        if (currentSlide < 0) currentSlide = slides.length - 1;
                    }
                    updateSlide();
                    // Prevent card click (zoom) right after swipe
                    card.dataset.swiped = 'true';
                    setTimeout(() => { card.dataset.swiped = 'false'; }, 50);
                    isDragging = false;
                    movedX = 0;
                } else {
                    // Not a drag — do nothing (regular click will handle zoom)
                }
            };

            // touch events
            slidesContainer.addEventListener('touchstart', onPointerDown, { passive: true });
            slidesContainer.addEventListener('touchmove', onPointerMove, { passive: true });
            slidesContainer.addEventListener('touchend', onPointerUp);

            // mouse events (desktop)
            slidesContainer.addEventListener('mousedown', onPointerDown);
            slidesContainer.addEventListener('mousemove', onPointerMove);
            slidesContainer.addEventListener('mouseup', onPointerUp);
            slidesContainer.addEventListener('mouseleave', onPointerUp);
        }
    });

    // --- 8. Main Services Slider Logic ---
    const svcTrack = document.getElementById('services-track');
    const svcMainPrev = document.getElementById('svc-main-prev');
    const svcMainNext = document.getElementById('svc-main-next');

    if (svcTrack && svcMainPrev && svcMainNext) {
        const scrollAmount = 330;
        let autoScrollTimer;

        const scrollServices = (direction) => {
            const currentScroll = svcTrack.scrollLeft;
            const maxScroll = svcTrack.scrollWidth - svcTrack.clientWidth;
            let newScroll;
            if (direction === 'next') {
                newScroll = currentScroll + scrollAmount;
                if (currentScroll >= maxScroll - 10) newScroll = 0;
            } else {
                newScroll = currentScroll - scrollAmount;
                if (newScroll < 0) newScroll = 0;
            }
            svcTrack.scrollTo({ left: newScroll, behavior: 'smooth' });
        };

        const startAutoScroll = () => {
            if (autoScrollTimer) clearInterval(autoScrollTimer);
            autoScrollTimer = setInterval(() => { scrollServices('next'); }, 6000);
        };

        const resetAutoScroll = () => {
            clearInterval(autoScrollTimer);
            startAutoScroll();
        };

        window.startAutoScrollGlobal = startAutoScroll;
        window.stopAutoScrollGlobal = () => clearInterval(autoScrollTimer);

        svcMainNext.addEventListener('click', () => { scrollServices('next'); resetAutoScroll(); });
        svcMainPrev.addEventListener('click', () => { scrollServices('prev'); resetAutoScroll(); });

        startAutoScroll();
    }


    // --- 9. Counter Section Animation ---
    const counterSection = document.getElementById('counter');
    const counterItems = document.querySelectorAll('.counter-item');
    const counterNumbers = document.querySelectorAll('.counter-number');
    let counterStarted = false;

    if (counterSection) {
        const startCounting = () => {
            counterNumbers.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2500;
                const increment = target / (duration / 16);
                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
            });
        };

        const revealCounters = () => {
            counterItems.forEach((item, index) => {
                setTimeout(() => { item.classList.add('visible'); }, index * 200);
            });
        };

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counterStarted) {
                    revealCounters();
                    startCounting();
                    counterStarted = true;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        counterObserver.observe(counterSection);
    }

    // --- 10. Video Gallery Logic (Enhanced Drag & Scroll) ---
    const videoSliderContainer = document.querySelector('.video-slider-container');
    const videoSlider = document.querySelector('.video-slider');
    const vidPrev = document.getElementById('vid-prev');
    const vidNext = document.getElementById('vid-next');

    if (videoSliderContainer && videoSlider && vidPrev && vidNext) {
        // Function to get scroll distance based on card width
        const getScrollDistance = () => {
            const firstCard = videoSlider.querySelector('.video-card');
            if (firstCard) {
                // Get card width including gap
                const cardWidth = firstCard.offsetWidth;
                const gap = 30; // Match CSS gap value
                return cardWidth + gap;
            }
            // Fallback
            return 350; // 320px card + 30px gap
        };

        // Button Navigation - scroll the container, not the slider
        vidPrev.addEventListener('click', () => {
            const scrollDistance = getScrollDistance();
            videoSliderContainer.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        });
        vidNext.addEventListener('click', () => {
            const scrollDistance = getScrollDistance();
            videoSliderContainer.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        });

        // Drag to Scroll Logic
        let isDown = false;
        let startX;
        let scrollLeft;

        // Prevent iframe interaction during drag
        const toggleIframes = (enable) => {
            const iframes = videoSlider.querySelectorAll('iframe');
            iframes.forEach(iframe => {
                iframe.style.pointerEvents = enable ? 'auto' : 'none';
            });
        };

        videoSliderContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            videoSliderContainer.classList.add('active');
            startX = e.pageX - videoSliderContainer.offsetLeft;
            scrollLeft = videoSliderContainer.scrollLeft;
            toggleIframes(false); // Disable iframes so drag works
        });

        videoSliderContainer.addEventListener('mouseleave', () => {
            isDown = false;
            videoSliderContainer.classList.remove('active');
            toggleIframes(true);
        });

        videoSliderContainer.addEventListener('mouseup', () => {
            isDown = false;
            videoSliderContainer.classList.remove('active');
            toggleIframes(true);
        });

        videoSliderContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - videoSliderContainer.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast
            videoSliderContainer.scrollLeft = scrollLeft - walk;
        });
    }

    // --- 11. Short Video Section Logic ---
    // --- 11. Short Video Section Logic (Enhanced) ---
    const shortVideoWrapper = document.querySelector('.short-video-wrapper');
    const shortVideo = document.querySelector('.short-video-player');
    const shortPlayBtn = document.querySelector('.short-vid-play-btn');
    const shortVolumeBtn = document.querySelector('.short-vid-volume-btn');

    if (shortVideo && shortPlayBtn && shortVolumeBtn && shortVideoWrapper) {
        let hideControlsTimeout;

        // --- Helper Functions ---
        const updatePlayIcon = () => {
            shortPlayBtn.innerHTML = shortVideo.paused ?
                '<i class="fa-solid fa-play"></i>' :
                '<i class="fa-solid fa-pause"></i>';
        };

        const updateVolumeIcon = () => {
            shortVolumeBtn.innerHTML = shortVideo.muted ?
                '<i class="fa-solid fa-volume-xmark"></i>' :
                '<i class="fa-solid fa-volume-high"></i>';
        };

        const showControls = () => {
            shortVideoWrapper.classList.remove('controls-hidden');
            clearTimeout(hideControlsTimeout);
            hideControlsTimeout = setTimeout(() => {
                if (!shortVideo.paused) { // Only hide if playing
                    shortVideoWrapper.classList.add('controls-hidden');
                }
            }, 5000);
        };

        // --- Event Listeners ---

        // Play/Pause Toggle
        const togglePlay = (e) => {
            if (e) e.stopPropagation();
            if (shortVideo.paused) {
                shortVideo.play();
            } else {
                shortVideo.pause();
                showControls(); // Keep controls visible when paused
            }
            updatePlayIcon();
        };

        shortPlayBtn.addEventListener('click', togglePlay);
        shortVideo.addEventListener('click', togglePlay);

        // Volume Toggle
        shortVolumeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            shortVideo.muted = !shortVideo.muted;
            updateVolumeIcon();
        });

        // Auto-Hide Controls Interaction
        shortVideoWrapper.addEventListener('mousemove', showControls);
        shortVideoWrapper.addEventListener('click', showControls);
        shortVideoWrapper.addEventListener('touchstart', showControls, { passive: true });

        // --- Auto Play/Pause on Scroll ---
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Auto Play Logic
                    shortVideo.play().then(() => {
                        // Try to unmute if requested, but browser might block
                        // User requirement: "volume also enabled" -> implies unmuted
                        // We attempt to unmute. If it fails, it stays muted.
                        shortVideo.muted = false;
                    }).catch(error => {
                        // Autoplay blocked (likely due to unmuted), fallback to muted
                        shortVideo.muted = true;
                        shortVideo.play();
                    });
                } else {
                    // Auto Pause Logic
                    shortVideo.pause();
                }
                updatePlayIcon();
                updateVolumeIcon();
            });
        }, { threshold: 0.5 }); // 50% visible triggers action

        videoObserver.observe(shortVideoWrapper);

        // Initial setup
        updatePlayIcon();
        updateVolumeIcon();
        showControls();
    }

    // --- 12. General Scroll Animations (New) ---
    const animatedElements = document.querySelectorAll('.animate-hidden');

    if (animatedElements.length > 0) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        animatedElements.forEach(el => animationObserver.observe(el));
    }

    // --- 13. Client Feedback Slider Logic ---
    const fbSlider = document.querySelector('.feedback-slider');
    const fbPrev = document.getElementById('fb-prev');
    const fbNext = document.getElementById('fb-next');

    if (fbSlider && fbPrev && fbNext) {
        // Function to get scroll distance based on card width
        const getScrollDistance = () => {
            const firstCard = fbSlider.querySelector('.review-card');
            if (firstCard) {
                // Get card width including gap
                const cardWidth = firstCard.offsetWidth;
                const gap = 20; // Match CSS gap value
                return cardWidth + gap;
            }
            // Fallback for mobile (full width) or desktop
            return window.innerWidth <= 768 ? window.innerWidth : 520;
        };

        fbPrev.addEventListener('click', () => {
            const scrollDistance = getScrollDistance();
            fbSlider.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        });
        fbNext.addEventListener('click', () => {
            const scrollDistance = getScrollDistance();
            fbSlider.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        });
    }

    // --- 14. Image Lightbox Logic ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const reviewImages = document.querySelectorAll('.review-images img');

    if (lightbox && lightboxImg && lightboxClose) {
        // Open
        reviewImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scroll
            });
        });

        // Close
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto'; // Enable scroll
        };

        lightboxClose.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                closeLightbox();
            }
        });
    }

});
