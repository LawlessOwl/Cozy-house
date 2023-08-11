export function sandvich() {
    document.addEventListener("DOMContentLoaded", () => {
        const sandvichCheck = document.querySelector('.sandvich-menu')
        const sandvichButton = document.querySelector('.label-sandvich')
        const pageBody = document.querySelector('.main-body')
        const linkList = document.querySelectorAll('a[data-link="nav-item"]')
    
        sandvichButton.addEventListener('click', () => {
            if(sandvichCheck.checked) {
                pageBody.classList.remove('lock-scroll')
            } else {
                pageBody.classList.add('lock-scroll')
            }
        })
        
        linkList.forEach((link) => link.addEventListener('click', () => {
            pageBody.classList.remove('lock-scroll')
            sandvichCheck.checked = false
        }))
    })
}
