var nav = document.querySelector('nav');
var images = [
    '../res/Professional_chefs_preparing_dinner.jpg',
    '../res/Cooks.jpg',
    '../res/chefs.jpg'
];
var currentIndex = 0;
var slideshowDiv = document.getElementById('header-content-container');

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-link').forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {rootMargin: "0px", threshold: 0.6});

    // Observe each section
    document.querySelectorAll('.section-identifier').forEach((section) => {
        observer.observe(section);
    });
});

window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 300) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

window.onload = function() {
    if (localStorage.getItem('formSubmitted') === 'true') {
      alert('Your form has submitted successfully!');
      localStorage.removeItem('formSubmitted');
    }
  }

function changeBackgroundImage() {
    setTimeout(function() {
        slideshowDiv.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
    }, 1000); // This should match the CSS transition time
}

function submitForm() {
    localStorage.setItem('formSubmitted', 'true');
    window.location.href = 'index.html';
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

setInterval(changeBackgroundImage, 4000); // Change image every 4000 milliseconds (4 seconds)

// Initial call to display the first image
changeBackgroundImage();