document.getElementById('menu_toggle').addEventListener('change', function () {
    const menuBox = document.querySelector('.menu_item_box');
    if (this.checked) {
        menuBox.classList.add('active');
    } else {
        menuBox.classList.remove('active');
    }
});

document.querySelector(".footer_form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nameField = document.querySelector('.footer_inputs[type="text"]').value.trim();
    const emailField = document.querySelector('.footer_inputs[type="email"]').value.trim();

    if (nameField && emailField) {
        alert("Дякую! Ви успішно підписалися!");
    } else {
        alert("Будь ласка, заповніть всі поля перед відправкою.");
    }
});