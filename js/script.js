let slider = document.querySelector(".slider");
let annualy = document.querySelectorAll(".annualy");
let monthly = document.querySelectorAll(".monthly");



slider.addEventListener("change", () => {
    if(slider.checked) {
        annualy.forEach(content => {
            content.style.display = "none";
        });
        monthly.forEach(content => {
            content.style.display = "block";
        });
    } else {
        monthly.forEach(content => {
            content.style.display = "none";
        });
        annualy.forEach(content => {
            content.style.display = "block";
        });
    }
});