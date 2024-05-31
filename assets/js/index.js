document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.acordeon__button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var skills = this.nextElementSibling;
            if (skills.style.display === 'grid') {
                skills.style.display = 'none';
            } else {
                skills.style.display = 'grid';
            }
        });
    });
});