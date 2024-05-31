let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.header-nav');
    const toggleButton = document.createElement('div');
    toggleButton.classList.add('toggle-button');
    toggleButton.innerHTML = '<i class="bx bx-menu"></i>';
    document.querySelector('.header-container').appendChild(toggleButton);

    toggleButton.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
