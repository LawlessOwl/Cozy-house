import pets from './json/pets.json' assert {type: 'json'};
export function petsModal() {
    document.addEventListener("DOMContentLoaded", () => {
        const showButtons = document.querySelectorAll('.about-pet')
        const closeButtons = document.querySelectorAll('.close-button')
        const overlay = document.querySelector('.overlay')
        const pageBody = document.querySelector('.main-body')
        
        showButtons.forEach((showButton) => showButton.addEventListener("click", function (e) {
            e.preventDefault()
            let modalData = this.getAttribute('data-pet'), 
            modalCard = document.querySelector('.modal[data-pet = "' + modalData + '"]');
            console.log(modalCard)
            modalCard.classList.add('open')
            overlay.classList.add('active')
            pageBody.classList.add('lock-scroll')
            closeButtons.forEach((closeButton) => closeButton.addEventListener("click", function(e) {
                e.preventDefault()
                modalCard.classList.remove('open')
                overlay.classList.remove('active')
                pageBody.classList.remove('lock-scroll')
            }))
        }))
    })
    console.log(pets[0].name)
}