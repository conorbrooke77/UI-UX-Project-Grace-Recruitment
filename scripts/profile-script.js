let originalProfilesHTML = '';
let newProfileAdded = false; // Flag to track the addition of the new profile

document.addEventListener("DOMContentLoaded", () => {
    const profilesContainer = document.getElementById('img-profile-container');
    originalProfilesHTML = profilesContainer.innerHTML; // Save original profiles
    
    attachEventListeners();
});

function attachEventListeners() {
    // Attach event listeners to the first four circles to reset profiles and update active state
    for (let i = 1; i <= 5; i++) { 
        document.getElementById(`circle${i}`).addEventListener('click', function() {
            updateActiveCircle(this);
            
            if (i <= 4) {
                showProfile(i);
            } else {
                replaceFirstProfile();
            }
        });
    }
}

function updateActiveCircle(clickedCircle) {
    // Remove '.black' class from all circles
    document.querySelectorAll('.circle').forEach(circle => {
        circle.classList.remove('black');
    });

    clickedCircle.classList.add('black');
}

function showProfile(profileIndex) {
    const profilesContainer = document.getElementById('img-profile-container');
    
    // Fade out the current profiles
    profilesContainer.style.opacity = '0';

    setTimeout(() => {
        // Reset to original profiles with a smooth transition
        profilesContainer.innerHTML = originalProfilesHTML;

        // Wait for the next frame to start the fade-in to ensure it is visible
        requestAnimationFrame(() => {
            profilesContainer.style.opacity = '1';

            attachEventListeners();

            // Remove 'fade-out' from all profiles to ensure they are visible
            const newProfiles = profilesContainer.querySelectorAll('.profile');
            newProfiles.forEach(profile => profile.classList.remove('fade-out'));
        });
    }, 500);
    newProfileAdded = false;
}

function replaceFirstProfile() {

    // Checking if the new profile has already been added
    if (newProfileAdded) {
        return;
    }

    const profilesContainer = document.getElementById('img-profile-container');
    const profiles = profilesContainer.querySelectorAll('.profile');
    const firstProfile = profiles[0];

    // Slide or fade out the first profile
    firstProfile.classList.add('fade-out');

    setTimeout(() => {
        // Remove the first profile after the animation
        firstProfile.remove();

        const newProfileHTML = `
            <div class="profile fade-in"> <!-- Start with fade-in for smooth entrance -->
                <img src="../res/Micheal O'Rielly.jpg" alt="Image of Line cook" width="270" height="400" />
                <h3>Michael O'Reilly</h3>
                <h6>Line Cook</h6>
            </div>
        `;

        // Append the new profile to the container
        profilesContainer.insertAdjacentHTML('beforeend', newProfileHTML);
        
    }, 500);
    newProfileAdded = true;
}
