let themeBtn = document.getElementById("themeBtn");

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});


let filterBtns = document.querySelectorAll(".filter-btn");
let animeCards = document.querySelectorAll(".anime-card");

for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function() {

        for (let j = 0; j < filterBtns.length; j++) {
            filterBtns[j].classList.remove("active");
        }
        this.classList.add("active");

        let genre = this.dataset.genre;

        for (let k = 0; k < animeCards.length; k++) {
            if (genre === "all") {
                animeCards[k].classList.remove("hidden");
            } else {
                if (animeCards[k].dataset.genre === genre) {
                    animeCards[k].classList.remove("hidden");
                } else {
                    animeCards[k].classList.add("hidden");
                }
            }
        }
    });
}
