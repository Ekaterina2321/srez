'use sctrict';

let menuElems = document.querySelectorAll('.menu-elem');

menuElems.forEach(menuElem => {
    let submenu = menuElem.querySelector('.submenu');
    let btn = menuElem.querySelector('.menu-btn');

    menuElem.addEventListener('mouseenter', function () {
        submenu.classList.add('active')
        btn.classList.add('active')
    })

    menuElem.addEventListener('mouseleave', function () {
        submenu.classList.remove('active')
        btn.classList.remove('active')
    })
})


let links = document.querySelectorAll("#dropdownContent a");
let imageDisplay = document.getElementById("imageDisplay");

links.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        let imgSrc = this.getAttribute("data-img");
        imageDisplay.src = imgSrc;
        imageDisplay.classList.remove("hidden");
        setTimeout(() => {
            imageDisplay.classList.add('hidden');
        }, 10000);
    });
});




let sliderBody = document.querySelector('.slider__body');
let sliderNav = document.querySelector('.slider__nav');
let sliderImages = document.querySelector('.slider__images');
let sliderItems = Array.from(document.querySelectorAll('.slider__item'));
let sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

sliderNav.addEventListener('click', function (event) {
    let targetArrow = event.target.closest('.slider__arrow');
    if (!targetArrow) return;

    let currentActiveImage = document.querySelector('.slider__item.active');
    let currentActiveIndex = sliderItems.indexOf(currentActiveImage);

    currentActiveImage.classList.remove('active');
    document.querySelector('.slider__dot.active').classList.remove('active');

    changeActive(targetArrow, currentActiveIndex);

    let newActiveImage = document.querySelector('.slider__item.active');
    let newActiveIndex = sliderItems.indexOf(newActiveImage);

    scrollSlider(newActiveIndex);
})
function scrollSlider(index) {
    sliderImages.style.transform = `translateX(${-100 * index}%)`
}
function changeActive(arrow, currentIndex) {
    if (arrow.classList.contains('left')) {
        if (currentIndex == 0) {
            sliderItems.at(-1).classList.add('active');
            sliderDots.at(-1).classList.add('active');
        } else {
            sliderItems[currentIndex - 1].classList.add('active');
            sliderDots[currentIndex - 1].classList.add('active');
        }
    } else {
        if (currentIndex == sliderItems.length - 1) {
            sliderItems[0].classList.add('active');
            sliderDots[0].classList.add('active');
        } else {
            sliderItems[currentIndex + 1].classList.add('active');
            sliderDots[currentIndex + 1].classList.add('active');
        }
    }
}

sliderNav.addEventListener('click', function (event) {
    let targetDot = event.target.closest('.slider__dot');
    if (!targetDot) return;

    if (targetDot.classList.contains('active')) return;

    document.querySelector('.slider__dot.active').classList.remove('active');
    targetDot.classList.add('active');
    document.querySelector('.slider__item.active').classList.remove('active');

    sliderItems[targetDot.dataset.index].classList.add('active');
    scrollSlider(targetDot.dataset.index);
})



let tabBtns = document.querySelectorAll('.tab__btn')
let tabTexts = document.querySelectorAll('.tab__text')

tabBtns.forEach((item, index) => {
    item.addEventListener('click', function () {
        document.querySelector('.tab__btn.active').classList.remove('active');
        item.classList.add('active');

        document.querySelector('.tab__text.active').classList.remove('active');
        tabTexts[index].classList.add('active')
    })
})


document.addEventListener('DOMContentLoaded', function () {
    var tabButtons = document.querySelectorAll('.tab-btn');
    var tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {

            tabButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            tabPanes.forEach(function (pane) {
                pane.classList.remove('active');
            });

            this.classList.add('active');
            tabPanes[index].classList.add('active');
        });
    });
});


// аккордион
let lastActiveItem = null;

document.querySelector('.faq').addEventListener('click', function (event) {
    let target = event.target.closest('.faq-item');
    if (!target) return;


    if (lastActiveItem && lastActiveItem !== target) {
        lastActiveItem.classList.remove('active');
        let p = lastActiveItem.querySelector('p');
        p.style.height = '';
        lastActiveItem.classList.remove('active-color');
    }

    target.classList.toggle('active');
    let p = target.querySelector('p');
    let h4 = target.querySelector('.faq_h4');
    if (target.classList.contains('active')) {
        p.style.height = p.scrollHeight + 'px';
        h4.style.transform = 'rotate(45deg)';
        target.classList.add('active-color');
    } else {
        p.style.height = '';
        h4.style.transform = 'rotate(0deg)';
        target.classList.remove('active-color');
    }

    lastActiveItem = target.classList.contains('active') ? target : null;
});




let phone = document.querySelector(".item-view");
let faqBlock = document.querySelector(".faq-block");

let observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                phone.classList.add("show");
            } else {
                phone.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.1,
    }
);

observer.observe(faqBlock);





var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

window.onload = function () {
  setTimeout(function () {
    modal.style.display = "block";
  }, 3000);
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};