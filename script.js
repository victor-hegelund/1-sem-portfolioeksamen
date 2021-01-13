window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
        document.querySelector(".row").classList.remove("header_fixed");
    } else {
        document.querySelector("#menuknap").textContent = "𝖷";
        document.querySelector(".row").classList.add("header_fixed");
    }
}
