document.addEventListener("DOMContentLoaded", () => {
    let sandvichCheck = document.querySelector('.sandvich-menu')
    let sandvichButton = document.querySelector('.label-sandvich')
    let pageBody = document.querySelector('.main-body')
    let linkList = document.querySelectorAll('a[data-link="nav-item"]')

    sandvichButton.addEventListener('click', function() {
        if(sandvichCheck.checked) {
            pageBody.classList.remove('lock-scroll')
        } else {
            pageBody.classList.add('lock-scroll')
        }
    })
    
    linkList.forEach((link) => link.addEventListener('click', function() {
        pageBody.classList.remove('lock-scroll')
        sandvichCheck.checked = false
    }))
})