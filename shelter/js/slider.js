export function slider() {
    document.addEventListener("DOMContentLoaded", () => {
        const swiper = document.querySelector('.pets-list');
        const leftButtons = document.querySelectorAll('.left-arrow-button');
        const rightButtons = document.querySelectorAll('.right-arrow-button');
        let offset = 0;
    
        leftButtons.forEach((leftButton) => leftButton.addEventListener('click', function(){
                offset += 270;
            if (offset > 0) {
                offset = -1350
            }
            swiper.style.left = offset + 'px';
        }))
    
        rightButtons.forEach((rightButton) => rightButton.addEventListener('click', function(){
                offset -= 270;
            if (offset < -1350) {
                offset = 0
            }
            swiper.style.left = offset + 'px';
        }))
    });    
}
