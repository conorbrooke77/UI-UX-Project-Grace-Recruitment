document.addEventListener("DOMContentLoaded", function () {
  const employeesContent = {
    header: "Find Your Culinary Path at Grace",
    title: "Build Your Future With Grace <br/> Recruitment",
    description:
      "Join Grace Recruitment to access top culinary opportunities in Ireland. Whether you're a chef looking for a new challenge or a venue seeking skilled talent, we're here to connect you with the perfect match. Get in touch to see how we can help shape your culinary future.",
    buttonText: "Join Our Team",
    buttonUrl: "form-employee.html",
  };

  const employersContent = {
    header: "Discover Top Culinary Talent with Grace",
    title: "Elevate Your Team With Grace <br/> Recruitment",
    description:
      "At Grace Recruitment, we specialize in connecting Ireland's businesses with exceptional culinary talent. Whether you're in need of a professional chef to lead your kitchen or a skilled team to elevate your service, we're here to facilitate that perfect partnership.",
    buttonText: "Find Your Next Chef",
    buttonUrl: "form-employer.html",
  };

  function updateContent(content, selectedButton) {
    const container = document.querySelector(
      ".contact-access-changable-container"
    );
    // Fade out
    container.style.opacity = "0";

    // Wait for the fade-out to finish
    setTimeout(() => {
      // Update content
      document.querySelector(
        ".contact-access-changable-container h5.small-header"
      ).innerHTML = content.header;
      document.querySelector(
        ".contact-access-changable-container h2"
      ).innerHTML = content.title;
      document.querySelector(
        ".contact-access-changable-container p"
      ).innerHTML = content.description;
      document.querySelector(
        ".contact-access-changable-container button"
      ).innerHTML = content.buttonText;

      // Find the bottom button
      const actionButton = document.querySelector(
        ".contact-access-changable-container button"
      );

      // Update the button text
      actionButton.textContent = content.buttonText;

      // Update the button's click event for redirection
      actionButton.onclick = function () {
        window.location.href = content.buttonUrl;
      };

      // Update button styles when active
      const buttons = document.querySelectorAll(
        "#contact-button-container button"
      );
      buttons.forEach((btn) => {
        btn.classList.remove("active-button");
      });
      selectedButton.classList.add("active-button");

      // Fade in
      container.style.opacity = "1";
    }, 400);
  }

  document
    .getElementById("forEmployeesBtn")
    .addEventListener("click", function () {
      updateContent(employeesContent, this);
    });

  document
    .getElementById("forEmployersBtn")
    .addEventListener("click", function () {
      updateContent(employersContent, this);
    });
});
