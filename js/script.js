const COLS = document.querySelectorAll(".col img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup_close");
const POPUP_IMG = document.querySelector(".popup_img");
const ARROW_LEFT = document.querySelector(".popup_arrow--left");
const ARROW_RIGHT = document.querySelector(".popup_arrow--right");

let currentImgIndex;

const showNextImg = () => {
    if(currentImgIndex === COLS.length - 1) {
        currentImgIndex = 0;
    } else {
        currentImgIndex ++;
    }
    POPUP_IMG.src = COLS[currentImgIndex].src;  
};

const showPreviousImg = () => {
    if(currentImgIndex === 0) {
        currentImgIndex = COLS.length -1;
    } else {
        currentImgIndex --;
    }
    POPUP_IMG.src = COLS[currentImgIndex].src;  
};

const closePopup = () => {
    POPUP.classList.add("light-out");
    setTimeout(() => {
        POPUP.classList.add("hidden");
        POPUP.classList.remove("light-out");
        COLS.forEach( (element) => {
            element.setAttribute("tabindex", 1);
        });
    }, 300);
    
};

COLS.forEach((col, index) => {
    const showPopup = (e) => {
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src;
        currentImgIndex = index;
        COLS.forEach( (element) => {
            element.setAttribute("tabindex", -1);
        });
    };
    col.addEventListener("click", showPopup);

    col.addEventListener("keydown", (e) => {
        if (e.code === "Enter" || e.keyCode === 13) {
            showPopup(e);
        }
    });
});

POPUP_CLOSE.addEventListener("click", closePopup);

ARROW_RIGHT.addEventListener("click", showNextImg);

ARROW_LEFT.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", (e) => {
    if (!POPUP.classList.contains("hidden")){
        if (e.code === "ArrowRight" || e.keyCode === 39) {
            showNextImg();
        }

        if (e.code === "ArrowLeft" || e.keyCode === 37) {
            showPreviousImg();
        }

        if (e.code === "Escape" || e.keyCode === 27) {
            closePopup();
        } 
    }   
});

POPUP.addEventListener("click", (e) => {
    if(e.target === POPUP) {
        closePopup();
    }
});