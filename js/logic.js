document.getElementById('menu_toggle').addEventListener('change', function () {
    const menuBox = document.querySelector('.menu_item_box');
    if (this.checked) {
        menuBox.classList.add('active');
    } else {
        menuBox.classList.remove('active');
    }
});