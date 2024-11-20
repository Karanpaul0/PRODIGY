// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close the navigation menu when a link is clicked (for mobile)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth Scrolling for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Adjust for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });



    function showError(id) {
        const errorElement = document.getElementById(id);
        if (errorElement) {
            errorElement.style.display = 'block';
        }
    }

    function hideError(id) {
        const errorElement = document.getElementById(id);
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    function validateEmail(email) {
        // Simple email regex for validation
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    // Custom Cursor Implementation
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Update cursor position
    document.addEventListener('mousemove', e => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    // Elements that will trigger cursor animations
    const interactiveElements = document.querySelectorAll('a, button, .btn');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursor.classList.add('hovered');
        });
        el.addEventListener('mouseout', () => {
            cursor.classList.remove('hovered');
        });
    });

    // Optional: Click Animation
    document.addEventListener('mousedown', () => {
        cursor.classList.add('clicked');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('clicked');
    });
});
