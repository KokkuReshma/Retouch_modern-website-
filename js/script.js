document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Navigation Toggle ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileNavToggle.classList.toggle('active'); // For hamburger animation
            
            // ARIA attribute for accessibility
            const isExpanded = navLinks.classList.contains('active');
            mobileNavToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close mobile menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileNavToggle.classList.remove('active');
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // --- Smooth Scroll for Navigation Links ---
    // (HTML already has scroll-behavior: smooth; this is an alternative or enhancement)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         // Only prevent default if it's an internal link to a section on the same page
    //         if (this.pathname === window.location.pathname && this.hash) {
    //             e.preventDefault();
    //             const targetElement = document.querySelector(this.hash);
    //             if (targetElement) {
    //                 targetElement.scrollIntoView({
    //                     behavior: 'smooth'
    //                 });
    //             }
    //         }
    //     });
    // });


    // --- Active Navigation Link Highlighting on Scroll (More Advanced) ---
    // This can be a bit complex to get perfect, especially with sticky headers.
    // For now, we'll keep it simple. You can add this later.
    // Basic idea:
    // const sections = document.querySelectorAll('main section[id]');
    // window.addEventListener('scroll', () => {
    //     let current = '';
    //     sections.forEach(section => {
    //         const sectionTop = section.offsetTop;
    //         // Adjust offset if you have a sticky header
    //         const headerOffset = document.getElementById('main-header').offsetHeight + 10; 
    //         if (pageYOffset >= sectionTop - headerOffset) {
    //             current = section.getAttribute('id');
    //         }
    //     });

    //     navLinks.querySelectorAll('a').forEach(a => {
    //         a.classList.remove('active');
    //         if (a.getAttribute('href') === `#${current}`) {
    //             a.classList.add('active');
    //         }
    //     });
    // });


    // --- Update Copyright Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Basic Contact Form Handling (Client-Side Only for now) ---
    // For a real form, you'd need server-side processing or a service like Formspree/Netlify Forms.
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual submission for this example

            // Basic validation (can be more robust)
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            console.log('Form submitted (simulated):');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            alert('Thank you for your message! (This is a demo)');
            contactForm.reset(); // Clear the form
        });
    }

    // Add other interactive elements here as you develop
    // e.g., portfolio item click to open a modal, simple animations on scroll, etc.

}); // End of DOMContentLoaded