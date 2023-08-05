document.addEventListener("DOMContentLoaded", () => {
    let showButtons = document.querySelectorAll('.about-pet')
    let closeButtons = document.querySelectorAll('.close-button')
    let overlay = document.querySelector('.overlay')
    let pageBody = document.querySelector('.main-body')
    
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