document.getElementById('checkbox').addEventListener('change', function() {
    document.body.classList.toggle('night-mode', this.checked);
    localStorage.setItem('mode', this.checked ? 'night' : 'day');
});

window.onload = function() {
    const isNight = localStorage.getItem('mode') === 'night';
    document.getElementById('checkbox').checked = isNight;
    if (isNight) {
        document.body.classList.add('night-mode');
    }
};
