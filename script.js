// load preferences on page load
window.onload = function () {
    const stored = localStorage.getItem('preferences');
    if (stored) {
        const prefs = JSON.parse(stored);
document.getElementById('theme').value = prefs.theme;
document.getElementById('fontSize').value = prefs.fontSize;
document.getElementById('language').value = prefs.language;
        applyPreferences(prefs);
    }
};

// save preferences
document.getElementById('preferencesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const prefs = {
        theme: document.getElementById('theme').value,
        fontSize: document.getElementById('fontSize').value,
        language: document.getElementById('language').value
    };

    localStorage.setItem('preferences', JSON.stringify(prefs));
    applyPreferences(prefs);
});

// apply preferences to the page
function applyPreferences(prefs) {
    document.body.setAttribute('data-theme', prefs.theme);
    document.body.style.fontSize = prefs.fontSize;
    console.log(`Language set to: ${prefs.language}`);
}

// Reset preferences
document.getElementById('resetBtn').addEventListener('click', function() {
    localStorage.removeItem('preferences');
    document.getElementById('preferencesForm').reset();
    document.body.removeAttribute('data-theme');
    document.body.style.fontSize = '';
    console.log('preferences reset')
});