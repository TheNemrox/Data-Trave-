function toggleMenu() {
    var dropdownMenu = document.getElementById("myDropdown");
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
}

// Cierra el menú si se hace clic fuera de él
window.onclick = function (event) {
    if (!event.target.matches('.menu-icon')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}




window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.body.footer.add("active");
    } else {
        document.body.footer.remove("active");
    }
};


window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.body.footer.add("active");
    } else {
        document.body.footer.remove("active");
    }
};


document.addEventListener('DOMContentLoaded', function () {
    var article = document.querySelector('.card'); // Seleccionamos el artículo

    article.addEventListener('click', function () {
        window.location.href = 'https://www.tuotrapaginaweb.com'; // Reemplace con la URL deseada
    });
});