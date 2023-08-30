const boxes = document.querySelectorAll(".box");
window.addEventListener('scroll', scorlling);
function scorlling() {
    const triggerBottom = window.innerHeight * (4 / 5);
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (triggerBottom > boxTop) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
}

// Wondring earth... must watch suggested by nikku...  