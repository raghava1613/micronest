// Make header transparent on scroll up
const header = document.getElementById('main-header');

window.onscroll = function() {
    if (window.scrollY > 100) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
};

// Handle active class on nav links
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(link => link.classList.remove('active'));
        item.classList.add('active');
    });
});

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Automatic slide movement
let slideInterval = setInterval(() => moveSlide(1), 3000); // Move to the next slide every 3 seconds

function moveSlide(n) {
    currentSlide += n;

    // Reset to first slide if reaching the end
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateSlide();
}

function setCurrentSlide(n) {
    clearInterval(slideInterval); // Stop automatic sliding when a dot is clicked
    currentSlide = n;
    updateSlide();
}

// Update slide position and active dot
function updateSlide() {
    const offset = -currentSlide * 100; // Move slides horizontally
    document.querySelector('.slides').style.transform = `translateX(${offset}vw)`;

    // Update active dot
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Dropdown functionality
function toggleDropdown(index) {
    const dropdowns = document.querySelectorAll('.service-dropdown');
    const dropdown = dropdowns[index];

    // Toggle the active class
    dropdown.classList.toggle('active');
    
    // Close any other opened dropdowns
    dropdowns.forEach((item, idx) => {
        if (idx !== index) {
            item.classList.remove('active');
        }
    });
}

// Function to detect when an element comes into view
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Handle scroll event to trigger animations
function handleScroll() {
    const dropdowns = document.querySelectorAll('.service-dropdown');
    const servicesHeading = document.querySelector('.services-heading');
    const servicesParagraph = document.querySelector('.services-paragraph');
    const contentSection = document.querySelector('.content-section');

    if (isElementInViewport(servicesHeading)) {
        servicesHeading.classList.add('active');
    }

    if (isElementInViewport(servicesParagraph)) {
        servicesParagraph.classList.add('active');
    }

    dropdowns.forEach(dropdown => {
        if (isElementInViewport(dropdown)) {
            dropdown.classList.add('active');
        }
    });

    if (isElementInViewport(contentSection)) {
        contentSection.classList.add('active');
    }
}

// Listen to the scroll event
window.addEventListener('scroll', handleScroll);

// Trigger the function once on load
document.addEventListener('DOMContentLoaded', handleScroll);

// Function to detect when the element comes into view
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add 'active' class when the element is in view
function handleScroll() {
    const fadeIns = document.querySelectorAll('.fade-in');

    fadeIns.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('active');
        }
    });
}

// Listen to scroll event
window.addEventListener('scroll', handleScroll);

// Trigger animation once on load if element is already in view
document.addEventListener('DOMContentLoaded', handleScroll);
