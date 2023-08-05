document.addEventListener("DOMContentLoaded", () => {
    let sandvichCheck = document.querySelector('.sandvich-menu')
    let sandvichButton = document.querySelector('.label-sandvich')
    let pageBody = document.querySelector('.main-body')
        sandvichButton.addEventListener('click', function() {
            if(sandvichCheck.checked) {
                pageBody.classList.remove('lock-scroll')
            } else {
                pageBody.classList.add('lock-scroll')
            }
        })
})