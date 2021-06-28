const slider = document.querySelector('[data-app-slider]')

const sliderInstance = new Swiper(slider, {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})

// menu

const menuButton = document.querySelector('[data-app-menu-btn]')
const menuContainer = document.querySelector('[data-app-menu-container]')

const openClass = 'menu__container_opened'

menuButton.addEventListener('click', handleClick)

function handleClick() {
    menuContainer.classList.toggle(openClass)
}