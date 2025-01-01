// Show alert banner periodically
function toggleAlertBanner() {
    const banner = document.getElementById('alertBanner');
    banner.classList.toggle('show');
}
setInterval(toggleAlertBanner, 5000);

// Navigation
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');

    // Update active tab
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Emergency SOS functionality
let sosActive = false;
const sosButton = document.getElementById('sosButton');

sosButton.addEventListener('click', () => {
    sosActive = !sosActive;
    sosButton.classList.toggle('active');

    if (sosActive) {
        alert('Emergency services have been notified. Stay calm and follow safety protocols.');
    }
});

// Feature click handler
function showFeature(feature) {
    const features = {
        alerts: "Active Alerts: 2 weather warnings in your area",
        weather: "Current Weather: Thunderstorm warning",
        safety: "Safety Tips: Stay indoors, avoid flood-prone areas",
        resources: "Emergency Resources: Nearest shelter - Community Center"
    };

    alert(features[feature]);
}
