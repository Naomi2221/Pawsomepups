
var socialToggle = document.getElementById('socialToggle');
var socialIcons = document.querySelectorAll('.social-icon.hidden');

function toggleSocialIcons() {
    socialIcons.forEach(function(icon) {
        icon.classList.toggle('hidden');
    });
}

socialToggle.addEventListener('click', toggleSocialIcons);


