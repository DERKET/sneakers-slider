const sidebar = document.querySelector('.sidebar');
const mainslide = document.querySelector('.main-slide');
const container = document.querySelector('.container');

const slidesCount = mainslide.querySelectorAll('div').length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

container.addEventListener('click', () => { changeSlide(); });
container.addEventListener('touch', () => { changeSlide(); });
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'w')
        changeSlide();
});


function changeSlide() {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) activeSlideIndex = 0;

    mainslide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * 100}vh)`;
}