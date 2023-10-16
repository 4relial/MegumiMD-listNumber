document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen popup
    var popup = document.getElementById("custom-popup");

    // Ambil elemen tombol close
    var closeBtn = document.getElementById("custom-close-popup");

    // Tautan yang ingin Anda buka saat tombol ditutup
    var newTabLink = "https://blessify.id"; // Gantilah dengan tautan yang sesuai

    // Tampilkan popup saat halaman dibuka
    popup.style.display = "block";

    // Sembunyikan popup saat tombol close diklik dan buka tab baru tanpa mengambil fokus
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";

        var popup1 = window.open(newTabLink, "_blank", 'noopener');
        popup1.blur();
        window.focus();
    });
});




// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}


function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "https://i.ibb.co/1MXLbBW/moon.png") {
        document.getElementById("imgClickAndChange").src = "https://i.ibb.co/hFG3LzS/sunny.png";
    }
    else {
        document.getElementById("imgClickAndChange").src = "https://i.ibb.co/1MXLbBW/moon.png";
    }
}


// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();