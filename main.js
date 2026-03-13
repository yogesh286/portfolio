// Navigation Scroll Effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Trigger animations on scroll
            animateElementsOnScroll();
        });

        // Mobile Navigation Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');
        
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-times');
            });
        });

        // Animate skill bars when in viewport
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-bar');
            
            skillBars.forEach(bar => {
                const barPosition = bar.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (barPosition < screenPosition) {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                }
            });
        }

        // Animate education items
        function animateEducationItems() {
            const educationItems = document.querySelectorAll('.education-item');
            
            educationItems.forEach((item, index) => {
                const itemPosition = item.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (itemPosition < screenPosition) {
                    // Add delay for staggered animation
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 200);
                }
            });
        }

        // Animate project cards
        function animateProjectCards() {
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach((card, index) => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (cardPosition < screenPosition) {
                    // Add delay for staggered animation
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 200);
                }
            });
        }

        // Animate all elements on scroll
        function animateElementsOnScroll() {
            animateSkillBars();
            animateEducationItems();
            animateProjectCards();
        }

        // Initialize animations
        window.addEventListener('load', function() {
            animateElementsOnScroll();
            
            // Trigger skill bar animation after a delay
            setTimeout(() => {
                animateSkillBars();
            }, 500);
        });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // For this example, we'll just show an alert
            alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} as soon as possible.`);
            
            // Reset form
            document.getElementById('contactForm').reset();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add animation to category cards on scroll
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe category cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });