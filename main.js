const images = document.querySelectorAll("img");
const imageView = document.querySelector("#view");
const backdrop = document.querySelector("#backdrop");

const closeHandler = () => {
    imageView.style.display = "none";
    backdrop.style.display = "none";
    document.body.classList.remove("overflow-hidden");
}

const showImage = (img) => {
    imageView.src = img.src;
    imageView.setAttribute("alt", img.getAttribute("alt"));
    imageView.style.display = "block";
    backdrop.style.display = "block";
    document.body.classList.add("overflow-hidden");
}

for (const img of images) {
    if (!img.getAttribute("openable")) continue;
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
        showImage(img);
    });
}

backdrop.addEventListener("click", closeHandler);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeHandler();
});