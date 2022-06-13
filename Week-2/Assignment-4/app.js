const banner = document.querySelector(".banner");

banner.addEventListener('click', () => {
    banner.textContent = "Have a Good Time!";
})

const btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
    const hiddenBlock = document.querySelector(".hidden-block");
    if (hiddenBlock.classList.contains("d-none")) {
        hiddenBlock.classList.remove("d-none");
        hiddenBlock.classList.add("d-flex");
    } else {
        hiddenBlock.classList.remove("d-flex");
        hiddenBlock.classList.add("d-none");
    }
})


