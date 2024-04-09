// Slider-one

const sliderBtnNext= document.querySelector(".any-form-arrow-right"),
        sliderBtnPrev= document.querySelector(".any-form-arrow-left"),
        sliderItem = document.querySelectorAll('.any-form-slider-item')
;
let i=0;

sliderBtnNext.addEventListener('click', function() {
    if (i!==3) {
        sliderItem[i].classList.remove('active');
        i++;
        sliderItem[i].classList.add('active');

        if (i==3) {
            sliderBtnNext.classList.add('disable');
        } else {
            sliderBtnNext.classList.remove('disable');
        }
        if (i==0) {
            sliderBtnPrev.classList.add('disable');
        } else {
            sliderBtnPrev.classList.remove('disable');
        }

    }
});

sliderBtnPrev.addEventListener('click', function() {
    if (i!==0) {
        sliderItem[i].classList.remove('active');
        i--;
        sliderItem[i].classList.add('active');
        if (i==3) {
            sliderBtnNext.classList.add('disable');
        } else {
            sliderBtnNext.classList.remove('disable');
        }
        if (i==0) {
            sliderBtnPrev.classList.add('disable');
        } else {
            sliderBtnPrev.classList.remove('disable');
        }

    }
});

// Slider-two

const sliderBtnNextTwo= document.querySelector(".cyber-news-arrows-right"),
        sliderBtnPrevTwo= document.querySelector(".cyber-news-arrows-left"),
        sliderItemTwo = document.querySelectorAll('.cyber-news-row')
;
let y=0;

sliderBtnNextTwo.addEventListener('click', function() {
    if (y!==2) {
        sliderItemTwo[y].classList.remove('active');
        y++;
        sliderItemTwo[y].classList.add('active');

        if (y==2) {
            sliderBtnNextTwo.classList.add('disable');
        } else {
            sliderBtnNextTwo.classList.remove('disable');
        }
        if (y==0) {
            sliderBtnPrevTwo.classList.add('disable');
        } else {
            sliderBtnPrevTwo.classList.remove('disable');
        }

    }
});

sliderBtnPrevTwo.addEventListener('click', function() {
    if (y!==0) {
        sliderItemTwo[y].classList.remove('active');
        y--;
        sliderItemTwo[y].classList.add('active');
        if (y==2) {
            sliderBtnNextTwo.classList.add('disable');
        } else {
            sliderBtnNextTwo.classList.remove('disable');
        }
        if (y==0) {
            sliderBtnPrevTwo.classList.add('disable');
        } else {
            sliderBtnPrevTwo.classList.remove('disable');
        }

    }
});